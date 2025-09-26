import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import About from "@/pages/About";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== "light";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = (event: React.MouseEvent) => {
    const isDark = !darkMode;

    if (!document.startViewTransition) {
      setDarkMode(isDark);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setDarkMode(isDark);
    });

    transition.ready.then(() => {
      const clipPath = `circle(${endRadius}px at ${x}px ${y}px)`;
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, clipPath],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[800px] min-w-[320px] border-l border-r border-border min-h-screen flex flex-col p-4">
        <Router>
          <ScrollToTop />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="flex-grow pt-24">
            <AnimatedRoutes />
          </main>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
