export function ReactIcon({ size = 28 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="2.8" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
        <ellipse cx="16" cy="16" rx="13" ry="5"/>
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)"/>
      </g>
    </svg>
  );
}
