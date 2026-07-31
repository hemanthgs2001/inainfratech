import projects from '../../data/projects.js';
import SectionHeading from '../common/SectionHeading.jsx';
import Button from '../common/Button.jsx';
import { MapPin } from 'lucide-react';

function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Our Work"
        title="Featured projects"
        description="A snapshot of recent residential, commercial, and infrastructure work delivered across the country."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((project) => (
          <div key={project.id} className="group relative rounded-lg overflow-hidden h-72">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-safety bg-ink/60 rounded px-2 py-0.5 mb-2">
                {project.status}
              </span>
              <h3 className="font-display text-base font-semibold text-paper leading-tight">{project.name}</h3>
              <p className="flex items-center gap-1 text-xs text-white/70 mt-1">
                <MapPin className="w-3 h-3" /> {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/projects" variant="primary">
          View All Projects
        </Button>
      </div>
    </section>
  );
}

export default FeaturedProjects;
