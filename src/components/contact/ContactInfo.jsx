import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function ContactInfo() {
  return (
    <div className="bg-ink text-paper rounded-lg p-6 md:p-8 space-y-6">
      <h3 className="font-display text-xl font-semibold">Office Information</h3>

      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-safety mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-white/60 mb-1">Address</p>
          <p className="text-sm">Floor No.: 1ST FLOOR
Building No./Flat No.: NO 8
Road/Street: 1ST MAIN III CROSS
Nearby Landmark: PF OFFICE ROAD
Locality/Sub Locality: DASANAYAKANAHA PALYA GORAGUNTEPALYA
City/Town/Village: Bengaluru
District: Bengaluru Urban
State: Karnataka
PIN Code: 560022</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Phone className="w-5 h-5 text-safety mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-white/60 mb-1">Phone</p>
          <p className="text-sm">9686000021</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Mail className="w-5 h-5 text-safety mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-white/60 mb-1">Email</p>
          <p className="text-sm">inainfratech@gmail.com</p>
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
