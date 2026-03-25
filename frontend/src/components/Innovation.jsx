import { motion } from 'framer-motion';

export default function Innovation() {
  return (
    <section id="about" className="section-container" style={{ backgroundColor: 'hsl(var(--bg-secondary))' }}>
      <div className="container">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }} className="about-grid">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="sub-heading">About Vazraka</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, margin: '0 0 1.5rem', color: 'hsl(var(--text-primary))' }}>
              We Build Digital Experiences That Shape The Future.
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'hsl(var(--accent-primary))', borderRadius: '2px', marginBottom: '1rem' }}></div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'hsl(var(--text-primary))', lineHeight: 1.5, fontWeight: 400 }}>
              Vazraka Innovations Pvt. Ltd. is a technology and product development company focused on building modern digital platforms, mobile applications, and immersive user experiences.
            </p>
            <p className="hide-on-mobile" style={{ fontSize: '1rem', color: 'hsl(var(--text-secondary))', lineHeight: 1.7 }}>
              We combine engineering, design, and creativity to develop innovative digital products and solutions for businesses and creators. By leveraging scalable cloud infrastructure and clean modern aesthetics, we deliver software that stands out.
            </p>

            <div style={{ display: 'flex', gap: '3rem', marginTop: '1.5rem', paddingTop: '2rem', borderTop: '1px solid hsl(var(--glass-border))' }}>
              <div>
                <h4 style={{ color: 'hsl(var(--accent-primary))', fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>15+</h4>
                <span style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Engineered Platforms</span>
              </div>
              <div>
                <h4 style={{ color: 'hsl(var(--accent-secondary))', fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>99%</h4>
                <span style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Client Success Rate</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
