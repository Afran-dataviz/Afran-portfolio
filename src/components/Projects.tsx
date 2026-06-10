'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BarChart2, PieChart, Activity } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tools: string[];
  demoUrl: string;
  githubUrl: string;
  previewType: 'netflix' | 'uber' | 'churn';
}

const PROJECTS: Project[] = [
  {
    title: 'Netflix Data Analysis Dashboard',
    description: 'Interactive dashboard analyzing trends, genres, ratings, and yearly release patterns across Netflix content. It provides structured breakdowns of content growth patterns.',
    tools: ['Power BI', 'Excel', 'Power Query'],
    demoUrl: 'https://github.com/Afran-dataviz/netflix-excel-dashboard',
    githubUrl: 'https://github.com/Afran-dataviz/netflix-excel-dashboard',
    previewType: 'netflix',
  },
  {
    title: 'Uber Data Analytics Dashboard',
    description: 'Analysis of 100,000+ trip records to uncover revenue trends, booking patterns, ride distributions, and customer behavioral metrics across distinct dates and areas.',
    tools: ['SQL', 'Python', 'Power BI'],
    demoUrl: 'https://github.com/Afran-dataviz/uber-powerbi-dashboard',
    githubUrl: 'https://github.com/Afran-dataviz/uber-powerbi-dashboard',
    previewType: 'uber',
  },
  {
    title: 'Bank Customer Churn SQL Analysis',
    description: 'Customer churn analysis using advanced SQL queries to identify retention patterns, risk factors, and actionable business retention recommendations.',
    tools: ['SQL Server', 'SSMS'],
    demoUrl: 'https://github.com/Afran-dataviz/Bank-Customer-Churn-SQL-Analysis',
    githubUrl: 'https://github.com/Afran-dataviz/Bank-Customer-Churn-SQL-Analysis',
    previewType: 'churn',
  },
];

// Helper to render stylized CSS dashboard mockups representing projects
function DashboardPreview({ type }: { type: 'netflix' | 'uber' | 'churn' }) {
  if (type === 'netflix') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#E50914]/10 to-bg-space flex flex-col p-4 justify-between border-b border-white/5 relative overflow-hidden">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold tracking-wider text-[#E50914] uppercase">Netflix Analytics</span>
          <span className="text-[10px] text-gray-500">Live Stream Data</span>
        </div>
        <div className="flex gap-2 items-end justify-center h-24 mt-2">
          {/* Mock Bar Chart */}
          <div className="w-4 bg-[#E50914]/40 h-8 rounded-t" />
          <div className="w-4 bg-[#E50914]/60 h-16 rounded-t animate-pulse" />
          <div className="w-4 bg-[#E50914]/80 h-12 rounded-t" />
          <div className="w-4 bg-[#E50914] h-20 rounded-t" />
          <div className="w-4 bg-[#E50914]/50 h-10 rounded-t" />
        </div>
        <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-2">
          <div className="flex items-center gap-1.5">
            <PieChart className="w-3.5 h-3.5 text-primary" />
            <span className="text-[9px] text-gray-400">Genre Distribution</span>
          </div>
          <span className="text-[9px] font-bold text-white">8.7K Titles</span>
        </div>
      </div>
    );
  }

  if (type === 'uber') {
    return (
      <div className="w-full h-full bg-[#0A0A0A] flex flex-col p-4 justify-between border-b border-white/5 relative overflow-hidden">
        {/* Subtle grid pattern for map background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        {/* Outer radial glow in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,193,103,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="flex justify-between items-center relative z-10">
          <span className="text-[10px] font-black tracking-widest text-white uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06C167] shadow-[0_0_8px_#06C167] animate-pulse" />
            Uber Analytics
          </span>
          <span className="text-[9px] font-mono text-gray-500">100,000+ Records</span>
        </div>

        {/* Mock Map / Node Network */}
        <div className="relative h-24 w-full relative z-10">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 96" fill="none">
            {/* Background routes / grids */}
            <path
              d="M 10 10 L 290 10 M 10 50 L 290 50 M 10 90 L 290 90 M 60 0 L 60 96 M 150 0 L 150 96 M 240 0 L 240 96"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="0.5"
            />
            
            {/* Inactive routes */}
            <path
              d="M 50 24 L 100 70 L 250 68"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.5"
            />

            {/* Glowing active route */}
            <motion.path
              d="M 50 24 Q 100 12 150 48 T 250 68"
              stroke="#06C167"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6, 4"
              animate={{
                strokeDashoffset: [0, -20]
              }}
              transition={{
                ease: "linear",
                duration: 2,
                repeat: Infinity
              }}
            />

            {/* Glowing route highlight layer */}
            <path
              d="M 50 24 Q 100 12 150 48 T 250 68"
              stroke="#06C167"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.15"
            />

            {/* Node 1: Start (Dot) */}
            <circle cx="50" cy="24" r="3" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1" />
            
            {/* Node 2: End (Dot) */}
            <circle cx="250" cy="68" r="3" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1" />

            {/* Node 3: Center Pickup (Pin Circle + Ping ripple) */}
            <motion.circle
              cx="150"
              cy="48"
              r="8"
              stroke="#06C167"
              strokeWidth="1"
              opacity="0.5"
              animate={{
                scale: [1, 1.8],
                opacity: [0.6, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
              style={{ originX: "150px", originY: "48px" }}
            />
            <circle cx="150" cy="48" r="4.5" fill="#06C167" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-2 relative z-10">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#06C167]" />
            <span className="text-[9px] text-gray-400 font-mono">MAP ROUTE ACTIVE</span>
          </div>
          <span className="text-[9px] font-bold text-[#06C167] bg-[#06C167]/10 px-2 py-0.5 rounded border border-[#06C167]/20">
            Surge 1.3x
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-bg-space flex flex-col p-4 justify-between border-b border-white/5 relative overflow-hidden">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold tracking-wider text-accent uppercase">Retention Query</span>
        <span className="text-[10px] text-gray-500">SQL Database</span>
      </div>
      {/* Mock Table / Terminal Output */}
      <div className="font-mono text-[9px] text-gray-400 bg-black/40 p-2.5 rounded border border-white/5 h-24 overflow-hidden flex flex-col gap-1">
        <div className="text-secondary select-all">SELECT customer_id, churn_risk FROM bank_churn</div>
        <div>100109 | Risk: High (88.4%)</div>
        <div>100110 | Risk: Low (12.1%)</div>
        <div className="text-primary">Query completed in 0.04s</div>
      </div>
      <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-2">
        <div className="flex items-center gap-1.5">
          <BarChart2 className="w-3.5 h-3.5 text-accent" />
          <span className="text-[9px] text-gray-400">Churn Predictive Matrix</span>
        </div>
        <span className="text-[9px] font-bold text-white">SSMS Schema</span>
      </div>
    </div>
  );
}

// 3D Tilt Card Wrapper Component
function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Coordinates relative to card center
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;

    // Calculate rotation degree limits
    const rotateX = -1 * (y / height) * 15;
    const rotateY = (x / width) * 15;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className="glass-panel flex flex-col h-full overflow-hidden border border-white/5 bg-[#050816]/35 transition-shadow duration-300 relative group"
    >
      {/* Dynamic Glow backing */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Stylized Dashboard Image Preview */}
      <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
        <DashboardPreview type={project.previewType} />
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-4">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-extrabold text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-sm font-light text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 items-center justify-between border-t border-white/5 pt-4 mt-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors duration-200"
          >
            <span>View Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="nebula-cyan top-40 left-[-150px] opacity-20" />
      <div className="nebula-purple bottom-40 right-[-150px] opacity-25" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-6 max-w-6xl relative z-10"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3"
          >
            Deliverables
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base font-light max-w-md mt-6">
            Explore predictive analysis dashboards, transactional databases, and visualization interfaces built with modern technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15, duration: 0.6, type: 'spring' as const }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
