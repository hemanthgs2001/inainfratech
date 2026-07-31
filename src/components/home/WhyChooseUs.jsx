import { ShieldCheck, Clock, Users, Wrench, Award } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';

const features = [
  {
    icon: Award,
    title: 'Quality',
    description: 'Every phase is checked against engineering and material standards, not just deadlines.'
  },
  {
    icon: ShieldCheck,
    title: 'Safety',
    description: 'Site safety protocols are enforced daily, protecting both our crews and the surrounding public.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Schedules are built with realistic contingency so commitments to clients are kept.'
  },
  {
    icon: Users,
    title: 'Skilled Workforce',
    description: 'Trained supervisors and tradespeople bring consistency across every site we operate.'
  },
  {
    icon: Wrench,
    title: 'Modern Equipment',
    description: 'GPS-guided machinery and modern tooling keep execution accurate and efficient.'
  }
];

function WhyChooseUs() {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built on discipline, not shortcuts"
          dark
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="text-center px-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-safety" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-base font-semibold text-paper mb-2">{feature.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
