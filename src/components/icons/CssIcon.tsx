export function CssIcon({ size = 28 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#1572B6"/>
      <path d="M16 27.6l6.2-1.7 2-22.9H16v24.6z" fill="#33A9DC"/>
      <path d="M16 13H11.6l-.3-3.4H16V6.2H8.2l.8 9.2H16V13zm0 8.4-.1.1-3.3-.9-.2-2.4H9.1l.4 4.8 6.4 1.8.1-.1v-3.3z" fill="#EBEBEB"/>
      <path d="M16 13v3.4h3.8l-.4 4.5-3.4 1v3.3l6.4-1.8.9-10.4H16zm0-6.8v3.4h7.8l.3-3.4H16z" fill="#fff"/>
    </svg>
  );
}
