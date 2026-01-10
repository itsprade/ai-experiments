// ✅ Reusable Component: Sleep icon for insights

export function SleepIcon({ className = "" }: { className?: string }) {
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
        d="M7 13.25C10.4518 13.25 13.25 10.4518 13.25 7C13.25 3.54822 10.4518 0.75 7 0.75C6.48438 0.75 5.98438 0.8125 5.5 0.929688C6.03125 1.75781 6.34375 2.74219 6.34375 3.79688C6.34375 6.76562 3.91406 9.19531 0.945312 9.19531C0.773438 9.19531 0.605469 9.1875 0.4375 9.17188C1.21094 11.4844 3.42969 13.25 7 13.25Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
    </svg>
  );
}
