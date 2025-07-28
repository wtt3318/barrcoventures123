import React from "react";

const Stationery = () => {
  const exportMarkets = [
    "CIS Countries",
    "European Union",
    "Middle East",
    "Asia Pacific"
  ];
  const products = [
    {
      title: "Barrco Pen Brands",
      icon: "fas fa-pen-nib",
      description: "High-quality writing instruments exported worldwide"
    },
    {
      title: "R&R Paper Brand",
      icon: "fas fa-file-alt",
      description: "Premium paper products under Barrco Papers"
    }
  ];
  const standards = [
    "CE",
    "GMP",
    "ISO 9001:2015",
    "ISO 14001:2015",
    "ISO 45001:2018"
  ];

  return (
    <section className="py-5" style={{ background: 'linear-gradient(180deg, #f8f9fa 60%, #e9f0fa 100%)' }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-4" style={{ color: '#2c3e50' }}>
            Stationery Products
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6' }}>
            We manufacture and export various Barrco pen brands and paper products, delivering quality stationery solutions worldwide.
          </p>
        </div>

        {/* Manufacturing & Export Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="h2 fw-bold mb-4" style={{ color: '#2c3e50' }}>
              Quality Manufacturing & Export
            </h3>
            <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'justify' }}>
              We manufacturer and export various Barrco pen brands and Barrco paper brand "R&R". Our all stationery brands of pens and paper are being exported mainly to CIS countries and expanding globally.
            </p>
            <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'justify' }}>
              Our manufacturing processes adhere to international quality standards, ensuring that every product meets the highest standards of quality and durability. We take pride in our commitment to excellence and customer satisfaction.
            </p>
            <div className="mb-3">
              <span className="fw-semibold me-2" style={{ color: '#1976d2' }}>
                <i className="fas fa-globe me-2"></i>Export Markets
              </span>
              {exportMarkets.map((market, idx) => (
                <a
                  key={market}
                  href="#"
                  className="badge bg-light text-primary fw-semibold me-2 mb-1"
                  style={{ border: '1.5px solid #1976d2', fontSize: '1rem', borderRadius: '8px', padding: '7px 14px', textDecoration: 'none' }}
                >
                  {market}
                </a>
              ))}
            </div>
            <button
              className="btn btn-primary btn-lg px-4 py-3 mt-2"
              style={{ backgroundColor: '#1976d2', borderColor: '#1976d2', fontWeight: '600', borderRadius: '8px', minWidth: '200px' }}
            >
              View Product Catalog
            </button>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Stationery Products"
                className="img-fluid rounded-3 shadow-lg"
                style={{ borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="row g-4 mb-5">
          {products.map((product, idx) => (
            <div key={idx} className="col-md-6">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                <div className="card-body d-flex align-items-center p-4">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle me-4" style={{ width: '60px', height: '60px', backgroundColor: '#e3f2fd', border: '2px solid #1976d2' }}>
                    <i className={product.icon} style={{ fontSize: '1.5rem', color: '#1976d2' }}></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2" style={{ color: '#2c3e50', fontSize: '1.15rem' }}>{product.title}</h5>
                    <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Section */}
        <div className="text-center mt-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <i className="fas fa-check-circle me-3" style={{ fontSize: '2rem', color: '#1976d2' }}></i>
            <h3 className="h2 fw-bold mb-0" style={{ color: '#2c3e50' }}>Our Compliance with Standards</h3>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
            {standards.map((std, idx) => (
              <span key={idx} className="px-4 py-2 border border-primary rounded-pill fw-semibold text-primary" style={{ fontSize: '1rem', background: '#fff' }}>{std}</span>
            ))}
          </div>
          <div className="mt-3 mb-2" style={{ fontSize: '1rem' }}>
            For more information about our paper products, visit: <a href="https://www.barrcopapers.com" target="_blank" rel="noopener noreferrer" className="fw-semibold text-primary">www.barrcopapers.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stationery; 