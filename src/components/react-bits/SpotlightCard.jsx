import React, { useRef, useState } from 'react';

export const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(147, 51, 234, 0.12)',
  borderColor = 'rgba(217, 119, 6, 0.35)',
}) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-900/10 ${className}`}
    >
      {/* Spotlight glow inside card */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* Dynamic light border */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-2xl z-0"
        style={{
          opacity,
          border: `1px solid ${borderColor}`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
