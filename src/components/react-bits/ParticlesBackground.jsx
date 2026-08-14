import React, { useEffect, useRef } from 'react';

export const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking state with smooth spring easing
    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      radius: 220,
      active: true
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Vibrant Color Palette
    const colors = [
      'rgba(124, 58, 237, ',   // Violet
      'rgba(236, 72, 153, ',   // Rose Pink
      'rgba(245, 158, 11, ',   // Amber Gold
      'rgba(79, 70, 229, ',    // Indigo
    ];

    // Particle nodes configuration with dynamic color
    const particleCount = Math.min(Math.floor(window.innerWidth / 15), 75);
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 1.2,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.3,
    }));

    const render = () => {
      // Smooth lerp for cursor spring tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Render Interactive Vivid Mouse Glow Aura
      if (mouse.active) {
        const auraGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        auraGradient.addColorStop(0, 'rgba(124, 58, 237, 0.15)');
        auraGradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.08)');
        auraGradient.addColorStop(1, 'rgba(245, 158, 11, 0)');
        
        ctx.fillStyle = auraGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Update & Draw Particle Nodes with Interactive Physics
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Magnetic Attraction & Connecting Rays to Mouse
        if (distance < mouse.radius) {
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;

          // Connecting Beam Ray to Cursor
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(124, 58, 237, ${0.4 * force})`;
          ctx.lineWidth = 1.2 * force;
          ctx.stroke();
        }

        // Draw Particle Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = distance < mouse.radius ? 'rgba(124, 58, 237, 0.9)' : `${p.color}${p.alpha})`;
        ctx.fill();

        // Connect nearby particles to each other with glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pDistanceX = p.x - p2.x;
          const pDistanceY = p.y - p2.y;
          const pDist = Math.sqrt(pDistanceX * pDistanceX + pDistanceY * pDistanceY);

          if (pDist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.2 * (1 - pDist / 140)})`;
            ctx.lineWidth = 0.8 * (1 - pDist / 140);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Crisp Geometric Line Grid Pattern */}
      <div className="absolute inset-0 bg-line-grid opacity-90" />

      {/* High-Impact Vibrant Glowing Ambient Orbs */}
      <div className="absolute -top-[10%] left-[10%] w-[650px] h-[650px] bg-gradient-to-tr from-purple-400/25 via-pink-400/20 to-amber-300/25 rounded-full blur-[140px] animate-float-glow" />
      <div className="absolute top-[35%] -right-[10%] w-[700px] h-[700px] bg-gradient-to-br from-indigo-400/25 via-purple-400/20 to-rose-300/25 rounded-full blur-[160px] animate-float-glow" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-[65%] left-[15%] w-[600px] h-[600px] bg-gradient-to-tr from-rose-400/25 via-amber-400/20 to-purple-400/25 rounded-full blur-[150px] animate-float-glow" style={{ animationDelay: '-7s' }} />

      {/* High-Contrast Interactive HTML5 Canvas Particles responding to Mouse Move */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-90"
      />
    </div>
  );
};
