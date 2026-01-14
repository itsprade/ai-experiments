'use client';

import { Page2Content } from "@/components/pages/Page2Content";
import { FloatingPreview } from "@/components/FloatingPreview";
import { PageNavigation } from "@/components/PageNavigation";
import { Card } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";

export default function QuestionsPage() {
  // Selected question state
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | undefined>(undefined);
  const isPanelOpen = selectedQuestionId !== undefined;

  // Mobile floating preview state
  const [userDismissedPreview, setUserDismissedPreview] = useState(false);

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
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if desktop on mount
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Reset dismissed state when switching to desktop or when question changes
  useEffect(() => {
    if (isDesktop) {
      setUserDismissedPreview(false);
    }
  }, [isDesktop]);

  // Reset dismissed state when a new question is selected
  useEffect(() => {
    if (selectedQuestionId !== undefined) {
      setUserDismissedPreview(false);
    }
  }, [selectedQuestionId]);

  const handleCloseFloatingPreview = () => {
    setUserDismissedPreview(true);
  };

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

  // Handle question selection from Page2Content
  const handleQuestionSelect = (id: number | undefined) => {
    setSelectedQuestionId(id);
  };

  // 🔽 Prototype Panel - shown when a question is selected
  const PrototypePanel = () => (
    <div className="relative w-full h-full">
      {/* Gradient Background */}
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-110 blur-[80px]"
        src="/gradient-bg-2.png"
      />
      <div className="absolute inset-0 bg-black/5" />

      {/* Centered White Card */}
      <div className="relative h-full flex flex-col items-center justify-center px-8">
        <Card className="relative w-[432px] min-h-[250px] rounded-[20px] bg-white p-7 squircle flex flex-col justify-between">
          <h2
            className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-black font-bold"
            style={{ fontFamily: 'var(--font-bricolage)' }}
          >
            #{selectedQuestionId}
          </h2>
          <p
            className="text-[12px] uppercase leading-none tracking-[0.08em] text-black/30 font-semibold self-end"
            style={{ fontFamily: 'var(--font-bricolage)' }}
          >
            Coming soon
          </p>
        </Card>
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col md:flex-row min-h-screen md:h-screen w-full relative overflow-hidden ${isResizing ? 'cursor-col-resize select-none' : ''}`}
    >
      {/* 🔽 Left Panel - Full width when panel closed, resizable when open */}
      <div
        className="order-2 min-h-screen md:min-h-0 md:order-1 md:h-full relative md:overflow-hidden transition-[width,min-width] duration-500 ease-out"
        style={{
          width: isDesktop
            ? (isPanelOpen ? `${leftWidth}%` : '100%')
            : '100%',
          minWidth: isDesktop && isPanelOpen ? '600px' : 'auto'
        }}
      >
        <Page2Content
          onQuestionSelect={handleQuestionSelect}
          selectedQuestionId={selectedQuestionId}
        />

<PageNavigation activePage="the-shift" />
      </div>

      {/* 🔽 Right Panel - Slides in from right when question is selected (desktop only) */}
      {isDesktop && (
        <div
          className="order-2 flex-shrink-0 md:p-0 transition-[width,transform] duration-500 ease-out"
          style={{
            width: `${100 - leftWidth}%`,
            minWidth: '600px',
            transform: isPanelOpen ? 'translateX(0)' : 'translateX(100%)',
            position: !isPanelOpen ? 'absolute' : 'relative',
            right: !isPanelOpen ? 0 : 'auto',
            top: !isPanelOpen ? 0 : 'auto',
            bottom: !isPanelOpen ? 0 : 'auto',
          }}
        >
          <div className="relative overflow-hidden h-full bg-white">
            <PrototypePanel />
          </div>
        </div>
      )}

      {/* 🔽 Floating Preview for Mobile - appears when question is selected */}
      {!isDesktop && isPanelOpen && !userDismissedPreview && (
        <FloatingPreview
          isVisible={true}
          onClose={handleCloseFloatingPreview}
        >
          <PrototypePanel />
        </FloatingPreview>
      )}

      {/* 🔽 Resize Handle - Only show when panel is open */}
      {isDesktop && isPanelOpen && (
        <div
          className="absolute top-0 bottom-0 w-1 bg-transparent hover:bg-black/10 flex items-center justify-center group z-50 hidden md:flex transition-opacity duration-300"
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
