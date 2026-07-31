import testimonials from '../data/testimonials.js';
import RatingSummary from '../components/testimonials/RatingSummary.jsx';
import TestimonialCard from '../components/testimonials/TestimonialCard.jsx';
import FeedbackForm from '../components/testimonials/FeedbackForm.jsx';

function Testimonials() {
  return (
    <>
      {/* Page Banner */}
      <section className="relative bg-ink py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="relative container-page">
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-safety mb-4">
            Client Voices
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-paper">Customer Feedback</h1>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <RatingSummary testimonials={testimonials} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <FeedbackForm />
        </div>
      </section>
    </>
  );
}

export default Testimonials;
