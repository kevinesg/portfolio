import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import CssBaseline from "@mui/material/CssBaseline";
import "./style.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Footer from "./components/Footer";
import { CursorFollower } from "./components/CursorFollower";

const MainRouter: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const togglePika = () => {
    setIsRunning(!isRunning);
  };
  return (
    <>
      <div className="main-div">
        <CssBaseline />
        <Router>
          <ScrollToTop />
          {isRunning && <CursorFollower />}
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            isRunning={isRunning}
            togglePika={togglePika}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default MainRouter;
