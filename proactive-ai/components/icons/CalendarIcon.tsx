// ✅ Reusable Component: Calendar/refresh icon for insights

export function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.25 7C13.25 10.4518 10.4518 13.25 7 13.25C3.54822 13.25 0.75 10.4518 0.75 7C0.75 3.54822 3.54822 0.75 7 0.75C8.65625 0.75 10.1562 1.39062 11.25 2.4375M11.25 2.4375V0.75M11.25 2.4375H9.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
    </svg>
  );
}
