import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputStyles = {
    padding: '1.2rem 1.5rem',
    background: 'rgba(10, 15, 25, 0.4)', // Dark glass
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    fontFamily: 'Inter, sans-serif',
    width: '100%',
    boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.5)'
  };

  const getFocusStyle = (fieldName) => ({
    borderColor: focusedField === fieldName ? 'hsl(var(--accent-glow))' : 'rgba(255,255,255,0.08)',
    boxShadow: focusedField === fieldName ? '0 0 20px rgba(77, 121, 255, 0.3), inset 0 4px 10px rgba(0,0,0,0.5)' : 'inset 0 4px 10px rgba(0,0,0,0.5)',
    background: focusedField === fieldName ? 'rgba(77, 121, 255, 0.05)' : 'rgba(10, 15, 25, 0.4)'
  });

  return (
    <section id="contact" className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Immersive Floating Particles Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.4 }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(77, 121, 255, 0.15)' : 'rgba(153, 51, 255, 0.1)'} 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(30px)'
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 10 }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div className="sub-heading" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', margin: 0 }}>
            Start a <span className="text-gradient">Project</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
          style={{
            background: 'linear-gradient(145deg, rgba(20, 25, 35, 0.5) 0%, rgba(10, 15, 20, 0.8) 100%)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.8), inset 0 0 30px rgba(77, 121, 255, 0.1)',
            borderRadius: '32px',
            padding: '4rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Internal Glowing Border Accent */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: '32px', border: '1px solid transparent', background: 'linear-gradient(135deg, rgba(77, 121, 255, 0.5), rgba(153, 51, 255, 0.5), rgba(0, 255, 255, 0.5)) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'destination-out', maskComposite: 'exclude', opacity: 0.3, pointerEvents: 'none' }} />

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px', position: 'relative' }}>
                 <label style={{ display: 'block', color: 'hsl(var(--text-secondary))', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>Name</label>
                 <input 
                   type="text" 
                   value={formData.name}
                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                   onFocus={() => setFocusedField('name')}
                   onBlur={() => setFocusedField(null)}
                   required
                   style={{ ...inputStyles, ...getFocusStyle('name') }}
                 />
              </div>
              <div style={{ flex: '1 1 300px', position: 'relative' }}>
                 <label style={{ display: 'block', color: 'hsl(var(--text-secondary))', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
                 <input 
                   type="email" 
                   value={formData.email}
                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                   onFocus={() => setFocusedField('email')}
                   onBlur={() => setFocusedField(null)}
                   required
                   style={{ ...inputStyles, ...getFocusStyle('email') }}
                 />
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
               <label style={{ display: 'block', color: 'hsl(var(--text-secondary))', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>Project Details</label>
               <textarea 
                 value={formData.message}
                 onChange={(e) => setFormData({...formData, message: e.target.value})}
                 onFocus={() => setFocusedField('message')}
                 onBlur={() => setFocusedField(null)}
                 required
                 rows="5"
                 style={{ ...inputStyles, ...getFocusStyle('message'), resize: 'vertical' }}
               />
            </div>

            <motion.button 
              type="submit" 
              disabled={status === 'submitting'}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(153, 51, 255, 0.4), inset 0 0 20px rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                alignSelf: 'center', 
                marginTop: '1rem',
                padding: '1.2rem 4rem',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #4d79ff, #9933ff, #00ffff)',
                backgroundSize: '200% auto',
                color: '#fff',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(77, 121, 255, 0.3)',
                transition: 'background-position 0.3s', // Animate purely background shift on hover through CSS since Framer orchestrates scale
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundPosition = 'right center'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundPosition = 'left center'; }}
            >
              {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
            </motion.button>
            
            <AnimatePresence>
               {status === 'success' && (
                 <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ textAlign: 'center', color: '#00ffff', marginTop: '1rem', fontWeight: 500 }}>
                   Transmission sequence successful. Our team will map your trajectory shortly.
                 </motion.p>
               )}
               {status === 'error' && (
                 <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ textAlign: 'center', color: '#ff3366', marginTop: '1rem', fontWeight: 500 }}>
                   Core transmission failed. Please attempt re-calibration.
                 </motion.p>
               )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
