import React from "react";
import text5Img from "./assets/text 5.jpg";

const About = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* About Us Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-4" style={{ color: '#2c3e50' }}>
            About Us
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6' }}>
            We are a multi-activity company dedicated to crafting unforgettable experiences of all 
            levels. From manufacturing and export to renewable energy and cutting-edge 
            technology.
          </p>
        </div>

        {/* Company Info Section */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <h3 className="h2 fw-bold mb-4" style={{ color: '#2c3e50' }}>
              Barrco Ventures Private Limited
            </h3>
            
            <div className="mb-4">
              <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'justify' }}>
                Barrco Ventures Private Limited (BVPL) is a Private Limited Indian Non-Government 
                Company with multi activities incorporated in India on 14 June 2023.
              </p>
              
              <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'justify' }}>
                Our journey began with a shared love for innovation technology and a desire to make 
                people's lives comfortable and easy. We've grown from a small team of enthusiasts to a 
                multi-faceted company that provides a wide array of activities.
              </p>
              
              <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'justify' }}>
                We specialize in manufacturing of stationery products, stones and tiles, development of 
                information technology software products, and production and installation of solar energy 
                plants. We focus on safety, comfort, easiness and personalized service.
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center mb-4 mb-lg-0">
            <img 
              src={text5Img} 
              alt="About Barrco Ventures" 
              style={{
                width: '100%',
                maxWidth: '450px',
                borderRadius: '18px',
                boxShadow: '0 4px 24px rgba(44,62,80,0.12)',
                objectFit: 'cover',
                marginTop: '-20px',
                marginBottom: '20px',
                marginRight: '20px'
              }}
            />
          </div>
        </div>

        {/* Vision and Mission Cards */}
        <div className="row mb-5 g-4">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      backgroundColor: '#e3f2fd',
                      border: '3px solid #1976d2'
                    }}
                  >
                    <i className="fas fa-eye" style={{ fontSize: '2rem', color: '#1976d2' }}></i>
                  </div>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Our Vision</h4>
                <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  To create a better and easier life, 
                  comfortable and convenient for 
                  everyone.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      backgroundColor: '#e3f2fd',
                      border: '3px solid #1976d2'
                    }}
                  >
                    <i className="fas fa-bullseye" style={{ fontSize: '2rem', color: '#1976d2' }}></i>
                  </div>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Our Mission</h4>
                <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  To offer a wide range of products that 
                  give people a sense of comfort, easiness 
                  and convenience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <i className="fas fa-heart me-3" style={{ fontSize: '2rem', color: '#1976d2' }}></i>
            <h3 className="h2 fw-bold mb-0" style={{ color: '#2c3e50' }}>Our Core Values</h3>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="row g-3">
          {[
            'Constant striving for renewal',
            'Pursuing innovation', 
            'Striving for reality',
            'Gaining simplicity',
            'Orienting the result',
            'Encouraging to achieve goals',
            'Creating social value'
          ].map((value, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                className="p-3 text-center rounded-3"
                style={{ 
                  border: '2px solid #1976d2',
                  borderRadius: '25px',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#1976d2';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#2c3e50';
                }}
              >
                <span className="fw-semibold" style={{ fontSize: '1rem' }}>
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 