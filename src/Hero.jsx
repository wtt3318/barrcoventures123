import React from "react";
import text2Img from "./assets/text2.jpg";
import text3Img from "./assets/text3.jpg";
import text4Img from "./assets/text4.jpg";

const Hero = () => {
  return (
    <section 
      className="d-flex align-items-center justify-content-center text-white text-center"
      style={{
        background: `url(${text4Img}) center/cover no-repeat, linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #1e3a8a 100%)`,
        minHeight: '80vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern/Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            {/* Main Heading */}
            <h1 
              className="display-3 fw-bold mb-4"
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '1.2',
                color: '#000',
                textShadow: '0 4px 16px rgba(255,255,255,0.7), 0 2px 4px rgba(255,255,255,0.5)'
              }}
            >
              Discover Your Future Plans<br />
              and Projects with Us
            </h1>

            {/* Subtitle */}
            <p 
              className="lead mb-4"
              style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                fontWeight: '400',
                opacity: '0.95',
                maxWidth: '600px',
                margin: '0 auto 2rem',
                color: '#ef4444'
              }}
            >
              Your Multi-Activity Partner Company Awaits! From renewable energy to 
              digital innovation and manufacturing excellence.
            </p>

            {/* Company Name */}
            <p 
              className="mb-5"
              style={{ 
                fontSize: '1.2rem',
                fontWeight: '500',
                opacity: '0.9',
                color: '#ef4444'
              }}
            >
              Barrco Ventures Private Limited
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <button 
                className="btn btn-outline-light btn-lg px-4 py-3"
                style={{
                  borderWidth: '2px',
                  fontWeight: '600',
                  borderRadius: '8px',
                  minWidth: '200px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#1e3a8a';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Explore Our Services →
              </button>
              
              <button 
                className="btn btn-light btn-lg px-4 py-3"
                style={{
                  fontWeight: '600',
                  borderRadius: '8px',
                  minWidth: '200px',
                  color: '#1e3a8a',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 