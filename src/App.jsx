
import { Routes, Route } from 'react-router-dom';

import ParentHome from './pages/ParentHome.jsx';
import Layout from './components/layout/Layout.jsx';

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Routes>
      {/* Parent company homepage */}
      <Route path="/" element={<ParentHome />} />

      {/* Construction website */}
      <Route path="/construction" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<BlogDetail />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Backward compatibility for existing links */}
      <Route path="/services" element={<Layout />}>
        <Route index element={<Services />} />
      </Route>

      <Route path="/projects" element={<Layout />}>
        <Route index element={<Projects />} />
      </Route>

      <Route path="/blogs" element={<Layout />}>
        <Route index element={<Blogs />} />
        <Route path=":id" element={<BlogDetail />} />
      </Route>

      <Route path="/testimonials" element={<Layout />}>
        <Route index element={<Testimonials />} />
      </Route>

      <Route path="/contact" element={<Layout />}>
        <Route index element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
