import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="section-container" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh' }}>
      {/* Huge Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw',
          height: '80vw',
          maxWidth: '1000px',
          maxHeight: '1000px',
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, rgba(153, 51, 255, 0.05) 50%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <h2 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.1 }}>
            Let's Build Something <br/>
            <span className="text-gradient">Extraordinary.</span>
          </h2>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
            <a href="#contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.2rem' }}>
              <span>Start a Project</span>
            </a>
            <a href="#contact" className="btn-secondary" style={{ padding: '16px 40px', fontSize: '1.2rem' }}>
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating UI Elements Background */}
      <motion.div className="animate-float" style={{ position: 'absolute', top: '20%', left: '15%', zIndex: 5 }}>
        <div className="glass-panel" style={{ padding: '1rem', width: '60px', height: '60px', borderRadius: '15px' }}>
          <div style={{ width: '100%', height: '100%', background: '#00ffff', opacity: 0.5, borderRadius: '50%' }} />
        </div>
      </motion.div>
      <motion.div className="animate-float" style={{ position: 'absolute', bottom: '25%', right: '15%', zIndex: 5, animationDelay: '-3s' }}>
        <div className="glass-panel" style={{ padding: '1rem', width: '80px', height: '80px', borderRadius: '20px' }}>
          <div style={{ width: '100%', height: '100%', background: '#9933ff', opacity: 0.5, borderRadius: '10px' }} />
        </div>
      </motion.div>
    </section>
  );
}
