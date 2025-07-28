import React, { useState } from "react";

const SolarEnergy = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const solarServices = [
    {
      title: "Home Energy",
      icon: "fas fa-home",
      description: "Become self-sufficient and independent from fluctuating electricity prices with residential solar solutions.",
      buttonText: "Read More",
      isHighlighted: false,
      detailedContent: {
        title: "My Home, My Own Energy",
        overview: "Innovative products and services. The ideal solution for everyone in the field of solar energy. For a world worth living in. Become self-sufficient and independent from fluctuating prices of electricity and fossil fuels! It's that simple.",
        features: [
          "Complete package for hassle-free solar panel installation",
          "Full range of carefully tested components",
          "Comprehensive system planning and services",
          "Combined warranty from a single source",
          "Highest quality components and installation",
          "Modular systems for quick and cost-effective installation"
        ],
        benefits: [
          "Reduce electricity costs by at least 30%",
          "Additional 80% cost reduction with solar energy storage",
          "Achieve up to 80% self-sufficiency",
          "Favorable electricity prices and complete predictability",
          "High degree of independence from grid fluctuations",
          "Environmentally friendly and sustainable energy source"
        ],
        process: [
          "Book a consultation - Personalized and tailored advice with precise site analysis",
          "Planning - Individual energy solution integration for maximum efficiency",
          "Installation - Quick and professional installation by expert partners",
          "Commissioning - Detailed commissioning report with technical management options"
        ],
        additionalInfo: {
          title: "Be Independent, Save Money and Care for the Environment",
          subtitle: "My Electricity. My Independence.",
          description: "The best way to combat unpredictable electricity prices is to produce your own electricity. Combined with a solar energy storage system, a solar installation allows you to achieve up to 80% self-sufficiency at an economically advantageous price. Favorable electricity prices, complete predictability and a high degree of independence. Enjoy the sun!",
          savingsInfo: "Let your electricity bills melt in the sun. Self-generated solar energy is not only environmentally friendly, but also cheaper than electricity from the regular grid. The higher the share of self-generated electricity, the greater the savings. The combination of an energy management system (EMS) and solar energy storage allows you to unleash its full potential.",
          sustainabilityInfo: "Sustainable development is an integral part of our activities. With us, you are taking a big step towards a sustainable energy supply independent of fossil fuels. Good to know: Solar energy systems have a huge impact on the environment and allow you to reduce CO2 emissions by several million tons annually."
        }
      }
    },
    {
      title: "Energy for Businesses",
      icon: "fas fa-building",
      description: "Self-sustaining solar power that instantly reduces your operating costs by up to 5 times.",
      buttonText: "Read More",
      isHighlighted: false,
      detailedContent: {
        title: "Turn your roof into a source of income",
        overview: "Photovoltaic systems for enterprises are one of the best business solutions. As your partner, we want you to be able to fully focus on what really matters: your business. That's why we help you plan your energy costs over the long term and significantly reduce your operating costs. With our highly efficient photovoltaic systems for businesses, you not only gain access to an inexpensive energy source whose price will remain stable for decades, but also increase your competitiveness in a sustainable way. Let solar energy bring joy. Enjoy the sun!",
        features: [
          "Highly efficient photovoltaic systems for businesses",
          "Long-term energy cost planning and reduction",
          "Stable electricity prices for decades",
          "Increased competitiveness in a sustainable way",
          "Professional installation and commissioning",
          "Technical management and monitoring services"
        ],
        benefits: [
          "Reduce operating costs by up to 5 times compared to conventional electricity",
          "Fixed electricity prices for decades",
          "Generate additional revenue through excess electricity sales",
          "20-year tariff regulated by Renewable Energy Act (EEG)",
          "Enhanced sustainability and environmental commitment",
          "Improved customer and employee satisfaction"
        ],
        process: [
          "Contact us for analysis, calculation and non-binding consultation",
          "Receive personalized offer and approval process",
          "Professional installation and commissioning by specialist team",
          "Detailed commissioning report and technical management options"
        ],
        additionalInfo: {
          title: "The Solar system - beneficial for your business and the climate",
          description: "Commitment to sustainability and renewable energy is important to everyone. Your customers and employees will appreciate the fact that you have the future of renewable energy installed on your roof. A photovoltaic system will demonstrate to everyone that your company understands the importance of environmental protection and is committed to it.",
          benefits: [
            "Sustainability is becoming a choice criterion for more and more customers",
            "Sustainability is becoming a standard for many investors",
            "Renewable energy saves resources",
            "Your employees will appreciate it"
          ]
        }
      }
    },
    {
      title: "Solar Power Plant",
      icon: "fas fa-bolt",
      description: "Great investment opportunity providing high long-term returns and clean energy contribution.",
      buttonText: "Read More",
      isHighlighted: true,
      detailedContent: {
        title: "Solar Power. A safe investment.",
        overview: "The idea of converting solar energy into useful solar cell energy using semiconductors has changed our world. It gives us the opportunity to abandon energy obtained from depleting fossil fuels. If you want to take a responsible step into the future for your company or private household by switching to renewable energy sources and at the same time significantly saving on energy costs, We aim to make solar energy a real alternative to conventional generation.",
        features: [
          "More than three million people served per year",
          "Installed capacity of more than 6 GW",
          "Cooperation with over 1,000 specialized partners worldwide",
          "Highest quality solar modules and components",
          "Systems operating without failure for over twenty years",
          "Complete range for grid-tied and off-grid solutions"
        ],
        benefits: [
          "Energy savings of up to 80% with energy storage",
          "Additional government compensation opportunities",
          "Transfer unused energy to public grid",
          "High long-term return on investment",
          "Sustainable investment for private individuals",
          "Maximum profitability and efficiency"
        ],
        process: [
          "Planning and system design with specialist partners",
          "Component selection based on specific circumstances",
          "Quality assurance through strict production standards",
          "Regular internal controls and independent certifications",
          "Professional installation and commissioning",
          "Ongoing monitoring and maintenance support"
        ],
        additionalInfo: {
          title: "We partner to achieve sustainable success in large-scale solar energy projects",
          description: "Solar power plants are a great investment. They make a valuable contribution to the development of clean energy and provide a high long-term return on investment if done correctly. With us, you as an investor, local authority or private landowner can be sure of high efficiency and maximum profitability of your solar power plant. We offer the highest quality and many years of experience in design and operation. Enjoy the sun!",
          qualityInfo: "Barrco and its specialist partners offer competent customer service at all stages – from planning to implementation of solar energy systems. The highest quality of individual components, especially solar modules, is our priority. The type of solar module must be selected taking into account the specific circumstances: decisive factors are the load-bearing capacity of the roof, wind load, snow load in the regions, resistance to salt water, roof surface area, roof pitch and the desired efficiency.",
          durabilityInfo: "Barrco pays great attention to the efficiency and durability of each solar module. We guarantee the quality of our solar systems. Thanks to strict production standards, we deliver systems and solutions of the highest level. To maintain this standard, we regularly conduct internal controls as well as independent certifications and assessments. Our well-thought-out systems consist of high-quality individual components that are optimally combined with each other."
        }
      }
    },
    {
      title: "Industrial Solutions",
      icon: "fas fa-industry",
      description: "Best solutions for various industries where solar energy can be used widely and efficiently.",
      buttonText: "Read More",
      isHighlighted: false,
      detailedContent: {
        title: "Industrial Solar Energy Solutions",
        overview: "Specialized solar solutions designed for industrial applications with high energy demands and specific operational requirements.",
        features: [
          "Heavy-duty industrial solar systems",
          "Process heat generation solutions",
          "Industrial battery storage systems",
          "Smart grid integration",
          "24/7 monitoring and support",
          "Custom industrial applications"
        ],
        benefits: [
          "Reduce industrial energy costs significantly",
          "Improve energy efficiency and sustainability",
          "Meet regulatory compliance requirements",
          "Enhance corporate social responsibility",
          "Future-proof energy infrastructure"
        ],
        process: [
          "Industrial energy consumption analysis",
          "Custom solution design and engineering",
          "Integration with existing systems",
          "Professional installation and testing",
          "Continuous optimization and support"
        ]
      }
    }
  ];

  const handleReadMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
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
                  
                  <button 
                    className={`btn ${service.isHighlighted ? 'btn-primary' : 'btn-outline-primary'} px-4 py-2`}
                    style={{
                      fontWeight: '600',
                      borderRadius: '8px',
                      backgroundColor: service.isHighlighted ? '#1976d2' : 'transparent',
                      borderColor: '#1976d2'
                    }}
                    onClick={() => handleReadMore(service)}
                  >
                    {service.buttonText} →
                  </button>
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

      {/* Modal for Detailed Information */}
      {showModal && selectedService && (
        <div 
          className="modal fade show d-block" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header border-0 pb-0">
                <h4 className="modal-title fw-bold" style={{ color: '#2c3e50' }}>
                  {selectedService.detailedContent.title}
                </h4>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Show exact user text for Home Energy */}
                {selectedService.title === "Home Energy" ? (
                  <div style={{ fontSize: '1.1rem', color: '#333' }}>
                    <div style={{ whiteSpace: 'pre-line' }}>
Innovative products and services. The ideal solution for everyone in the field of solar energy.

My home, my own energy.
For a world worth living in. Become self-sufficient and independent from fluctuating prices of electricity and fossil fuels! It's that simple.

Barrco Ventures offers you a complete package for hassle-free solar panel installation. We offer a full range of carefully tested components, comprehensive system planning and services such as a combined warranty. All from a single source and of the highest quality. While your new solar power plant generates electricity, you can focus on what is most important: your life.
Make your own electricity. Don't pay anymore. 
What a brilliant idea! In many countries, solar energy is already about three-quarters cheaper than regular electricity from the grid. Generating and using your own solar energy can reduce your electricity costs by at least 30%. Using an additional solar energy storage system will reduce your costs by another 80%.
                    </div>

                    {/* Steps Section */}
                    <div className="my-4 p-4" style={{ background: '#f1f5f9', borderRadius: '14px', border: '1px solid #e0e7ef' }}>
                      <h5 className="fw-bold mb-3" style={{ color: '#1976d2', letterSpacing: '1px' }}>Four steps to a photovoltaic system</h5>
                      <div className="mb-3">
                        <span className="badge bg-primary me-2" style={{ fontSize: '1rem', padding: '8px 16px' }}>Step 1</span>
                        <span className="fw-bold">Book a consultation</span>
                        <div className="ms-4 mt-2" style={{ color: '#555' }}>
                          Personalised and tailored advice is our strength. We ensure that your photovoltaic system and energy storage solution will perfectly match your requirements. We will carry out a precise site analysis, provide comprehensive advice and discuss financing options.
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="badge bg-primary me-2" style={{ fontSize: '1rem', padding: '8px 16px' }}>Step 2</span>
                        <span className="fw-bold">Planning</span>
                        <div className="ms-4 mt-2" style={{ color: '#555' }}>
                          We will plan the implementation of your individual energy solution. Our goal is to integrate it into your home so that it operates as efficiently as possible and achieves maximum efficiency. This will allow you to use as much solar energy as possible.
                        </div>
                      </div>
                      <div className="mb-3">
                        <span className="badge bg-primary me-2" style={{ fontSize: '1rem', padding: '8px 16px' }}>Step 3</span>
                        <span className="fw-bold">Installation</span>
                        <div className="ms-4 mt-2" style={{ color: '#555' }}>
                          The modularity of our systems allows you to install your system quickly and cost-effectively in just a few days. Our partners are experts in their field, and all work on installing your energy system is carried out professionally.
                        </div>
                      </div>
                      <div>
                        <span className="badge bg-primary me-2" style={{ fontSize: '1rem', padding: '8px 16px' }}>Step 4</span>
                        <span className="fw-bold">Commissioning</span>
                        <div className="ms-4 mt-2" style={{ color: '#555' }}>
                          We will commission your system and provide you with a detailed commissioning report. Upon request, we will take over the technical management of the system, monitor its operation, check its functionality and notify you of any malfunctions. You have nothing to worry about.
                        </div>
                      </div>
                    </div>

                    <div style={{ whiteSpace: 'pre-line' }}>
Be independent, save money and care for the environment.
My electricity. My independence.
The best way to combat unpredictable electricity prices is to produce your own electricity. Combined with a solar energy storage system, a solar installation allows you to achieve up to 80% self-sufficiency at an economically advantageous price. Favorable electricity prices, complete predictability and a high degree of independence. Enjoy the sun!

Let your electricity bills melt in the sun.
Self-generated solar energy is not only environmentally friendly, but also cheaper than electricity from the regular grid. The higher the share of self-generated electricity, the greater the savings. The combination of an energy management system (EMS) and solar energy storage allows you to unleash its full potential.
 
Sustainable development is an integral part of our activities.
With us, you are taking a big step towards a sustainable energy supply independent of fossil fuels. Good to know: Solar energy systems have a huge impact on the environment and allow you to reduce CO2 emissions by several million tons annually.
                    </div>
                  </div>
                ) : selectedService.title === "Energy for Businesses" ? (
                  <div style={{ fontSize: '1.1rem', color: '#333' }}>
                    <div style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>
Turn your roof into a source of income.
Photovoltaic systems for enterprises are one of the best business solutions.
As your partner, we want you to be able to fully focus on what really matters: your business. That's why we help you plan your energy costs over the long term and significantly reduce your operating costs. With our highly efficient photovoltaic systems for businesses, you not only gain access to an inexpensive energy source whose price will remain stable for decades, but also increase your competitiveness in a sustainable way. Let solar energy bring joy. Enjoy the sun!
                    </div>

                    {/* Reduce Operating Costs Section */}
                    <div className="my-4 p-4" style={{ background: '#f8f9fa', borderRadius: '14px', border: '1px solid #e0e7ef' }}>
                      <h5 className="fw-bold mb-3" style={{ color: '#1976d2', letterSpacing: '1px' }}>Reduce operating costs.</h5>
                      <p style={{ textAlign: 'justify', color: '#555', lineHeight: '1.7', margin: 0 }}>
                        Self-sustaining solar power will instantly reduce your operating costs. This is because it is currently about five times cheaper than conventional electricity in the commercial sector. The more solar power you consume for your business, the more independent you become and the more you save on purchasing electricity. What's more, you have a fixed price for electricity, which remains the same in your operating costs for decades. This helps you plan for the long term. Once the cost of the system is calculated, the price per kilowatt-hour of electricity is fixed for the entire service life. So, choose solar power and be confident in your abilities when planning your electricity costs.
                      </p>
                    </div>

                    {/* Increase Revenue Section */}
                    <div className="my-4 p-4" style={{ background: '#e3f2fd', borderRadius: '14px', border: '1px solid #bbdefb' }}>
                      <h5 className="fw-bold mb-3" style={{ color: '#1976d2', letterSpacing: '1px' }}>Increase revenue.</h5>
                      <p style={{ textAlign: 'justify', color: '#555', lineHeight: '1.7', margin: 0 }}>
                        Ideally, your solar system should generate more electricity than your business consumes. You can feed the excess into the public grid and receive a fixed 20-year tariff regulated by the Renewable Energy Act (EEG). Or you can sell the electricity directly, which is required by law from a certain system size onwards. This further increases the profitability of your PV system.
                      </p>
                    </div>

                    {/* Process Section */}
                    <div className="my-4 p-4" style={{ background: '#f1f5f9', borderRadius: '14px', border: '1px solid #e0e7ef' }}>
                      <h5 className="fw-bold mb-3" style={{ color: '#1976d2', letterSpacing: '1px' }}>The path to your commercial solar system.</h5>
                      <p style={{ textAlign: 'justify', color: '#555', lineHeight: '1.7', margin: 0 }}>
                        Contact us for an analysis, calculation and a non-binding preliminary consultation. You will then receive a personalized offer. Upon your approval, our team of specialists will install and commission your system, providing you with a detailed commissioning report. Upon request, we will take over the technical management of the system, monitor its operation, check its functionality and notify you of any faults. You have nothing to worry about.
                      </p>
                    </div>

                    {/* Sustainability Section */}
                    <div className="my-4 p-4" style={{ background: '#e8f5e8', borderRadius: '14px', border: '1px solid #c8e6c9' }}>
                      <h5 className="fw-bold mb-3" style={{ color: '#2e7d32', letterSpacing: '1px' }}>The Solar system - beneficial for your business and the climate.</h5>
                      <p style={{ textAlign: 'justify', color: '#555', lineHeight: '1.7', marginBottom: '1rem' }}>
                        Commitment to sustainability and renewable energy is important to everyone. Your customers and employees will appreciate the fact that you have the future of renewable energy installed on your roof. A photovoltaic system will demonstrate to everyone that your company understands the importance of environmental protection and is committed to it.
                      </p>
                      <ul className="list-unstyled" style={{ margin: 0 }}>
                        <li className="mb-2">
                          <i className="fas fa-leaf text-success me-2"></i>
                          <span style={{ color: '#555' }}>Sustainability is becoming a choice criterion for more and more customers.</span>
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-leaf text-success me-2"></i>
                          <span style={{ color: '#555' }}>Sustainability is becoming a standard for many investors.</span>
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-leaf text-success me-2"></i>
                          <span style={{ color: '#555' }}>Renewable energy saves resources.</span>
                        </li>
                        <li className="mb-2">
                          <i className="fas fa-leaf text-success me-2"></i>
                          <span style={{ color: '#555' }}>Your employees will appreciate it.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : selectedService.title === "Solar Power Plant" ? (
                  <div style={{ fontSize: '1.1rem', color: '#333' }}>
                    <div style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>
Solar Power. A safe investment.
The idea of converting solar energy into useful solar cell energy using semiconductors has changed our world. It gives us the opportunity to abandon energy obtained from depleting fossil fuels. If you want to take a responsible step into the future for your company or private household by switching to renewable energy sources and at the same time significantly saving on energy costs, We aim to make solar energy a real alternative to conventional generation.
                    </div>

                    {/* Features Section */}
                    <div className="my-4 p-4" style={{ background: '#f8f9fa', borderRadius: '14px', border: '1px solid #e0e7ef' }}>
                      <h5 className="fw-bold mb-3" style={{ color: '#1976d2', letterSpacing: '1px' }}>Key Features</h5>
                      <ul className="list-unstyled">
                        {selectedService.detailedContent.features.map((feature, index) => (
                          <li key={index} className="mb-2">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits Section */}
                    <div className="my-4 p-4" style={{ background: '#e3f2fd', borderRadius: '14px', border: '1px solid #bbdefb' }}>
                      <h5 className="fw-bold mb-3" style={{ color: '#1976d2', letterSpacing: '1px' }}>Benefits</h5>
                      <ul className="list-unstyled">
                        {selectedService.detailedContent.benefits.map((benefit, index) => (
                          <li key={index} className="mb-2">
                            <i className="fas fa-star text-warning me-2"></i>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process Section */}
                    <div className="my-4 p-4" style={{ background: '#f1f5f9', borderRadius: '14px', border: '1px solid #e0e7ef' }}>
                      <h5 className="fw-bold mb-3" style={{ color: '#1976d2', letterSpacing: '1px' }}>The path to your solar power plant.</h5>
                      <p style={{ textAlign: 'justify', color: '#555', lineHeight: '1.7', margin: 0 }}>
                        Planning and system design with specialist partners. Component selection based on specific circumstances. Quality assurance through strict production standards. Regular internal controls and independent certifications. Professional installation and commissioning. Ongoing monitoring and maintenance support.
                      </p>
                    </div>

                    {/* Additional Info Section */}
                    <div className="my-4 p-4" style={{ background: '#e8f5e8', borderRadius: '14px', border: '1px solid #c8e6c9' }}>
                      <h5 className="fw-bold mb-3" style={{ color: '#2e7d32', letterSpacing: '1px' }}>We partner to achieve sustainable success in large-scale solar energy projects</h5>
                      <p style={{ textAlign: 'justify', color: '#555', lineHeight: '1.7', marginBottom: '1rem' }}>
                        Solar power plants are a great investment. They make a valuable contribution to the development of clean energy and provide a high long-term return on investment if done correctly. With us, you as an investor, local authority or private landowner can be sure of high efficiency and maximum profitability of your solar power plant. We offer the highest quality and many years of experience in design and operation. Enjoy the sun!
                      </p>
                      <p style={{ textAlign: 'justify', color: '#555', lineHeight: '1.7', marginBottom: '1rem' }}>
                        Barrco and its specialist partners offer competent customer service at all stages – from planning to implementation of solar energy systems. The highest quality of individual components, especially solar modules, is our priority. The type of solar module must be selected taking into account the specific circumstances: decisive factors are the load-bearing capacity of the roof, wind load, snow load in the regions, resistance to salt water, roof surface area, roof pitch and the desired efficiency.
                      </p>
                      <p style={{ textAlign: 'justify', color: '#555', lineHeight: '1.7' }}>
                        Barrco pays great attention to the efficiency and durability of each solar module. We guarantee the quality of our solar systems. Thanks to strict production standards, we deliver systems and solutions of the highest level. To maintain this standard, we regularly conduct internal controls as well as independent certifications and assessments. Our well-thought-out systems consist of high-quality individual components that are optimally combined with each other.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                      {selectedService.detailedContent.overview}
                    </p>
                    <div className="row">
                      <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3" style={{ color: '#1976d2' }}>Key Features</h5>
                        <ul className="list-unstyled">
                          {selectedService.detailedContent.features.map((feature, index) => (
                            <li key={index} className="mb-2">
                              <i className="fas fa-check-circle text-success me-2"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3" style={{ color: '#1976d2' }}>Benefits</h5>
                        <ul className="list-unstyled">
                          {selectedService.detailedContent.benefits.map((benefit, index) => (
                            <li key={index} className="mb-2">
                              <i className="fas fa-star text-warning me-2"></i>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3" style={{ color: '#1976d2' }}>Our Process</h5>
                        <ul className="list-unstyled">
                          {selectedService.detailedContent.process.map((step, index) => (
                            <li key={index} className="mb-2">
                              <span className="badge bg-primary me-2">{index + 1}</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="modal-footer border-0 pt-0">
                <button 
                  type="button" 
                  className="btn btn-primary px-4 py-2"
                  onClick={closeModal}
                >
                  Get Started
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline-secondary px-4 py-2"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolarEnergy; 