'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';

interface FloatingPreviewProps {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

export function FloatingPreview({ children, isVisible, onClose }: FloatingPreviewProps) {
  // Preview dimensions (40% scale = 0.4)
  const scale = 0.4;
  const previewWidth = 200;
  const previewHeight = 250;

  // Position state - initialize with safe default, will be set properly in useEffect
  const [position, setPosition] = useState({ x: 16, y: 500 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set initial position after mount (avoids SSR hydration issues)
  useEffect(() => {
    setPosition({ x: 16, y: window.innerHeight - previewHeight - 16 });
    setHasMounted(true);
  }, []);

  // Handle touch/mouse start
  const handleDragStart = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top
    });
    setIsDragging(true);
  };

  // Handle touch/mouse move
  const handleDragMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;

    const newX = clientX - dragOffset.x;
    const newY = clientY - dragOffset.y;

    // Constrain to viewport
    const maxX = window.innerWidth - previewWidth - 8;
    const maxY = window.innerHeight - previewHeight - 8;

    setPosition({
      x: Math.max(8, Math.min(newX, maxX)),
      y: Math.max(8, Math.min(newY, maxY))
    });
  };

  // Handle touch/mouse end
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Mouse events
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      handleDragMove(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      handleDragEnd();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Reset position when visibility changes
  useEffect(() => {
    if (isVisible) {
      setPosition({ x: 16, y: window.innerHeight - previewHeight - 16 });
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed z-50 touch-none"
      style={{
        left: position.x,
        top: position.y,
        width: previewWidth,
        height: previewHeight,
      }}
    >
      {/* Shadow and container */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
        }}
      >
        {/* Drag handle area - top section */}
        <div
          className="absolute top-0 left-0 right-0 h-8 z-10 cursor-grab active:cursor-grabbing flex items-start justify-center"
          onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            handleDragStart(touch.clientX, touch.clientY);
          }}
          onTouchMove={(e) => {
            const touch = e.touches[0];
            handleDragMove(touch.clientX, touch.clientY);
          }}
          onTouchEnd={handleDragEnd}
        >
          {/* Drag indicator pill */}
          <div className="w-8 h-1 rounded-full bg-white/40 mt-1" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-20 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-black/60 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Preview content - scaled down to 40% */}
        <div
          className="w-full h-full origin-top-left"
          style={{
            transform: `scale(${scale})`,
            width: `${100 / scale}%`,
            height: `${100 / scale}%`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
