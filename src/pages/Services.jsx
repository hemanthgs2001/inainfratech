import services from '../data/services.js';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ServiceCard from '../components/services/ServiceCard.jsx';
import ProcessTimeline from '../components/services/ProcessTimeline.jsx';
import CTASection from '../components/home/CTASection.jsx';

function Services() {
  return (
    <>
      {/* Page Banner */}
      <section className="relative bg-ink py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80')" }}
        />
        <div className="relative container-page">
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-safety mb-4">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-paper">Our Services</h1>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <SectionHeading
          title="Full-spectrum construction expertise"
          description="From residential communities to heavy infrastructure, each service is delivered with dedicated planning, engineering, and site management."
        />
        <div>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <ProcessTimeline />
      <CTASection />
    </>
  );
}

export default Services;
