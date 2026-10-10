
import { Routes, Route, Navigate } from 'react-router-dom';

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
        {/* Construction homepage */}
        <Route index element={<Home />} />

        {/* Construction pages */}
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<BlogDetail />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Redirect older links to the construction website */}
      <Route
        path="/services"
        element={<Navigate to="/construction/services" replace />}
      />

      <Route
        path="/projects"
        element={<Navigate to="/construction/projects" replace />}
      />

      <Route
        path="/blogs"
        element={<Navigate to="/construction/blogs" replace />}
      />

      <Route
        path="/blogs/:id"
        element={<Navigate to="/construction/blogs/:id" replace />}
      />

      <Route
        path="/testimonials"
        element={<Navigate to="/construction/testimonials" replace />}
      />

      <Route
        path="/contact"
        element={<Navigate to="/construction/contact" replace />}
      />

      {/* Unknown routes return to the parent homepage */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
