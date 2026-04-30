export function DBeaverIcon({ size = 28 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#3B4A6B"/>
      <ellipse cx="16" cy="10" rx="9" ry="3.5" fill="#6B8CBA"/>
      <path d="M7 10v5c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-5c0 1.93-4.03 3.5-9 3.5S7 11.93 7 10z" fill="#4A6FA5"/>
      <path d="M7 15v5c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-5c0 1.93-4.03 3.5-9 3.5S7 16.93 7 15z" fill="#3B5A8A"/>
      <ellipse cx="16" cy="10" rx="9" ry="3.5" fill="none" stroke="#8AAFD4" strokeWidth=".8"/>
    </svg>
  );
}
