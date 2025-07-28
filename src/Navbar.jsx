import React from "react";
import logo from "../src/assets/barrco-ventures-logo.png"; // Adjust the path as necessary
const Navbar = () => {
  // Smooth scroll handler
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-dark text-white py-2" style={{ fontSize: '14px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <span className="me-4">
                <i className="fas fa-map-marker-alt me-2"></i>
                New Delhi, India
              </span>
              <span>
                <i className="fas fa-envelope me-2"></i>
                info@barrcoventures.com
              </span>
            </div>
            <div className="col-md-4 text-md-end">
              <span>
                <i className="fas fa-phone me-2"></i>
                +91 96434 58868
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand me-5" href="#hero" onClick={e => handleNavClick(e, 'hero')}>
            {/* <div style={{ 
              backgroundColor: '#1e3a8a', 
              color: 'white', 
              padding: '8px 16px', 
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '18px',
              letterSpacing: '1px'
            }}>
              BARRCO
              <div style={{ 
                fontSize: '12px', 
                fontWeight: 'normal',
                marginTop: '-2px'
              }}>
                VENTURES
              </div>
            </div> */}
            <img width={120} src={logo} alt="" />
          </a>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark px-3 py-2" href="#hero" onClick={e => handleNavClick(e, 'hero')} style={{ fontSize: '16px' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark px-3 py-2" href="#about" onClick={e => handleNavClick(e, 'about')} style={{ fontSize: '16px' }}>About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark px-3 py-2" href="#itdigital" onClick={e => handleNavClick(e, 'itdigital')} style={{ fontSize: '16px' }}>IT & Digital</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark px-3 py-2" href="#solar" onClick={e => handleNavClick(e, 'solar')} style={{ fontSize: '16px' }}>Solar Energy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark px-3 py-2" href="#stationery" onClick={e => handleNavClick(e, 'stationery')} style={{ fontSize: '16px' }}>Stationery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark px-3 py-2" href="#contact" onClick={e => handleNavClick(e, 'contact')} style={{ fontSize: '16px' }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 