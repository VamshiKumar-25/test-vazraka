import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Smartphone, Layout, Cloud, Share2, Video, X, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(service)}
      style={{
        padding: '2.5rem',
        cursor: 'pointer',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        backgroundColor: 'hsl(var(--bg-main))',
        border: `1px solid hsl(var(--glass-border))`,
        borderRadius: 'var(--radius-card)',
        boxShadow: isHovered ? 'var(--glass-shadow)' : '0 4px 6px rgba(0,0,0,0.02)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        style={{
          width: '56px', height: '56px',
          borderRadius: '12px',
          backgroundColor: 'hsl(var(--bg-secondary))',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          color: 'hsl(var(--accent-primary))'
        }}
      >
        <service.icon size={25} />
      </div>

      <div>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: 'hsl(var(--text-primary))' }}>{service.title}</h3>
        <p style={{ fontSize: '0.9rem', color: 'hsl(var(--text-secondary))', lineHeight: 1.6 }}>{service.shortDesc}</p>
      </div>

      <div
        style={{
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.9rem',
          color: 'hsl(var(--accent-primary))',
          fontWeight: 600,
          opacity: isHovered ? 1 : 0.7,
          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'all 0.3s ease'
        }}
      >
        Explore Service <ArrowRight size={18} />
      </div>
    </motion.div>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedService]);

  const services = [
    {
      id: 'app-dev',
      title: 'Application Development',
      shortDesc: 'Development of Android and mobile applications for startups and businesses.',
      fullDesc: 'Custom Android and mobile application development tailored for startups and businesses looking to expand their digital footprint rapidly.',
      capabilities: ['Android apps', 'startup MVP apps', 'business automation apps', 'modern UI apps'],
      icon: Smartphone,
      color: '#00ffff' // Cyan
    },
    {
      id: 'web-dev',
      title: 'Website Development',
      shortDesc: 'Development of modern responsive websites and web applications.',
      fullDesc: 'We architect high-performance modern responsive websites and web platforms that command attention and drive conversions.',
      capabilities: ['business websites', 'portfolio websites', 'startup platforms', 'e-commerce websites'],
      icon: Layout,
      color: '#9933ff' // Purple
    },
    {
      id: 'cloud',
      title: 'Cloud Services',
      shortDesc: 'Cloud infrastructure and deployment services.',
      fullDesc: 'Deploy with absolute confidence through our managed, robust cloud infrastructure and deployment services.',
      capabilities: ['website hosting', 'domain management', 'server deployment', 'cloud setup and optimization'],
      icon: Cloud,
      color: '#4d79ff' // Blue/Glow
    },
    {
      id: 'social',
      title: 'Social Media Handling',
      shortDesc: 'Complete social media management and digital branding services.',
      fullDesc: 'Dominate the digital narrative with our complete social media management and high-conversion digital branding strategies.',
      capabilities: ['content strategy', 'page management', 'growth optimization', 'audience engagement'],
      icon: Share2,
      color: '#ff3366' // Pink
    },
    {
      id: 'content',
      title: 'Ready-Made Reels',
      shortDesc: 'Creative media production through The Nexus Media.',
      fullDesc: 'Powered directly by The Nexus Media, we deliver breathtaking visual assets and professional creative media production.',
      capabilities: ['edited reels production', 'professional content shoots', 'brand content creation', 'promotional videos'],
      icon: Video,
      color: '#00ff99' // Neon Green
    }
  ];

  return (
    <section id="services" className="section-container" style={{ backgroundColor: 'hsl(var(--bg-main))' }}>
      <div className="container" style={{ zIndex: 10 }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div className="sub-heading" style={{ justifyContent: 'center' }}>Our Capabilities</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Digital Services
          </h2>
          <p style={{ color: 'hsl(var(--text-secondary))', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
            Engineered solutions bridging the gap between imaginative concepts and cutting-edge reality.
          </p>
        </motion.div>

        {/* Services Explicit Row Layout */}
        <div className="services-layout-wrapper">
          <div className="services-row-1">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <ServiceCard service={service} onClick={setSelectedService} />
              </motion.div>
            ))}
          </div>
          <div className="services-row-2">
            {services.slice(2, 5).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <ServiceCard service={service} onClick={setSelectedService} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Detailed Panel (Modal) */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 100000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              style={{
                backgroundColor: 'hsl(var(--bg-main))',
                border: '1px solid hsl(var(--glass-border))',
                boxShadow: '0 24px 48px rgba(0,0,0,0.15)',
                borderRadius: '16px',
                padding: '3rem',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  position: 'absolute', top: '2rem', right: '2rem',
                  backgroundColor: 'hsl(var(--bg-secondary))',
                  border: '1px solid hsl(var(--glass-border))',
                  borderRadius: '50%',
                  width: '40px', height: '40px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  color: 'hsl(var(--text-primary))', cursor: 'pointer', transition: 'all 0.2s'
                }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--text-secondary))'; e.currentTarget.style.color = '#000'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--bg-secondary))'; e.currentTarget.style.color = 'hsl(var(--text-primary))'; }}
              >
                <X size={20} />
              </button>

              <div style={{
                width: '64px', height: '64px',
                borderRadius: '12px',
                backgroundColor: 'hsl(var(--bg-secondary))',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                color: 'hsl(var(--accent-primary))',
                marginBottom: '2rem',
              }}>
                <selectedService.icon size={30} />
              </div>

              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'hsl(var(--text-primary))' }}>{selectedService.title}</h2>
              <div style={{ height: '4px', width: '60px', backgroundColor: 'hsl(var(--accent-primary))', marginBottom: '2rem', borderRadius: '2px' }} />

              <p style={{ color: 'hsl(var(--text-secondary))', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                {selectedService.fullDesc}
              </p>

              <h3 style={{ color: 'hsl(var(--text-primary))', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Capabilities:</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginBottom: '3rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }}>
                {selectedService.capabilities.map((cap, i) => (
                  <li key={i} style={{
                    color: 'hsl(var(--text-secondary))',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: 'hsl(var(--accent-primary))' }} />
                    <span style={{ textTransform: 'capitalize' }}>{cap}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary"
                onClick={() => setSelectedService(null)}
              >
                <span>Start a Project</span>
                <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
