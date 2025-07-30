import React, { useState, useRef } from "react";

const SolarEnergyMain = () => {
  const [activeSection, setActiveSection] = useState(null);
  const contentRefs = {
    homeEnergy: useRef(null),
    business: useRef(null),
    powerPlant: useRef(null),
    industrial: useRef(null)
  };

  const handleCardClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
    
    // Smooth scroll to content after a brief delay for transition
    setTimeout(() => {
      if (contentRefs[section].current) {
        contentRefs[section].current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const sections = [
    {
      id: 'homeEnergy',
      title: 'Home Energy',
      icon: 'fas fa-home',
      description: 'Become self-sufficient and independent from fluctuating electricity prices with residential solar solutions.',
      color: '#1976d2'
    },
    {
      id: 'business',
      title: 'Energy for Businesses',
      icon: 'fas fa-building',
      description: 'Self-sustaining solar power that instantly reduces your operating costs by up to 5 times.',
      color: '#2e7d32'
    },
    {
      id: 'powerPlant',
      title: 'Solar Power Plant',
      icon: 'fas fa-bolt',
      description: 'Great investment opportunity providing high long-term returns and clean energy contribution.',
      color: '#ed6c02'
    },
    {
      id: 'industrial',
      title: 'Industrial Solutions',
      icon: 'fas fa-industry',
      description: 'Best solutions for various industries where solar energy can be used widely and efficiently.',
      color: '#9c27b0'
    }
  ];

  const renderContent = (sectionId) => {
    switch (sectionId) {
      case 'homeEnergy':
        return (
          <div className="content-section">
            <h3 className="fw-bold text-primary mb-3">Home Energy Solutions</h3>
            <p className="lead mb-3">
              Innovative products and services. The ideal solution for everyone in the field of solar energy.
            </p>
            <p className="fw-semibold text-primary mb-3">My home, my own energy.</p>
            <p className="mb-3">
              For a world worth living in. Become self-sufficient and independent from fluctuating prices of electricity and fossil fuels! It's that simple.
            </p>
            <p className="mb-3">
              Barrco Ventures offers you a complete package for hassle-free solar panel installation. We offer a full range of carefully tested components, comprehensive system planning and services such as a combined warranty. All from a single source and of the highest quality. While your new solar power plant generates electricity, you can focus on what is most important: your life.
            </p>
            <p className="fw-bold mb-3">Make your own electricity. Don't pay anymore.</p>
            <p className="mb-4">
              What a brilliant idea! In many countries, solar energy is already about three-quarters cheaper than regular electricity from the grid. Generating and using your own solar energy can reduce your electricity costs by at least 30%. Using an additional solar energy storage system will reduce your costs by another 80%.
            </p>
            
            <h4 className="fw-bold text-success mb-3">Four steps to a photovoltaic system</h4>
            <div className="row g-3 mb-4">
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px', background: '#e3f2fd' }}>
                  <div className="card-body text-center">
                    <span className="badge bg-primary mb-2">Step 1</span>
                    <h6 className="fw-bold">Book a consultation</h6>
                    <p className="small mb-0">Personalised and tailored advice is our strength.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px', background: '#e3f2fd' }}>
                  <div className="card-body text-center">
                    <span className="badge bg-primary mb-2">Step 2</span>
                    <h6 className="fw-bold">Planning</h6>
                    <p className="small mb-0">We will plan the implementation of your individual energy solution.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px', background: '#e3f2fd' }}>
                  <div className="card-body text-center">
                    <span className="badge bg-primary mb-2">Step 3</span>
                    <h6 className="fw-bold">Installation</h6>
                    <p className="small mb-0">Install your system quickly and cost-effectively in just a few days.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px', background: '#e3f2fd' }}>
                  <div className="card-body text-center">
                    <span className="badge bg-primary mb-2">Step 4</span>
                    <h6 className="fw-bold">Commissioning</h6>
                    <p className="small mb-0">We will commission your system and provide detailed reports.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'business':
        return (
          <div className="content-section">
            <h3 className="fw-bold text-success mb-3">Energy for Businesses</h3>
            <p className="lead mb-3">
              Reduce operating costs, increase planning options and improve your image. Our smart photovoltaic solutions for business.
            </p>
            <h4 className="fw-bold text-primary mb-3">Turn your roof into a source of income</h4>
            <p className="mb-3">
              Photovoltaic systems for enterprises are one of the best business solutions. As your partner, we want you to be able to fully focus on what really matters: your business. That's why we help you plan your energy costs over the long term and significantly reduce your operating costs.
            </p>
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px', background: '#e8f5e8' }}>
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2">Reduce operating costs</h5>
                    <p className="mb-0">
                      Self-sustaining solar power will instantly reduce your operating costs. This is because it is currently about five times cheaper than conventional electricity in the commercial sector.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px', background: '#e8f5e8' }}>
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2">Increase revenue</h5>
                    <p className="mb-0">
                      Ideally, your solar system should generate more electricity than your business consumes. You can feed the excess into the public grid and receive a fixed 20-year tariff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'powerPlant':
        return (
          <div className="content-section">
            <h3 className="fw-bold text-warning mb-3">Solar Power Plant</h3>
            <p className="lead mb-3">
              The idea of converting solar energy into useful solar cell energy using semiconductors has changed our world. It gives us the opportunity to abandon energy obtained from depleting fossil fuels.
            </p>
            <p className="mb-3">
              We aim to make solar energy a real alternative to conventional generation. We are proud to offer products that provide solar energy to more than three million people per year, with an installed capacity of more than 6 GW.
            </p>
            <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '12px', background: '#fff3e0' }}>
              <div className="card-body">
                <h4 className="fw-bold text-warning mb-3">Barrco provides solar modules of the highest quality</h4>
                <p className="mb-3">
                  Barrco and its specialist partners offer competent customer service at all stages – from planning to implementation of solar energy systems. The highest quality of individual components, especially solar modules, is our priority.
                </p>
                <p className="mb-0">
                  We build solar systems that operate without failure for over twenty years and provide energy savings of up to 80% (with energy storage). And that's not all: take advantage of additional government compensation and transfer unused energy to the public grid.
                </p>
              </div>
            </div>
            <h4 className="fw-bold text-warning mb-3">Solar power. A safe investment.</h4>
            <p>
              We partner to achieve sustainable success in large-scale solar energy projects. Solar power plants are a great investment. They make a valuable contribution to the development of clean energy and provide a high long-term return on investment if done correctly.
            </p>
          </div>
        );
      
      case 'industrial':
        return (
          <div className="content-section">
            <h3 className="fw-bold text-purple mb-3">Industrial Solutions</h3>
            <p className="lead mb-3">
              The right solar energy solution for any industry.
            </p>
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px', background: '#f3e5f5' }}>
                  <div className="card-body">
                    <h5 className="fw-bold text-purple mb-2">Solar energy for cooling and lighting systems</h5>
                    <p className="mb-0">
                      Food production is an energy-intensive process. In particular, the energy consumption for cooling and storing food, packaging equipment and lighting greenhouses is enormous. Photovoltaic solutions offer a solution to this problem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px', background: '#f3e5f5' }}>
                  <div className="card-body">
                    <h5 className="fw-bold text-purple mb-2">Integrate cost-effective charging stations</h5>
                    <p className="mb-0">
                      Car dealerships face the challenge of providing electric charging stations. Instead of expanding commercial power supply at great effort and expense, it makes sense to invest in modern and sustainable solar energy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0 shadow-sm" style={{ borderRadius: '12px', background: '#f3e5f5' }}>
              <div className="card-body">
                <h5 className="fw-bold text-purple mb-2">More economical operation of machines and production lines</h5>
                <p className="mb-0">
                  Manufacturing goods requires a lot of energy. Machines, compressors, air conditioning systems, lighting – all these consumers consume electricity, which is becoming more and more expensive. Photovoltaic systems can reduce electricity costs by at least a third.
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

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

        {/* Four Clickable Cards */}
        <div className="row g-4 mb-5">
          {sections.map((section) => (
            <div key={section.id} className="col-md-6 col-lg-3">
              <div 
                className={`card h-100 border-0 shadow-sm cursor-pointer ${activeSection === section.id ? 'border-primary border-3' : ''}`}
                style={{ 
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: activeSection === section.id ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: activeSection === section.id ? '0 10px 25px rgba(0,0,0,0.15)' : '0 2px 10px rgba(0,0,0,0.1)'
                }}
                onClick={() => handleCardClick(section.id)}
              >
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        backgroundColor: activeSection === section.id ? section.color : '#e3f2fd',
                        border: activeSection === section.id ? 'none' : `3px solid ${section.color}`,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <i 
                        className={section.icon} 
                        style={{ 
                          fontSize: '2rem', 
                          color: activeSection === section.id ? 'white' : section.color,
                          transition: 'all 0.3s ease'
                        }}
                      ></i>
                    </div>
                  </div>
                  
                  <h4 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>
                    {section.title}
                  </h4>
                  
                  <p className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {section.description}
                  </p>
                  
                  <div 
                    className={`btn ${activeSection === section.id ? 'btn-primary' : 'btn-outline-primary'} px-4 py-2`}
                    style={{
                      fontWeight: '600',
                      borderRadius: '8px',
                      backgroundColor: activeSection === section.id ? section.color : 'transparent',
                      borderColor: section.color,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {activeSection === section.id ? 'Hide Details' : 'Learn More'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        {activeSection && (
          <div 
            ref={contentRefs[activeSection]}
            className="mt-5"
            style={{
              animation: 'fadeInUp 0.5s ease-out'
            }}
          >
            {renderContent(activeSection)}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .content-section {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
};

export default SolarEnergyMain; 