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
  previewType: 'netflix' | 'uber' | 'churn' | 'datalens';
  featured?: boolean;
  bullets?: string[];
  date?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'DataLens – AI-Powered Data Analytics SaaS Platform',
    description: 'A SaaS-style AI-powered analytics platform enabling users to upload datasets, clean data, generate insights, and interact through natural language queries.',
    tools: ['Next.js', 'TypeScript', 'Supabase', 'Groq AI', 'Stripe', 'Vercel'],
    demoUrl: 'https://datalens-blond.vercel.app/',
    githubUrl: 'https://github.com/Afran-dataviz/datalens.git',
    previewType: 'datalens',
    featured: true,
    date: 'Jun 2026',
    bullets: [
      'Built and deployed an AI-powered data analytics platform for uploading, cleaning, and analyzing datasets.',
      'Integrated Groq AI to enable users to interact with data using natural language queries and generate insights.',
      'Implemented secure authentication, database management, and user account features using Supabase.',
      'Developed subscription-based payment functionality using Stripe, including billing management and webhook integration.'
    ],
  },
  {
    title: 'Uber Data Analytics Dashboard',
    description: 'Analysis of 100,000+ Uber trip records to identify revenue, booking, and ride performance trends.',
    tools: ['SQL', 'Python', 'Power BI'],
    demoUrl: 'https://github.com/Afran-dataviz/uber-powerbi-dashboard',
    githubUrl: 'https://github.com/Afran-dataviz/uber-powerbi-dashboard',
    previewType: 'uber',
    date: 'Jan 2026',
    bullets: [
      'Analyzed 100,000+ Uber trip records to identify revenue, booking, and ride performance trends.',
      'Calculated key business KPIs such as Total Revenue, Total Trips, Average Rating, and Cancellation Rate using SQL aggregate functions.',
      'Developed interactive Power BI dashboards with dynamic charts and slicers for drill-down analysis by city and time period.',
      'Identified top cancellation reasons and peak demand hours, providing actionable operational insights.'
    ],
  },
  {
    title: 'SQL Server Customer Analytics & Churn Analysis',
    description: 'Performed customer churn analysis on 5,000+ banking records using SQL Server and SSMS.',
    tools: ['SQL Server (SSMS)'],
    demoUrl: 'https://github.com/Afran-dataviz/Bank-Customer-Churn-SQL-Analysis',
    githubUrl: 'https://github.com/Afran-dataviz/Bank-Customer-Churn-SQL-Analysis',
    previewType: 'churn',
    date: 'Mar 2026',
    bullets: [
      'Performed customer churn analysis on 5,000+ banking records using SQL Server and SSMS.',
      'Applied subqueries, aggregate functions, filtering, and sorting techniques to segment churned and retained customers.',
      'Analyzed customer demographics, account balance, geography, and credit score patterns to identify churn trends.'
    ],
  },
];

// Helper to render stylized CSS dashboard mockups representing projects
function DashboardPreview({ type }: { type: 'netflix' | 'uber' | 'churn' | 'datalens' }) {
  return (
    <div className="w-full h-full flex flex-col bg-[#0b0c16] absolute inset-0">
      {/* Browser Header Chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-black/40 border-b border-white/5 select-none flex-shrink-0">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-grow mx-4 bg-white/5 rounded py-0.5 text-[8px] text-gray-500 font-mono text-center truncate">
          {type === 'datalens' 
            ? 'datalens-blond.vercel.app' 
            : type === 'netflix' 
              ? 'netflix-excel-dashboard' 
              : type === 'uber' 
                ? 'uber-dashboard' 
                : 'bank-churn-analysis'}
        </div>
      </div>
      
      {/* Chrome content wrapper */}
      <div className="flex-grow relative overflow-hidden">
        {type === 'netflix' && (
          <div className="w-full h-full bg-gradient-to-br from-[#E50914]/10 to-bg-space flex flex-col p-4 justify-between relative overflow-hidden">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold tracking-wider text-[#E50914] uppercase">Netflix Analytics</span>
              <span className="text-[10px] text-gray-500">Live Stream Data</span>
            </div>
            <div className="flex gap-2 items-end justify-center h-24 mt-2">
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
        )}

        {type === 'uber' && (
          <div className="w-full h-full bg-[#0A0A0A] flex flex-col p-4 justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,193,103,0.08)_0%,transparent_70%)] pointer-events-none" />
            <div className="flex justify-between items-center relative z-10">
              <span className="text-[10px] font-black tracking-widest text-white uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06C167] shadow-[0_0_8px_#06C167] animate-pulse" />
                Uber Analytics
              </span>
              <span className="text-[9px] font-mono text-gray-500">100,000+ Records</span>
            </div>
            <div className="relative h-24 w-full z-10">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 96" fill="none">
                <path
                  d="M 10 10 L 290 10 M 10 50 L 290 50 M 10 90 L 290 90 M 60 0 L 60 96 M 150 0 L 150 96 M 240 0 L 240 96"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="0.5"
                />
                <path d="M 50 24 L 100 70 L 250 68" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                <motion.path
                  d="M 50 24 Q 100 12 150 48 T 250 68"
                  stroke="#06C167"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6, 4"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                />
                <path d="M 50 24 Q 100 12 150 48 T 250 68" stroke="#06C167" strokeWidth="4" strokeLinecap="round" opacity="0.15" />
                <circle cx="50" cy="24" r="3" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1" />
                <circle cx="250" cy="68" r="3" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1" />
                <motion.circle
                  cx="150"
                  cy="48"
                  r="8"
                  stroke="#06C167"
                  strokeWidth="1"
                  opacity="0.5"
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
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
        )}

        {type === 'churn' && (
          <div className="w-full h-full bg-gradient-to-br from-accent/10 to-bg-space flex flex-col p-4 justify-between relative overflow-hidden">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold tracking-wider text-accent uppercase">Retention Query</span>
              <span className="text-[10px] text-gray-500">SQL Database</span>
            </div>
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
        )}

        {type === 'datalens' && (
          <div className="w-full h-full bg-[#05050A] flex flex-col p-4 justify-between relative overflow-hidden font-sans">
            {/* Sleek background gradient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.12)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,229,255,0.06)_0%,transparent_60%)] pointer-events-none" />
            
            {/* Top Dashboard Header Row */}
            <div className="flex justify-between items-center relative z-10 border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#C9A84C] to-amber-300 shadow-[0_0_8px_#C9A84C] animate-pulse" />
                <span className="text-xs font-black tracking-widest text-white">DATALENS</span>
              </div>
              <span className="text-[9px] font-bold text-[#C9A84C] bg-[#C9A84C]/10 px-2 py-0.5 rounded border border-[#C9A84C]/20 uppercase">
                Pro Dashboard
              </span>
            </div>

            {/* Dashboard Content Columns */}
            <div className="flex gap-3 flex-grow mt-3 relative z-10 h-28">
              {/* Mini Sidebar */}
              <div className="w-20 flex flex-col gap-2 border-r border-white/5 pr-2 py-1 select-none">
                <div className="h-3 w-full bg-[#C9A84C]/15 rounded flex items-center px-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mr-1" />
                  <div className="h-1 w-8 bg-[#C9A84C]/50 rounded" />
                </div>
                <div className="h-2 w-12 bg-white/5 rounded" />
                <div className="h-2 w-14 bg-white/5 rounded" />
                <div className="h-2 w-10 bg-white/5 rounded" />
                <div className="h-2 w-13 bg-white/5 rounded" />
              </div>

              {/* Main Panel Content */}
              <div className="flex-grow flex flex-col gap-2 justify-between">
                {/* KPI Cards Row */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/[0.02] border border-white/5 p-1.5 rounded flex flex-col justify-between">
                    <span className="text-[8px] text-gray-500 uppercase tracking-wider font-mono">ESTIMATED MRR</span>
                    <span className="text-xs font-black text-white">$30.00</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-1.5 rounded flex flex-col justify-between">
                    <span className="text-[8px] text-gray-500 uppercase tracking-wider font-mono">Total Users</span>
                    <span className="text-xs font-black text-[#C9A84C]">14 active</span>
                  </div>
                </div>

                {/* AI Chat Insight Tooltip */}
                <div className="bg-black/40 border border-white/5 p-2 rounded flex items-center justify-between gap-3 flex-grow">
                  <div className="flex flex-col gap-0.5 justify-center">
                    <span className="text-[8px] text-gray-400 font-semibold flex items-center gap-1">
                      <span className="text-[#C9A84C]">✦</span> AI Assistant
                    </span>
                    <span className="text-[9px] text-white font-light italic truncate max-w-[120px]">
                      "Found 342 duplicate records."
                    </span>
                  </div>
                  {/* Miniature donut chart */}
                  <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="12" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="transparent" />
                      <circle cx="16" cy="16" r="12" stroke="#C9A84C" strokeWidth="4" fill="transparent" strokeDasharray="75.39" strokeDashoffset="25.13" />
                      <circle cx="16" cy="16" r="12" stroke="#00e5ff" strokeWidth="4" fill="transparent" strokeDasharray="75.39" strokeDashoffset="55.27" />
                    </svg>
                    <span className="absolute text-[7px] text-white font-bold">12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer telemetry info bar */}
            <div className="flex justify-between items-center border-t border-white/5 pt-2 mt-2 relative z-10 text-[8px] text-gray-500 font-mono">
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                TELEMETRY: ONLINE
              </span>
              <span className="text-[#C9A84C] font-semibold">Groq & Stripe Integration</span>
            </div>
          </div>
        )}
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
          <div className="flex items-center justify-between flex-wrap gap-2">
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
            {project.date && (
              <span className="text-[10px] font-semibold text-gray-500 font-mono">
                {project.date}
              </span>
            )}
          </div>

          <h3 className="text-xl font-extrabold text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-sm font-light text-gray-400 leading-relaxed">
            {project.description}
          </p>

          {project.bullets && (
            <ul className="text-[11px] font-light text-gray-400 leading-relaxed space-y-1.5 mt-2">
              {project.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2 text-left">
                  <span className="text-primary mt-0.5">✦</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
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

// Featured Project Card Wrapper Component
function FeaturedProjectCard({ project }: { project: Project }) {
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

    // Calculate rotation degree limits (smaller tilt for larger cards)
    const rotateX = -1 * (y / height) * 8;
    const rotateY = (x / width) * 8;

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
      className="glass-panel flex flex-col lg:flex-row overflow-hidden border border-white/10 bg-[#050816]/35 transition-shadow duration-300 relative group w-full"
    >
      {/* Dynamic Glow backing */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.08)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Stylized Dashboard Image Preview - Left side */}
      <div className="relative h-72 lg:h-auto lg:w-1/2 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5 flex-shrink-0 min-h-[320px] lg:min-h-0">
        <DashboardPreview type={project.previewType} />
      </div>

      {/* Details - Right side */}
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-6 lg:w-1/2">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {project.date && (
                <span className="text-[10px] font-bold text-gray-500 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  {project.date}
                </span>
              )}
              <span className="text-[10px] font-bold tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-2 py-0.5 rounded border border-[#C9A84C]/20 animate-pulse">
                ★ FEATURED PROJECT
              </span>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#C9A84C] transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-sm font-light text-gray-300 leading-relaxed">
            {project.description}
          </p>

          {project.bullets && (
            <ul className="text-[11px] md:text-xs font-light text-gray-400 leading-relaxed space-y-2 mt-2">
              {project.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2 text-left">
                  <span className="text-[#C9A84C] mt-0.5">✦</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 items-center justify-between border-t border-white/5 pt-4 mt-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-[#C9A84C] hover:text-white transition-colors duration-200"
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
  const featuredProject = PROJECTS.find(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);

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
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-[#C9A84C] uppercase mb-3 animate-pulse"
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
          <div className="h-1 w-20 bg-gradient-to-r from-[#C9A84C] to-amber-300 mt-4 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base font-light max-w-md mt-6">
            Explore predictive analysis dashboards, transactional databases, and full-stack AI platform interfaces built with modern technology.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-16">
            <FeaturedProjectCard project={featuredProject} />
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, idx) => (
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
