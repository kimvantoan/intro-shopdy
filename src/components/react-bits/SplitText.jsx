import React from 'react';
import { motion } from 'framer-motion';

export const SplitText = ({
  text = '',
  className = '',
  delay = 0,
  stagger = 0.04,
  as = 'h1',
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 120,
      },
    },
  };

  const Tag = motion[as] || motion.h1;

  return (
    <Tag
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, charIdx) => (
            <motion.span
              key={charIdx}
              variants={child}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  );
};
