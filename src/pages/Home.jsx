import { Calendar, CheckCircle2, Users, HardHat } from 'lucide-react';
import HeroBanner from '../components/home/HeroBanner.jsx';
import AboutSnapshot from '../components/home/AboutSnapshot.jsx';
import StatCounter from '../components/common/StatCounter.jsx';
import ServicesPreview from '../components/home/ServicesPreview.jsx';
import FeaturedProjects from '../components/home/FeaturedProjects.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import TestimonialSnippet from '../components/home/TestimonialSnippet.jsx';
import LatestBlogs from '../components/home/LatestBlogs.jsx';
import CTASection from '../components/home/CTASection.jsx';

const stats = [
  { icon: Calendar, value: '20+', label: 'Years of Experience' },
  { icon: CheckCircle2, value: '150+', label: 'Projects Completed' },
  { icon: Users, value: '95+', label: 'Happy Clients' },
  { icon: HardHat, value: '12', label: 'Ongoing Projects' }
];

function Home() {
  return (
    <>
      <HeroBanner />

      {/* Key Stats Strip */}
      <section className="bg-paper border-b border-black/5">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 divide-x divide-black/5">
          {stats.map((stat) => (
            <StatCounter key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      <AboutSnapshot />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <TestimonialSnippet />
      <LatestBlogs />
      <CTASection />
    </>
  );
}

export default Home;
