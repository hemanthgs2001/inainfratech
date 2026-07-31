import { useState, useEffect } from 'react';
import Button from '../common/Button.jsx';
import { ArrowRight } from 'lucide-react';

// Bright, light construction-themed background images. They crossfade one after another
// every few seconds, each with a slow drifting zoom (see .hero-bg-motion in index.css).
const backgroundImages = [
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=80', // bright site, daylight
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80', // crane against blue sky
  'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=1800&q=80', // modern building glass daylight
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80', // workers on site, sunny
  'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1800&q=80'  // steel structure, bright sky
];

const SLIDE_DURATION_MS = 5000;

function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % backgroundImages.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-ink overflow-hidden cut-divider">
      {/* Blueprint grid texture, sits above the images but below the content */}
      <div className="absolute inset-0 blueprint-grid opacity-20 z-10" />

      {/* Image slideshow — each slide crossfades into the next and drifts slowly while active */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`hero-bg-motion absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
              index === activeIndex ? 'opacity-90' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Lighter overlay so the images stay bright/visible while text remains legible */}
      <div className="absolute inset-0 bg-ink/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/20 z-10" />

      <div className="relative z-20 container-page pt-20 pb-28 md:pt-32 md:pb-40">
        <span className="inline-block font-mono text-xs md:text-sm tracking-widest uppercase text-safety mb-5 border border-safety/40 rounded px-3 py-1">
          Construction &amp; Infrastructure Services
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-paper max-w-3xl leading-[1.05]">
          We build the ground
          <br className="hidden sm:block" /> beneath ambition.
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
          INAInfratech delivers residential, commercial, and infrastructure projects across India,
          engineered for scale and built on decades of on-site discipline.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button to="/contact" variant="primary">
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Button>
          <Button to="/projects" variant="outline">
            View Our Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;