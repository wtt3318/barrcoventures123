import React from "react";
import { FaBullseye, FaEye, FaBuilding, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Main Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: '#1e3a8a' }}>
            About Us
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: '1.6' }}>
            We are a multi-activity company dedicated to crafting unforgettable experiences of all levels. From manufacturing and export to renewable energy and cutting-edge technology.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="row g-4 mb-5 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '18px' }}>
              <div className="mb-3">
                <FaBullseye size={40} color="#1976d2" />
              </div>
              <h4 className="fw-bold mb-2" style={{ color: '#1976d2' }}>Our Mission</h4>
              <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                To create a better and easier life, comfortable and convenient for everyone. We focus on safety, comfort, easiness and personalized service.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '18px' }}>
              <div className="mb-3">
                <FaEye size={40} color="#1976d2" />
              </div>
              <h4 className="fw-bold mb-2" style={{ color: '#1976d2' }}>Our Vision</h4>
              <p className="text-muted mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                To enrich lives and communities through innovation, manufacturing, and renewable energy. To strengthen, protect, and grow our sector through partnership and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Company Info Card */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '18px' }}>
              <div className="d-flex align-items-center mb-3">
                <FaBuilding size={32} color="#1976d2" className="me-2" />
                <h3 className="fw-bold mb-0" style={{ color: '#2c3e50' }}>Barrco Ventures Private Limited</h3>
              </div>
              <p className="text-muted mb-2" style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
                Barrco Ventures Private Limited (BVPL) is a Private Limited Indian Non-Government Company with multi activities incorporated in India on 14 June 2023.
              </p>
              <p className="text-muted mb-2" style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
                Our journey began with a shared love for innovation technology and a desire to make people's lives comfortable and easy. We've grown from a small team of enthusiasts to a multi-faceted company that provides a wide array of activities.
              </p>
              <p className="text-muted mb-0" style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
                We specialize in manufacturing of stationery products, stones and tiles, development of information technology software products, and production and installation of solar energy plants.
              </p>
            </div>
          </div>
        </div>

        {/* Why Join/Values Section */}
        <div className="row g-4 mb-5 justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm p-4" style={{ borderRadius: '18px' }}>
              <h4 className="fw-bold mb-3" style={{ color: '#1976d2' }}>Why Choose Barrco Ventures?</h4>
              <ul className="list-unstyled row g-3 mb-0">
                <li className="col-md-6 mb-2"><span className="fw-semibold">Constant striving for renewal</span></li>
                <li className="col-md-6 mb-2"><span className="fw-semibold">Pursuing innovation</span></li>
                <li className="col-md-6 mb-2"><span className="fw-semibold">Striving for reality</span></li>
                <li className="col-md-6 mb-2"><span className="fw-semibold">Gaining simplicity</span></li>
                <li className="col-md-6 mb-2"><span className="fw-semibold">Orienting the result</span></li>
                <li className="col-md-6 mb-2"><span className="fw-semibold">Encouraging to achieve goals</span></li>
                <li className="col-md-6 mb-2"><span className="fw-semibold">Creating social value</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact/Location Info */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-4 text-center" style={{ borderRadius: '18px' }}>
              <h4 className="fw-bold mb-3" style={{ color: '#1976d2' }}>Contact Us</h4>
              <div className="mb-2"><FaMapMarkerAlt className="me-2" /> Office No.53, Ploat No-31, Aggarwal Chamber I, 2nd Floor, Veer Savarkar Block, Shakarpur, New Delhi 110092, India</div>
              <div className="mb-2"><FaPhone className="me-2" /> +91 96434 58868, +91 70110 95327</div>
              <div><FaEnvelope className="me-2" /> office@barrcoventures.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 