import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Package, Zap, MessageSquare, Truck, Map, Smartphone, Layout, Cloud, Share2, Video } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true); // Default to true because Intro section
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('');

  // Track active section for highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'products', 'contact'];
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
    const previous = scrollY.getPrevious();
    const vh = window.innerHeight;
    
    // Intro covers 0 to 1.5vh roughly. The text fades out by 0.5vh.
    if (latest < vh * 0.5) {
      setHidden(true);
    } else if (latest > previous && latest > vh && !mobileMenuOpen) {
      setHidden(true); // hide on scroll down
    } else {
      setHidden(false); // show on scroll up or sliding down after intro
    }
    setScrolled(latest > vh * 0.8);
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9990,
          padding: '1.5rem 0',
          background: scrolled ? 'rgba(5, 10, 20, 0.75)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          transition: 'background 0.3s, backdrop-filter 0.3s, border 0.3s'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5%' }}>
          {/* Logo */}
          <a href="#" style={{ fontFamily: 'Outfit', fontSize: '1.5rem', fontWeight: 800, textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.8rem', zIndex: 10001 }}>
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, hsl(var(--accent-cyan)), hsl(var(--accent-purple)))', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)' }} />
            VAZRAKA
          </a>
          
          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#home" className={`nav-link ${activeSegment === 'home' || activeSegment === '' ? 'active' : ''}`}>Home</a>
            <a href="#about" className={`nav-link ${activeSegment === 'about' ? 'active' : ''}`}>About</a>
            {/* Services Mega Menu Trigger */}
            <div className="nav-item" style={{ position: 'relative', padding: '10px 0' }}>
              <a href="#services" className={`nav-link ${activeSegment === 'services' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Services <ChevronDown size={16} />
              </a>
              
              <div className="mega-menu">
                {/* 1. App Dev */}
                <div className="mega-menu-card" style={{ gridColumn: '1 / -1' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Smartphone size={20} color="#00ffff" />
                    <h4>Application Development</h4>
                  </div>
                  <p>Custom Android and mobile application development for startups and businesses.</p>
                </div>
                
                {/* 2. Web Dev */}
                <div className="mega-menu-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Layout size={20} color="#9933ff" />
                    <h4>Website Development</h4>
                  </div>
                  <p>Development of modern responsive websites and web applications.</p>
                </div>

                {/* 3. Cloud Services */}
                <div className="mega-menu-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Cloud size={20} color="#4d79ff" />
                    <h4>Cloud Services</h4>
                  </div>
                  <p>Cloud infrastructure and deployment services.</p>
                </div>

                {/* 4. Social Media */}
                <div className="mega-menu-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Share2 size={20} color="#ff3366" />
                    <h4>Social Media Handling</h4>
                  </div>
                  <p>Complete social media management and digital branding services.</p>
                </div>

                {/* 5. Content */}
                <div className="mega-menu-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Video size={20} color="#00ff99" />
                    <h4>Reels & Content Shoots</h4>
                  </div>
                  <p>Creative media production through The Nexus Media.</p>
                </div>
              </div>
            </div>
            
            {/* Products Mega Menu Trigger */}
            <div className="nav-item" style={{ position: 'relative', padding: '10px 0' }}>
              <a href="#products" className={`nav-link ${activeSegment === 'products' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Products <ChevronDown size={16} />
              </a>
              
              <div className="mega-menu">
                {/* 1. Nexus AI */}
                <div className="mega-menu-card" style={{ gridColumn: '1 / -1' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Zap size={20} color="#00ffff" />
                    <h4>Nexus AI</h4>
                  </div>
                  <p>AI platform combining multiple powerful artificial intelligence tools.</p>
                </div>
                
                {/* 2. Spook */}
                <div className="mega-menu-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Package size={20} color="#9933ff" />
                    <h4>Spook</h4>
                  </div>
                  <p>A complete clothing brand ecosystem & logistics.</p>
                </div>

                {/* 3. ChatSe */}
                <div className="mega-menu-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <MessageSquare size={20} color="#ff3366" />
                    <h4>ChatSe</h4>
                  </div>
                  <p>Next-generation real-time messaging application.</p>
                </div>

                {/* 4. Fuel Delivery */}
                <div className="mega-menu-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Truck size={20} color="#ffcc00" />
                    <h4>Fuel Delivery</h4>
                  </div>
                  <p>On-demand intelligent fuel delivery system.</p>
                </div>

                {/* 5. Discover Gangavathi */}
                <div className="mega-menu-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Map size={20} color="#00ff99" />
                    <h4>Discover Gangavathi</h4>
                  </div>
                  <p>Comprehensive city discovery and local commerce platform.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className={`nav-link ${activeSegment === 'contact' ? 'active' : ''}`}>Contact</a>
            
            <a href="#contact" className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem', borderRadius: '4px' }}>
              <span>Start a Project</span>
            </a>
          </div>

          {/* Mobile Hamburger Icon */}
          <button 
            className="mobile-menu-btn"
            style={{ display: 'block', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10001 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ overflowY: 'auto' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.5rem', fontFamily: 'Outfit', fontWeight: 600 }}>
              <motion.a href="#home" initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.1}} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</motion.a>
              <motion.a href="#about" initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.2}} className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</motion.a>
              <motion.a href="#services" initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.3}} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</motion.a>
              <motion.a href="#products" initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.4}} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Products</motion.a>
              <motion.a href="#contact" initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.5}} className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</motion.a>
              
              <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.6}} style={{ marginTop: '2rem' }}>
                <a href="#contact" className="btn-primary" style={{ width: '100%', padding: '16px' }} onClick={() => setMobileMenuOpen(false)}>
                  <span>Start a Project</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Inline styles for media queries */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
