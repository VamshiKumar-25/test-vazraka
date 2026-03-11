import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Intro() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // The wrapper is 120vh. This provides 20vh of "sticky" holding time.
  // We fade the background and texts mapped across this scroll progress.
  
  // Independent background layers fade out cleanly over the scroll
  const bgOpacity = useTransform(scrollYProgress, [0.1, 0.7], [1, 0]);
  const isPointerEvents = useTransform(scrollYProgress, [0.99, 1], ['auto', 'none']);

  // Fade out everything EXCEPT "Build" quickly (0 to 0.4 progress)
  const fastOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  // Morphing "Build" to intuitively map into Hero's "We Build"
  // It scales down to matching size, and translates to its approximate position.
  const buildScale = useTransform(scrollYProgress, [0.1, 0.8], [1, 0.65]);
  const buildX = useTransform(scrollYProgress, [0.1, 0.8], ['0vw', '-15vw']); 
  const buildY = useTransform(scrollYProgress, [0.1, 0.8], ['0vh', '15vh']);
  
  // "Build" crossfades out smoothly directly fading into the visible Hero text 
  const buildOpacity = useTransform(scrollYProgress, [0.7, 0.95], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="intro"
      style={{ 
        height: '120vh', 
        position: 'relative', 
        zIndex: 20
      }}
    >
      {/* Sticky Fullscreen Layer */}
      <div 
        style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          width: '100vw', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Isolated Background Layers */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            backgroundColor: '#050a14',
            opacity: bgOpacity,
            zIndex: 0
          }}
        />
        <motion.div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '70vw', height: '70vw',
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.08) 0%, rgba(153, 51, 255, 0.05) 30%, transparent 60%)',
            zIndex: 1, pointerEvents: 'none',
            opacity: bgOpacity
        }} />

        {/* Text Composition */}
        <motion.div style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh', padding: '0 5%', pointerEvents: isPointerEvents }}>
          
          <motion.p 
            className="text-gradient"
            style={{ 
              opacity: fastOpacity,
              fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)', 
              letterSpacing: '0.4em', 
              textTransform: 'uppercase',
              marginBottom: '2rem',
              fontWeight: 800
            }}
          >
            Vazraka Innovations
          </motion.p>
          
          <h1 className="text-gradient" style={{ 
            fontSize: 'clamp(3.5rem, 12vw, 8.5rem)', 
            fontFamily: 'Outfit', 
            fontWeight: 800, 
            lineHeight: 1.1, 
            margin: 0,
            textAlign: 'center'
          }}>
            {/* Morphing "Build" Text */}
            <motion.span 
              style={{ 
                display: 'inline-block',
                scale: buildScale, 
                x: buildX, 
                y: buildY, 
                opacity: buildOpacity,
                textShadow: '0 0 60px rgba(0, 255, 255, 0.4), 0 0 120px rgba(153, 51, 255, 0.2)',
                transformOrigin: 'center center'
              }}
            >
              Build
            </motion.span>{' '}
            
            {/* "Tomorrow, Today" Text */}
            <motion.span style={{ display: 'inline-block', opacity: fastOpacity }}>
              Tomorrow,
            </motion.span>
            <br />
            <motion.span style={{ display: 'inline-block', opacity: fastOpacity }}>
              Today
            </motion.span>
          </h1>

        </motion.div>

        {/* Enhanced Vertical Scroll Indicator */}
        <motion.div 
          style={{ 
            opacity: fastOpacity,
            marginTop: '5rem', 
            height: '220px', 
            width: '2px', 
            background: 'rgba(255,255,255,0.05)', 
            position: 'relative', 
            overflow: 'hidden',
            borderRadius: '2px',
            zIndex: 10,
            pointerEvents: isPointerEvents
          }}
        >
          <motion.div 
            animate={{ top: ['-20%', '120%'] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ 
              position: 'absolute', 
              left: 0, 
              width: '100%', 
              height: '20%', 
              background: 'linear-gradient(to bottom, transparent, hsl(var(--accent-cyan)), hsl(var(--accent-purple)), transparent)',
              boxShadow: '0 0 15px hsl(var(--accent-cyan))'
            }} 
          />
        </motion.div>
        
      </div>
    </section>
  );
}
