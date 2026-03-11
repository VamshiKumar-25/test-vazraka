import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function GlowingOrb() {
  const { scrollY } = useScroll();
  
  // Apply a spring physics layer to make the scroll movement feel completely natural and fluid
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 80,
    damping: 25,
    mass: 1.2
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Transformation ranges
  // 0 -> Hero section
  // 800 -> Innovation section (About)
  // 1600 -> Services section
  // 2400+ -> Lower sections
  const scrollRange = [0, 800, 1600, 2400];
  
  // Transform scale: Starts large, shrinks at Innovation, shrinks more later
  const scale = useTransform(smoothScrollY, scrollRange, [1.2, 0.6, 0.4, 0.3]);
  
  // Transform X position: Right Side (35vw) to Center (0vw) and stays there
  const xOffset = useTransform(smoothScrollY, scrollRange, ['35vw', '0vw', '0vw', '0vw']);
  
  // Transform Y position:
  // In Hero: slightly above center to sit next to headline
  // In later sections: remains vertically centered so it acts as a background element under titles
  const yOffset = useTransform(smoothScrollY, scrollRange, ['-10vh', '0vh', '0vh', '0vh']);

  // Blur transformation: Starts somewhat sharp, gets very blurry to act as background gradient
  const blurValue = useTransform(smoothScrollY, scrollRange, [30, 80, 120, 150]);
  
  // Opacity: Fully bright in hero, softer in background
  const opacity = useTransform(smoothScrollY, scrollRange, [0.8, 0.4, 0.2, 0.1]);

  // Combine scroll transforms with slight mouse parallax
  // Parallax is stronger in Hero, scaling down alongside the orb size.
  const parallaxX = useTransform(smoothScrollY, scrollRange, [mousePosition.x * 50, mousePosition.x * 20, mousePosition.x * 10, 0]);
  const parallaxY = useTransform(smoothScrollY, scrollRange, [mousePosition.y * 50, mousePosition.y * 20, mousePosition.y * 10, 0]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        x: useTransform(() => `calc(-50% + ${xOffset.get()} + ${parallaxX.get()}px)`),
        y: useTransform(() => `calc(-50% + ${yOffset.get()} + ${parallaxY.get()}px)`),
        scale: scale,
        opacity: opacity,
        zIndex: 0, // Behind all content
        pointerEvents: 'none',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, rgba(153, 51, 255, 0.9), rgba(0, 255, 255, 0.6) 50%, rgba(10, 15, 25, 0) 70%)',
        boxShadow: '0 0 100px rgba(153, 51, 255, 0.6), inset 0 0 50px rgba(0, 255, 255, 0.6)',
        filter: useTransform(() => `blur(${blurValue.get()}px)`),
        mixBlendMode: 'screen',
      }}
      // Continuous slow floating animation independent of scroll
      animate={{
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        rotate: { duration: 60, repeat: Infinity, ease: "linear" }
      }}
    />
  );
}
