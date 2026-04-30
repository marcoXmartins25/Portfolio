export function FigmaIcon({ size = 28 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M10 28c2.2 0 4-1.8 4-4v-4h-4a4 4 0 000 8z" fill="#0ACF83"/>
      <path d="M6 16a4 4 0 014-4h4v8h-4a4 4 0 01-4-4z" fill="#A259FF"/>
      <path d="M6 8a4 4 0 014-4h4v8h-4a4 4 0 01-4-4z" fill="#F24E1E"/>
      <path d="M14 4h4a4 4 0 010 8h-4V4z" fill="#FF7262"/>
      <path d="M22 16a4 4 0 11-8 0 4 4 0 018 0z" fill="#1ABCFE"/>
    </svg>
  );
}
