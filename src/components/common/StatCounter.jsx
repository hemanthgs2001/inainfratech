function StatCounter({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 px-4 py-6">
      <Icon className="w-8 h-8 text-safety mb-1" strokeWidth={1.75} />
      <span className="font-mono text-3xl md:text-4xl font-medium text-ink">{value}</span>
      <span className="text-xs md:text-sm uppercase tracking-wider text-slate-light">{label}</span>
    </div>
  );
}

export default StatCounter;
