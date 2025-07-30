import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/optimized/barrco-ventures-logo.webp";

const Navbar = () => {
  const [isSolarDropdownOpen, setIsSolarDropdownOpen] = useState(false);

  const handleSolarMouseEnter = () => {
    setIsSolarDropdownOpen(true);
  };

  const handleSolarMouseLeave = () => {
    setIsSolarDropdownOpen(false);
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
          <Link className="navbar-brand me-5" to="/">
            <img width={120} src={logo} alt="" />
          </Link>

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
                <Link className="nav-link fw-semibold text-dark px-3 py-2" to="/" style={{ fontSize: '16px' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark px-3 py-2" to="/about" style={{ fontSize: '16px' }}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark px-3 py-2" to="/it-digital" style={{ fontSize: '16px' }}>IT & Digital</Link>
              </li>
              <li 
                className="nav-item dropdown position-relative"
                onMouseEnter={handleSolarMouseEnter}
                onMouseLeave={handleSolarMouseLeave}
              >
                <Link 
                  className="nav-link fw-semibold text-dark px-3 py-2 d-flex align-items-center" 
                  to="/solar-energy" 
                  style={{ fontSize: '16px' }}
                >
                  Solar Energy
                  <i className="fas fa-chevron-down ms-1" style={{ fontSize: '12px' }}></i>
                </Link>
                
                {/* Dropdown Menu */}
                {isSolarDropdownOpen && (
                  <div 
                    className="dropdown-menu show position-absolute"
                    style={{
                      top: '100%',
                      left: '0',
                      minWidth: '220px',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                      padding: '8px 0',
                      zIndex: 1000,
                      backgroundColor: 'white'
                    }}
                  >
                    <Link 
                      className="dropdown-item py-2 px-3 fw-medium text-dark" 
                      to="/solar-energy/home-energy"
                      style={{ 
                        fontSize: '15px',
                        transition: 'all 0.2s ease',
                        borderBottom: '1px solid #f8f9fa'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <i className="fas fa-home me-2 text-primary"></i>
                      Home Energy
                    </Link>
                    <Link 
                      className="dropdown-item py-2 px-3 fw-medium text-dark" 
                      to="/solar-energy/business"
                      style={{ 
                        fontSize: '15px',
                        transition: 'all 0.2s ease',
                        borderBottom: '1px solid #f8f9fa'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <i className="fas fa-building me-2 text-success"></i>
                      Energy for Businesses
                    </Link>
                    <Link 
                      className="dropdown-item py-2 px-3 fw-medium text-dark" 
                      to="/solar-energy/power-plant"
                      style={{ 
                        fontSize: '15px',
                        transition: 'all 0.2s ease',
                        borderBottom: '1px solid #f8f9fa'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <i className="fas fa-bolt me-2 text-warning"></i>
                      Solar Power Plant
                    </Link>
                    <Link 
                      className="dropdown-item py-2 px-3 fw-medium text-dark" 
                      to="/solar-energy/industrial"
                      style={{ 
                        fontSize: '15px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                      <i className="fas fa-industry me-2 text-purple"></i>
                      Industrial Solutions
                    </Link>
                  </div>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark px-3 py-2" to="/stationery" style={{ fontSize: '16px' }}>Stationery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark px-3 py-2" to="/contact" style={{ fontSize: '16px' }}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 