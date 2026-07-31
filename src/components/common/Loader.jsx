function Loader({ label = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3" role="status" aria-live="polite">
      <div className="w-10 h-10 border-4 border-steel/20 border-t-safety rounded-full animate-spin" />
      <span className="text-sm text-slate-light">{label}</span>
    </div>
  );
}

export default Loader;
