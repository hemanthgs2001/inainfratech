const categories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Industrial', 'Renovation'];

function ProjectFilterTabs({ activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors focus-ring ${
            activeCategory === category
              ? 'bg-safety border-safety text-ink'
              : 'bg-transparent border-black/10 text-slate hover:border-safety hover:text-safety-dark'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilterTabs;
