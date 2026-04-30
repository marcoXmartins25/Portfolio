export function AIIcon({ size = 28 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="aiGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED"/>
          <stop offset="1" stopColor="#2563EB"/>
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#aiGrad)"/>
      <path d="M10 20v-8h2l4 5.5V12h2v8h-2l-4-5.5V20h-2z" fill="#fff"/>
      <circle cx="23" cy="12" r="1.5" fill="#fff"/>
      <circle cx="23" cy="20" r="1.5" fill="#fff"/>
      <rect x="22" y="13.5" width="2" height="5" rx="1" fill="#fff"/>
    </svg>
  );
}
