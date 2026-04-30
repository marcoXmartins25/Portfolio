export function PostgresIcon({ size = 28 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" fill="#336791"/>
      <path d="M22.5 9.5c-1.2-1-2.8-1.5-4.5-1.5-1.2 0-2.3.3-3.2.8-.5-.3-1.1-.5-1.8-.5-1.5 0-2.8.8-3.5 2-.5.8-.7 1.8-.5 2.8.2.8.6 1.5 1.2 2v4.4c0 1.7 1.3 3 3 3h.5c.3.5.8.8 1.3.8s1-.3 1.3-.8h.5c1.7 0 3-1.3 3-3v-1.5c.5-.2 1-.5 1.4-.9.8-.8 1.3-1.9 1.3-3 0-.7-.2-1.4-.5-2-.2-.3-.3-.4-.5-.6zm-4.5 9.5h-4v-3h4v3z" fill="#fff" opacity=".9"/>
      <ellipse cx="14" cy="13" rx="1" ry="1.5" fill="#336791"/>
      <ellipse cx="18" cy="13" rx="1" ry="1.5" fill="#336791"/>
    </svg>
  );
}
