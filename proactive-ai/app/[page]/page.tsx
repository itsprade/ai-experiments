'use client';

import { NoticingCard } from "@/components/NoticingCard";
import { AnimatedGradient } from "@/components/AnimatedGradient";
import { useNoticingTimeline } from "@/hooks/useNoticingTimeline";
import { getPageConfig } from "@/lib/pageContent";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";

export default function PageNumber() {
  const params = useParams();
  const pageNumber = parseInt(params.page as string);

  const {
    currentState,
    currentStateIndex,
    mode,
    isTransitioning,
    reset,
    toggleMode
  } = useNoticingTimeline();

  // Page configuration
  const pageConfig = getPageConfig(pageNumber);
  const LeftPanelComponent = pageConfig.leftPanelComponent;

  // Resizable panels state
  const [leftWidth, setLeftWidth] = useState(50); // percentage
  const [isResizing, setIsResizing] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
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
        <LeftPanelComponent />

        {/* 🔽 Page Numbers - Top horizontal on mobile, Top left vertical on desktop */}
        <div className="absolute top-8 left-6 md:top-6 md:left-5 flex flex-row md:flex-col gap-4 md:gap-1 text-black/40 font-inter text-sm z-20">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <a
              key={num}
              href={num === 1 ? '/' : `/${num}`}
              className={`hover:text-black/80 transition-colors ${num === pageNumber ? 'text-black font-semibold' : ''}`}
            >
              {num}
            </a>
          ))}
        </div>
      </div>

      {/* 🔽 Right Panel - Top on mobile (500px), Right on desktop with resizable width */}
      <div
        className="relative overflow-hidden order-1 md:order-2 h-[500px] md:h-full flex-shrink-0"
        style={{
          width: isDesktop ? `${100 - leftWidth}%` : '100%',
          minWidth: isDesktop ? '600px' : 'auto'
        }}
      >
        {/* Animated Gradient Background */}
        <AnimatedGradient className="absolute inset-0" colors={pageConfig.colors} />

        {/* Centered Card */}
        <div className="relative h-full flex items-center justify-center">
          <NoticingCard
            currentState={currentState}
            currentStateIndex={currentStateIndex}
            isTransitioning={isTransitioning}
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
            <span className="opacity-50 text-xs">R</span>
          </button>
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
