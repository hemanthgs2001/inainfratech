import ContactForm from '../components/contact/ContactForm.jsx';
import ContactInfo from '../components/contact/ContactInfo.jsx';
import MapEmbed from '../components/contact/MapEmbed.jsx';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function Contact() {
  return (
    <>
      {/* Page Banner */}
      <section className="relative bg-ink py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="relative container-page">
          <span className="inline-block font-mono text-xs tracking-widest uppercase text-safety mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-paper">Contact Us</h1>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="flex flex-col gap-6">
            <ContactInfo />
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="p-3 rounded bg-concrete hover:bg-safety transition-colors focus-ring">
                <Facebook className="w-4 h-4 text-ink" />
              </a>
              <a href="#" aria-label="Instagram" className="p-3 rounded bg-concrete hover:bg-safety transition-colors focus-ring">
                <Instagram className="w-4 h-4 text-ink" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-3 rounded bg-concrete hover:bg-safety transition-colors focus-ring">
                <Linkedin className="w-4 h-4 text-ink" />
              </a>
              <a href="#" aria-label="Twitter" className="p-3 rounded bg-concrete hover:bg-safety transition-colors focus-ring">
                <Twitter className="w-4 h-4 text-ink" />
              </a>
            </div>
          </div>
        </div>

        <MapEmbed />
      </section>
    </>
  );
}

export default Contact;
