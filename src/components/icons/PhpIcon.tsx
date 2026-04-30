export function PhpIcon({ size = 28 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="16" rx="14" ry="9" fill="#8892BF"/>
      <ellipse cx="16" cy="16" rx="14" ry="9" fill="url(#phpGrad)"/>
      <defs>
        <radialGradient id="phpGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#AEB2D5"/>
          <stop offset="100%" stopColor="#8892BF"/>
        </radialGradient>
      </defs>
      <path d="M9.5 12.5h2.8c1.5 0 2.5.7 2.5 2.1 0 1.8-1.2 2.8-3 2.8H10.6l-.4 2.1H8.5l1-7zm1.3 3.6h1c.8 0 1.3-.4 1.3-1.1 0-.5-.3-.8-1-.8h-1l-.3 1.9zM15.5 12.5h1.7l-.2 1.3h1.3c1.3 0 2 .6 1.7 2l-.5 2.7h-1.7l.5-2.5c.1-.6-.1-.9-.6-.9h-1.1l-.6 3.4h-1.7l1.2-6zM20.5 12.5h2.8c1.5 0 2.5.7 2.5 2.1 0 1.8-1.2 2.8-3 2.8H21.6l-.4 2.1h-1.7l1-7zm1.3 3.6h1c.8 0 1.3-.4 1.3-1.1 0-.5-.3-.8-1-.8h-1l-.3 1.9z" fill="#fff"/>
    </svg>
  );
}
