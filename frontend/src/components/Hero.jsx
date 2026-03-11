import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import { ArrowRight, Cpu, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section-container" style={{ justifyContent: 'center', alignItems: 'flex-start', paddingBottom: '0' }}>
      <Hero3D />
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="hero-content-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '1000px', position: 'relative' }}
        >
          {/* Tech decorative elements */}
          <div style={{ position: 'absolute', top: '30px', right: '30px', display: 'flex', gap: '15px', color: 'hsl(var(--accent-cyan))', opacity: 0.5 }}>
            <Cpu size={24} />
            <Target size={24} />
          </div>

          <motion.div 
            className="sub-heading"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            Engineering the Digital Future
            <motion.div 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: '8px', height: '8px', background: 'hsl(var(--accent-cyan))', borderRadius: '50%', boxShadow: '0 0 10px hsl(var(--accent-cyan))' }}
            />
          </motion.div>
          
          <motion.h1 
            className="section-title"
            style={{ margin: '1.5rem 0 3rem' }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity:1, y: 0 }} transition={{delay: 1}}
              style={{display: 'block'}}
            >
              We Build
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity:1, scale: 1 }} transition={{delay: 1.2, type: 'spring'}}
              className="text-gradient" 
              style={{ display: 'block', paddingBottom: '10px' }}
            >
              Extraordinary
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity:1, x: 0 }} transition={{delay: 1.4}}
              className="text-outline"
              style={{ display: 'block' }}
            >
              Experiences<span style={{ color: 'hsl(var(--accent-cyan))', WebkitTextStroke: '0px' }}>.</span>
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
          >
            <a href="#contact" className="btn-primary">
              <span>Start Sequence</span>
              <ArrowRight size={24} style={{ marginLeft: '12px', zIndex: 1, position: 'relative' }} />
            </a>
            <a href="#services" className="btn-secondary">
              Explore Vision
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="animate-float"
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}
      >
        <div style={{ width: '30px', height: '50px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '15px', display: 'flex', justifyContent: 'center', padding: '5px' }}>
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: '4px', height: '8px', backgroundColor: '#00ffff', borderRadius: '2px' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
