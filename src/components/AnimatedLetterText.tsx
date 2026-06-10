'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedLetterTextProps {
  text: string;
}

export default function AnimatedLetterText({ text }: AnimatedLetterTextProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 * i },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8,
    },
  };

  const letters = Array.from(text);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex select-none flex-wrap justify-center py-2"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          whileHover={{
            scale: 1.15,
            y: -8,
          }}
          transition={{ type: 'spring' as const, stiffness: 400, damping: 10 }}
          className="mx-1 text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent cursor-pointer transition-all duration-300 select-none"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)',
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
