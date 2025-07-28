import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/barrco-ventures-logo.png"; // Adjust the path as necessary
const Navbar = () => {
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
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark px-3 py-2" to="/solar-energy" style={{ fontSize: '16px' }}>Solar Energy</Link>
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