import { motion } from 'framer-motion';
import { Camera, Film, MonitorPlay } from 'lucide-react';

const portfolioItems = [
  { id: 1, title: 'Cinematic Storytelling', desc: 'Immersive visual narratives', icon: <Camera size={32} color="#00ffff" /> },
  { id: 2, title: 'Next-Gen Media', desc: 'Interactive digital environments', icon: <Film size={32} color="#9933ff" /> },
  { id: 3, title: 'Creative Production', desc: 'End-to-end media engineering', icon: <MonitorPlay size={32} color="#4d79ff" /> }
];

export default function NexusMedia() {
  return (
    <section id="nexus" className="section-container" style={{ background: 'linear-gradient(to bottom, hsl(var(--bg-main)), var(--bg-secondary))' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="sub-heading">The Nexus Media</h2>
          <h3 style={{ fontSize: '3rem', margin: '1rem 0' }}>Creative Division of Vazraka</h3>
          <p style={{ color: 'hsl(var(--text-secondary))', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
            Specializing in professional photography, visual storytelling, and creative media production.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, translateY: -10, boxShadow: '0 20px 40px rgba(0,255,255,0.1)' }}
              style={{ padding: '3rem 2rem', textAlign: 'center', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', opacity: 0, transition: 'opacity 0.3s' }} className="hover-glow" />
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h4>
              <p style={{ color: 'hsl(var(--text-secondary))' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
