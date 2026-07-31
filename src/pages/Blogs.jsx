import { useState, useMemo } from 'react';
import blogs from '../data/blogs.js';
import BlogSearchFilter from '../components/blogs/BlogSearchFilter.jsx';
import BlogCard from '../components/blogs/BlogCard.jsx';

function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <>
      {/* Page Banner */}
      <section className="relative bg-ink py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="relative container-page">
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-safety mb-4">
            Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-paper">Blogs & Insights</h1>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <BlogSearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {filteredBlogs.length === 0 ? (
          <p className="text-center text-slate-light py-16">No articles match your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Blogs;
