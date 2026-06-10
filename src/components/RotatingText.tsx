'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROLES = [
  'Data Analyst',
  'Business Intelligence Analyst',
  'Power BI Developer',
  'Python Developer',
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 flex justify-center items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="text-xl md:text-3xl font-bold tracking-wide bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-glow-cyan"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
