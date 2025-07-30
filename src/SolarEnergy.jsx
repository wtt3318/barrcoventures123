import React from "react";
import { Link } from "react-router-dom";

const solarServices = [
  {
    title: "Home Energy",
    icon: "fas fa-home",
    description: "Become self-sufficient and independent from fluctuating electricity prices with residential solar solutions.",
    link: "/solar-energy/home-energy",
    isHighlighted: false
  },
  {
    title: "Energy for Businesses",
    icon: "fas fa-building",
    description: "Self-sustaining solar power that instantly reduces your operating costs by up to 5 times.",
    link: "/solar-energy/business",
    isHighlighted: false
  },
  {
    title: "Solar Power Plant",
    icon: "fas fa-bolt",
    description: "Great investment opportunity providing high long-term returns and clean energy contribution.",
    link: "/solar-energy/power-plant",
    isHighlighted: true
  },
  {
    title: "Industrial Solutions",
    icon: "fas fa-industry",
    description: "Best solutions for various industries where solar energy can be used widely and efficiently.",
    link: "/solar-energy/industrial",
    isHighlighted: false
  }
];

const SolarEnergy = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-4" style={{ color: '#2c3e50' }}>
            Solar Energy Solutions
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6' }}>
            Committed to making clean energy more accessible, reliable, and affordable for 
            homeowners and businesses worldwide.
          </p>
        </div>

        {/* Adaptive Energy Services Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="h2 fw-bold mb-4" style={{ color: '#2c3e50' }}>
              Adaptive Energy Services
            </h3>
            <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'justify' }}>
              Barrco Ventures is an adaptive energy services company committed to 
              making clean energy more accessible, reliable, and affordable for 
              homeowners and businesses. Through its adaptive energy platform, 
              Barrco delivers better energy services at better prices.
            </p>
            <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'justify' }}>
              We offer customized solar energy solutions from individual solar panels to 
              complete photovoltaic systems. For over 40 years, Barrco has been 
              continuously contributing to the development of solar energy as a 
              renewable energy source.
            </p>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'justify' }}>
              We are a complete solar energy system provider, offering a full range of 
              services, from consulting to maintenance, under one roof. We help you 
              develop a tailor-made concept that meets your needs and energy 
              requirements.
            </p>
            <button 
              className="btn btn-primary btn-lg px-4 py-3"
              style={{
                backgroundColor: '#1976d2',
                borderColor: '#1976d2',
                fontWeight: '600',
                borderRadius: '8px',
                minWidth: '180px'
              }}
            >
              Get Solar Quote →
            </button>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Solar Energy Solutions"
                className="img-fluid rounded-3 shadow-lg"
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>

        {/* Solar Services Grid */}
        <div className="row g-4 mb-5">
          {solarServices.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div 
                className={`card h-100 border-0 shadow-sm ${service.isHighlighted ? 'border-primary' : ''}`}
                style={{ 
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: service.isHighlighted ? '3px solid #1976d2' : 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        backgroundColor: service.isHighlighted ? '#1976d2' : '#e3f2fd',
                        border: service.isHighlighted ? 'none' : '3px solid #1976d2'
                      }}
                    >
                      <i 
                        className={service.icon} 
                        style={{ 
                          fontSize: '2rem', 
                          color: service.isHighlighted ? 'white' : '#1976d2' 
                        }}
                      ></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>
                    {service.title}
                  </h4>
                  <p className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className={`btn ${service.isHighlighted ? 'btn-primary' : 'btn-outline-primary'} px-4 py-2`}
                    style={{
                      fontWeight: '600',
                      borderRadius: '8px',
                      backgroundColor: service.isHighlighted ? '#1976d2' : 'transparent',
                      borderColor: '#1976d2'
                    }}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div 
          className="rounded-4 text-white text-center py-5 px-4"
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #1976d2 100%)',
            borderRadius: '20px'
          }}
        >
          <h3 className="h2 fw-bold mb-3">Ready to Go Solar?</h3>
          <p className="lead mb-4" style={{ fontSize: '1.1rem', opacity: '0.95' }}>
            Join thousands of satisfied customers who have made the switch to clean, renewable energy.
          </p>
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
                e.target.style.color = '#1976d2';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              Get Free Consultation
            </button>
            <button 
              className="btn btn-light btn-lg px-4 py-3"
              style={{
                fontWeight: '600',
                borderRadius: '8px',
                minWidth: '200px',
                color: '#1976d2',
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
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarEnergy; 