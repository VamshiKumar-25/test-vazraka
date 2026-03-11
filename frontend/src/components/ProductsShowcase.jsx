import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Bot, ShoppingBag, MessageSquare, Fuel, Map, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'nexus-ai',
    name: 'Nexus AI',
    desc: 'An intelligent platform combining multiple advanced AI tools into a single, cohesive ecosystem for enterprise automation.',
    tech: ['React', 'Python', 'TensorFlow', 'OpenAI API'],
    features: ['Unified Interface', 'Predictive Analysis', 'Automated Workflows'],
    color: '#9933ff', // Purple
    icon: Bot
  },
  {
    id: 'spook',
    name: 'Spook Interactive',
    desc: 'A next-generation clothing brand ecosystem integrating augmented reality try-ons and immersive digital retail experiences.',
    tech: ['Next.js', 'Stripe', 'Three.js', 'Node.js'],
    features: ['AR Try-on', 'Crypto Integration', 'Dynamic Inventory'],
    color: '#ff3366', // Pink
    icon: ShoppingBag
  },
  {
    id: 'chatse',
    name: 'ChatSe',
    desc: 'Real-time encrypted messaging application optimized for massive concurrency, ultra-low latency, and seamless integrations.',
    tech: ['Socket.io', 'React Native', 'Firebase', 'Express'],
    features: ['E2E Encryption', 'Custom Workspaces', 'Voice Channels'],
    color: '#00ff99', // Green
    icon: MessageSquare
  },
  {
    id: 'fuel-delivery',
    name: 'Vazraka Fuel',
    desc: 'An intelligent on-demand fuel delivery system featuring real-time GPS routing, automated dispatching, and IoT metric tracking.',
    tech: ['Google Maps API', 'React', 'IoT WebSockets', 'AWS'],
    features: ['Live Tracking', 'Smart Routing', 'Automated Invoicing'],
    color: '#4d79ff', // Blue
    icon: Fuel
  },
  {
    id: 'gangavathi',
    name: 'Discover Gangavathi',
    desc: 'A comprehensive city discovery platform connecting local businesses with tourists through interactive maps and digital economies.',
    tech: ['React', 'MongoDB', 'GraphQL', 'Vercel'],
    features: ['Interactive GIS', 'Local Marketplaces', 'Event Aggregation'],
    color: '#ffcc00', // Yellow/Gold
    icon: Map
  }
];

const ProductItem = ({ product, index, progress }) => {
  // We have 5 products. Scroll progress goes from 0 to 1.
  // Each product gets a designated "center" point where it is fully visible.
  const center = index / (products.length - 1); // 0, 0.25, 0.5, 0.75, 1
  
  // Create a transition range window around the center point.
  const range = [center - 0.2, center, center + 0.2];
  
  // Transform values based on scroll
  const opacity = useTransform(progress, range, [0, 1, 0]);
  const yPosition = useTransform(progress, range, [100, 0, -100]);
  const scale = useTransform(progress, range, [0.8, 1, 0.9]);
  const imageScale = useTransform(progress, range, [0.8, 1, 1.2]);
  
  return (
    <motion.div 
      className="product-showcase-grid"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity,
        pointerEvents: useTransform(opacity, (val) => val > 0.5 ? 'auto' : 'none')
      }}
    >
      {/* Left Column: Visual/Image Preview */}
      <motion.div className="product-visual" style={{ scale: imageScale }}>
         <div 
           className="glass-panel" 
           style={{ 
             width: '100%', 
             paddingBottom: '100%', 
             position: 'relative',
             background: `radial-gradient(circle at top left, ${product.color}22, transparent 70%), rgba(10, 15, 25, 0.5)`,
             border: `1px solid ${product.color}44`,
             boxShadow: `0 30px 60px rgba(0,0,0,0.6), inset 0 0 40px ${product.color}22`,
             overflow: 'hidden'
           }}
         >
            {/* Visual Abstract Content */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.div 
                 style={{ color: product.color, filter: `drop-shadow(0 0 30px ${product.color})` }}
                 animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <product.icon size={120} strokeWidth={1} />
              </motion.div>
            </div>
            
            {/* Decorative background lines */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, pointerEvents: 'none' }}>
              <defs>
                <pattern id={`grid-${product.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke={product.color} strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${product.id})`} />
            </svg>
         </div>
      </motion.div>

      {/* Right Column: Product Info */}
      <motion.div className="product-info" style={{ y: yPosition, scale }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
           <div style={{ width: '50px', height: '2px', background: product.color, boxShadow: `0 0 10px ${product.color}` }} />
           <span style={{ color: product.color, fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Vazraka Product</span>
         </div>
         
         <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', color: '#fff', textShadow: `0 0 20px ${product.color}66` }}>
           {product.name}
         </h3>
         
         <p style={{ fontSize: '1.15rem', color: 'hsl(var(--text-secondary))', lineHeight: 1.7, marginBottom: '2.5rem' }}>
           {product.desc}
         </p>
         
         {/* Tech Stack Chips */}
         <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1rem', opacity: 0.8 }}>Technologies Used:</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {product.tech.map((techItem, i) => (
                <span key={i} style={{ 
                  padding: '6px 14px', 
                  borderRadius: '20px', 
                  background: `linear-gradient(90deg, ${product.color}11, transparent)`, 
                  border: `1px solid ${product.color}44`,
                  color: '#fff',
                  fontSize: '0.9rem'
                }}>
                  {techItem}
                </span>
              ))}
            </div>
         </div>
         
         <ul>
           {product.features.map((feature, i) => (
             <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'hsl(var(--text-secondary))', marginBottom: '0.8rem' }}>
               <div style={{ width: '6px', height: '6px', background: product.color, borderRadius: '50%' }} />
               {feature}
             </li>
           ))}
         </ul>
         
         <div style={{ marginTop: '2rem' }}>
           <button className="btn-secondary" style={{ borderColor: product.color, color: product.color }}>
             View Project <ArrowRight size={18} style={{ marginLeft: '10px' }} />
           </button>
         </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProductsShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when the top of the container hits the top of the viewport.
    // End tracking when the bottom of the container hits the bottom of the viewport.
    offset: ["start start", "end end"]
  });

  return (
    // Height is 500vh to ensure enough scroll duration for 5 distinct products to crossfade perfectly.
    <section id="products" ref={containerRef} style={{ height: '500vh', position: 'relative' }}>
      
      {/* Sticky Container - locks to viewport while user scrolls through 500vh */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        
        {/* Fixed Section Header */}
        <div style={{ paddingTop: '10vh', paddingBottom: '2vh', textAlign: 'center', zIndex: 10, position: 'relative' }}>
          <div className="sub-heading" style={{ justifyContent: 'center' }}>Our Products</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: 0 }}>
            Innovative <span className="text-gradient">Platforms</span>
          </h2>
        </div>

        {/* Storytelling Product Layers */}
        <div className="container product-showcase-container" style={{ position: 'relative', flex: 1 }}>
          {/* We absolutely position the products inside this relative container so they stack perfectly */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {products.map((product, index) => (
              <ProductItem key={product.id} product={product} index={index} progress={scrollYProgress} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
