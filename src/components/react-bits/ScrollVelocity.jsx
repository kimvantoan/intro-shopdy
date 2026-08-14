import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';

export const ScrollVelocity = ({
  texts = [],
  velocity = 5,
  className = '',
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * velocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${(v % 50) - 50}%`);

  return (
    <div className="relative overflow-hidden w-full py-4 border-y border-slate-200 bg-white/70 backdrop-blur-md shadow-inner">
      <motion.div style={{ x }} className={`flex whitespace-nowrap gap-10 font-display ${className}`}>
        {[...texts, ...texts, ...texts, ...texts].map((text, idx) => (
          <span key={idx} className="flex items-center gap-6 text-xl sm:text-2xl font-extrabold tracking-widest text-slate-800 uppercase">
            <span>{text}</span>
            <span className="text-amber-600 font-normal">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
