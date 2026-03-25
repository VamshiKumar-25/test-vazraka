import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('');
  const { theme, toggleTheme } = useTheme();

  // Track active section for highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'products', 'pricing', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSegment(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10002,
          padding: '1.5rem 0',
          backgroundColor: scrolled ? 'hsl(var(--bg-main) / 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid hsl(var(--glass-border))' : '1px solid transparent',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? 'var(--glass-shadow)' : 'none'
        }}
      >
        <div className="container nav-container">
          {/* Logo - Left aligned */}
          <div style={{ justifySelf: 'start', display: 'flex' }}>
            <a href="#" style={{ textDecoration: 'none', zIndex: 10001, display: 'block' }}>
              <Logo size="navbar" />
            </a>
          </div>

          {/* Desktop Nav - Centered */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', justifySelf: 'center', whiteSpace: 'nowrap' }}>
            <a href="#home" className={`nav-link ${activeSegment === 'home' || activeSegment === '' ? 'active' : ''}`}>Home</a>
            <a href="#about" className={`nav-link ${activeSegment === 'about' ? 'active' : ''}`}>About</a>
            <a href="#services" className={`nav-link ${activeSegment === 'services' ? 'active' : ''}`}>Services</a>
            <a href="#products" className={`nav-link ${activeSegment === 'products' ? 'active' : ''}`}>Products</a>
            <a href="#pricing" className={`nav-link ${activeSegment === 'pricing' ? 'active' : ''}`}>Pricing</a>
            <a href="#contact" className={`nav-link ${activeSegment === 'contact' ? 'active' : ''}`}>Contact</a>
          </div>

          {/* Desktop Actions - Right aligned */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifySelf: 'end', whiteSpace: 'nowrap' }}>
            <button
              onClick={toggleTheme}
              style={{ background: 'transparent', border: 'none', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'hsl(var(--text-primary))', transition: 'var(--transition-fast)', padding: 0 }}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#contact" className="btn-primary" style={{ padding: '10px 30px', fontSize: '0.8rem', borderRadius: '8px' }}>
              Start a Project
            </a>
          </div>

          {/* Mobile Actions */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1rem', justifySelf: 'end' }} className="mobile-actions">
            <button
              onClick={toggleTheme}
              className="mobile-theme-btn"
              style={{ background: 'transparent', border: '1px solid hsl(var(--glass-border))', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'hsl(var(--text-primary))', transition: 'var(--transition-fast)', zIndex: 10001 }}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              className="mobile-menu-btn"
              style={{ background: 'transparent', border: 'none', display: 'block', color: 'hsl(var(--text-primary))', cursor: 'pointer', zIndex: 10001 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed', top: '85px', left: '50%',
              width: '85%', maxWidth: '350px',
              backgroundColor: 'hsl(var(--bg-main))', zIndex: 9995,
              display: 'flex', flexDirection: 'column',
              borderRadius: 'var(--radius-card)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2), 0 0 0 1px hsl(var(--glass-border))',
              overflow: 'hidden', padding: '1.5rem'
            }}
          >
            <div className="mobile-nav-stack">
              <a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#products" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#pricing" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              
              <div className="mobile-nav-separator"></div>

              <a href="#contact" className="btn-primary" style={{ display: 'flex', width: '100%', padding: '14px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: '1rem', borderRadius: '8px' }} onClick={() => setMobileMenuOpen(false)}>
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline styles for media queries */}
      <style>{`
        .nav-container {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }
        @media (max-width: 991px) {
          .nav-container {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            flex-wrap: nowrap !important;
          }
          .desktop-nav { display: none !important; }
          .mobile-actions { display: flex !important; }
          .mobile-drawer {
            height: auto !important;
            min-height: auto !important;
          }
          .mobile-nav-stack {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .mobile-nav-link {
            font-size: 1.1rem;
            padding: 12px;
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            color: hsl(var(--text-primary));
            text-decoration: none;
            border-radius: 8px;
            transition: background-color 0.2s ease;
          }
          .mobile-nav-link:hover, .mobile-nav-link:active {
            background-color: hsl(var(--text-secondary) / 0.1);
          }
          .mobile-nav-separator {
            width: 100%;
            height: 1px;
            background-color: hsl(var(--text-secondary) / 0.2);
            margin: 1rem 0;
          }
        }
      `}</style>
    </>
  );
}
