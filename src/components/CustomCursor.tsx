import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for pointer-fine devices (desktops/laptops)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.dataset.cursorHover === 'true'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Large Ambient Radial Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(145, 94, 255, 0.08), transparent 80%)`,
        }}
      />

      {/* 2. Precision Glowing Cursor Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full"
        animate={{
          x: mousePosition.x - (isHovered ? 20 : 6),
          y: mousePosition.y - (isHovered ? 20 : 6),
          width: isHovered ? 40 : 12,
          height: isHovered ? 40 : 12,
          backgroundColor: isHovered ? 'rgba(0, 219, 255, 0.15)' : '#915EFF',
          border: isHovered ? '1.5px solid #00DBFF' : '1px solid rgba(255,255,255,0.8)',
          boxShadow: isHovered
            ? '0 0 20px rgba(0, 219, 255, 0.6)'
            : '0 0 14px rgba(145, 94, 255, 0.8)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 400,
          mass: 0.2,
        }}
      />
    </>
  );
}
