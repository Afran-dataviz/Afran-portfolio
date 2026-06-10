'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, BarChart3, FileSpreadsheet, Code, Cpu, Compass, Activity } from 'lucide-react';

interface Constellation {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // Hex glow color
  glowClass: string;
  description: string;
  skills: string[];
  hudTitle: string;
  hudMetrics: string[];
  stars: { x: number; y: number; label: string }[];
}

const CONSTELLATIONS: Constellation[] = [
  {
    id: 'python',
    title: 'Python & Analysis Nebula',
    icon: Code,
    color: '#00E5FF',
    glowClass: 'rgba(0, 229, 255, 0.4)',
    description: 'Data ingestion, exploratory analysis, and numerical processing models.',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA', 'Trend Analysis'],
    hudTitle: 'Numpy/Pandas Workspace Output',
    hudMetrics: ['Correlation heatmaps generated', 'Exploratory trend parsing (EDA)', 'Custom data modeling scripts'],
    stars: [
      { x: 30, y: 30, label: 'Python' },
      { x: 70, y: 20, label: 'Pandas' },
      { x: 50, y: 70, label: 'NumPy' },
      { x: 80, y: 80, label: 'Matplotlib' }
    ]
  },
  {
    id: 'sql',
    title: 'Database & SQL Orbit',
    icon: Database,
    color: '#8A2BE2',
    glowClass: 'rgba(138, 43, 226, 0.4)',
    description: 'Relational database architecture, transactional indexing, and query optimizations.',
    skills: ['SQL', 'SSMS', 'MySQL Workbench', 'Subqueries', 'Aggregate Functions', 'Joins', 'Query Optimization'],
    hudTitle: 'SSMS / MySQL Schema Statistics',
    hudMetrics: ['Query compilation times < 0.08s', 'Transactional subqueries optimized', 'Verified aggregate index mappings'],
    stars: [
      { x: 20, y: 40, label: 'SQL' },
      { x: 60, y: 25, label: 'SSMS' },
      { x: 40, y: 75, label: 'MySQL' },
      { x: 80, y: 70, label: 'Joins' }
    ]
  },
  {
    id: 'powerbi',
    title: 'Power BI & BI Star System',
    icon: BarChart3,
    color: '#6C63FF',
    glowClass: 'rgba(108, 99, 255, 0.4)',
    description: 'Executive KPI reporting, interactive visualization dashboards, and DAX calculations.',
    skills: ['Power BI', 'DAX Scripting', 'Data Modeling', 'KPI Dashboards', 'Interactive Visualizations', 'Reporting', 'Insights'],
    hudTitle: 'Calculated DAX Measures & Pipelines',
    hudMetrics: ['3+ production dashboards deployed', 'Advanced DAX measures configured', 'Calculated relational schemas'],
    stars: [
      { x: 25, y: 25, label: 'Power BI' },
      { x: 75, y: 30, label: 'DAX' },
      { x: 50, y: 65, label: 'Modeling' },
      { x: 80, y: 80, label: 'KPIs' }
    ]
  },
  {
    id: 'excel',
    title: 'Excel & Power Query Galaxy',
    icon: FileSpreadsheet,
    color: '#10B981',
    glowClass: 'rgba(16, 185, 129, 0.4)',
    description: 'Advanced spreadsheets, Power Query ETL procedures, and lookup systems.',
    skills: ['Advanced Excel', 'Pivot Tables', 'Power Query', 'VLOOKUP/XLOOKUP', 'Data Validation'],
    hudTitle: 'Spreadsheet ETL Pipeline metrics',
    hudMetrics: ['10,000+ data rows cleaned & parsed', 'Power Query steps standardized', 'Automatic formula auditing'],
    stars: [
      { x: 30, y: 20, label: 'Excel' },
      { x: 70, y: 40, label: 'Power Query' },
      { x: 40, y: 70, label: 'Pivots' },
      { x: 85, y: 75, label: 'Lookups' }
    ]
  },
  {
    id: 'ai',
    title: 'AI, n8n Automation & Vibe Coding',
    icon: Cpu,
    color: '#EC4899',
    glowClass: 'rgba(236, 72, 153, 0.4)',
    description: 'Workflow orchestration, prompt engineering, and agentic assistant code blocks.',
    skills: ['Prompt Engineering', 'Claude AI', 'OpenClaw', 'n8n Workflow Automation', 'Vibe Coding', 'Antigravity', 'Bolt', 'Vercel'],
    hudTitle: 'Agent Actions & Webhooks log',
    hudMetrics: ['n8n scheduling triggers active', 'Vibe coding layout deployments', 'Antigravity x Bolt runtime checks'],
    stars: [
      { x: 25, y: 30, label: 'Claude AI' },
      { x: 75, y: 20, label: 'n8n' },
      { x: 45, y: 60, label: 'Vibe Coding' },
      { x: 80, y: 75, label: 'Antigravity' }
    ]
  }
];

export default function Skills() {
  const [activeConstellation, setActiveConstellation] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-bg-space">
      {/* Background Nebulae */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#6C63FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[600px] h-[600px] rounded-full bg-[#00E5FF]/5 blur-[120px] pointer-events-none" />

      {/* Futuristic cosmic grid backdrop */}
      <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-6 max-w-6xl relative z-10 w-full"
      >
        
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3"
          >
            Cosmic Matrix
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Skill Constellations
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base font-light max-w-md mt-6 leading-relaxed">
            Navigate the glowing planetary sectors. Hover over a constellation to project its internal vector paths and activate the holographic data HUD.
          </p>
        </div>

        {/* Constellation Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Constellations Map (Left - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {CONSTELLATIONS.map((node) => {
              const Icon = node.icon;
              const isSelected = activeConstellation === node.id;

              return (
                <motion.div
                  key={node.id}
                  onMouseEnter={() => setActiveConstellation(node.id)}
                  onMouseLeave={() => setActiveConstellation(null)}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="glass-panel p-6 border border-white/5 bg-[#050816]/30 relative overflow-hidden rounded-2xl cursor-pointer group"
                >
                  {/* Planetary Glowing Aurora Backdrop */}
                  <div
                    className="absolute -right-20 -top-20 w-44 h-44 rounded-full filter blur-[50px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: node.color }}
                  />

                  {/* Visual Layout Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Left Icon and Title (5 cols) */}
                    <div className="md:col-span-5 flex items-center gap-4">
                      <div
                        className="p-3.5 rounded-xl border transition-all duration-300"
                        style={{
                          backgroundColor: `${node.color}08`,
                          borderColor: isSelected ? `${node.color}50` : 'rgba(255,255,255,0.05)',
                          color: isSelected ? node.color : '#f3f4f6',
                          boxShadow: isSelected ? `0 0 20px ${node.color}30` : 'none',
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base tracking-wide group-hover:text-white transition-colors">
                          {node.title}
                        </h3>
                        <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                          {node.id === 'ai' ? 'Vibe Coding Stack' : 'Core Capabilities'}
                        </span>
                      </div>
                    </div>

                    {/* Constellation Star Map Vector (7 cols) */}
                    <div className="md:col-span-7 h-20 bg-black/20 border border-white/5 rounded-xl relative overflow-hidden flex items-center justify-center">
                      
                      {/* SVG Star Paths */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                          <linearGradient id={`grad-${node.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={node.color} stopOpacity="0.1" />
                            <stop offset="100%" stopColor={node.color} stopOpacity="0.4" />
                          </linearGradient>
                        </defs>
                        {node.stars.map((star, idx) => {
                          const nextStar = node.stars[(idx + 1) % node.stars.length];
                          return (
                            <line
                              key={idx}
                              x1={`${star.x}%`}
                              y1={`${star.y}%`}
                              x2={`${nextStar.x}%`}
                              y2={`${nextStar.y}%`}
                              stroke={`url(#grad-${node.id})`}
                              strokeWidth={1}
                              className="transition-all duration-300"
                              style={{
                                strokeDasharray: isSelected ? '4, 4' : 'none',
                              }}
                            />
                          );
                        })}
                      </svg>

                      {/* Floating Stars */}
                      {node.stars.map((star, idx) => (
                        <div
                          key={idx}
                          className="absolute w-1.5 h-1.5 rounded-full transition-all duration-500"
                          style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            backgroundColor: isSelected ? node.color : 'rgba(255,255,255,0.2)',
                            boxShadow: isSelected ? `0 0 8px ${node.color}` : 'none',
                          }}
                        />
                      ))}
                      
                      <span className="text-[9px] font-mono tracking-widest text-gray-500 group-hover:text-primary transition-colors">
                        CONSTELLATION MAP ACTIVE
                      </span>
                    </div>

                  </div>

                  {/* Category skill tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                    {node.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:text-white hover:border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Highlight Glow Border */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                    style={{ backgroundImage: `linear-gradient(to right, transparent, ${node.color}, transparent)` }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Holographic HUD Detail View (Right - 5 cols) */}
          <div className="lg:col-span-5 h-full lg:sticky lg:top-28">
            <div className="glass-panel p-6 border border-white/5 bg-[#050816]/40 rounded-2xl min-h-[420px] flex flex-col justify-between overflow-hidden relative">
              
              {/* Grid matrix overlay */}
              <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />

              <AnimatePresence mode="wait">
                {activeConstellation ? (
                  (() => {
                    const activeNode = CONSTELLATIONS.find((n) => n.id === activeConstellation);
                    if (!activeNode) return null;

                    return (
                      <motion.div
                        key={activeNode.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col justify-between flex-grow h-full gap-6"
                      >
                        {/* HUD Meta details */}
                        <div className="flex flex-col gap-4">
                          <div className="flex justify-between items-center border-b border-white/5 pb-4">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 flex items-center gap-1.5">
                              <Compass className="w-3.5 h-3.5 animate-spin-slow" style={{ color: activeNode.color }} />
                              Sector HUD Active
                            </span>
                            <span
                              className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border"
                              style={{ borderColor: `${activeNode.color}30`, color: activeNode.color }}
                            >
                              TELEMETRY: OK
                            </span>
                          </div>

                          <h3 className="text-xl font-extrabold text-white tracking-wide">
                            {activeNode.hudTitle}
                          </h3>

                          <div className="flex flex-col gap-3.5 mt-2">
                            {activeNode.hudMetrics.map((metric, idx) => (
                              <div key={idx} className="flex items-start gap-3 text-sm text-gray-300 font-light leading-relaxed group">
                                <div
                                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                  style={{ backgroundColor: activeNode.color }}
                                />
                                <span className="group-hover:text-white transition-colors">
                                  {metric}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Visual Hologram Graphic mockup */}
                        <div className="h-32 mt-6 border border-white/5 rounded-xl bg-black/40 flex flex-col items-center justify-center relative overflow-hidden group">
                          {/* Laser grid line */}
                          <div
                            className="absolute top-0 bottom-0 left-0 w-[2px] opacity-40 shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-pulse"
                            style={{
                              backgroundColor: activeNode.color,
                              left: '50%',
                            }}
                          />
                          <div className="text-[9px] font-mono tracking-[0.3em] text-gray-500 uppercase flex items-center gap-2">
                            <Activity className="w-3.5 h-3.5" style={{ color: activeNode.color }} />
                            <span>Spatial Data Node Active</span>
                          </div>
                          
                          {/* Radial glowing vector ring */}
                          <div
                            className="absolute w-24 h-24 rounded-full border border-dashed border-white/5 animate-spin-slow flex items-center justify-center"
                            style={{ borderColor: `${activeNode.color}20` }}
                          >
                            <div
                              className="w-12 h-12 rounded-full border border-dotted"
                              style={{ borderColor: `${activeNode.color}35` }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })()
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center flex-grow py-20 gap-4"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 animate-pulse">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base tracking-wide">HUD System Standby</h3>
                    <p className="text-xs text-gray-400 max-w-[220px] font-light leading-relaxed">
                      Hover over any constellation sector on the left to lock in telemetry coordinates.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

         </div>
      </motion.div>
    </section>
  );
}
