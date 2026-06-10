'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Briefcase, CheckCircle2 } from 'lucide-react';

const ACHIEVEMENTS = [
  'Analyzed complex datasets using Python to extract valuable performance metrics.',
  'Reduced manual reporting timeline by 30% through visual model standardization.',
  'Built 3+ dynamic Power BI dashboards for direct business stakeholder updates.',
  'Managed SQL databases by verifying index values and querying transactional tables.',
  'Cleaned and validated 10,000+ data records using Power Query features.',
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Background grids and nebulas */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none animate-pulse-glow" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-6 max-w-4xl relative z-10"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3"
          >
            Chronology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative min-h-[500px]">
          
          {/* Vertical Track Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
            {/* Glowing scroll-progress indicator */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-accent shadow-[0_0_10px_rgba(0,229,255,0.5)]"
            />
          </div>

          {/* Timeline Item: Codelab Systems */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            
            {/* Timeline node dot */}
            <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-bg-space border-4 border-primary shadow-[0_0_15px_rgba(0,229,255,0.8)] -translate-x-1/2 z-20" />

            {/* Left Column (Meta details) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, type: 'spring' as const }}
              className="pl-16 md:pl-0 md:pr-16 md:text-right flex flex-col md:items-end gap-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide">
                <Calendar className="w-3.5 h-3.5" />
                <span>Oct 2025 – Mar 2026</span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white mt-2">Data Analyst Intern</h3>
              <span className="text-sm font-semibold tracking-wider text-secondary uppercase">
                Codelab Systems
              </span>
            </motion.div>

            {/* Right Column (Achievements Card) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, type: 'spring' as const }}
              className="pl-16 md:pl-8"
            >
              <div className="glass-panel p-6 border border-white/5 relative overflow-hidden group">
                {/* Glow border overlay */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-primary to-secondary" />

                <div className="flex items-center gap-3 mb-4 text-white">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="font-bold text-sm tracking-wider uppercase">Key Achievements</span>
                </div>

                <ul className="flex flex-col gap-4 text-sm text-gray-400 font-light">
                  {ACHIEVEMENTS.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3 group/li"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary/80 mt-0.5 shrink-0 group-hover/li:text-primary transition-colors duration-200" />
                      <span className="group-hover/li:text-gray-200 transition-colors duration-200 leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
