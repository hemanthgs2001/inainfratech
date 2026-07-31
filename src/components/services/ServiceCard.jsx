import { Home as HomeIcon, Building2, Route, Factory, Hammer, Ruler, ClipboardList, Check } from 'lucide-react';

const iconMap = { Home: HomeIcon, Building2, Route, Factory, Hammer, Ruler, ClipboardList };

function ServiceCard({ service, reverse = false }) {
  const Icon = iconMap[service.icon];
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10 border-b border-black/5 last:border-0`}>
      <div className={reverse ? 'md:order-2' : ''}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 md:h-80 object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <div className={reverse ? 'md:order-1' : ''}>
        <Icon className="w-8 h-8 text-safety mb-4" strokeWidth={1.75} />
        <h3 className="font-display text-2xl font-semibold text-ink mb-3">{service.title}</h3>
        <p className="text-slate leading-relaxed mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink">
              <Check className="w-4 h-4 text-safety mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceCard;
