interface LeftPanelProps {
  title: string;
  questions: string[];
}

export function LeftPanel({ title, questions }: LeftPanelProps) {
  return (
    <div className="h-full bg-white flex items-center justify-center px-6 md:px-16 py-8 md:py-0">
      <div className="max-w-[835px] space-y-6 md:space-y-8">
        {/* 🔽 Main Question */}
        <h1 className="text-[40px] uppercase leading-[48px] tracking-[-0.4px] text-black" style={{ fontFamily: 'var(--font-krona)' }}>
          {title}
        </h1>

        {/* 🔽 Sub-questions */}
        <div className="space-y-3 md:space-y-4">
          {questions.map((question, index) => (
            <p key={index} className="font-inter text-[14px] leading-[18px] tracking-[-0.14px] text-black/70">
              {question}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
