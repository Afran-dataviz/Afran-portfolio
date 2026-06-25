'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';
import AnimatedLetterText from './AnimatedLetterText';
import RotatingText from './RotatingText';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-[#050816]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-bold tracking-[0.2em] text-primary/80 uppercase">Loading 3D Constellation...</span>
      </div>
    </div>
  ),
});

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  // Parallax displacement for depth layers
  const yParallax = useTransform(scrollY, [0, 800], [0, 150]);
  const splineParallax = useTransform(scrollY, [0, 800], [0, 80]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24"
    >
      {/* LAYER 1: Space Canvas Background (Handled globally by App layout) */}
      
      {/* LAYER 2: Spline 3D Scene Layer */}
      <motion.div 
        style={{ y: splineParallax }}
        className="absolute inset-0 z-[10] flex items-center justify-center w-full h-full"
      >
        <Spline 
          scene="https://prod.spline.design/lIrMdYvDekTx7xSw/scene.splinecode" 
          className="w-full h-full object-cover scale-105 md:scale-100"
        />
      </motion.div>

      {/* LAYER 3: Dark Overlay Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-space/30 via-bg-space/60 to-bg-space z-[15] pointer-events-none" />

      {/* LAYER 4: Glow effects - Mouse-following Spotlight overlay */}
      <div
        className="absolute inset-0 z-[18] pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 450px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 229, 255, 0.06) 0%, rgba(138, 43, 226, 0.03) 50%, transparent 100%)`,
        }}
      />

      {/* LAYER 5: Hero Content */}
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="container mx-auto px-6 z-[25] flex flex-col items-center justify-center text-center text-white select-none relative"
      >
        {/* Subtle backing blur for content readability over interactive Spline */}
        <div className="absolute -inset-10 bg-bg-space/10 filter blur-2xl rounded-full -z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-semibold tracking-[0.3em] text-primary/80 uppercase mb-4 text-glow-cyan"
        >
          Hello, I&apos;m
        </motion.div>

        {/* Centerpiece Text "AFRAN" */}
        <AnimatedLetterText text="AFRAN" />

        {/* Rotating Role Text */}
        <div className="mt-2 mb-6">
          <RotatingText />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed font-light mb-10 px-4 drop-shadow-[0_2px_8px_rgba(5,8,22,0.9)]"
        >
          Technical Specialist and Data Analyst specializing in SQL databases, Python automation, and software troubleshooting to solve complex technical challenges and support users.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md px-4"
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-sm tracking-wider flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all duration-300"
          >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 w-full h-full bg-white/10 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => handleScrollTo('contact')}
            className="group w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:border-primary/40 rounded-full font-semibold text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
          >
            <span>Contact Me</span>
            <Mail className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[30] cursor-pointer flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-semibold hover:text-primary transition-colors">
          Scroll Down
        </span>
        <div className="w-[24px] h-[40px] rounded-full border-2 border-gray-600 flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}

