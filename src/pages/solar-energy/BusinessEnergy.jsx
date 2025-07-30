import React from "react";
import { Link } from "react-router-dom";

const BusinessEnergy = () => (
  <section className="container py-5">
    <h1 className="mb-4 text-success fw-bold">Energy for Businesses</h1>
    <div className="mb-4">
      <p className="lead" style={{ fontSize: '1.2rem', color: '#222' }}>
        Reduce operating costs, increase planning options and improve your image. Our smart photovoltaic solutions for business.
      </p>
      <h2 className="fw-bold text-primary mb-3">Turn your roof into a source of income</h2>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        Photovoltaic systems for enterprises are one of the best business solutions. As your partner, we want you to be able to fully focus on what really matters: your business. That's why we help you plan your energy costs over the long term and significantly reduce your operating costs.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        With our highly efficient photovoltaic systems for businesses, you not only gain access to an inexpensive energy source whose price will remain stable for decades, but also increase your competitiveness in a sustainable way. Let solar energy bring joy. Enjoy the sun!
      </p>
    </div>
    <div className="mb-5">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '16px', background: '#e8f5e8' }}>
            <div className="card-body">
              <h3 className="fw-bold text-success mb-3">Reduce operating costs</h3>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Self-sustaining solar power will instantly reduce your operating costs. This is because it is currently about five times cheaper than conventional electricity in the commercial sector. The more solar power you consume for your business, the more independent you become and the more you save on purchasing electricity.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                What's more, you have a fixed price for electricity, which remains the same in your operating costs for decades. This helps you plan for the long term. Once the cost of the system is calculated, the price per kilowatt-hour of electricity is fixed for the entire service life. So, choose solar power and be confident in your abilities when planning your electricity costs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '16px', background: '#e8f5e8' }}>
            <div className="card-body">
              <h3 className="fw-bold text-success mb-3">Increase revenue</h3>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Ideally, your solar system should generate more electricity than your business consumes. You can feed the excess into the public grid and receive a fixed 20-year tariff regulated by the Renewable Energy Act (EEG). Or you can sell the electricity directly, which is required by law from a certain system size onwards. This further increases the profitability of your PV system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-4">
      <h2 className="fw-bold text-primary mb-3">The path to your commercial solar system</h2>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        Contact us for an analysis, calculation and a non-binding preliminary consultation. You will then receive a personalized offer. Upon your approval, our team of specialists will install and commission your system, providing you with a detailed commissioning report. Upon request, we will take over the technical management of the system, monitor its operation, check its functionality and notify you of any faults. You have nothing to worry about.
      </p>
    </div>
    <div className="mb-4">
      <h2 className="fw-bold text-success mb-3">The Solar system - beneficial for your business and the climate</h2>
      <p style={{ fontSize: '1.1rem', color: '#333' }}>
        Commitment to sustainability and renewable energy is important to everyone. Your customers and employees will appreciate the fact that you have the future of renewable energy installed on your roof. A photovoltaic system will demonstrate to everyone that your company understands the importance of environmental protection and is committed to it.
      </p>
      <ul style={{ fontSize: '1.1rem', color: '#333' }}>
        <li>Sustainability is becoming a choice criterion for more and more customers.</li>
        <li>Sustainability is becoming a standard for many investors.</li>
        <li>Renewable energy saves resources.</li>
        <li>Your employees will appreciate it.</li>
      </ul>
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

export default BusinessEnergy; 