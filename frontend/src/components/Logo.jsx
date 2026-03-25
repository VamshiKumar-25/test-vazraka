import React from 'react';
import { motion } from 'framer-motion';

export default function Logo({ size = 'navbar', showText = true, className = '' }) {
  // Map semantic sizes for the SVG icon
  const iconSizeMap = {
    large: '48px',
    navbar: '28px',
    icon: '36px',
    favicon: '16px'
  };

  const pxSize = iconSizeMap[size] || size;

  // Map semantic sizes for the Brand Typography
  const textSizeMap = {
    large: '1.8rem',
    navbar: '1.25rem',
    icon: '1.5rem',
    favicon: '1rem'
  };
  const textPx = textSizeMap[size] || '1.1rem';

  return (
    <motion.div
      className={`brand-lockup ${className}`}
      style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        style={{ width: pxSize, height: pxSize, flexShrink: 0 }}
        className="vazraka-logo-svg"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, duration: 0.3 }}
      >
        <style>
          {`
            .vazraka-logo-svg {
              overflow: visible;
            }
            .logo-main-shape {
              fill: var(--logo-main);
              transition: all 0.3s ease;
            }
            .logo-accent-shape {
              fill: var(--logo-accent);
              transition: all 0.4s ease;
            }
            .brand-lockup:hover .logo-main-shape {
              filter: drop-shadow(0px 6px 12px rgba(0,0,0,0.15));
            }
            .brand-lockup:hover .logo-accent-shape {
              filter: drop-shadow(0px 0px 16px var(--logo-accent));
            }
            .brand-text-dot {
              color: var(--logo-accent);
              transition: all 0.4s ease;
              display: inline-block;
            }
            .brand-lockup:hover .brand-text-dot {
              text-shadow: 0px 0px 12px var(--logo-accent);
              transform: translateY(-2px);
            }
          `}
        </style>

        {/* 1. Left long diagonal shape */}
        <polygon points="1.2,16 41.2,16 88,120 48,120" className="logo-main-shape" />

        {/* 2. Large bottom triangle pointing down */}
        <polygon points="91,100 163,100 127,180" className="logo-main-shape" />

        {/* 3. Right diagonal shape connected to triangle */}
        <polygon points="145.5,50 185.5,50 163,100 123,100" className="logo-main-shape" />

        {/* 4. Small floating rectangle (accent element) */}
        <motion.polygon
          points="160.8,16 200.8,16 191.8,36 151.8,36"
          className="logo-accent-shape"
          variants={{
            rest: { y: 0 },
            hover: { y: -4 }
          }}
        />
      </motion.svg>

      {showText && (
        <span style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: textPx,
          fontWeight: 700,
          color: 'hsl(var(--text-primary))',
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap'
        }}>
          Vazraka Inn<span className="brand-text-dot">.</span>
        </span>
      )}
    </motion.div>
  );
}
