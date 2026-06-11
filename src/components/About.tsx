'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Database, Briefcase } from 'lucide-react';

const BIO_HIGHLIGHTS = [
  { icon: BookOpen, label: 'BCA Graduate', detail: 'Yenepoya University' },
  { icon: Award, label: 'CGPA 8.7 Achievement', detail: 'Academic Distinction' },
  { icon: Briefcase, label: 'Data Analyst Intern', detail: 'Codelab Systems' },
  { icon: Database, label: 'SQL – Intermediate', detail: 'Database Queries' },
];

const STATS = [
  { value: '6', suffix: ' Months', label: 'Experience' },
  { value: '3+', suffix: '', label: 'Dashboards Created' },
  { value: '10K+', suffix: '', label: 'Records Processed' },
  { value: 'Multi', suffix: 'ple', label: 'Analytics Projects' },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 20 } },
  };

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background Nebulae */}
      <div className="nebula-purple top-20 left-[-100px] opacity-40" />
      <div className="nebula-cyan bottom-20 right-[-100px] opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-6 max-w-6xl relative z-10"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3"
          >
            Discovery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio Content (Left - 7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 flex flex-col gap-6 text-gray-300 font-light leading-relaxed"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold text-white tracking-wide leading-snug"
            >
              Solving complex business challenges through the power of{' '}
              <span className="text-primary font-extrabold">Data Analytics</span> and visual intelligence.
            </motion.h3>

            <motion.p variants={itemVariants} className="text-base text-gray-400">
              I am a detail-oriented Data Analyst and Power BI Developer specializing in gathering messy datasets, restructuring pipelines, and building interactive storytelling dashboards. I bridge the gap between complex databases and strategic business decisions.
            </motion.p>

            {/* Interactive Timeline Info/Credentials List */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {BIO_HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 glass-panel hover:bg-white/5 rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.label}</h4>
                      <p className="text-xs text-gray-500">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Stats Grid (Right - 5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 h-full"
          >
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-panel flex flex-col justify-center items-center p-6 text-center select-none aspect-square relative overflow-hidden group"
              >
                {/* Micro glow effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-glow-cyan mb-2">
                  {stat.value}
                  <span className="text-lg md:text-xl font-bold text-gray-300">{stat.suffix}</span>
                </span>
                
                <span className="text-xs md:text-sm font-medium text-gray-400 tracking-wider">
                  {stat.label}
                </span>

                {/* Subtle light bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
