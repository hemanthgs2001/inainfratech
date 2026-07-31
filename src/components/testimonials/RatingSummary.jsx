import { Star } from 'lucide-react';

function RatingSummary({ testimonials }) {
  const total = testimonials.length;
  const average = (testimonials.reduce((sum, item) => sum + item.rating, 0) / total).toFixed(1);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white rounded-lg border border-black/5 p-6 mb-10">
      <div className="text-center">
        <span className="font-mono text-4xl font-semibold text-ink">{average}</span>
        <div className="flex gap-0.5 justify-center mt-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${index < Math.round(average) ? 'text-safety fill-safety' : 'text-black/10'}`}
            />
          ))}
        </div>
      </div>
      <div className="text-sm text-slate">
        Based on <span className="font-medium text-ink">{total}</span> client reviews across residential,
        commercial, and infrastructure projects.
      </div>
    </div>
  );
}

export default RatingSummary;
