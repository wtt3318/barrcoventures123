import React from "react";
import { Link } from "react-router-dom";

const IndustrialSolutions = () => (
  <section className="container py-5">
    <h1 className="mb-4 text-purple fw-bold">Industrial Solutions</h1>
    <div className="mb-4">
      <p className="lead" style={{ fontSize: '1.2rem', color: '#222' }}>
        The right solar energy solution for any industry.
      </p>
    </div>
    <div className="mb-5">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '16px', background: '#f3e5f5' }}>
            <div className="card-body">
              <h2 className="fw-bold text-purple mb-3">Solar energy for cooling and lighting systems</h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Food production is an energy-intensive process. In particular, the energy consumption for cooling and storing food, packaging equipment and lighting greenhouses is enormous. And not only during the day, but also at night. Photovoltaic solutions offer a solution to this problem.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Agriculture and food production are constantly changing, and new challenges require fast and flexible solutions. But one thing remains constant: the constant high demand for ever more expensive electricity at any time of the day. An intelligent photovoltaic solution tailored to the individual needs of a company ensures food production is independent of high prices around the clock, while taking a big step towards sustainability.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '16px', background: '#f3e5f5' }}>
            <div className="card-body">
              <h2 className="fw-bold text-purple mb-3">Integrate cost-effective charging stations for electric vehicles</h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Car dealerships face the challenge of providing electric charging stations. However, they often lack the capacity to connect to the grid. The existing power supply is simply not enough. Instead of expanding commercial power supply at great effort and expense, it makes sense to invest in modern and sustainable solar energy.
              </p>
              <h3 className="fw-bold text-purple mb-2">Intelligent charging</h3>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                The demands on car dealerships are constantly increasing. The cost of electricity will continue to rise in the future, but at the same time, electro-mobility and the growing number of charging options are here to stay. Preparing a car dealership for the future and taking into account all possible options seems like a major challenge at first glance. But it is not. By investing in a customized and evolving photovoltaic solution, car dealerships can become independent of high electricity prices and compensate for the lack of a connection to the grid in a cost-effective and sustainable way. Nothing stands in the way of the development of a modern charging infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-4">
      <div className="card shadow-sm border-0" style={{ borderRadius: '16px', background: '#f3e5f5' }}>
        <div className="card-body">
          <h2 className="fw-bold text-purple mb-3">More economical operation of machines and production lines</h2>
          <p style={{ fontSize: '1.1rem', color: '#333' }}>
            Manufacturing goods requires a lot of energy. Machines, compressors, air conditioning systems, lighting – all these consumers consume electricity, which is becoming more and more expensive. Photovoltaic systems can reduce electricity costs by at least a third. In combination with an energy storage system and an energy management system, the savings are enormous.
          </p>
          <h3 className="fw-bold text-purple mb-2">Use of solar energy in manufacturing industry</h3>
          <p style={{ fontSize: '1.1rem', color: '#333' }}>
            Of all the manufacturing sectors, manufacturing consumed the most energy in 2020, accounting for 45% of the total. This figure speaks for itself. Therefore, it is especially important for companies in this sector to protect themselves from price increases and sudden changes. Solar energy is an excellent solution for this, as it is not only sustainable, but also has significant savings potential in the long term.
          </p>
        </div>
      </div>
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

export default IndustrialSolutions; 