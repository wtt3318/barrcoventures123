import React from "react";
import { Link } from "react-router-dom";

const HomeEnergy = () => (
  <section className="container py-5">
    <h1 className="mb-4 text-primary fw-bold">Home Energy</h1>
    <div className="mb-4">
      <p className="lead" style={{ fontSize: '1.2rem', color: '#222' }}>
        Innovative products and services. The ideal solution for everyone in the field of solar energy.
      </p>
      <p className="fw-semibold" style={{ fontSize: '1.1rem', color: '#1976d2' }}>My home, my own energy.</p>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        For a world worth living in. Become self-sufficient and independent from fluctuating prices of electricity and fossil fuels! It's that simple.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        Barrco Ventures offers you a complete package for hassle-free solar panel installation. We offer a full range of carefully tested components, comprehensive system planning and services such as a combined warranty. All from a single source and of the highest quality. While your new solar power plant generates electricity, you can focus on what is most important: your life.<br/>
        <span className="fw-bold">Make your own electricity. Don't pay anymore.</span>
      </p>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        What a brilliant idea! In many countries, solar energy is already about three-quarters cheaper than regular electricity from the grid. Generating and using your own solar energy can reduce your electricity costs by at least 30%. Using an additional solar energy storage system will reduce your costs by another 80%.
      </p>
    </div>
    <div className="mb-5">
      <h2 className="fw-bold text-success mb-3">Four steps to a photovoltaic system</h2>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '16px', background: '#e3f2fd' }}>
            <div className="card-body">
              <span className="badge bg-primary mb-2" style={{ fontSize: '1rem' }}>Step 1</span>
              <h5 className="fw-bold">Book a consultation</h5>
              <p className="mb-0" style={{ fontSize: '1rem' }}>
                Personalised and tailored advice is our strength. We ensure that your photovoltaic system and energy storage solution will perfectly match your requirements. We will carry out a precise site analysis, provide comprehensive advice and discuss financing options.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '16px', background: '#e3f2fd' }}>
            <div className="card-body">
              <span className="badge bg-primary mb-2" style={{ fontSize: '1rem' }}>Step 2</span>
              <h5 className="fw-bold">Planning</h5>
              <p className="mb-0" style={{ fontSize: '1rem' }}>
                We will plan the implementation of your individual energy solution. Our goal is to integrate it into your home so that it operates as efficiently as possible and achieves maximum efficiency. This will allow you to use as much solar energy as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '16px', background: '#e3f2fd' }}>
            <div className="card-body">
              <span className="badge bg-primary mb-2" style={{ fontSize: '1rem' }}>Step 3</span>
              <h5 className="fw-bold">Installation</h5>
              <p className="mb-0" style={{ fontSize: '1rem' }}>
                The modularity of our systems allows you to install your system quickly and cost-effectively in just a few days. Our partners are experts in their field, and all work on installing your energy system is carried out professionally.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '16px', background: '#e3f2fd' }}>
            <div className="card-body">
              <span className="badge bg-primary mb-2" style={{ fontSize: '1rem' }}>Step 4</span>
              <h5 className="fw-bold">Commissioning</h5>
              <p className="mb-0" style={{ fontSize: '1rem' }}>
                We will commission your system and provide you with a detailed commissioning report. Upon request, we will take over the technical management of the system, monitor its operation, check its functionality and notify you of any malfunctions. You have nothing to worry about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-4">
      <h3 className="fw-bold text-primary mb-3">Be independent, save money and care for the environment.</h3>
      <p className="fw-semibold" style={{ fontSize: '1.1rem', color: '#1976d2' }}>My electricity. My independence.</p>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        The best way to combat unpredictable electricity prices is to produce your own electricity. Combined with a solar energy storage system, a solar installation allows you to achieve up to 80% self-sufficiency at an economically advantageous price. Favorable electricity prices, complete predictability and a high degree of independence. Enjoy the sun!
      </p>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        <span className="fw-bold">Let your electricity bills melt in the sun.</span><br/>
        Self-generated solar energy is not only environmentally friendly, but also cheaper than electricity from the regular grid. The higher the share of self-generated electricity, the greater the savings. The combination of an energy management system (EMS) and solar energy storage allows you to unleash its full potential.
      </p>
    </div>
    <div className="mb-4">
      <h3 className="fw-bold text-success mb-3">Sustainable development is an integral part of our activities.</h3>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        With us, you are taking a big step towards a sustainable energy supply independent of fossil fuels. Good to know: Solar energy systems have a huge impact on the environment and allow you to reduce CO2 emissions by several million tons annually.
      </p>
    </div>
    
    {/* Back to Solar Energy Link */}
    <div className="mt-5 pt-4" style={{ borderTop: '1px solid #e9ecef' }}>
      <Link 
        to="/solar-energy" 
        className="text-decoration-none d-inline-flex align-items-center"
        style={{ 
          color: '#1976d2', 
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'color 0.2s ease'
        }}
        onMouseEnter={(e) => e.target.style.color = '#1565c0'}
        onMouseLeave={(e) => e.target.style.color = '#1976d2'}
      >
        <i className="fas fa-arrow-left me-2"></i>
        ← Back to the Solar Energy page
      </Link>
    </div>
  </section>
);

export default HomeEnergy; 