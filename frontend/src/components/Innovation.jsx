import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Innovation() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Crossfade Timeline
  const fadeOut = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);
  const fadeIn = useTransform(scrollYProgress,  [0.4, 0.6], [0, 1]);

  // State 1: Centered, 2-line (moves left to anchor point)
  const state1Scale = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.85]);
  const state1X = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "-15%"]);

  // State 2: Left-aligned, 3-line (slides in slightly to anchor point)
  const state2Scale = useTransform(scrollYProgress, [0.3, 0.6], [1.15, 1]);
  const state2X = useTransform(scrollYProgress, [0.3, 0.6], ["15%", "0%"]);

  // Right column (About text)
  const aboutOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.5, 0.8], [40, 0]);

  return (
    <section 
      ref={containerRef}
      id="about"
      style={{ 
        height: '300vh', 
        position: 'relative', 
        backgroundColor: 'transparent'
      }}
    >
      {/* Sticky Inner */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Animated Neural Network Background */}
        <motion.div 
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(153, 51, 255, 0.15) 0%, transparent 50%), linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '100% 100%, 50px 50px, 50px 50px',
            y: bgY,
            opacity: 0.6,
            zIndex: 0
          }}
        />

        <div className="container about-cols-container" style={{ position: 'relative', zIndex: 10 }}>
          
          {/* STATE 1: Centered Anchor */}
          <motion.div 
            className="about-state1-overlay"
            style={{ 
              opacity: fadeOut,
              scale: state1Scale,
              x: state1X,
              pointerEvents: 'none'
            }}
          >
            <h2 className="sub-heading" style={{ justifyContent: 'center', marginBottom: '2rem', fontSize: '1.2rem' }}>Innovation Statement</h2>
            <h3 style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 1.1, margin: 0 }}>
              We Build <span className="text-gradient">Digital Experiences</span>
              <br/>That Shape the Future.
            </h3>
          </motion.div>

          {/* STATE 2: Left Column anchor */}
          <motion.div 
            className="about-col-left"
            style={{
              opacity: fadeIn,
              scale: state2Scale,
              x: state2X
            }}
          >
            <h2 className="sub-heading" style={{ justifyContent: 'flex-start', marginBottom: '1.5rem', fontSize: '1rem', color: 'hsl(var(--text-secondary))' }}>About Vazraka</h2>
            <h3 style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', lineHeight: 1.1, margin: 0 }}>
              We Build <span className="text-gradient">Digital</span><br/>
              <span className="text-gradient">Experiences</span> That Shape<br/>
              The Future.
            </h3>
          </motion.div>

          {/* STATE 3: Right Column Description */}
          <motion.div
            className="about-col-right"
            style={{
              opacity: aboutOpacity,
              y: aboutY
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <p style={{ fontSize: '1.4rem', color: '#fff', lineHeight: 1.6, fontWeight: 500 }}>
                Vazraka Innovations Pvt. Ltd. is a technology and product development company focused on building modern digital platforms, mobile applications, and immersive user experiences.
              </p>
              <p style={{ fontSize: '1.15rem', color: 'hsl(var(--text-secondary))', lineHeight: 1.7 }}>
                We combine engineering, design, and creativity to develop innovative digital products and solutions for businesses and creators.
              </p>
              
              <div style={{ display: 'flex', gap: '2.5rem', marginTop: '1rem' }}>
                <div>
                   <h4 style={{ color: 'hsl(var(--accent-cyan))', fontSize: '2.5rem', marginBottom: '0.5rem' }}>15+</h4>
                   <span style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Engineered Platforms</span>
                </div>
                <div>
                   <h4 style={{ color: 'hsl(var(--accent-purple))', fontSize: '2.5rem', marginBottom: '0.5rem' }}>99%</h4>
                   <span style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Client Success</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .about-cols-container {
          display: flex;
          width: 100%;
          align-items: center;
        }
        .about-state1-overlay {
          position: absolute;
          width: 100%;
          left: 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about-col-left {
          width: 50%;
          padding-right: 2rem;
        }
        .about-col-right {
          width: 50%;
          padding-left: 4rem;
        }
        
        @media(max-width: 992px) {
          .about-cols-container {
            flex-direction: column;
            gap: 3rem;
            justify-content: center;
          }
          .about-col-left, .about-col-right {
            width: 100%;
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
}
