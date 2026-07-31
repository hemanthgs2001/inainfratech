import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, HardHat } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact Us' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors hover:text-safety ${
      isActive ? 'text-safety' : 'text-paper'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-white/10">
      <nav className="container-page flex items-center justify-between h-16 md:h-20">
        <NavLink to="/" className="flex items-center gap-2 focus-ring" onClick={() => setIsOpen(false)}>
          <HardHat className="w-7 h-7 text-safety" strokeWidth={2} />
          <span className="font-display text-xl md:text-2xl font-semibold text-paper tracking-wide">
            INA<span className="text-safety">Infratech</span>
          </span>
        </NavLink>

        {/* Desktop nav — appears at md breakpoint and above */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger toggle — visible below md breakpoint */}
        <button
          className="md:hidden text-paper focus-ring p-2"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile off-canvas menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-ink px-4 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-3 px-2 rounded text-base font-medium border-b border-white/5 ${
                    isActive ? 'text-safety' : 'text-paper'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
