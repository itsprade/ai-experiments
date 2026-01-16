'use client';

import { useState, useRef } from 'react';
import { TitleMotion } from '@/components/TitleMotion';

// 🔽 Introduction - Designing Proactive AI Systems Essay

export function Introduction() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [thumbnailRect, setThumbnailRect] = useState<DOMRect | null>(null);
  const thumbnailRef = useRef<HTMLButtonElement>(null);

  // Extract video ID from YouTube URL
  const videoId = 'AW1sgrEsDHk';

  const handleOpenVideo = () => {
    if (thumbnailRef.current) {
      setThumbnailRect(thumbnailRef.current.getBoundingClientRect());
      setIsVideoOpen(true);
      // Trigger animation after a brief delay to ensure initial state is rendered
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    }
  };

  const handleCloseVideo = () => {
    setIsAnimating(false);
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsVideoOpen(false);
      setThumbnailRect(null);
    }, 400);
  };

  return (
    <div className="h-full bg-white dark:bg-neutral-950 overflow-y-auto transition-colors duration-300">
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-20 md:pt-20 lg:py-24 flex justify-center md:justify-start">
        <article className="w-full max-w-[640px]">

          {/* 🔽 Video Thumbnail */}
          <div className="mb-6 pt-[64px]">
            <div className="relative w-fit group/video overflow-visible">
              {/* Blurred background glow - appears on hover */}
              <div
                className="absolute -inset-10 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/${videoId}/mqdefault.jpg)`,
                  backgroundSize: 'calc(100% - 80px) calc(100% - 80px)',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  filter: 'blur(40px) saturate(1.5)',
                }}
              />
              <button
                ref={thumbnailRef}
                onClick={handleOpenVideo}
                className={`relative w-[240px] h-[135px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-0 -rotate-4 group ${isVideoOpen ? 'invisible' : ''}`}
                aria-label="Watch video"
              >
                {/* YouTube Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-4 h-4 text-black ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* 🔽 Hero Section */}
          <header className="mb-6">
            {/* Title with hover links */}
            <div className="group/title relative w-fit mb-5">
              {/* Hover links - positioned above, aligned to border edge */}
              <div className="flex items-center gap-0 opacity-0 group-hover/title:opacity-100 transition-opacity duration-200 mb-3 justify-end -mr-3">
                <a
                  href="https://titlemotionlab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black/70 dark:hover:text-white/70 transition-colors px-2.5 py-1.5 border border-dotted border-black/20 dark:border-white/20"
                >
                  <span>Playground</span>
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/AnirudhKonduru/title-motion-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black/70 dark:hover:text-white/70 transition-colors px-2.5 py-1.5 border border-dotted border-black/20 dark:border-white/20"
                >
                  <span>GitHub</span>
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
              {/* Title with dotted border - using negative margin to keep border outside */}
              <div className="-m-3 p-3 border border-dotted border-transparent group-hover/title:border-black/20 dark:group-hover/title:border-white/20 transition-colors duration-200">
                <h1
                  className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-black dark:text-white font-bold"
                >
                  <TitleMotion text="Rewiring how designers think about software in the age of AI" />
                </h1>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[14px] leading-[1.6] text-black/70 dark:text-white/70">
                Software is fundamentally changing. As AI becomes a core part of how products work, systems are moving beyond predictable, deterministic interfaces toward behavior that adapts, reasons, and acts on its own.
              </p>
              <p className="text-[14px] leading-[1.6] text-black/70 dark:text-white/70">
                Software is no longer just something we operate. It is starting to observe, decide, and participate in the experience itself.
              </p>
            </div>
          </header>

          {/* 🔽 The Shift */}
          <section className="mb-6">
            <div className="space-y-3">
              <p className="text-[14px] leading-[1.6] text-black/70 dark:text-white/70">
                This shift changes how we think about design. It changes what an interface is, what an experience means, and what it actually means to design software.
              </p>
              <p className="text-[14px] leading-[1.6] text-black/70 dark:text-white/70">
                Designing for AI-first systems is less about arranging screens and flows, and more about shaping behavior, intent, and decision-making inside the system.
              </p>
            </div>
          </section>

          {/* 🔽 Two Fundamental Questions */}
          <section className="mb-6 pt-6 border-t border-black/[0.06] dark:border-white/[0.06]">
            <p className="text-[14px] leading-[1.6] text-black/70 dark:text-white/70 mb-6">
              This site is grounded in two fundamental questions that shape how I think about building software in this new era.
            </p>

            <div className="space-y-6">
              {/* Question 1 */}
              <div>
                <h3
                  className="text-[16px] md:text-[18px] leading-[1.3] tracking-[-0.01em] text-black dark:text-white font-semibold mb-2"
                >
                  1. Designing for unpredictability
                </h3>
                <p className="text-[14px] leading-[1.6] text-black/60 dark:text-white/60">
                  How do we design systems we can&apos;t fully predict, while still building trust, consistency, and user agency?
                </p>
              </div>

              {/* Question 2 */}
              <div>
                <h3
                  className="text-[16px] md:text-[18px] leading-[1.3] tracking-[-0.01em] text-black dark:text-white font-semibold mb-2"
                >
                  2. Redefining design artifacts
                </h3>
                <p className="text-[14px] leading-[1.6] text-black/60 dark:text-white/60">
                  When the interface designs itself, what do designers actually deliver? Rules, constraints, principles, systems, and logic instead of static screens.
                </p>
              </div>
            </div>

            <p className="text-[14px] leading-[1.6] text-black/70 dark:text-white/70 mt-6">
              Everything here builds from these two questions. This is where I explore a set of opinions and ideas about how software design needs to evolve, through frameworks, prototypes, and design artifacts.
            </p>
          </section>

          {/* 🔽 Continue Reading Link */}
          <footer className="pt-6 border-t border-black/[0.06] dark:border-white/[0.06]">
            <a
              href="/the-shift"
              className="group flex items-center gap-3.5 p-4 rounded-xl bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-[#2a2a2a] dark:to-[#1f1f1f] border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 transition-all"
            >
              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-medium text-black dark:text-white">
                  The Shift
                </p>
                <p className="text-[12px] text-black/50 dark:text-white/50">
                  Explore the questions this raises
                </p>
              </div>

              {/* External Arrow Icon */}
              <svg
                className="w-5 h-5 text-black/30 dark:text-white/40 group-hover:text-black/50 dark:group-hover:text-white/60 group-hover:translate-x-0.5 transition-all flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </footer>
        </article>
      </div>

      {/* 🔽 Video Modal with Expand Animation */}
      {isVideoOpen && thumbnailRect && (
        <div
          className="fixed inset-0 z-50"
          onClick={handleCloseVideo}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-400 ease-out ${isAnimating ? 'opacity-90' : 'opacity-0'}`}
          />

          {/* Expanding Video Container */}
          <div
            className="absolute overflow-hidden shadow-2xl transition-all duration-400 ease-out"
            style={{
              top: isAnimating ? '50%' : thumbnailRect.top,
              left: isAnimating ? '50%' : thumbnailRect.left,
              width: isAnimating ? 'min(90vw, 896px)' : thumbnailRect.width,
              height: isAnimating ? 'min(50.625vw, 504px)' : thumbnailRect.height,
              transform: isAnimating
                ? 'translate(-50%, -50%) rotate(0deg)'
                : 'translate(0, 0) rotate(-4deg)',
              borderRadius: isAnimating ? '16px' : '8px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseVideo}
              className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
              aria-label="Close video"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* YouTube Embed - only load when expanded */}
            {isAnimating ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
