import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, hsl(var(--accent-cyan)), hsl(var(--accent-purple)))',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
        zIndex: 9998,
        boxShadow: '0 0 15px rgba(153, 51, 255, 0.8)'
      }}
    />
  );
}
