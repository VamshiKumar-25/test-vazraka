import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
          background: 'radial-gradient(circle, rgba(77, 121, 255, 0.08) 0%, rgba(153, 51, 255, 0.03) 40%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'screen',
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(0, 255, 255, 0.5)',
          borderRadius: '50%',
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'transform 0.05s linear',
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
        }}
      />
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#00ffff',
          borderRadius: '50%',
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          pointerEvents: 'none',
          zIndex: 10001,
          boxShadow: '0 0 8px #00ffff',
        }}
      />
    </>
  );
}
