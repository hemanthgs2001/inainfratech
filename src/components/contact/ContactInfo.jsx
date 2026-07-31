import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function ContactInfo() {
  return (
    <div className="bg-ink text-paper rounded-lg p-6 md:p-8 space-y-6">
      <h3 className="font-display text-xl font-semibold">Office Information</h3>

      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-safety mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-white/60 mb-1">Address</p>
          <p className="text-sm">4th Floor, Marathon Business Hub, Baner Road, Pune, Maharashtra 411045</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Phone className="w-5 h-5 text-safety mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-white/60 mb-1">Phone</p>
          <p className="text-sm">+91 98765 43210</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Mail className="w-5 h-5 text-safety mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-white/60 mb-1">Email</p>
          <p className="text-sm">contact@inainfratech.com</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Clock className="w-5 h-5 text-safety mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-white/60 mb-1">Business Hours</p>
          <p className="text-sm">Monday – Saturday, 9:00 AM – 6:30 PM IST</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
