import { Link } from 'react-router-dom';
import blogs from '../../data/blogs.js';
import SectionHeading from '../common/SectionHeading.jsx';
import Card from '../common/Card.jsx';

function LatestBlogs() {
  const latest = blogs.slice(0, 3);

  return (
    <section className="bg-concrete py-16 md:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Insights" title="Latest from our blog" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((blog) => (
            <Link key={blog.id} to={`/blogs/${blog.id}`}>
              <Card className="h-full">
                <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover" loading="lazy" />
                <div className="p-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-safety-dark">
                    {blog.category}
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink mt-2 mb-2 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed line-clamp-2">{blog.excerpt}</p>
                  <p className="text-xs text-slate-light mt-3">{blog.date}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestBlogs;
