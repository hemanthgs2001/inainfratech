import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Star, Send } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_FEEDBACK_TEMPLATE_ID = 'YOUR_FEEDBACK_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const initialState = { name: '', company: '', rating: 5, message: '' };

function FeedbackForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const validate = () => formData.name.trim() && formData.message.trim();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_FEEDBACK_TEMPLATE_ID,
        {
          from_name: formData.name,
          company: formData.company,
          rating: formData.rating,
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
      <h3 className="font-display text-xl font-semibold text-ink mb-1">Share Your Feedback</h3>
      <p className="text-sm text-slate-light mb-6">
        Your feedback is sent directly to our team via email — no data is stored.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="feedback-name" className="block text-sm font-medium text-ink mb-1.5">
              Name *
            </label>
            <input
              id="feedback-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded border border-black/10 text-sm focus-ring"
            />
          </div>
          <div>
            <label htmlFor="feedback-company" className="block text-sm font-medium text-ink mb-1.5">
              Company
            </label>
            <input
              id="feedback-company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded border border-black/10 text-sm focus-ring"
            />
          </div>
        </div>

        <div>
          <span className="block text-sm font-medium text-ink mb-1.5">Rating</span>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
              const value = index + 1;
              return (
                <button
                  type="button"
                  key={value}
                  onClick={() => handleRating(value)}
                  aria-label={`Rate ${value} out of 5`}
                  className="focus-ring rounded"
                >
                  <Star
                    className={`w-6 h-6 ${value <= formData.rating ? 'text-safety fill-safety' : 'text-black/10'}`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="feedback-message" className="block text-sm font-medium text-ink mb-1.5">
            Message *
          </label>
          <textarea
            id="feedback-message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2.5 rounded border border-black/10 text-sm focus-ring resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 bg-safety text-ink font-display font-medium uppercase text-sm tracking-wide px-6 py-3 rounded hover:bg-safety-dark transition-colors focus-ring disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          {status === 'sending' ? 'Sending...' : 'Submit Feedback'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-green-700" role="status">
            Thank you — your feedback has been sent successfully.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600" role="alert">
            Please fill in the required fields, or try again if the send failed.
          </p>
        )}
      </form>
    </div>
  );
}

export default FeedbackForm;
