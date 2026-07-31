import { Search } from 'lucide-react';

const categories = ['All', 'Construction Tips', 'Industry News', 'Safety', 'Technology'];

function BlogSearchFilter({ searchTerm, onSearchChange, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-10">
      <div className="relative flex-1">
        <Search className="w-4 h-4 text-slate-light absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search articles..."
          aria-label="Search blog articles"
          className="w-full pl-9 pr-4 py-2.5 rounded border border-black/10 text-sm focus-ring bg-white"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-3 py-2 rounded-full text-xs font-medium border transition-colors focus-ring ${
              activeCategory === category
                ? 'bg-safety border-safety text-ink'
                : 'bg-transparent border-black/10 text-slate hover:border-safety hover:text-safety-dark'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BlogSearchFilter;
