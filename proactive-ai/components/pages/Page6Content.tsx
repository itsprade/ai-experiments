// 🧪 Dummy Data: Page 6 custom content

export function Page6Content() {
  return (
    <div className="h-full bg-white flex items-start md:items-center justify-center px-8 md:px-20 py-12 md:py-0">
      <div className="max-w-[835px] space-y-6 md:space-y-8">
        <h1
          className="text-[40px] uppercase leading-[48px] tracking-[-0.4px] text-black"
          style={{ fontFamily: 'var(--font-krona)' }}
        >
          How might noticing evolve with user growth?
        </h1>
        <div className="space-y-3 md:space-y-4">
          <p className="font-inter text-[14px] leading-[18px] tracking-[-0.14px] text-black/70">
            What changes as users gain expertise?
          </p>
          <p className="font-inter text-[14px] leading-[18px] tracking-[-0.14px] text-black/70">
            How should the system mature over time?
          </p>
          <p className="font-inter text-[14px] leading-[18px] tracking-[-0.14px] text-black/70">
            What stays constant vs. adapts?
          </p>
        </div>
      </div>
    </div>
  );
}
