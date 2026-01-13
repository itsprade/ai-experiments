// 🔽 Page 1 - Designing Proactive AI Systems Essay

export function Page1Content() {
  return (
    <div className="h-full bg-white overflow-y-auto">
      <div className="px-[26px] md:px-[100px] py-12 md:py-16">
        <article className="max-w-[720px] space-y-8 md:space-y-12">
          {/* 🔽 Title */}
          <h1
            className="text-[32px] md:text-[40px] uppercase leading-[40px] md:leading-[48px] tracking-[-0.4px] text-black font-bold"
            style={{ fontFamily: 'var(--font-bricolage)' }}
          >
            Designing Proactive AI Systems
          </h1>

          {/* 🔽 Opening */}
          <div className="space-y-4">
            <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
              Traditional software waits. You open an app, navigate, search, request. The system responds.
            </p>
            <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
              AI changes this. An intelligent system observes, interprets, and initiates — surfacing what matters before you ask.
            </p>
          </div>

          {/* 🔽 The Paradigm Shift */}
          <section className="space-y-4">
            <h2
              className="text-[16px] md:text-[18px] uppercase leading-[24px] md:leading-[28px] tracking-[-0.2px] text-black font-bold"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              The Paradigm Shift
            </h2>

            <div className="space-y-3">
              <div>
                <p className="font-inter text-[13px] font-medium text-black/50 uppercase tracking-wide mb-1">Today&apos;s Model</p>
                <p className="font-inter text-[14px] md:text-[15px] leading-[22px] tracking-[-0.14px] text-black/70 font-mono bg-black/5 px-3 py-2 rounded-lg">
                  User → Opens App → Navigates → Finds Data → Interprets → Decides → Acts
                </p>
              </div>

              <div>
                <p className="font-inter text-[13px] font-medium text-black/50 uppercase tracking-wide mb-1">The New Model</p>
                <p className="font-inter text-[14px] md:text-[15px] leading-[22px] tracking-[-0.14px] text-black/70 font-mono bg-black/5 px-3 py-2 rounded-lg">
                  AI Layer → Understands Context → Surfaces Relevant Insight → User Confirms/Adjusts → Action Happens
                </p>
              </div>
            </div>

            <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
              The app &quot;dissolves&quot; into the background. The frontend becomes emergent, generated in the moment based on what matters <em>right now</em> for <em>this specific person</em>.
            </p>
          </section>

          {/* 🔽 Three Capabilities */}
          <section className="space-y-5">
            <h2
              className="text-[16px] md:text-[18px] uppercase leading-[24px] md:leading-[28px] tracking-[-0.2px] text-black font-bold"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              Three capabilities make this possible:
            </h2>

            <div className="space-y-5">
              {/* Detecting Change */}
              <div className="space-y-2">
                <h3
                  className="text-[14px] md:text-[15px] uppercase leading-[22px] md:leading-[24px] tracking-[-0.14px] text-black font-bold"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  1. Detecting Change
                </h3>
                <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
                  The system monitors for meaningful shifts — a schedule that&apos;s unusually packed, a metric crossing a threshold, a pattern breaking from the norm. Not everything that changes matters. The designer&apos;s job is to define <em>which</em> changes are worth noticing and surfacing to the user.
                </p>
              </div>

              {/* Finding Patterns */}
              <div className="space-y-2">
                <h3
                  className="text-[14px] md:text-[15px] uppercase leading-[22px] md:leading-[24px] tracking-[-0.14px] text-black font-bold"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  2. Finding Patterns
                </h3>
                <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
                  Raw changes become insights when connected to history. &quot;You have 5 meetings&quot; is a fact. &quot;Days like this tend to be 35% less productive&quot; is a pattern. The system learns what combinations of signals actually predict outcomes the user would care about.
                </p>
              </div>

              {/* Suggesting Action */}
              <div className="space-y-2">
                <h3
                  className="text-[14px] md:text-[15px] uppercase leading-[22px] md:leading-[24px] tracking-[-0.14px] text-black font-bold"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  3. Suggesting Action
                </h3>
                <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
                  Insights without action are noise. The system translates patterns into concrete next steps — reschedule a meeting, block focus time, reorder inventory. The right action, at the right moment, with the right level of urgency.
                </p>
              </div>
            </div>
          </section>

          {/* 🔽 The Designer's New Job */}
          <section className="space-y-4">
            <h2
              className="text-[16px] md:text-[18px] uppercase leading-[24px] md:leading-[28px] tracking-[-0.2px] text-black font-bold"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              The designer&apos;s new job
            </h2>

            <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
              We no longer design screens. We design the <em>rules</em> by which the system decides what to notice, when to speak, and how to help.
            </p>

            <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
              This means defining:
            </p>

            <ul className="space-y-2 pl-5">
              <li className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80 list-disc">
                What patterns matter?
              </li>
              <li className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80 list-disc">
                What confidence threshold triggers an alert?
              </li>
              <li className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80 list-disc">
                How should urgency translate to visual weight?
              </li>
              <li className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80 list-disc">
                When should the system stay silent even if it has something to say?
              </li>
            </ul>

            <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
              These are the new design decisions. Not pixels — principles. Not layouts — logic.
            </p>
          </section>

          {/* 🔽 Deeper Questions */}
          <section className="space-y-5">
            <h2
              className="text-[16px] md:text-[18px] uppercase leading-[24px] md:leading-[28px] tracking-[-0.2px] text-black font-bold"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              This raises deeper questions
            </h2>

            <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
              Building proactive AI systems is just the beginning. It opens up a fundamental rethinking of how we approach design itself.
            </p>

            {/* Question 1 */}
            <div className="space-y-2">
              <h3
                className="text-[14px] md:text-[15px] uppercase leading-[22px] md:leading-[24px] tracking-[-0.14px] text-black font-bold"
                style={{ fontFamily: 'var(--font-bricolage)' }}
              >
                How do we design for systems we can&apos;t fully predict?
              </h3>
              <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
                We&apos;re moving from deterministic flows to adaptive systems. The same user, same context, might see different things each time. How do we build trust, consistency, and user agency when we can&apos;t control every outcome?
              </p>
            </div>

            {/* Question 2 */}
            <div className="space-y-2">
              <h3
                className="text-[14px] md:text-[15px] uppercase leading-[22px] md:leading-[24px] tracking-[-0.14px] text-black font-bold"
                style={{ fontFamily: 'var(--font-bricolage)' }}
              >
                What do designers deliver when the interface designs itself?
              </h3>
              <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
                If AI generates the UI, what replaces the Figma file? What are our new artifacts — rules, constraints, principles? How do we hand off logic instead of layouts? How do we prototype something that&apos;s never the same twice?
              </p>
            </div>

            <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/80">
              These are the questions I&apos;ll be exploring — one by one, with prototypes and frameworks for each.
            </p>
          </section>

          {/* 🔽 Next Up */}
          <section className="pt-4 border-t border-black/10">
            <p className="font-inter text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] tracking-[-0.14px] text-black/60">
              <strong className="text-black/80">Next up:</strong> <em>How do we build trust in non-deterministic systems?</em>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
