import { Route, Routes } from "react-router-dom";

import AboutPage from "../pages/AboutPage/AboutPages";
import ContactPage from "../pages/ContactPage/ContactPage";
import HomePage from "../pages/HomePage/HomePage";
import Projects from "../pages/Projects/Projects";
import ServicePage from "../pages/ServicePage/ServicePage";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/services" element={<ServicePage />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default AppRoute;
