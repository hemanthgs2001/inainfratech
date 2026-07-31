import { ClipboardList, PenTool, HardHat, KeyRound } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';

const steps = [
  { icon: ClipboardList, title: 'Planning', description: 'Feasibility, estimation, and scheduling before ground is broken.' },
  { icon: PenTool, title: 'Design', description: 'Structural and architectural drawings validated for compliance.' },
  { icon: HardHat, title: 'Execution', description: 'On-site construction with continuous quality and safety checks.' },
  { icon: KeyRound, title: 'Handover', description: 'Final inspection, documentation, and client handover.' }
];

function ProcessTimeline() {
  return (
    <section className="bg-concrete py-16 md:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="How We Work" title="Our process, start to finish" align="center" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center px-4">
              <span className="font-mono text-xs text-safety-dark tracking-widest">
                0{index + 1}
              </span>
              <div className="w-16 h-16 mx-auto rounded-full bg-ink flex items-center justify-center my-4">
                <step.icon className="w-7 h-7 text-safety" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-base font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-sm text-slate leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessTimeline;
