import { X, MapPin, Calendar, Briefcase } from 'lucide-react';

function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/80 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} project details`}
      onClick={onClose}
    >
      <div
        className="bg-paper rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          <img src={project.image} alt={project.name} className="w-full h-64 md:h-80 object-cover" />
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 bg-ink/70 text-paper rounded-full p-2 hover:bg-ink focus-ring"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest bg-safety text-ink rounded px-2 py-1">
              {project.category}
            </span>
            <span
              className={`font-mono text-[10px] uppercase tracking-widest rounded px-2 py-1 ${
                project.status === 'Completed' ? 'bg-ink text-paper' : 'bg-steel text-paper'
              }`}
            >
              {project.status}
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-4">{project.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm text-slate">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-safety" /> {project.location}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-safety" /> {project.duration}
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-safety" /> {project.client}
            </div>
          </div>
          <p className="text-slate leading-relaxed mb-6">{project.description}</p>
          <h3 className="font-display text-base font-semibold text-ink mb-3">Scope of Work</h3>
          <ul className="space-y-2">
            {project.scopeOfWork.map((item) => (
              <li key={item} className="text-sm text-ink flex gap-2">
                <span className="text-safety">&bull;</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailModal;
