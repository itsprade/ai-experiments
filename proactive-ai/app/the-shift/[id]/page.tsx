'use client';

import { NoticingCard } from "@/components/NoticingCard";
import { Page2Content } from "@/components/pages/Page2Content";
import { useNoticingTimeline } from "@/hooks/useNoticingTimeline";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";

export default function QuestionDetailPage() {
  const params = useParams();
  const questionId = params.id ? parseInt(params.id as string, 10) : undefined;

  const {
    currentState,
    currentStateIndex,
    mode,
    reset,
    toggleMode
  } = useNoticingTimeline();

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
      className="flex flex-col md:flex-row min-h-screen md:h-screen w-full relative"
      style={{
        cursor: isResizing ? 'col-resize' : 'auto',
        userSelect: isResizing ? 'none' : 'auto'
      }}
    >
      {/* 🔽 Left Panel - Bottom on mobile, Left on desktop with resizable width */}
      <div
        className="order-2 md:order-1 md:h-full relative md:overflow-hidden"
        style={{
          width: isDesktop ? `${leftWidth}%` : '100%',
          minWidth: isDesktop ? '600px' : 'auto'
        }}
      >
        <Page2Content selectedQuestionId={questionId} />

        {/* 🔽 Page Navigation - Vertical rotated text on top-left */}
        <div className="absolute top-8 left-6 md:top-8 md:left-5 flex flex-row md:flex-col gap-4 md:gap-[26px] text-black/40 font-mono text-xs uppercase tracking-wider z-20">
          <a
            href="/"
            className="hover:text-black/80 transition-colors md:[writing-mode:vertical-lr] md:rotate-180 whitespace-nowrap font-light"
          >
            Introduction
          </a>
          <a
            href="/the-shift"
            className="hover:text-black/80 transition-colors md:[writing-mode:vertical-lr] md:rotate-180 whitespace-nowrap text-black font-normal"
          >
            The Shift
          </a>
        </div>
      </div>

      {/* 🔽 Right Panel - Top on mobile (500px), Right on desktop with resizable width */}
      <div
        className="order-1 md:order-2 flex-shrink-0 p-6 md:p-0"
        style={{
          width: isDesktop ? `${100 - leftWidth}%` : '100%',
          minWidth: isDesktop ? '600px' : 'auto'
        }}
      >
        <div className="relative overflow-hidden h-[450px] md:h-full rounded-3xl md:rounded-none squircle-mobile bg-white">
          {/* Gradient Background from Figma */}
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-110 blur-[80px]"
            src="/gradient-bg-2.png"
          />
          <div className="absolute inset-0 bg-black/5" />

          {/* Centered Card */}
          <div className="relative h-full flex items-center justify-center">
            <NoticingCard
              currentState={currentState}
              currentStateIndex={currentStateIndex}
              isTransitioning={false}
            />
          </div>

          {/* 🔽 Controls (Bottom) */}
          <div className="absolute bottom-4 md:bottom-8 left-4 md:left-5 right-4 md:right-5 flex items-center justify-between">
            {/* Auto/Manual Toggle */}
            <button
              onClick={toggleMode}
              className="backdrop-blur-md bg-black/60 text-white rounded-[52px] h-9 px-3 md:px-4 flex items-center gap-1.5 md:gap-2 font-inter text-xs md:text-sm tracking-[-0.14px] transition-all hover:bg-black/70"
            >
              <span className={mode === 'auto' ? 'opacity-100' : 'opacity-20'}>Auto</span>
              <span className={mode === 'manual' ? 'opacity-100' : 'opacity-20'}>Manual</span>
            </button>

            {/* Reset Button with keyboard hint */}
            <button
              onClick={reset}
              className="backdrop-blur-md bg-black/60 text-white rounded-[52px] h-9 px-3 md:px-4 font-inter text-xs md:text-sm tracking-[-0.14px] transition-all hover:bg-black/70 flex items-center gap-2"
            >
              <span>Reset</span>
              <span className="opacity-50 text-xs hidden md:inline">R</span>
            </button>
          </div>
        </div>
      </div>

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
