import React from 'react';
import { motion } from 'framer-motion';

export const BlurText = ({
  text = '',
  className = '',
  delay = 0,
  duration = 0.8,
  as = 'p',
}) => {
  const Tag = motion[as] || motion.p;

  return (
    <Tag
      initial={{ opacity: 0, filter: 'blur(16px)', y: 16 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
      className={className}
    >
      {text}
    </Tag>
  );
};
