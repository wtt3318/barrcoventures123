import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/optimized/barrco-ventures-logo.webp";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer style={{ background: 'linear-gradient(180deg, #0a1a3c 0%, #1976d2 100%)', color: '#f3f6fa', fontSize: '1rem', letterSpacing: 0.1, paddingTop: 39 }} className="pt-3 pb-3 mt-0">
      <div className="container">
        <div className="row gy-4 align-items-start justify-content-center text-center text-md-start">
          {/* Logo & Company Info */}
          <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <img src={logo} alt="Barrco Ventures Logo" width={120} className="mb-3" />
            <div className="mb-3 fw-semibold" style={{ maxWidth: 320, color: '#fff', fontSize: '1.08rem', lineHeight: 1.5 }}>
              Barrco Ventures Private Limited –<br />
              Your multi-activity partner company. From renewable energy to digital innovation and manufacturing excellence.
            </div>
            <div className="d-flex gap-3 mb-2 justify-content-center justify-content-md-start">
              <a href="#" className="text-white fs-5"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white fs-5"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white fs-5"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-white fs-5"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-white fs-5"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2 col-lg-2 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3 text-white">Quick Links</h6>
            <ul className="list-unstyled" style={{ lineHeight: 2 }}>
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/it-digital" className="text-white text-decoration-none">IT & Digital</Link></li>
              <li><Link to="/solar-energy" className="text-white text-decoration-none">Solar Energy</Link></li>
              <li><Link to="/stationery" className="text-white text-decoration-none">Stationery</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-6 col-md-3 col-lg-3 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3 text-white">Our Services</h6>
            <ul className="list-unstyled" style={{ lineHeight: 2 }}>
              <li>Solar Energy Solutions</li>
              <li>Digital Technology</li>
              <li>Mobile Applications</li>
              <li>Stationery Manufacturing</li>
              <li>IT Consulting</li>
              <li>Renewable Energy</li>
            </ul>
          </div>

          {/* Get in Touch & Newsletter */}
          <div className="col-12 col-md-3 col-lg-4 d-flex flex-column align-items-center align-items-md-start">
            <h6 className="fw-bold mb-3 text-white">Get in Touch</h6>
            <ul className="list-unstyled mb-3" style={{ lineHeight: 2 }}>
              <li><i className="fas fa-map-marker-alt me-2"></i> New Delhi, India</li>
              <li><i className="fas fa-phone me-2"></i> +91 96434 58868</li>
              <li><i className="fas fa-envelope me-2"></i> info@barrcoventures.com</li>
            </ul>
            <div className="mb-2 fw-semibold text-white">Newsletter</div>
            <form className="d-flex gap-2 mb-3 w-100 justify-content-center justify-content-md-start" style={{ maxWidth: 320 }} onSubmit={e => { e.preventDefault(); setEmail(""); }}>
              <input type="email" className="form-control form-control-sm" style={{ maxWidth: 180, borderRadius: 8, border: 'none', background: '#e9f0fa', color: '#222' }} placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button className="btn btn-light btn-sm px-3 fw-bold" style={{ borderRadius: 8 }} type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.15)' }} />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
          <div style={{ color: '#e0e6f0', fontSize: '1rem' }}>
            © 2025 Barrco Ventures Private Limited. All rights reserved.
          </div>
          <div className="d-flex gap-3 align-items-center justify-content-center justify-content-md-end" style={{ color: '#e0e6f0', fontSize: '1rem' }}>
            <a href="#top" className="text-white text-decoration-none" id="footer-back-to-top">↑ Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 