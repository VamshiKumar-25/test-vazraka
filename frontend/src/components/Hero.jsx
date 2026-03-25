import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section-container" style={{ backgroundColor: 'hsl(var(--bg-main))', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        <div className="hero-grid" style={{ gap: '4rem', alignItems: 'center' }}>

          {/* Left Side text */}
          <motion.div
            className="hero-content-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="sub-heading hide-on-mobile">
              Engineering the Digital Future
            </div>

            <h1 className="section-title">
              We Build<br />
              <span style={{ color: 'hsl(var(--accent-primary))' }}>Extraordinary</span><br />
              Experiences.
            </h1>

            <p className="hide-on-mobile" style={{ fontSize: '1rem', color: 'hsl(var(--text-secondary))', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '500px' }}>
              Vazraka Innovations empowers modern businesses with scalable, intelligent digital platforms. From cloud infrastructure to immersive applications, we shape the future of technology.
            </p>

            <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">
                Start Here
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </a>
              <a href="#services" className="btn-secondary">
                Explore Vision
              </a>
            </div>
          </motion.div>

          {/* Right Side Shape: Semantic Service Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
            className="hero-visual"
          >
            {/* Minimalist Tech Infrastructure Composition */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px', aspectRatio: '1/1' }}>
              
              {/* Back Shape: Website Mockup / Cloud Dashboard */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '10%', right: '5%', width: '65%', height: '75%', backgroundColor: 'hsl(var(--bg-secondary))', borderRadius: '16px', border: '1px solid hsl(var(--glass-border))', padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              >
                {/* Browser Top Bar */}
                <div style={{ display: 'flex', gap: '6px', marginBottom: '0.5rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'hsl(var(--text-secondary) / 0.3)' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'hsl(var(--text-secondary) / 0.3)' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'hsl(var(--text-secondary) / 0.3)' }}></div>
                </div>
                {/* Web Layout Content */}
                <div style={{ width: '30%', height: '8px', backgroundColor: 'hsl(var(--text-primary) / 0.8)', borderRadius: '4px', marginBottom: '0.5rem' }}></div>
                <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
                  <div style={{ flex: 1, backgroundColor: 'hsl(var(--bg-tertiary))', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ width: '100%', height: '60px', backgroundColor: 'hsl(var(--text-secondary) / 0.1)', borderRadius: '6px' }}></div>
                    <div style={{ width: '80%', height: '6px', backgroundColor: 'hsl(var(--text-secondary) / 0.4)', borderRadius: '3px' }}></div>
                    <div style={{ width: '60%', height: '6px', backgroundColor: 'hsl(var(--text-secondary) / 0.4)', borderRadius: '3px' }}></div>
                  </div>
                  <div style={{ flex: 1, backgroundColor: 'hsl(var(--bg-main))', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'hsl(var(--accent-secondary) / 0.5)' }}></div>
                      <div style={{ width: '60%', height: '6px', backgroundColor: 'hsl(var(--text-secondary) / 0.5)', borderRadius: '3px' }}></div>
                    </div>
                    <div style={{ width: '100%', height: '4px', backgroundColor: 'hsl(var(--text-secondary) / 0.2)', borderRadius: '2px' }}></div>
                    <div style={{ width: '90%', height: '4px', backgroundColor: 'hsl(var(--text-secondary) / 0.2)', borderRadius: '2px' }}></div>
                    <div style={{ width: '70%', height: '4px', backgroundColor: 'hsl(var(--text-secondary) / 0.2)', borderRadius: '2px' }}></div>
                  </div>
                </div>
              </motion.div>

              {/* Front Shape: Mobile App UI Mockup */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                style={{ position: 'absolute', bottom: '10%', left: '5%', width: '55%', height: '55%', backgroundColor: 'hsl(var(--accent-primary))', borderRadius: '24px', opacity: 0.95, boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '6px solid hsl(var(--bg-main))', display: 'flex', flexDirection: 'column', padding: '1rem', overflow: 'hidden' }}
              >
                {/* Mobile Status Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '30px', height: '8px', backgroundColor: 'hsl(var(--bg-main))', borderRadius: '4px' }}></div>
                  <div style={{ width: '16px', height: '16px', backgroundColor: 'hsl(var(--bg-main))', borderRadius: '50%' }}></div>
                </div>
                {/* Mobile Hero Content */}
                <div style={{ width: '80%', height: '12px', backgroundColor: 'hsl(var(--bg-main))', borderRadius: '6px', marginBottom: '0.8rem' }}></div>
                <div style={{ width: '50%', height: '8px', backgroundColor: 'hsl(var(--bg-main) / 0.7)', borderRadius: '4px', marginBottom: '1.5rem' }}></div>
                
                {/* Mobile Analytics Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', flex: 1 }}>
                  <div style={{ backgroundColor: 'hsl(var(--bg-main) / 0.9)', borderRadius: '8px', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '4px' }}>
                     <div style={{ width: '100%', height: '4px', backgroundColor: 'hsl(var(--text-primary) / 0.2)', borderRadius: '2px' }}></div>
                     <div style={{ width: '60%', height: '4px', backgroundColor: 'hsl(var(--text-primary) / 0.2)', borderRadius: '2px' }}></div>
                  </div>
                  <div style={{ backgroundColor: 'hsl(var(--bg-main) / 0.9)', borderRadius: '8px', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '4px' }}>
                     <div style={{ width: '80%', height: '4px', backgroundColor: 'hsl(var(--text-primary) / 0.2)', borderRadius: '2px' }}></div>
                     <div style={{ width: '100%', height: '4px', backgroundColor: 'hsl(var(--accent-primary))', borderRadius: '2px' }}></div>
                  </div>
                </div>
              </motion.div>

              {/* Keeping Circle Outline Element */}
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', top: '25%', left: '30%', width: '35%', height: '35%', border: '2px dashed hsl(var(--accent-secondary))', borderRadius: '50%' }}
              ></motion.div>

            </div>
          </motion.div>
        </div>

      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
        }
        @media (max-width: 992px) {
          .hero-grid {
            display: flex;
            flex-direction: column-reverse;
            text-align: center;
          }
          .sub-heading { justify-content: center; }
          .sub-heading::before { display: none; }
          #home p { margin-left: auto; margin-right: auto; }
          .hero-actions {
            justify-content: center;
          }
          .hero-visual {
            margin-top: 1rem;
          }
          .hero-visual > div {
            min-height: 230px !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
