import { Twitter, Linkedin, Github, Mail, ArrowUp, MapPin, Phone, Instagram, Youtube, Facebook, ArrowRight } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Logo from './Logo';

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
    transition: 'color 0.2s ease',
    display: 'block',
    whiteSpace: 'nowrap',
    fontSize: '0.8rem'
  };

  const socialStyles = {
    width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'hsl(var(--text-primary))', transition: 'all 0.2s', border: '1px solid hsl(var(--glass-border))', backgroundColor: 'hsl(var(--bg-main))'
  };

  return (
    <footer style={{ backgroundColor: 'hsl(var(--bg-tertiary))', paddingTop: '6rem', paddingBottom: '2rem', borderTop: '1px solid hsl(var(--glass-border))', position: 'relative' }}>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '1.5rem',
              right: '1.5rem',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid hsl(var(--glass-border))',
              cursor: 'pointer',
              zIndex: 9999,
              backgroundColor: 'hsl(var(--bg-main))',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              color: 'hsl(var(--text-primary))'
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'hsl(var(--text-primary))',
              color: 'hsl(var(--bg-main))'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="container">

        {/* 4 Column Grid */}
        <div className="footer-grid">

            {/* Brand Section */}
            <div className="footer-brand" style={{ paddingRight: '2rem', borderRight: '1px solid hsl(var(--glass-border))' }}>
              <a href="#home" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}>
                <Logo size="icon" />
              </a>
              <p style={{ color: 'hsl(var(--text-secondary))', lineHeight: 1.6, maxWidth: '300px', fontSize: '1.05rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              Vazraka Innovations Pvt. Ltd. builds modern digital platforms, mobile applications, and creative technology solutions. Engineering the future of digital innovation.
            </p>
          </div>

          {/* Column 2: Products */}
          <div className="footer-col" style={{ borderRight: '1px solid hsl(var(--glass-border))', paddingRight: '1rem' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.5rem', fontFamily: 'Outfit', color: 'hsl(var(--text-primary))' }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" className="footer-link" style={navStyles}>Nexus AI</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>ChatSe</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Spook Clothing Platform</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Fuel Delivery System</a></li>
              <li><a href="https://discover-gangavathi.netlify.app/" className="footer-link" style={navStyles}>Discover Gangavathi</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col" style={{ borderRight: '1px solid hsl(var(--glass-border))', paddingRight: '1rem' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.5rem', fontFamily: 'Outfit', color: 'hsl(var(--text-primary))' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" className="footer-link" style={navStyles}>Application Development</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Website Development</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Cloud Services</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Social Media Handling</a></li>
              <li><a href="#" className="footer-link" style={navStyles}>Content Production</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col" style={{ borderRight: '1px solid hsl(var(--glass-border))', paddingRight: '1rem' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.5rem', fontFamily: 'Outfit', color: 'hsl(var(--text-primary))' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', whiteSpace: 'nowrap', fontSize: '0.8rem' }}>
                <Mail size={15} color="hsl(var(--accent-primary))" style={{ marginTop: '2px' }} />
                <span style={{ color: 'hsl(var(--text-secondary))', lineHeight: 1.4 }}>hello@vazraka.com<br />support@vazraka.com</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', whiteSpace: 'nowrap', fontSize: '0.8rem' }}>
                <Phone size={15} color="hsl(var(--accent-primary))" style={{ marginTop: '2px' }} />
                <span style={{ color: 'hsl(var(--text-secondary))', lineHeight: 1.4 }}>+91 98765 43210</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', whiteSpace: 'nowrap', fontSize: '0.8rem' }}>
                <MapPin size={15} color="hsl(var(--accent-primary))" style={{ marginTop: '2px' }} />
                <span style={{ color: 'hsl(var(--text-secondary))', lineHeight: 1.4 }}>Innovation Hub, Block C<br />Bangalore, India</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Socials */}
          <div className="footer-col">
            <h4 style={{ fontSize: '1rem', marginBottom: '1.5rem', fontFamily: 'Outfit', color: 'hsl(var(--text-primary))' }}>Socials</h4>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#" className="social-btn" style={socialStyles}><Twitter size={13} /></a>
              <a href="#" className="social-btn" style={socialStyles}><Linkedin size={13} /></a>
              <a href="#" className="social-btn" style={socialStyles}><Instagram size={13} /></a>
              <a href="#" className="social-btn" style={socialStyles}><Github size={13} /></a>
              <a href="#" className="social-btn" style={socialStyles}><Facebook size={13} /></a>
              <a href="#" className="social-btn" style={socialStyles}><Youtube size={13} /></a>

            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', borderTop: '1px solid hsl(var(--glass-border))', paddingTop: '3rem', color: 'hsl(var(--text-secondary))', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Vazraka Innovations Pvt. Ltd. All rights reserved.
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .footer-link:hover {
          color: hsl(var(--accent-primary)) !important;
        }
        .social-btn:hover {
          background-color: hsl(var(--text-primary)) !important;
          color: hsl(var(--bg-main)) !important;
          border-color: hsl(var(--text-primary)) !important;
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
            border-bottom: 1px solid hsl(var(--glass-border)) !important;
            padding-bottom: 2rem !important;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .footer-col {
            border-bottom: 1px solid hsl(var(--glass-border)) !important;
            padding-bottom: 1rem !important;
            padding-top: 1rem !important;
          }
          .footer-col h4 {
            margin-bottom: 1rem !important;
          }
          .footer-col:last-child {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}
