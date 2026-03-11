import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Smartphone, Layout, Cloud, Share2, Video, X, ArrowRight } from 'lucide-react';

// Reusing the futuristic Tilt Card logic from FutureVision
const TiltCard = ({ service, onClick }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate 3D rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation is 15 degrees
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`glass-panel service-card ${isHovered ? 'hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(service)}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        z: isHovered ? 50 : 0,
        y: isHovered ? -10 : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{
        padding: '2.5rem',
        cursor: 'pointer',
        position: 'relative',
        transformStyle: 'preserve-3d',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        border: isHovered ? `1px solid ${service.color}` : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isHovered ? `0 25px 50px rgba(0,0,0,0.6), inset 0 0 30px ${service.color}33, 0 0 30px ${service.color}66` : 'var(--glass-shadow)',
      }}
    >
      <motion.div 
        style={{ 
          width: '60px', height: '60px', 
          borderRadius: '16px',
          background: `linear-gradient(135deg, ${service.color}22, transparent)`,
          border: `1px solid ${service.color}55`,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          color: service.color,
          transform: 'translateZ(30px)'
        }}
        animate={{ 
          boxShadow: isHovered ? `0 0 20px ${service.color}66` : 'none',
          y: isHovered ? -5 : 0
        }}
      >
        <service.icon size={30} />
      </motion.div>
      
      <div style={{ transform: 'translateZ(20px)' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{service.title}</h3>
        <p style={{ color: 'hsl(var(--text-secondary))', lineHeight: 1.6 }}>{service.shortDesc}</p>
      </div>
      
      <motion.div 
        style={{ 
          marginTop: 'auto', 
          transform: 'translateZ(40px)',
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          color: service.color,
          fontWeight: 600,
          opacity: 0.8
        }}
        animate={{ 
          opacity: isHovered ? 1 : 0.6,
          x: isHovered ? 5 : 0
        }}
      >
        Explore Service <ArrowRight size={18} />
      </motion.div>
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
      title: 'Ready-Made Reels & Content Shoots',
      shortDesc: 'Creative media production through The Nexus Media.',
      fullDesc: 'Powered directly by The Nexus Media, we deliver breathtaking visual assets and professional creative media production.',
      capabilities: ['edited reels production', 'professional content shoots', 'brand content creation', 'promotional videos'],
      icon: Video,
      color: '#00ff99' // Neon Green
    }
  ];

  return (
    <section id="services" className="section-container" style={{ perspective: '1000px' }}>
      <div className="container" style={{ zIndex: 10 }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div className="sub-heading" style={{ justifyContent: 'center' }}>Our Capabilities</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
            Digital <span className="text-gradient">Services</span>
          </h2>
          <p style={{ color: 'hsl(var(--text-secondary))', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
            Engineered solutions bridging the gap between imaginative concepts and cutting-edge reality.
          </p>
        </motion.div>

        {/* Services Explicit Row Layout */}
        <div className="services-layout-wrapper">
          <div className="services-row-1">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <TiltCard service={service} onClick={setSelectedService} />
              </motion.div>
            ))}
          </div>
          <div className="services-row-2">
            {services.slice(2, 5).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <TiltCard service={service} onClick={setSelectedService} />
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
              backgroundColor: 'rgba(5, 10, 20, 0.8)',
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
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                background: 'linear-gradient(135deg, rgba(20, 25, 40, 0.9) 0%, rgba(10, 15, 25, 0.95) 100%)',
                border: `1px solid ${selectedService.color}55`,
                boxShadow: `0 40px 100px rgba(0,0,0,0.8), inset 0 0 40px ${selectedService.color}11, 0 0 60px ${selectedService.color}33`,
                borderRadius: '24px',
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
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: '40px', height: '40px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  color: '#fff', cursor: 'pointer', transition: 'all 0.3s'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <X size={20} />
              </button>

              <div style={{ 
                width: '80px', height: '80px', 
                borderRadius: '20px',
                background: `linear-gradient(135deg, ${selectedService.color}22, transparent)`,
                border: `1px solid ${selectedService.color}88`,
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                color: selectedService.color,
                marginBottom: '2rem',
                boxShadow: `0 0 30px ${selectedService.color}44`
              }}>
                <selectedService.icon size={40} />
              </div>

              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>{selectedService.title}</h2>
              <div style={{ height: '3px', width: '60px', background: selectedService.color, marginBottom: '2rem', borderRadius: '2px', boxShadow: `0 0 10px ${selectedService.color}` }} />
              
              <p style={{ color: 'hsl(var(--text-secondary))', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                {selectedService.fullDesc}
              </p>

              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Capabilities:</h3>
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
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: selectedService.color, boxShadow: `0 0 8px ${selectedService.color}` }} />
                    <span style={{ textTransform: 'capitalize' }}>{cap}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary" 
                onClick={() => setSelectedService(null)}
                style={{ 
                  background: `linear-gradient(135deg, ${selectedService.color}, ${selectedService.color}88)`,
                  boxShadow: `0 0 20px ${selectedService.color}66`
                }}
              >
                <span>Start a Project</span>
                <ArrowRight size={20} style={{ marginLeft: '10px', position: 'relative', zIndex: 1 }} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
