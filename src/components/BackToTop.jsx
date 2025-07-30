import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1000,
            opacity: 0,
            transform: 'translateY(20px) scale(0.8)',
            animation: 'backToTopAppear 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#1565c0';
            e.target.style.transform = 'translateY(-2px) scale(1.05)';
            e.target.style.boxShadow = '0 6px 20px rgba(25, 118, 210, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#1976d2';
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(25, 118, 210, 0.3)';
          }}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}

      <style jsx>{`
        @keyframes backToTopAppear {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .back-to-top:hover {
          background-color: #1565c0 !important;
          transform: translateY(-2px) scale(1.05) !important;
          box-shadow: 0 6px 20px rgba(25, 118, 210, 0.4) !important;
        }

        .back-to-top:active {
          transform: translateY(0) scale(0.95) !important;
          transition: transform 0.1s ease !important;
        }

        @media (max-width: 768px) {
          .back-to-top {
            bottom: 20px !important;
            right: 20px !important;
            width: 45px !important;
            height: 45px !important;
            font-size: 18px !important;
          }
        }
      `}</style>
    </>
  );
};

export default BackToTop; 