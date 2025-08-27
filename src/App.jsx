import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <title>Codex Digital | Web Development & Digital Solutions</title>
          <meta name="keywords" content="web development, software,software agency, UI/UX design, e-commerce, coding agency, codex digital, bhavnagar, gujarat, india" />
          <meta name="author" content="Codex Digital" />
          <meta property="og:title" content="Codex Digital | Web Development & Digital Solutions" />
          <meta property="og:description" content="Transforming ideas into digital reality. Stunning web experiences, custom software, and more." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://codexdigital.ltd" />
          <meta property="og:image" content="/public/logo.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Codex Digital | Web Development & Digital Solutions" />
          <meta name="twitter:description" content="Transforming ideas into digital reality. Stunning web experiences, custom software, and more." />
          <meta name="twitter:image" content="/public/logo.jpg" />
        </Helmet>
        <div className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
