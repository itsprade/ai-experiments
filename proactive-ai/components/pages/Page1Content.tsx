'use client';

import { useState, useRef, useEffect } from 'react';

// 🔽 Page 1 - Designing Proactive AI Systems Essay

export function Page1Content() {
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
    <div className="h-full bg-white overflow-y-auto">
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-80 md:pb-20 md:pt-20 lg:py-24">
        <article className="max-w-[640px] mx-auto md:mx-0">

          {/* 🔽 Hero Section */}
          <header className="mb-10 md:mb-12">
            <h1
              className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-black font-bold mb-6"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              Designing Proactive AI Systems
            </h1>

            <div className="space-y-4">
              <p className="font-inter text-[14px] leading-[1.6] text-black/70">
                Traditional software waits. You open an app, navigate, search, request. The system responds.
              </p>
              <p className="font-inter text-[14px] leading-[1.6] text-black/70">
                AI changes this. An intelligent system observes, interprets, and initiates. It surfaces what matters before you ask.
              </p>
            </div>
          </header>

          {/* 🔽 Video Thumbnail */}
          <div className="mb-10 md:mb-12">
            <button
              ref={thumbnailRef}
              onClick={handleOpenVideo}
              className={`relative w-[160px] h-[90px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-0 -rotate-4 group ${isVideoOpen ? 'invisible' : ''}`}
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

          {/* 🔽 The Paradigm Shift */}
          <section className="mb-14 md:mb-16">
            <h2
              className="text-[12px] uppercase leading-none tracking-[0.08em] text-black/40 font-semibold mb-6"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              The Paradigm Shift
            </h2>

            <div className="space-y-4 mb-6">
              <div className="border-l border-black/10 pl-4">
                <p className="font-inter text-[11px] font-medium text-black/40 uppercase tracking-[0.1em] mb-2">Today</p>
                <p className="font-inter text-[14px] leading-[1.5] text-black/60 flex items-center flex-wrap gap-x-2 gap-y-1">
                  <span>User</span>
                  <svg className="w-3 h-3 text-black/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span>Opens App</span>
                  <svg className="w-3 h-3 text-black/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span>Navigates</span>
                  <svg className="w-3 h-3 text-black/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span>Finds Data</span>
                  <svg className="w-3 h-3 text-black/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span>Interprets</span>
                  <svg className="w-3 h-3 text-black/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span>Decides</span>
                  <svg className="w-3 h-3 text-black/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span>Acts</span>
                </p>
              </div>

              <div className="border-l border-black pl-4">
                <p className="font-inter text-[11px] font-medium text-black/40 uppercase tracking-[0.1em] mb-2">Tomorrow</p>
                <p className="font-inter text-[14px] leading-[1.5] text-black/80 flex items-center flex-wrap gap-x-2 gap-y-1">
                  <span>AI Layer</span>
                  <svg className="w-3 h-3 text-black/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span>Understands Context</span>
                  <svg className="w-3 h-3 text-black/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span>Surfaces Insight</span>
                  <svg className="w-3 h-3 text-black/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span>User Confirms</span>
                  <svg className="w-3 h-3 text-black/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  <span>Action Happens</span>
                </p>
              </div>
            </div>

            <p className="font-inter text-[14px] leading-[1.6] text-black/70">
              The app &quot;dissolves&quot; into the background. The frontend becomes emergent, generated in the moment based on what matters <em className="text-black/90 not-italic font-medium">right now</em> for <em className="text-black/90 not-italic font-medium">this specific person</em>.
            </p>
          </section>

          {/* 🔽 Three Capabilities */}
          <section className="mb-14 md:mb-16">
            <h2
              className="text-[12px] uppercase leading-none tracking-[0.08em] text-black/40 font-semibold mb-8"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              Three capabilities make this possible
            </h2>

            <div className="space-y-8">
              {/* Detecting Change */}
              <div>
                <h3
                  className="text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.01em] text-black font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  1. Detecting Change
                </h3>
                <p className="font-inter text-[14px] leading-[1.65] text-black/65">
                  The system monitors for meaningful shifts: a schedule that&apos;s unusually packed, a metric crossing a threshold, a pattern breaking from the norm. Not everything that changes matters. The designer&apos;s job is to define <em className="not-italic text-black/80">which</em> changes are worth surfacing.
                </p>
              </div>

              {/* Finding Patterns */}
              <div>
                <h3
                  className="text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.01em] text-black font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  2. Finding Patterns
                </h3>
                <p className="font-inter text-[14px] leading-[1.65] text-black/65">
                  Raw changes become insights when connected to history. &quot;You have 5 meetings&quot; is a fact. &quot;Days like this tend to be 35% less productive&quot; is a pattern. The system learns what combinations of signals predict outcomes the user cares about.
                </p>
              </div>

              {/* Suggesting Action */}
              <div>
                <h3
                  className="text-[18px] md:text-[20px] leading-[1.2] tracking-[-0.01em] text-black font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  3. Suggesting Action
                </h3>
                <p className="font-inter text-[14px] leading-[1.65] text-black/65">
                  Insights without action are noise. The system translates patterns into concrete next steps: reschedule a meeting, block focus time, reorder inventory. The right action, at the right moment, with the right urgency.
                </p>
              </div>
            </div>
          </section>

          {/* 🔽 The Designer's New Job */}
          <section className="mb-14 md:mb-16">
            <h2
              className="text-[12px] uppercase leading-none tracking-[0.08em] text-black/40 font-semibold mb-6"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              The designer&apos;s new job
            </h2>

            <p className="font-inter text-[14px] leading-[1.6] text-black/70 mb-5">
              We no longer design screens. We design the <em className="not-italic text-black/90 font-medium">rules</em> by which the system decides what to notice, when to speak, and how to help.
            </p>

            <p className="font-inter text-[14px] leading-[1.6] text-black/60 mb-4">
              This means defining:
            </p>

            <ul className="space-y-2.5 mb-6">
              <li className="font-inter text-[14px] leading-[1.5] text-black/65 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-black/20 before:rounded-full">
                What patterns matter?
              </li>
              <li className="font-inter text-[14px] leading-[1.5] text-black/65 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-black/20 before:rounded-full">
                What confidence threshold triggers an alert?
              </li>
              <li className="font-inter text-[14px] leading-[1.5] text-black/65 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-black/20 before:rounded-full">
                How should urgency translate to visual weight?
              </li>
              <li className="font-inter text-[14px] leading-[1.5] text-black/65 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-black/20 before:rounded-full">
                When should the system stay silent?
              </li>
            </ul>

            <p className="font-inter text-[14px] leading-[1.6] text-black/70">
              These are the new design decisions. Not pixels, but <em className="not-italic font-medium text-black/90">principles</em>. Not layouts, but <em className="not-italic font-medium text-black/90">logic</em>.
            </p>
          </section>

          {/* 🔽 Deeper Questions */}
          <section className="mb-14 md:mb-16">
            <h2
              className="text-[12px] uppercase leading-none tracking-[0.08em] text-black/40 font-semibold mb-6"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              This raises deeper questions
            </h2>

            <p className="font-inter text-[14px] leading-[1.6] text-black/70 mb-8">
              Building proactive AI systems is just the beginning. It opens up a fundamental rethinking of how we approach design itself.
            </p>

            <div className="space-y-8">
              {/* Question 1 */}
              <div>
                <h3
                  className="text-[16px] md:text-[18px] leading-[1.3] tracking-[-0.01em] text-black font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  How do we design for systems we can&apos;t fully predict?
                </h3>
                <p className="font-inter text-[14px] leading-[1.6] text-black/60">
                  We&apos;re moving from deterministic flows to adaptive systems. The same user, same context, might see different things each time. How do we build trust, consistency, and user agency when we can&apos;t control every outcome?
                </p>
              </div>

              {/* Question 2 */}
              <div>
                <h3
                  className="text-[16px] md:text-[18px] leading-[1.3] tracking-[-0.01em] text-black font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  What do designers deliver when the interface designs itself?
                </h3>
                <p className="font-inter text-[14px] leading-[1.6] text-black/60">
                  If AI generates the UI, what replaces the Figma file? What are our new artifacts: rules, constraints, principles? How do we hand off logic instead of layouts?
                </p>
              </div>
            </div>

            <p className="font-inter text-[14px] leading-[1.6] text-black/70 mt-8">
              These are the questions I&apos;ll be exploring, one by one, with prototypes and frameworks for each.
            </p>
          </section>

          {/* 🔽 Download Template */}
          <section className="mb-14 md:mb-16">
            <h2
              className="text-[12px] uppercase leading-none tracking-[0.08em] text-black/40 font-semibold mb-6"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              A template to structure your thinking
            </h2>

            <p className="font-inter text-[14px] leading-[1.6] text-black/70 mb-5">
              I&apos;ve created a template that helps designers structure their thinking around proactive AI systems. It&apos;s a framework for defining what patterns matter, when to surface insights, and how to design the rules that govern intelligent behavior.
            </p>

            <p className="font-inter text-[14px] leading-[1.6] text-black/60 mb-6">
              Use this artifact to go deeper: map out your detection triggers, define your pattern logic, and document the actions your system should suggest. It&apos;s how you move from abstract concepts to concrete design decisions.
            </p>

            {/* 🔽 GitHub Download Component */}
            <a
              href="https://github.com/itsprade/ai-feature-spec-template"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-[#474747] to-[#1a1a1a] border border-white/10 hover:border-white/20 transition-all"
            >
              {/* GitHub Icon */}
              <svg
                className="w-6 h-6 text-white/80 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="font-inter text-[14px] font-medium text-white">
                  Proactive AI Design Template
                </p>
                <p className="font-inter text-[12px] text-white/50">
                  Download from GitHub
                </p>
              </div>

              {/* Arrow Icon */}
              <svg
                className="w-5 h-5 text-white/40 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </section>

          {/* 🔽 Continue Reading Link */}
          <footer className="pt-8 border-t border-black/[0.06]">
            <a
              href="/the-shift"
              className="group flex items-center gap-3 font-inter text-[14px] leading-[1.5] text-black/70 hover:text-black transition-colors"
            >
              <span>Explore the questions this raises</span>
              <svg
                className="w-4 h-4 text-black/40 group-hover:text-black group-hover:translate-x-1 transition-all"
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
