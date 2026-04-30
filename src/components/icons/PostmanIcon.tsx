export function PostmanIcon({ size = 28 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" fill="#FF6C37"/>
      <path d="M22.5 9.5a9 9 0 10-4.5 16.9V23a6.5 6.5 0 110-14v-2.5c1.7.4 3.2 1.3 4.5 2.5z" fill="#fff"/>
      <circle cx="19" cy="16" r="3.5" fill="#FF6C37"/>
      <path d="M14.5 13.5l5 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
