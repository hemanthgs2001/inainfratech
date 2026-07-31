import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogs.js';
import RelatedBlogs from '../components/blogs/RelatedBlogs.jsx';
import { ArrowLeft } from 'lucide-react';

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    return (
      <section className="container-page py-24 text-center">
        <h1 className="font-display text-2xl font-semibold text-ink mb-4">Article not found</h1>
        <p className="text-slate mb-6">The article you're looking for doesn't exist or may have been moved.</p>
        <Link to="/blogs" className="text-steel hover:text-safety-dark underline underline-offset-4">
          Back to Blogs
        </Link>
      </section>
    );
  }

  const relatedBlogs = blogs.filter((item) => item.id !== blog.id && item.category === blog.category).slice(0, 3);

  return (
    <>
      <section className="relative bg-ink py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${blog.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
        <div className="relative container-page">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-safety mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-safety mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-paper max-w-3xl leading-snug">{blog.title}</h1>
          <p className="text-sm text-white/60 mt-4">
            By {blog.author} &middot; {blog.date}
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 max-w-3xl">
        <img src={blog.image} alt={blog.title} className="w-full h-64 md:h-96 object-cover rounded-lg mb-10" />
        <div className="space-y-5 text-slate leading-relaxed">
          {blog.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <RelatedBlogs blogs={relatedBlogs} />
      </section>
    </>
  );
}

export default BlogDetail;
