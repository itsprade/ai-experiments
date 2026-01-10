// 🧪 Dummy Data: Page 2 custom content - Blog-style layout example

export function Page2Content() {
  return (
    <div className="h-full bg-white overflow-y-auto">
      <div className="max-w-[835px] mx-auto px-6 md:px-20 py-12 md:py-16">
        {/* 🔽 Article Header */}
        <div className="space-y-4 mb-8">
          <h1
            className="text-[40px] uppercase leading-[48px] tracking-[-0.4px] text-black"
            style={{ fontFamily: 'var(--font-krona)' }}
          >
            How might context shape what the system notices?
          </h1>
          <p className="font-inter text-[16px] leading-[24px] tracking-[-0.14px] text-black/50">
            Published on January 10, 2026 • 5 min read
          </p>
        </div>

        {/* 🔽 Article Content */}
        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.2px] text-black">
              The Role of Environmental Context
            </h2>
            <p className="font-inter text-[14px] leading-[22px] tracking-[-0.14px] text-black/70">
              Context isn't just about what's happening—it's about understanding the layers of meaning
              that surround every interaction. Environmental factors like time of day, user location,
              current task, and even system state all contribute to what should be noticed.
            </p>
            <p className="font-inter text-[14px] leading-[22px] tracking-[-0.14px] text-black/70">
              A notification that's helpful at 2pm might be intrusive at 2am. Information that's
              relevant during a work session might be noise during personal time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.2px] text-black">
              Temporal Patterns Matter
            </h2>
            <p className="font-inter text-[14px] leading-[22px] tracking-[-0.14px] text-black/70">
              Timing influences relevance in profound ways. The same piece of information can be
              critical, useful, or completely irrelevant depending on when it surfaces.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="font-inter text-[14px] leading-[22px] tracking-[-0.14px] text-black/70">
                • Real-time urgency vs. can-wait-until-later
              </li>
              <li className="font-inter text-[14px] leading-[22px] tracking-[-0.14px] text-black/70">
                • Recurring patterns that predict future needs
              </li>
              <li className="font-inter text-[14px] leading-[22px] tracking-[-0.14px] text-black/70">
                • Contextual windows where actions make sense
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.2px] text-black">
              Key Questions
            </h2>
            <div className="space-y-2">
              <p className="font-inter text-[14px] leading-[22px] tracking-[-0.14px] text-black/70">
                What environmental factors matter?
              </p>
              <p className="font-inter text-[14px] leading-[22px] tracking-[-0.14px] text-black/70">
                How does timing influence relevance?
              </p>
              <p className="font-inter text-[14px] leading-[22px] tracking-[-0.14px] text-black/70">
                What makes something worth noticing?
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
