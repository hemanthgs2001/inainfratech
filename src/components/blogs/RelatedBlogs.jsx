import { Link } from 'react-router-dom';

function RelatedBlogs({ blogs }) {
  if (!blogs.length) return null;

  return (
    <div className="mt-14 pt-10 border-t border-black/10">
      <h3 className="font-display text-xl font-semibold text-ink mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`} className="group block">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-32 object-cover rounded mb-3 group-hover:opacity-90 transition-opacity"
              loading="lazy"
            />
            <h4 className="font-display text-sm font-semibold text-ink leading-snug group-hover:text-safety-dark">
              {blog.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedBlogs;
