export function SectionHeading({ index, title }: { index: number; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-center font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-3">
        {String(index).padStart(2, "0")}
      </p>
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--accent)]/30" />
        <h2 className="text-3xl md:text-4xl font-black">
          <span className="gradient-text">{title}</span>
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--accent)]/30" />
      </div>
    </div>
  );
}
