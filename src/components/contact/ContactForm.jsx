import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

// SMTP-based email dispatch via EmailJS (or equivalent SMTP relay service).
// Replace these with your provisioned EmailJS service/template/public key.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_CONTACT_TEMPLATE_ID = 'YOUR_CONTACT_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const initialState = { fullName: '', email: '', phone: '', subject: '', message: '' };

function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!formData.message.trim()) nextErrors.message = 'Message is required.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData(initialState);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-lg border border-black/5 shadow-sm p-6 md:p-8">
      <h3 className="font-display text-xl font-semibold text-ink mb-1">Send Us a Message</h3>
      <p className="text-sm text-slate-light mb-6">
        Fill in the form below and our team will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-fullname" className="block text-sm font-medium text-ink mb-1.5">
              Full Name *
            </label>
            <input
              id="contact-fullname"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded border border-black/10 text-sm focus-ring"
              aria-invalid={Boolean(errors.fullName)}
            />
            {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-ink mb-1.5">
              Email Address *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded border border-black/10 text-sm focus-ring"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-ink mb-1.5">
              Phone Number *
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded border border-black/10 text-sm focus-ring"
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-ink mb-1.5">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded border border-black/10 text-sm focus-ring"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-ink mb-1.5">
            Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2.5 rounded border border-black/10 text-sm focus-ring resize-none"
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 bg-safety text-ink font-display font-medium uppercase text-sm tracking-wide px-6 py-3 rounded hover:bg-safety-dark transition-colors focus-ring disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-green-700" role="status">
            Your message has been sent successfully. We'll be in touch soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600" role="alert">
            Something went wrong sending your message. Please check the form and try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
