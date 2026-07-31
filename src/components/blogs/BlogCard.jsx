import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <Link to={`/blogs/${blog.id}`} className="group block bg-white rounded-lg border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="p-5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-safety-dark">{blog.category}</span>
        <h3 className="font-display text-lg font-semibold text-ink mt-2 mb-2 leading-snug">{blog.title}</h3>
        <p className="text-sm text-slate leading-relaxed line-clamp-3">{blog.excerpt}</p>
        <div className="flex items-center justify-between mt-4 text-xs text-slate-light">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
