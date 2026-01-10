// 🧪 Dummy Data: Page 1 custom content

export function Page1Content() {
  return (
    <div className="h-full bg-white flex items-start md:items-center justify-center px-8 md:px-20 py-12 md:py-0">
      <div className="max-w-[835px] space-y-6 md:space-y-8">
        {/* 🔽 Main Question */}
        <h1
          className="text-[40px] uppercase leading-[48px] tracking-[-0.4px] text-black"
          style={{ fontFamily: 'var(--font-krona)' }}
        >
          What should the system notice without being asked?
        </h1>

        {/* 🔽 Sub-questions */}
        <div className="space-y-3 md:space-y-4">
          <p className="font-inter text-[14px] leading-[18px] tracking-[-0.14px] text-black/70">
            How does it know when to surface information?
          </p>
          <p className="font-inter text-[14px] leading-[18px] tracking-[-0.14px] text-black/70">
            What patterns emerge from user behavior?
          </p>
          <p className="font-inter text-[14px] leading-[18px] tracking-[-0.14px] text-black/70">
            When should it stay silent vs. speak up?
          </p>
        </div>
      </div>
    </div>
  );
}
