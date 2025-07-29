import React from "react";
import text10Img from "./assets/optimized/text10.webp";

const ITDigital = () => {
  const digitalProducts = [
    {
      name: "Nensapp",
      category: "Messenger",
      icon: "fas fa-comment",
      status: "Coming 2025-26"
    },
    {
      name: "eAttestation",
      category: "Attestation",
      icon: "fas fa-certificate",
      status: "Coming 2025-26"
    },
    {
      name: "Qualsocial",
      category: "Social Media",
      icon: "fas fa-users",
      status: "Coming 2025-26"
    },
    {
      name: "Avowsocial",
      category: "Social Media",
      icon: "fas fa-heart",
      status: "Coming 2025-26"
    },
    {
      name: "Nenspay",
      category: "Payment Gateway",
      icon: "fas fa-credit-card",
      status: "Coming 2025-26"
    },
    {
      name: "Nensmart",
      category: "Ecommerce",
      icon: "fas fa-shopping-cart",
      status: "Coming 2025-26"
    },
    {
      name: "Oofymarket",
      category: "Ecommerce",
      icon: "fas fa-store",
      status: "Coming 2025-26"
    },
    {
      name: "EExhibition",
      category: "Event and Exhibitions",
      icon: "fas fa-calendar-alt",
      status: "Coming 2025-26"
    },
    {
      name: "Cosolution",
      category: "Company Services",
      icon: "fas fa-building",
      status: "Coming 2025-26"
    },
    {
      name: "Ntransfer",
      category: "Document Store and Transfer",
      icon: "fas fa-file-transfer",
      status: "Coming 2025-26"
    },
    {
      name: "Nenstream",
      category: "Video",
      icon: "fas fa-video",
      status: "Coming 2025-26"
    },
    {
      name: "Hcare",
      category: "Healthcare Product",
      icon: "fas fa-heartbeat",
      status: "Coming 2025-26"
    },
    {
      name: "coweb",
      category: "Web-sites",
      icon: "fas fa-globe",
      status: "Coming 2025-26"
    },
    {
      name: "cocreation",
      category: "Content Creation",
      icon: "fas fa-pen-fancy",
      status: "Coming 2025-26"
    },
    {
      name: "goedit",
      category: "Photo Video Editor",
      icon: "fas fa-edit",
      status: "Coming 2025-26"
    }
  ];

  return (
    <section 
      className="py-5" 
      style={{ 
        background: `linear-gradient(rgba(20,30,50,0.45), rgba(20,30,50,0.45)), url(${text10Img}) center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        color: '#fff',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-4" style={{ color: '#fff' }}>
            Information & Digital Technology
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6', color: '#fff' }}>
            We develop, promote, and maintain various mobile applications and software solutions, 
            creating innovative digital experiences worldwide.
          </p>
        </div>

        {/* Digital Innovation Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-12">
            <h3 className="h2 fw-bold mb-4" style={{ color: '#fff' }}>
              Digital Innovation at Scale
            </h3>
            
            <p className="mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'justify', color: '#fff' }}>
              We are an Information and Digital Technology company specializing in 
              digital and information technology services, software and application 
              development and management.
            </p>
            
            <p className="mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'justify', color: '#fff' }}>
              At this moment we are developing the products listed below, which will be 
              launched worldwide in 2025-2026. All products and brands are owned by 
              Nens Corporation, USA, with worldwide marketing and promotion 
              authorized to Intercate, UAE.
            </p>
          </div>
        </div>

        {/* Digital Products Portfolio */}
        <div className="text-center mb-5">
          <h3 className="h2 fw-bold" style={{ color: '#fff' }}>
            Our Digital Products Portfolio
          </h3>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {digitalProducts.map((product, index) => (
            <div key={index} className="col-md-6 col-lg-4 col-xl-3">
              <div 
                className="card h-100 border-0 shadow-sm"
                style={{ 
                  borderRadius: '15px',
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle me-3"
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        backgroundColor: '#e3f2fd',
                        border: '2px solid #1976d2'
                      }}
                    >
                      <i className={product.icon} style={{ fontSize: '1.2rem', color: '#1976d2' }}></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: '#2c3e50', fontSize: '1.1rem' }}>
                        {product.name}
                      </h5>
                    </div>
                  </div>
                  
                  <p className="text-muted mb-2" style={{ fontSize: '0.95rem' }}>
                    {product.category}
                  </p>
                  
                  <span 
                    className="badge fw-semibold"
                    style={{ 
                      backgroundColor: '#1976d2',
                      color: 'white',
                      fontSize: '0.8rem',
                      padding: '6px 12px'
                    }}
                  >
                    {product.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITDigital; 