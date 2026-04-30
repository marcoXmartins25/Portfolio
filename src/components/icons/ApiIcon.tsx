export function ApiIcon({ size = 28 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#10B981"/>
      <path d="M7 12h4M7 16h6M7 20h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19 10l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
