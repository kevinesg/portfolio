import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import About from "@/pages/About";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
