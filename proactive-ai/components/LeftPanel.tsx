export function LeftPanel() {
  return (
    <div className="h-full bg-white flex items-center justify-center px-6 md:px-16 py-8 md:py-0">
      <div className="max-w-[835px] space-y-6 md:space-y-8">
        {/* 🔽 Main Question */}
        <h1 className="font-krona text-[20px] uppercase leading-[26px] tracking-[-0.2px] text-black">
          What should the system notice without being asked?
        </h1>

        {/* 🔽 Sub-questions */}
        <div className="space-y-3 md:space-y-4">
          <p className="font-inter text-[14px] leading-[18px] tracking-[-0.14px] text-black/70">
            What signals indicate something meaningful is changing?
          </p>
          <p className="font-inter text-[14px] leading-[18px] tracking-[-0.14px] text-black/70">
            What patterns matter before users realize they matter?
          </p>
          <p className="font-inter text-[14px] leading-[18px] tracking-[-0.14px] text-black/70">
            What should never require a dashboard visit?
          </p>
        </div>
      </div>
    </div>
  );
}
