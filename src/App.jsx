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
import HomeEnergy from "./pages/solar-energy/HomeEnergy";
import BusinessEnergy from "./pages/solar-energy/BusinessEnergy";
import PowerPlant from "./pages/solar-energy/PowerPlant";
import IndustrialSolutions from "./pages/solar-energy/IndustrialSolutions";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="app-root" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <ScrollToTop />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/it-digital" element={<ITDigital />} />
          <Route path="/solar-energy" element={<SolarEnergy />} />
          <Route path="/solar-energy/home-energy" element={<HomeEnergy />} />
          <Route path="/solar-energy/business" element={<BusinessEnergy />} />
          <Route path="/solar-energy/power-plant" element={<PowerPlant />} />
          <Route path="/solar-energy/industrial" element={<IndustrialSolutions />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
