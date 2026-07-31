import { MapPin } from 'lucide-react';

function ProjectCard({ project, onSelect }) {
  return (
    <button
      onClick={() => onSelect(project)}
      className="group relative rounded-lg overflow-hidden h-72 text-left w-full focus-ring"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink bg-safety rounded px-2 py-0.5">
          {project.category}
        </span>
        <span
          className={`font-mono text-[10px] uppercase tracking-widest rounded px-2 py-0.5 ${
            project.status === 'Completed' ? 'bg-white text-ink' : 'bg-steel text-paper'
          }`}
        >
          {project.status}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display text-base font-semibold text-paper leading-tight">{project.name}</h3>
        <p className="flex items-center gap-1 text-xs text-white/70 mt-1">
          <MapPin className="w-3 h-3" /> {project.location}
        </p>
      </div>
    </button>
  );
}

export default ProjectCard;
