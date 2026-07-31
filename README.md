# INAInfratech.com — Corporate Website

Responsive React.js + Tailwind CSS corporate website for a construction & infrastructure
company, built per the Business Requirement Document (BRD) v1.0.

## Tech Stack
- React.js (functional components + hooks)
- React Router DOM (client-side routing)
- Tailwind CSS (utility-first styling)
- EmailJS (client-side SMTP email dispatch — no backend server)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` and loads the Home page by default at `/`.

## Configuring the Contact & Feedback Forms (SMTP Email)

The Contact Us and Customer Feedback forms use EmailJS as the client-side SMTP relay,
as specified in Section 13 of the BRD. To enable them:

1. Create a free account at https://www.emailjs.com and provision an email service.
2. Copy `.env.example` to `.env` and fill in your Service ID, Template IDs, and Public Key.
3. Update the constants at the top of:
   - `src/components/contact/ContactForm.jsx`
   - `src/components/testimonials/FeedbackForm.jsx`

Until configured, both forms will show an error message on submission since the
placeholder EmailJS credentials are not valid.

## Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder, ready for static hosting (Vercel, Netlify, etc.).

## Project Structure

See Section 18 (Appendix) of the BRD for the full component breakdown. In short:

```
src/
  pages/          Route-level page components (Home, Services, Projects, Blogs, etc.)
  components/
    layout/       Navbar, Footer, Layout
    common/       Button, SectionHeading, Card, StatCounter, Loader
    home/         Home page section components
    services/     Services page components
    projects/     Projects page components
    blogs/        Blogs page components
    testimonials/ Testimonials page components
    contact/      Contact page components
  data/           Static content (services.js, projects.js, blogs.js, testimonials.js)
```
