import { Home as HomeIcon, Building2, Route, Factory, Hammer, Ruler, ClipboardList } from 'lucide-react';
import services from '../../data/services.js';
import SectionHeading from '../common/SectionHeading.jsx';
import Card from '../common/Card.jsx';
import Button from '../common/Button.jsx';

const iconMap = {
  Home: HomeIcon,
  Building2,
  Route,
  Factory,
  Hammer,
  Ruler,
  ClipboardList
};

function ServicesPreview() {
  return (
    <section className="bg-concrete py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built for scale"
          description="From the first foundation pour to final handover, our teams cover the full construction lifecycle."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.id} className="p-6">
                <Icon className="w-8 h-8 text-safety mb-4" strokeWidth={1.75} />
                <h3 className="font-display text-lg font-semibold text-ink mb-2">{service.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{service.shortDescription}</p>
              </Card>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button to="/services" variant="dark">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
