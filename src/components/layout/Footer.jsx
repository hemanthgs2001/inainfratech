import { Link } from 'react-router-dom';
import { HardHat, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import services from '../../data/services.js';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-page py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <HardHat className="w-6 h-6 text-safety" />
            <span className="font-display text-lg font-semibold">
              INA<span className="text-safety">Infratech</span>
            </span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Building residential, commercial, and infrastructure projects with a foundation of
            engineering discipline and site safety.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="p-2 rounded bg-white/5 hover:bg-safety transition-colors focus-ring">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded bg-white/5 hover:bg-safety transition-colors focus-ring">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded bg-white/5 hover:bg-safety transition-colors focus-ring">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded bg-white/5 hover:bg-safety transition-colors focus-ring">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link to="/" className="hover:text-safety transition-colors">Home</Link></li>
            <li><Link to="/projects" className="hover:text-safety transition-colors">Projects</Link></li>
            <li><Link to="/blogs" className="hover:text-safety transition-colors">Blogs</Link></li>
            <li><Link to="/testimonials" className="hover:text-safety transition-colors">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-safety transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Service links */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link to="/services" className="hover:text-safety transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact details */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-safety flex-shrink-0" />
              <span>Floor No.: 1ST FLOOR
Building No./Flat No.: NO 8
Road/Street: 1ST MAIN III CROSS
Nearby Landmark: PF OFFICE ROAD
Locality/Sub Locality: DASANAYAKANAHA PALYA GORAGUNTEPALYA
City/Town/Village: Bengaluru
District: Bengaluru Urban
State: Karnataka
PIN Code: 560022</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-safety flex-shrink-0" />
              <span>9686000021</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-safety flex-shrink-0" />
              <span>inainfratech@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-4 text-center text-xs text-white/40">
          &copy; {year} INAInfratech.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
