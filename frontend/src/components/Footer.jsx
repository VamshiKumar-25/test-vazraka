import { Twitter, Linkedin, Github, Mail, ArrowUp, MapPin, Phone } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const { scrollY } = useScroll();
  const [showTop, setShowTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navStyles = {
    color: 'hsl(var(--text-secondary))', 
    textDecoration: 'none', 
    transition: 'color 0.3s',
    display: 'block'
  };

  const socialStyles = {
    width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'white', transition: 'all 0.3s'
  };

  return (
    <footer style={{ background: 'hsl(var(--bg-secondary))', paddingTop: '6rem', paddingBottom: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
      
      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="glass-panel"
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer',
              zIndex: 9999,
              background: 'linear-gradient(135deg, rgba(0,255,255,0.1), rgba(153,51,255,0.1))',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
              color: 'hsl(var(--accent-cyan))'
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)',
              background: 'linear-gradient(135deg, rgba(0,255,255,0.2), rgba(153,51,255,0.2))'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="container" style={{ padding: '0 5%' }}>
        
        {/* 4 Column Grid */}
        <div className="footer-grid">
          
          {/* Column 1: Brand */}
          <div className="footer-col" style={{ paddingRight: '2rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'Outfit' }}>
              Vazraka <span className="text-gradient">Innovations</span>
            </h3>
            <p style={{ color: 'hsl(var(--text-secondary))', lineHeight: 1.6, marginBottom: '2rem' }}>
              Vazraka Innovations Pvt. Ltd. builds modern digital platforms, mobile applications, and creative technology solutions. Engineering the future of digital innovation.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="glass-panel social-btn" style={socialStyles}><Twitter size={18} /></a>
              <a href="#" className="glass-panel social-btn" style={socialStyles}><Linkedin size={18} /></a>
              <a href="#" className="glass-panel social-btn" style={socialStyles}><Github size={18} /></a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="footer-col" style={{ borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '1rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'Outfit', color: '#fff' }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" className="footer-link" style={navStyles}>Nexus AI</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>ChatSe</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Spook Clothing Platform</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Fuel Delivery System</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Discover Gangavathi</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col" style={{ borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '1rem' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'Outfit', color: '#fff' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" className="footer-link" style={navStyles}>Application Development</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Website Development</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Cloud Services</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Social Media Handling</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Content Production</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'Outfit', color: '#fff' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={20} color="hsl(var(--accent-cyan))" style={{ marginTop: '2px' }} />
                <span style={{ color: 'hsl(var(--text-secondary))', lineHeight: 1.4 }}>hello@vazraka.com<br/>support@vazraka.com</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={20} color="hsl(var(--accent-cyan))" style={{ marginTop: '2px' }} />
                <span style={{ color: 'hsl(var(--text-secondary))', lineHeight: 1.4 }}>+91 98765 43210</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={20} color="hsl(var(--accent-cyan))" style={{ marginTop: '2px' }} />
                <span style={{ color: 'hsl(var(--text-secondary))', lineHeight: 1.4 }}>Innovation Hub, Block C<br/>Bangalore, India</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', color: 'hsl(var(--text-secondary))', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Vazraka Innovations Pvt. Ltd. All rights reserved.
        </div>
      </div>
      
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1.5fr 1.5fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-link:hover {
          color: #00ffff !important;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
        .social-btn:hover {
          background: rgba(0,255,255,0.1) !important;
          border-color: #00ffff !important;
          box-shadow: 0 0 15px rgba(0,255,255,0.3);
          color: #00ffff !important;
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer-col {
            border-right: none !important;
            padding-right: 0 !important;
          }
          .footer-col:first-child {
            grid-column: 1 / -1;
            margin-bottom: 2rem;
            border-bottom: 1px solid rgba(255,255,255,0.05) !important;
            padding-bottom: 2rem !important;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-col {
            border-bottom: 1px solid rgba(255,255,255,0.05) !important;
            padding-bottom: 2rem !important;
          }
          .footer-col:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
