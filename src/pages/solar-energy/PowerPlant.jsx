import React from "react";
import { Link } from "react-router-dom";

const PowerPlant = () => (
  <section className="container py-5">
    <h1 className="mb-4 text-warning fw-bold">Solar Power Plant</h1>
    <div className="mb-4">
      <p className="lead" style={{ fontSize: '1.2rem', color: '#222' }}>
        The idea of converting solar energy into useful solar cell energy using semiconductors has changed our world. It gives us the opportunity to abandon energy obtained from depleting fossil fuels.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        If you want to take a responsible step into the future for your company or private household by switching to renewable energy sources and at the same time significantly saving on energy costs, We aim to make solar energy a real alternative to conventional generation.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        We are proud to offer products that provide solar energy to more than three million people per year, with an installed capacity of more than 6 GW. We cooperate with more than 1,000 specialized partners worldwide: from solar engineers to electrical contractors and roofers. Together, we also develop reliable photovoltaic systems with or without solar energy storage!
      </p>
    </div>
    <div className="mb-5">
      <div className="card shadow-sm border-0" style={{ borderRadius: '16px', background: '#fff3e0' }}>
        <div className="card-body">
          <h2 className="fw-bold text-warning mb-3">Barrco provides solar modules of the highest quality</h2>
          <p style={{ fontSize: '1.1rem', color: '#333' }}>
            Barrco and its specialist partners offer competent customer service at all stages – from planning to implementation of solar energy systems. The highest quality of individual components, especially solar modules, is our priority. The type of solar module must be selected taking into account the specific circumstances: decisive factors are the load-bearing capacity of the roof, wind load, snow load in the regions, resistance to salt water, roof surface area, roof pitch and the desired efficiency.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#333' }}>
            Barrco pays great attention to the efficiency and durability of each solar module. We guarantee the quality of our solar systems. Thanks to strict production standards, we deliver systems and solutions of the highest level. To maintain this standard, we regularly conduct internal controls as well as independent certifications and assessments.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#333' }}>
            Our well-thought-out systems consist of high-quality individual components that are optimally combined with each other. We build solar systems that operate without failure for over twenty years and provide energy savings of up to 80% (with energy storage). And that's not all: take advantage of additional government compensation and transfer unused energy to the public grid.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#333' }}>
            As a private individual, you can make your solar system a sustainable investment. At Barrco you will find a complete range of products for grid-tied and off-grid solar energy solutions you can rely on!
          </p>
        </div>
      </div>
    </div>
    <div className="mb-4">
      <h2 className="fw-bold text-warning mb-3">Solar power. A safe investment.</h2>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        We partner to achieve sustainable success in large-scale solar energy projects. Solar power plants are a great investment. They make a valuable contribution to the development of clean energy and provide a high long-term return on investment if done correctly.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        With us, you as an investor, local authority or private landowner can be sure of high efficiency and maximum profitability of your solar power plant. We offer the highest quality and many years of experience in design and operation. Enjoy the sun!
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

export default PowerPlant; 