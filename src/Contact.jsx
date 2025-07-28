import React from "react";

const Contact = () => {
  return (
    <section className="py-5" style={{ background: 'linear-gradient(180deg, #f8f9fa 60%, #e9f0fa 100%)' }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: '#2c3e50' }}>
            Contact Us
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px', fontSize: '1.15rem', lineHeight: '1.6' }}>
            Get in touch with us to discuss your projects and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="mb-4">
              <h3 className="fw-bold mb-4" style={{ color: '#222' }}>Barrco Ventures Private Limited</h3>
              <div className="mb-3 p-3 border border-primary rounded-3 bg-white">
                <div className="fw-semibold mb-1 text-primary"><i className="fas fa-map-marker-alt me-2"></i>Registered Address</div>
                <div className="text-muted" style={{ fontSize: '1rem' }}>
                  Kushal Nagar Haibargaon, Haiborgaon, Nagaon, Nagaon, Assam 782002, India
                </div>
              </div>
              <div className="mb-3 p-3 border border-primary rounded-3 bg-white">
                <div className="fw-semibold mb-1 text-primary"><i className="fas fa-building me-2"></i>Corporate Address</div>
                <div className="text-muted" style={{ fontSize: '1rem' }}>
                  Office No-53, Plot No-31, Aggarwal Chamber I, Veer Savarkar Block, Shakarpur, New Delhi 110092, India
                </div>
              </div>
              <div className="mb-3 p-3 border border-primary rounded-3 bg-white">
                <div className="fw-semibold mb-1 text-primary"><i className="fas fa-phone me-2"></i>Phone</div>
                <div className="text-muted" style={{ fontSize: '1rem' }}>+91 96434 58868</div>
              </div>
              <div className="mb-3 p-3 border border-primary rounded-3 bg-white">
                <div className="fw-semibold mb-1 text-primary"><i className="fas fa-envelope me-2"></i>Email</div>
                <div className="text-muted" style={{ fontSize: '1rem' }}>info@barrcoventures.com</div>
              </div>
              <div className="d-flex gap-2 mb-3">
                <a href="https://wa.me/919643458868" target="_blank" rel="noopener noreferrer" className="btn btn-primary flex-fill d-flex align-items-center justify-content-center" style={{ borderRadius: '8px', fontWeight: 600 }}>
                  <i className="fab fa-whatsapp me-2"></i> WhatsApp
                </a>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary flex-fill d-flex align-items-center justify-content-center" style={{ borderRadius: '8px', fontWeight: 600 }}>
                  <i className="fab fa-telegram-plane me-2"></i> Telegram
                </a>
              </div>
              <div className="bg-light rounded-3 p-2 text-muted" style={{ fontSize: '1rem' }}>
                Alternative Email: <span className="fw-semibold text-primary">office@barrcoventures.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="h-100 p-4 border border-primary rounded-3 bg-white">
              <h4 className="fw-bold mb-4" style={{ color: '#222' }}>Send us a Message</h4>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label fw-semibold">Full Name *</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Your full name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address *</label>
                    <input type="email" className="form-control form-control-lg" placeholder="your.email@example.com" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Subject *</label>
                  <input type="text" className="form-control form-control-lg" placeholder="Subject of your inquiry" required />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Message *</label>
                  <textarea className="form-control form-control-lg" rows="4" placeholder="Tell us about your project or inquiry..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center" style={{ fontWeight: 600, borderRadius: '8px', background: 'linear-gradient(90deg, #1e40af 0%, #1976d2 100%)', border: 'none' }}>
                  Send Message <i className="fas fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 