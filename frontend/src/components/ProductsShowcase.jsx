import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Bot, ShoppingBag, MessageSquare, Fuel, Map, ArrowRight } from 'lucide-react';

const products = [

  {
    id: 'gangavathi',
    name: 'Discover Gangavathi',
    desc: 'A comprehensive city discovery platform connecting local businesses with tourists through interactive maps and digital economies.',
    tech: ['React', 'MongoDB', 'GraphQL', 'Vercel'],
    features: ['Interactive GIS', 'Local Marketplaces', 'Event Aggregation'],
    image: 'https://vazraka-images.s3.ap-south-1.amazonaws.com/discover-gangavathi.png',
    link: 'https://discover-gangavathi.netlify.app/'
  },
  {
    id: 'nexus-ai',
    name: 'Nexus AI',
    desc: 'An intelligent platform combining multiple advanced AI tools into a single, cohesive ecosystem for enterprise automation.',
    tech: ['React', 'Python', 'TensorFlow', 'OpenAI API'],
    features: ['Unified Interface', 'Predictive Analysis', 'Automated Workflows'],
    image: 'https://mynexusai.com/wp-content/uploads/nexus-filechat.jpg',
    link: 'https://mynexusai.com/'
  },
  {
    id: 'spook',
    name: 'Spook Interactive',
    desc: 'A next-generation clothing brand ecosystem integrating augmented reality try-ons and immersive digital retail experiences.',
    tech: ['Next.js', 'Stripe', 'Three.js', 'Node.js'],
    features: ['AR Try-on', 'Crypto Integration', 'Dynamic Inventory'],
    image: 'https://cdn.dribbble.com/userupload/27976832/file/original-4500b6217222d32e359884524a564021.jpg?resize=752x&vertical=center',
    link: '#spook-project'
  },
  {
    id: 'chatse',
    name: 'ChatSe',
    desc: 'Real-time encrypted messaging application optimized for massive concurrency, ultra-low latency, and seamless integrations.',
    tech: ['Socket.io', 'React Native', 'Firebase', 'Express'],
    features: ['E2E Encryption', 'Custom Workspaces', 'Voice Channels'],
    image: 'https://vazraka-images.s3.ap-south-1.amazonaws.com/chatse.png',
    link: 'https://chatse.netlify.app/'
  },
  {
    id: 'fuel-delivery',
    name: 'Vazraka Fuel',
    desc: 'An intelligent on-demand fuel delivery system featuring real-time GPS routing, automated dispatching, and IoT metric tracking.',
    tech: ['Google Maps API', 'React', 'IoT WebSockets', 'AWS'],
    features: ['Live Tracking', 'Smart Routing', 'Automated Invoicing'],
    image: 'https://vazraka-images.s3.ap-south-1.amazonaws.com/fuel-delivery-app.png',
    link: 'https://fuel-delivery-app.netlify.app/'
  }
];

export default function ProductsShowcase() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Break viewport into 5 even chunks mapping from 0.0 to 1.0 bounds
    const index = Math.min(Math.floor(latest * products.length), products.length - 1);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activeProduct = products[activeIndex];

  return (
    <section id="products" style={{ backgroundColor: 'hsl(var(--bg-secondary))' }}>

      {/* ========================================================= */}
      {/* UNIFIED STICKY SCROLL STORYTELLING                        */}
      {/* ========================================================= */}
      <div className="products-view" ref={containerRef} style={{ height: `${products.length * 100}vh`, position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

          {/* Static Header Locked Context */}
          <div className="container" style={{ flexShrink: 0, paddingTop: '8vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div className="sub-heading" style={{ justifyContent: 'center', color: 'hsl(var(--text-secondary))' }}>Our Products</div>
              <h2 className="section-title" style={{ color: 'hsl(var(--text-primary))', fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                Innovative Platforms
              </h2>
            </div>
          </div>

          {/* Dynamic Changing Focal Point */}
          <div className="container" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="sticky-product-grid"
                style={{
                  display: 'grid',
                  gap: '4rem',
                  alignItems: 'center',
                  width: '100%',
                  paddingBottom: '10vh'
                }}
              >
                {/* Visual Side Frame */}
                <div style={{ display: 'flex' }}>
                  <div className="sticky-product-image-frame" style={{
                    backgroundColor: 'hsl(var(--bg-main))',
                    borderRadius: 'var(--radius-card)',
                    boxShadow: 'var(--glass-shadow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid hsl(var(--glass-border))',
                    overflow: 'hidden'
                  }}>
                    <img src={activeProduct.image} alt={activeProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h3 className="product-title" style={{ fontSize: '2.4rem', marginBottom: '1rem', color: 'hsl(var(--text-primary))', fontFamily: 'Outfit' }}>
                    {activeProduct.name}
                  </h3>

                  <p className="product-desc" style={{ fontSize: '1.1rem', color: 'hsl(var(--text-secondary))', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                    {activeProduct.desc}
                  </p>

                  <div className="tech-stack-container" style={{ marginBottom: '2.5rem', width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <h4 className="product-tech-title" style={{ color: 'hsl(var(--text-primary))', marginBottom: '1rem', fontSize: '1.1rem', fontFamily: 'Outfit' }}>Technologies</h4>
                    <div className="desktop-tech-list" style={{ flexWrap: 'wrap', gap: '0.8rem' }}>
                      {activeProduct.tech.map((techItem, i) => (
                        <span key={i} className="product-tech-item" style={{
                          padding: '6px 14px',
                          borderRadius: '6px',
                          backgroundColor: 'hsl(var(--bg-main))',
                          border: '1px solid hsl(var(--glass-border))',
                          color: 'hsl(var(--text-secondary))',
                          fontSize: '0.85rem',
                          fontWeight: 500
                        }}>
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="product-feature-list" style={{ padding: 0, listStyle: 'none', marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {activeProduct.features.map((feature, i) => (
                      <li key={i} className="product-feature-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'hsl(var(--text-secondary))', fontSize: '1rem' }}>
                        <div style={{ width: '6px', height: '6px', backgroundColor: 'hsl(var(--accent-primary))', borderRadius: '50%' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href={activeProduct.link} className="btn-secondary" style={{ borderColor: 'hsl(var(--text-primary))', color: 'hsl(var(--text-primary))', display: 'inline-flex' }}>
                    View Project <ArrowRight size={18} style={{ marginLeft: '10px' }} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style>{`
        .sticky-product-grid { grid-template-columns: 1fr 1fr; }
        .sticky-product-image-frame {
          width: 85%;
          max-width: 450px;
          aspect-ratio: 1/1;
        }
        .desktop-tech-list { display: flex; }
        .mobile-tech-text { display: none; }

        @media (max-width: 991px) {
          .sticky-product-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding-bottom: 2vh !important;
          }
          .sticky-product-image-frame {
            width: 100% !important;
            max-width: 500px !important;
            aspect-ratio: 16/9 !important;
            margin: 0 auto !important;
          }
          .product-title {
            font-size: 1.4rem !important;
            margin-bottom: 0.5rem !important;
            // text-align: center !important;
          }
          .product-desc {
            font-size: 0.85rem !important;
            line-height: 1.5 !important;
            margin-bottom: 1rem !important;
            white-space: normal !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            max-width: 100% !important;
            // text-align: center !important;
          }
          .product-tech-title {
            font-size: 0.95rem !important;
            margin-bottom: 1rem !important;
            // text-align: center !important;
          }
          .desktop-tech-list {
            display: flex !important;
            flex-wrap: wrap !important;
            // justify-content: center !important;
            gap: 0.5rem !important;
            margin-bottom: 0.2rem !important;
          }
          .mobile-tech-text { display: none !important; }
          .product-feature-list {
            margin-bottom: 1rem !important;
            gap: 0.5rem !important;
            // align-items: center !important;
          }
          .product-feature-item {
            font-size: 0.85rem !important;
          }
          .product-tech-item {
            font-size: 0.75rem !important;
            padding: 4px 10px !important;
          }
          .btn-secondary {
            display: flex !important;
            width: 100% !important;
            justify-content: center !important;
            margin-top: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
