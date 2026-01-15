'use client';

import { NoticingCard } from "@/components/NoticingCard";
import { TheShift, findQuestionBySlug, findQuestionById } from "@/components/pages/TheShift";
import { PageNavigation } from "@/components/PageNavigation";
import { FloatingPreview } from "@/components/FloatingPreview";
import { useNoticingTimeline, type NoticingState } from "@/hooks/useNoticingTimeline";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function QuestionDetailPage() {
  const params = useParams();
  // Support both slug-based URLs and legacy numeric IDs
  const idParam = params.id as string;
  const questionId = (() => {
    // First, try to find by slug
    const questionBySlug = findQuestionBySlug(idParam);
    if (questionBySlug) return questionBySlug.id;

    // Fall back to numeric ID for backwards compatibility
    const numericId = parseInt(idParam, 10);
    if (!isNaN(numericId)) {
      const questionById = findQuestionById(numericId);
      return questionById?.id;
    }

    return undefined;
  })();

  const {
    currentState,
    currentStateIndex,
    mode,
    reset,
    toggleMode,
    goToState
  } = useNoticingTimeline();

  // Card stack state - maintains history of visible cards
  // Initialize with the greeting state to prevent animation on first render
  const [cardStack, setCardStack] = useState<NoticingState[]>([currentState]);
  const isFirstRender = useRef(true);
  const [hasMounted, setHasMounted] = useState(false);

  // Resizable panels state
  const [leftWidth, setLeftWidth] = useState(50); // percentage
  const [isResizing, setIsResizing] = useState(false);
  // Initialize isDesktop based on window width to prevent layout shift
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768;
    }
    return true; // Default to desktop to prevent flash
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFullscreenButton, setShowFullscreenButton] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  // Mobile floating preview state
  const [showFloatingPreview, setShowFloatingPreview] = useState(false);
  const [userDismissedPreview, setUserDismissedPreview] = useState(false);

  // Mark as mounted after first render to enable animations
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Update card stack when state changes
  useEffect(() => {
    // Skip the first render since we already initialized with currentState
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setCardStack(() => {
      // For state 0 (greeting), just show greeting
      if (currentStateIndex === 0) {
        return [currentState];
      }

      // For states 1-5 (meeting invite through insights), show greeting + meeting card
      // The meeting card updates in place with loading/insights
      if (currentStateIndex >= 1 && currentStateIndex <= 5) {
        return [
          { id: 0, type: 'greeting', greetingText: "Good Morning", userName: "Pradeep", bodyText: "Today looks busy but manageable" },
          { ...currentState, id: 1 } // Force ID to 1 so Framer Motion doesn't think it's a new card
        ];
      }

      // For state 6 (stacked with dark card), show greeting + meeting + dark
      if (currentStateIndex === 6) {
        return [
          { id: 0, type: 'greeting', greetingText: "Good Morning", userName: "Pradeep", bodyText: "Today looks busy but manageable" },
          {
            id: 1,
            type: 'insight',
            headerText: "New meeting invite",
            subheaderText: `From Sanjana at 3:30PM`,
            bodyText: "It overlaps with your focus time",
            insightLines: [
              { icon: 'calendar', text: 'You calendar is 92% booked' },
              { icon: 'sleep', text: 'You slept only 4h 52m last night' }
            ]
          },
          { ...currentState, id: 6 }
        ];
      }

      return [currentState];
    });
  }, [currentState, currentStateIndex]);

  // Check if desktop on mount
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Detect scroll and show floating preview on mobile
  useEffect(() => {
    if (isDesktop) return;

    const handleScroll = () => {
      // Check if the right panel is scrolled out of view
      if (rightPanelRef.current) {
        const rect = rightPanelRef.current.getBoundingClientRect();
        // Show floating preview when right panel is mostly out of view
        const isOutOfView = rect.bottom < 100;

        // Reset dismissed state when scrolling back to top (panel visible again)
        if (!isOutOfView && userDismissedPreview) {
          setUserDismissedPreview(false);
        }

        // Only show if not dismissed
        if (!userDismissedPreview) {
          setShowFloatingPreview(isOutOfView);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop, userDismissedPreview]);

  // Reset dismissed state when switching back to mobile
  useEffect(() => {
    if (isDesktop) {
      setUserDismissedPreview(false);
      setShowFloatingPreview(false);
    }
  }, [isDesktop]);

  const handleCloseFloatingPreview = () => {
    setShowFloatingPreview(false);
    setUserDismissedPreview(true);
  };

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Auto-hide fullscreen button after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullscreenButton(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard shortcut: Press 'R' to reset
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'r' || e.key === 'R') {
        reset();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [reset]);

  // Handle mouse move during resize
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

      // Calculate minimum widths in percentage
      const minWidthPx = 600;
      const minWidthPercent = (minWidthPx / containerRect.width) * 100;

      // Constrain to min width for both panels
      if (newLeftWidth >= minWidthPercent && newLeftWidth <= (100 - minWidthPercent)) {
        setLeftWidth(newLeftWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col md:flex-row min-h-screen md:h-screen w-full relative ${isResizing ? 'cursor-col-resize select-none' : ''}`}
    >
      {/* 🔽 Left Panel - Bottom on mobile, Left on desktop with resizable width */}
      <div
        className="order-2 min-h-screen md:min-h-0 md:order-1 md:h-full relative md:overflow-hidden"
        style={{
          width: isDesktop ? `${leftWidth}%` : '100%',
          minWidth: isDesktop ? '600px' : 'auto'
        }}
      >
        <TheShift selectedQuestionId={questionId} />

        <PageNavigation activePage="the-shift" />
      </div>

      {/* 🔽 Right Panel - Top on mobile, Right on desktop with resizable width */}
      <div
        ref={rightPanelRef}
        className="order-1 md:order-2 flex-shrink-0 p-6 md:p-0"
        style={{
          width: isDesktop ? `${100 - leftWidth}%` : '100%',
          minWidth: isDesktop ? '600px' : 'auto'
        }}
      >
        <div className="relative overflow-hidden h-[450px] md:h-full rounded-3xl md:rounded-none squircle-mobile group bg-white">
          {/* Gradient Background from Figma */}
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-110 blur-[80px]"
            src="/gradient-bg.png"
          />
          <div className="absolute inset-0 bg-black/5" />

        {/* 🔽 Fullscreen Button - Top Right (hidden on mobile) */}
        <button
          onClick={toggleFullscreen}
          className={`hidden md:flex absolute top-6 right-5 z-30 backdrop-blur-md bg-black/60 text-white rounded-full h-9 w-9 items-center justify-center transition-all hover:bg-black/70 ${
            showFullscreenButton ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          )}
        </button>

        {/* Centered Card Stack */}
        <div className="relative h-full flex items-start md:items-center justify-center pt-16 md:pt-0">
          <div className="flex flex-col-reverse items-center gap-2.5 scale-[0.8] md:scale-100 origin-top md:origin-center">
            <AnimatePresence initial={false}>
              {cardStack.map((card, index) => {
                // Only animate on card entry (when a new card is added to stack)
                // Cards should not animate when insight lines update within them
                const isNewCard = index === cardStack.length - 1;
                const isOldCard = index < cardStack.length - 1;

                // Calculate opacity: newest card = 1, older cards = 0.5
                const opacity = index === cardStack.length - 1 ? 1 : 0.5;

                // New cards should appear after a delay: 400ms for 2nd card, 200ms for 3rd card
                // Only apply animation after component has mounted to prevent flicker on page load
                const appearDelay = hasMounted && isNewCard && cardStack.length > 1 ? 0.4 : 0;

                return (
                  <motion.div
                    key={`card-${card.id}`}
                    layout
                    initial={hasMounted && isNewCard && cardStack.length > 1 ? { opacity: 0 } : false}
                    animate={{ opacity }}
                    transition={{
                      layout: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                        // Old cards should animate their position change immediately
                        delay: isOldCard ? 0 : appearDelay
                      },
                      opacity: { duration: hasMounted ? 0.8 : 0, delay: appearDelay }
                    }}
                  >
                    <NoticingCard
                      currentState={card}
                      currentStateIndex={card.id}
                      isTransitioning={false}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* 🔽 Controls (Bottom) */}
        <div className="absolute bottom-4 md:bottom-5 left-4 md:left-5 right-4 md:right-5 flex items-end md:items-center justify-between">
          {/* Left side: Auto/Manual Toggle + Manual buttons */}
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-2">
            {/* Auto/Manual Toggle */}
            <button
              onClick={toggleMode}
              className="backdrop-blur-md bg-black/60 text-white rounded-[52px] h-9 px-3 md:px-4 flex items-center gap-1.5 md:gap-2 text-xs md:text-sm tracking-[-0.14px] transition-all hover:bg-black/70"
            >
              <span className={mode === 'auto' ? 'opacity-100' : 'opacity-20'}>Auto</span>
              <span className={mode === 'manual' ? 'opacity-100' : 'opacity-20'}>Manual</span>
            </button>

            {/* Manual Mode Buttons - Progressive reveal based on current state */}
            {mode === 'manual' && (
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                {/* Show "Detect change" when at greeting state (0) */}
                {currentStateIndex === 0 && (
                  <button
                    onClick={() => goToState(1)}
                    className="backdrop-blur-md bg-black/60 text-white rounded-[52px] h-9 px-3 md:px-4 text-xs md:text-sm tracking-[-0.14px] transition-all hover:bg-black/70 flex items-center gap-1.5"
                  >
                    Detect change
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                )}
                {/* Show "Find pattern" after change detected (states 1-4) */}
                {currentStateIndex >= 1 && currentStateIndex < 5 && (
                  <button
                    onClick={() => goToState(5)}
                    className="backdrop-blur-md bg-black/60 text-white rounded-[52px] h-9 px-3 md:px-4 text-xs md:text-sm tracking-[-0.14px] transition-all hover:bg-black/70 flex items-center gap-1.5"
                  >
                    Find pattern
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                )}
                {/* Show "Generate action" after pattern found (state 5) */}
                {currentStateIndex === 5 && (
                  <button
                    onClick={() => goToState(6)}
                    className="backdrop-blur-md bg-black/60 text-white rounded-[52px] h-9 px-3 md:px-4 text-xs md:text-sm tracking-[-0.14px] transition-all hover:bg-black/70 flex items-center gap-1.5"
                  >
                    Generate action
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Reset Button with keyboard hint */}
          <button
            onClick={reset}
            className="backdrop-blur-md bg-black/60 text-white rounded-[52px] h-9 px-3 md:px-4 text-xs md:text-sm tracking-[-0.14px] transition-all hover:bg-black/70 flex items-center gap-2"
          >
            <span>Reset</span>
            <span className="opacity-50 text-xs hidden md:inline">R</span>
          </button>
        </div>
        </div>
      </div>

      {/* 🔽 Floating Preview for Mobile */}
      {!isDesktop && (
        <FloatingPreview
          isVisible={showFloatingPreview}
          onClose={handleCloseFloatingPreview}
        >
          <div className="relative w-full h-full bg-white">
            {/* Gradient Background */}
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none blur-[80px]"
              src="/gradient-bg.png"
            />

            {/* Card Stack aligned to top */}
            <div className="relative h-full flex items-start justify-center pt-16">
              <div className="flex flex-col-reverse items-center gap-2.5">
                {cardStack.map((card, index) => {
                  const opacity = index === cardStack.length - 1 ? 1 : 0.5;
                  return (
                    <div key={`preview-card-${card.id}`} style={{ opacity }}>
                      <NoticingCard
                        currentState={card}
                        currentStateIndex={card.id}
                        isTransitioning={false}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FloatingPreview>
      )}

      {/* 🔽 Resize Handle - Absolutely positioned at the boundary between panels */}
      {isDesktop && (
        <div
          className="absolute top-0 bottom-0 w-1 bg-transparent hover:bg-black/10 flex items-center justify-center group z-50 hidden md:flex"
          style={{ left: `${leftWidth}%` }}
          onMouseDown={() => setIsResizing(true)}
          onDoubleClick={() => setLeftWidth(50)}
        >
          {/* Expanded hover target area (20px total: 10px on each side) */}
          <div
            className="absolute inset-y-0 -left-[10px] -right-[10px] cursor-col-resize group-hover:bg-black/5"
          />
          {/* Visual divider line */}
          <div className="relative w-px h-full bg-transparent group-hover:bg-black/20" />
        </div>
      )}
    </div>
  );
}
