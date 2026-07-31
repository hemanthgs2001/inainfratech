import { useState, useMemo } from 'react';
import projects from '../data/projects.js';
import ProjectFilterTabs from '../components/projects/ProjectFilterTabs.jsx';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import ProjectDetailModal from '../components/projects/ProjectDetailModal.jsx';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* Page Banner */}
      <section className="relative bg-ink py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=1600&q=80')" }}
        />
        <div className="relative container-page">
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-safety mb-4">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-paper">Our Projects</h1>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <ProjectFilterTabs activeCategory={activeCategory} onChange={setActiveCategory} />

        {filteredProjects.length === 0 ? (
          <p className="text-center text-slate-light py-16">No projects found in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
        )}
      </section>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

export default Projects;
