import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import ITDigital from "./ITDigital";
import SolarEnergy from "./SolarEnergy";
import Stationery from "./Stationery";
import Contact from "./Contact";

function App() {
  return (
    <div className="app-root" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/it-digital" element={<ITDigital />} />
          <Route path="/solar-energy" element={<SolarEnergy />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
