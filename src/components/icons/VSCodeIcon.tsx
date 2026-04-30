export function VSCodeIcon({ size = 28 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M30 6.5L23 2l-12 11L4 8 2 9.5v13L4 24l7-5 12 11 7-4.5V6.5z" fill="#0065A9"/>
      <path d="M30 6.5L23 2v28l7-4.5V6.5z" fill="#007ACC"/>
      <path d="M30 6.5l-7 5.5v8l7 5.5V6.5z" fill="#1F9CF0"/>
      <path d="M4 24l7-5V13L4 8 2 9.5v13L4 24z" fill="#fff" opacity=".25"/>
    </svg>
  );
}
