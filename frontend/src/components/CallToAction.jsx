import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section id="cta" className="section-container" style={{ backgroundColor: 'hsl(var(--bg-main))' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <h2 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.1 }}>
            Let's Build Something <br />
            <span style={{ color: 'hsl(var(--accent-primary))' }}>Extraordinary.</span>
          </h2>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
            <a href="#contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
              <span>Start a Project</span>
            </a>
            <a href="#contact" className="btn-secondary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
