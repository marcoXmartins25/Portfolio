export function MySqlIcon({ size = 28 }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M2 20.5c2.5 0 4.5-.5 6-1.5v-4c-1.5 1-3.5 1.5-6 1.5V20.5z" fill="#00758F"/>
      <path d="M2 14.5c2.5 0 4.5-.5 6-1.5V9c-1.5 1-3.5 1.5-6 1.5V14.5z" fill="#00758F"/>
      <path d="M8 9v4c1.5-1 3.5-1.5 6-1.5V8c-2.5 0-4.5.3-6 1z" fill="#00758F"/>
      <path d="M14 11.5v4c1.5 0 3-.2 4.5-.7V11c-1.5.3-3 .5-4.5.5z" fill="#F29111"/>
      <path d="M18.5 11v3.8c1.5-.5 2.8-1.3 3.5-2.3V9c-.7 1-2 1.7-3.5 2z" fill="#F29111"/>
      <path d="M22 9v3.5c.5-.7.8-1.5.8-2.3 0-.4-.1-.8-.3-1.2H22z" fill="#F29111"/>
      <text x="2" y="28" fontSize="7" fontWeight="bold" fill="#00758F">MySQL</text>
    </svg>
  );
}
