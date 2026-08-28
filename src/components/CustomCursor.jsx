import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.scss';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if we are hovering over an interactive element
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
      backgroundColor: "color-mix(in srgb, var(--accent-color) 50%, transparent)",
      mixBlendMode: "difference"
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 2,
      backgroundColor: "color-mix(in srgb, var(--accent-color) 20%, transparent)",
      border: "1px solid color-mix(in srgb, var(--accent-color) 80%, transparent)",
      mixBlendMode: "difference"
    }
  };

  const activeVariant = isHovering ? variants.hover : variants.default;

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: activeVariant.x,
        y: activeVariant.y,
        scale: activeVariant.scale,
        backgroundColor: activeVariant.backgroundColor,
        border: activeVariant.border || "none",
        mixBlendMode: activeVariant.mixBlendMode
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      style={{
        pointerEvents: "none",
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
      }}
    />
  );
};

export default CustomCursor;
