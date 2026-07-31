function SectionHeading({ eyebrow, title, description, align = 'left', dark = false }) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left'}`}>
      {eyebrow && (
        <span className="inline-block font-mono text-xs tracking-widest uppercase text-safety mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-semibold ${dark ? 'text-paper' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base leading-relaxed ${dark ? 'text-white/70' : 'text-slate'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
