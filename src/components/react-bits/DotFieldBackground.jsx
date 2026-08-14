import React, { useEffect, useRef } from 'react';

export const DotFieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking state for Dot Field displacement
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
      active: false
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Dot Field Grid parameters
    const spacing = 28; // Spacing between dots in px
    const baseRadius = 1.25;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / spacing) + 2;
      const rows = Math.ceil(canvas.height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = i * spacing;
          const originY = j * spacing;

          // Ambient subtle wave motion
          const wave = Math.sin(time + i * 0.2 + j * 0.2) * 1.5;

          // Mouse interaction displacement
          let offsetX = 0;
          let offsetY = 0;
          let currentRadius = baseRadius;
          let alpha = 0.2;
          let isHovered = false;

          if (mouse.active) {
            const dx = mouse.x - originX;
            const dy = mouse.y - originY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              isHovered = true;
              const force = (mouse.radius - dist) / mouse.radius;
              const angle = Math.atan2(dy, dx);
              
              // Push dots slightly away from cursor for interactive field displacement
              const push = force * 12;
              offsetX = -Math.cos(angle) * push;
              offsetY = -Math.sin(angle) * push;

              currentRadius = baseRadius + force * 1.8;
              alpha = 0.2 + force * 0.65;
            }
          }

          const drawX = originX + offsetX;
          const drawY = originY + offsetY + wave;

          ctx.beginPath();
          ctx.arc(drawX, drawY, currentRadius, 0, Math.PI * 2);
          
          if (isHovered) {
            ctx.fillStyle = `rgba(15, 23, 42, ${alpha})`; // Dark Obsidian / Slate highlight
          } else {
            ctx.fillStyle = `rgba(15, 23, 42, ${alpha})`;
          }

          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
      {/* Background Studio - Ambient Soft Gradient Lighting */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[140px] animate-float-glow" />
      <div className="absolute top-[50%] right-[15%] w-[600px] h-[600px] bg-slate-300/40 rounded-full blur-[160px] animate-float-glow" style={{ animationDelay: '-5s' }} />

      {/* Interactive Dot Field HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-90"
      />
    </div>
  );
};
