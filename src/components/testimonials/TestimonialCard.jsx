import { Star } from 'lucide-react';

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-lg border border-black/5 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-medium text-ink text-sm">{testimonial.name}</p>
          <p className="text-xs text-slate-light">{testimonial.company}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${index < testimonial.rating ? 'text-safety fill-safety' : 'text-black/10'}`}
          />
        ))}
      </div>
      <p className="text-sm text-slate leading-relaxed">"{testimonial.feedback}"</p>
    </div>
  );
}

export default TestimonialCard;
