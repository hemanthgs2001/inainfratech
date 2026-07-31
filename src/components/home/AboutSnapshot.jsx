import Button from '../common/Button.jsx';

function AboutSnapshot() {
  return (
    <section className="container-page py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <span className="inline-block font-mono text-xs tracking-widest uppercase text-safety mb-3">
          About INAInfratech
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-ink mb-4">
          Two decades of building with precision
        </h2>
        <p className="text-slate leading-relaxed mb-6">
          INAInfratech is a construction and infrastructure company delivering residential,
          commercial, and civil engineering projects across India. We combine field-tested
          execution with rigorous safety and quality standards on every site we run.
        </p>
        <Button to="/services" variant="dark">
          Learn More
        </Button>
      </div>
      <div className="order-1 md:order-2">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
          alt="INAInfratech engineers reviewing site plans on a construction site"
          className="w-full h-72 md:h-96 object-cover rounded-lg"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default AboutSnapshot;
