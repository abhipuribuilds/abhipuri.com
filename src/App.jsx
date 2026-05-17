import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Journey from "./pages/Journey.jsx";
import Projects from "./pages/Projects.jsx";
import Tools from "./pages/Tools.jsx";

export default function App() {
  const location = useLocation();

  return (
    <AppLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </AppLayout>
  );
}
