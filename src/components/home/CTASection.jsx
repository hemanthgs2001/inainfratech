import Button from '../common/Button.jsx';
import { ArrowRight } from 'lucide-react';

function CTASection() {
  return (
    <section className="relative bg-steel py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="relative container-page flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-paper mb-2">
            Have a project in mind?
          </h2>
          <p className="text-white/70 max-w-lg">
            Tell us about your site, timeline, and scope — our team will get back to you with a plan.
          </p>
        </div>
        <Button to="/contact" variant="primary">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}

export default CTASection;
