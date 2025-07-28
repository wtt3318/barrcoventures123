import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import ITDigital from './ITDigital'
import SolarEnergy from './SolarEnergy'
import Stationery from './Stationery'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        right: 24,
        bottom: 32,
        zIndex: 9999,
        background: 'linear-gradient(90deg, #1e40af 0%, #1976d2 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: 48,
        height: 48,
        boxShadow: '0 2px 8px rgba(30,64,175,0.2)',
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.2s'
      }}
      aria-label="Back to Top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="itdigital"><ITDigital /></div>
      <div id="solar"><SolarEnergy /></div>
      <div id="stationery"><Stationery /></div>
      <div id="contact"><Contact /></div>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
