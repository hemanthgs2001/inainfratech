import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import testimonials from '../../data/testimonials.js';

function TestimonialSnippet() {
  const snippets = testimonials.slice(0, 2);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % snippets.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [snippets.length]);

  const active = snippets[activeIndex];

  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <Quote className="w-10 h-10 text-safety mx-auto mb-6" strokeWidth={1.5} />
        <p className="text-xl md:text-2xl font-display text-ink leading-snug mb-6">
          "{active.feedback}"
        </p>
        <p className="font-medium text-ink">{active.name}</p>
        <p className="text-sm text-slate-light mb-6">{active.company}</p>

        <div className="flex items-center justify-center gap-2 mb-6">
          {snippets.map((snippet, index) => (
            <button
              key={snippet.id}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial from ${snippet.name}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors focus-ring ${
                index === activeIndex ? 'bg-safety' : 'bg-slate/20'
              }`}
            />
          ))}
        </div>

        <Link to="/testimonials" className="text-sm font-medium text-steel hover:text-safety underline underline-offset-4">
          Read all customer feedback
        </Link>
      </div>
    </section>
  );
}

export default TestimonialSnippet;
