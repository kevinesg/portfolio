import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import About from "@/pages/About";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

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

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[800px] min-w-[320px] border-l border-r border-border min-h-screen flex flex-col p-4">
        <Router>
          <ScrollToTop />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="flex-grow pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
