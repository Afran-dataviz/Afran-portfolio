'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Clock } from 'lucide-react';

const COURSES = [
  'Database Management Systems',
  'Software Engineering',
  'Data Structures & Algorithms',
  'Python Programming',
  'Quantitative & Statistical Techniques',
];

export default function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

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
            Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Education
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
        </div>

        {/* Education Card */}
        <div className="relative">
          {/* Side Vertical line indicator */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6C63FF]/50 to-transparent" />

          <div className="relative flex items-start gap-8 md:gap-12 pl-16 md:pl-24">
            {/* Timeline Cap node */}
            <div className="absolute left-6 md:left-12 w-8 h-8 rounded-full bg-[#050816] border-4 border-secondary shadow-[0_0_15px_rgba(108,99,255,0.7)] -translate-x-1/2 z-20 flex items-center justify-center">
              <GraduationCap className="w-3.5 h-3.5 text-secondary" />
            </div>

            {/* Main content body */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, type: 'spring' as const }}
              className="glass-panel p-8 w-full border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <GraduationCap className="w-40 h-40 text-white" />
              </div>

              {/* Meta information row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-secondary transition-colors duration-300">
                    Bachelor of Computer Science (BCA)
                  </h3>
                  <span className="text-sm font-semibold tracking-wider text-primary uppercase mt-1 block">
                    Yenepoya — Mangalore, Karnataka
                  </span>
                </div>
                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>2022 - 2025</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                    <Award className="w-3.5 h-3.5" />
                    <span>CGPA: 8.7 / 10</span>
                  </div>
                </div>
              </div>

              {/* Content text */}
              <p className="text-sm text-gray-400 leading-relaxed font-light mb-6">
                Acquired foundational training in programming paradigms, computer network design, statistical modeling, and logical query structures. Focused on system integration, database systems engineering, and analytic solutions.
              </p>

              {/* Course items */}
              <div className="border-t border-white/5 pt-6">
                <div className="flex items-center gap-2 mb-4 text-white">
                  <BookOpen className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-bold tracking-wider uppercase">Key Curriculum Focus</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {COURSES.map((course, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-secondary/30 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
