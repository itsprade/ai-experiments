// ✅ Reusable Component: Loading/thinking indicator for AI processing states

interface LoadingIndicatorProps {
  text?: string;
}

export function LoadingIndicator({ text = "Analyzing..." }: LoadingIndicatorProps) {
  return (
    <div className="flex items-center gap-2 text-black/50">
      {/* Animated dots */}
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-black/40 animate-loading-dot" style={{ animationDelay: '0ms' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-black/40 animate-loading-dot" style={{ animationDelay: '150ms' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-black/40 animate-loading-dot" style={{ animationDelay: '300ms' }} />
      </div>

      {/* Loading text */}
      <p className="text-sm font-inter tracking-[-0.14px]">
        {text}
      </p>
    </div>
  );
}
