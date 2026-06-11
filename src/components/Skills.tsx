'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, BarChart3, FileSpreadsheet, Code, Cpu, Activity,
  Terminal, LineChart, TrendingUp, GitMerge, Sparkles, Brain, 
  Bot, Workflow, Link2, Filter, Zap, Search, CheckCircle2, 
  ClipboardList, Grid, Table, Sigma, Code2
} from 'lucide-react';

interface SkillSector {
  id: string;
  secCode: string;
  title: string;
  icon: React.ElementType;
  color: string;
  glowClass: string;
  description: string;
  skills: string[];
}

const SKILL_SECTORS: SkillSector[] = [
  {
    id: 'languages',
    secCode: 'SEC-01',
    title: 'Programming & Query Languages',
    icon: Code,
    color: '#00E5FF',
    glowClass: 'rgba(0, 229, 255, 0.15)',
    description: 'Core scripting syntax, procedural logic, and structural query pipelines.',
    skills: ['Python', 'SQL']
  },
  {
    id: 'analytics',
    secCode: 'SEC-02',
    title: 'Data Analytics & Visualization',
    icon: BarChart3,
    color: '#6C63FF',
    glowClass: 'rgba(108, 99, 255, 0.15)',
    description: 'End-to-end dashboard architectures, executive KPI schemas, trend parsing, and modeling.',
    skills: [
      'Power BI',
      'Data Analysis',
      'Data Cleaning & Transformation',
      'Exploratory Data Analysis (EDA)',
      'KPI Reporting',
      'Trend Analysis',
      'Dashboard Development',
      'Data Modeling',
      'DAX'
    ]
  },
  {
    id: 'python_libraries',
    secCode: 'SEC-03',
    title: 'Python Libraries',
    icon: Activity,
    color: '#3B82F6',
    glowClass: 'rgba(59, 130, 246, 0.15)',
    description: 'Mathematical manipulation, structured array processing, and visual plotting systems.',
    skills: ['Pandas', 'NumPy', 'Matplotlib']
  },
  {
    id: 'databases',
    secCode: 'SEC-04',
    title: 'Database Technologies',
    icon: Database,
    color: '#8A2BE2',
    glowClass: 'rgba(138, 43, 226, 0.15)',
    description: 'Relational database management systems, query index tuning, and transactional query design.',
    skills: [
      'SQL Server Management Studio (SSMS)',
      'MySQL Workbench',
      'Database Management',
      'Query Optimization',
      'Joins & Subqueries',
      'Aggregate Functions',
      'Group By & Having',
      'CASE Statements',
      'Window Functions'
    ]
  },
  {
    id: 'excel',
    secCode: 'SEC-05',
    title: 'Microsoft Excel',
    icon: FileSpreadsheet,
    color: '#10B981',
    glowClass: 'rgba(16, 185, 129, 0.15)',
    description: 'Advanced lookup systems, automated pivot logic, and Power Query ETL spreadsheet pipelines.',
    skills: [
      'Advanced Excel',
      'Power Query',
      'Pivot Tables',
      'VLOOKUP/XLOOKUP',
      'Data Validation',
      'Data Reporting'
    ]
  },
  {
    id: 'ai_automation',
    secCode: 'SEC-06',
    title: 'AI & Automation Technologies',
    icon: Cpu,
    color: '#EC4899',
    glowClass: 'rgba(236, 72, 153, 0.15)',
    description: 'Multi-LLM APIs orchestration, prompt engineering, agentic development, and automated n8n workflows.',
    skills: [
      'Gemini API',
      'Grok API',
      'Claude AI',
      'AI Workflow Automation',
      'API Integration',
      'Prompt Engineering',
      'AI Agent',
      'Multi-LLM Integration',
      'AI-Assisted Coding',
      'Automation Solutions Development',
      'n8n automation workflow'
    ]
  }
];

// Mapping each specific skill string to an appropriate Lucide icon
const SKILL_ICONS: Record<string, React.ElementType> = {
  // Languages
  'Python': Terminal,
  'SQL': Database,

  // Data Analytics & Viz
  'Power BI': BarChart3,
  'Data Analysis': Search,
  'Data Cleaning & Transformation': Filter,
  'Exploratory Data Analysis (EDA)': LineChart,
  'KPI Reporting': ClipboardList,
  'Trend Analysis': TrendingUp,
  'Dashboard Development': Grid,
  'Data Modeling': Workflow,
  'DAX': Code2,

  // Python Libraries
  'Pandas': Table,
  'NumPy': Sigma,
  'Matplotlib': LineChart,

  // Database Tech
  'SQL Server Management Studio (SSMS)': Database,
  'MySQL Workbench': Database,
  'Database Management': Database,
  'Query Optimization': Zap,
  'Joins & Subqueries': GitMerge,
  'Aggregate Functions': Sigma,
  'Group By & Having': Filter,
  'CASE Statements': Code2,
  'Window Functions': Grid,

  // Microsoft Excel
  'Advanced Excel': FileSpreadsheet,
  'Power Query': Workflow,
  'Pivot Tables': Grid,
  'VLOOKUP/XLOOKUP': Search,
  'Data Validation': CheckCircle2,
  'Data Reporting': ClipboardList,

  // AI & Automation
  'Gemini API': Sparkles,
  'Grok API': Zap,
  'Claude AI': Bot,
  'AI Workflow Automation': Workflow,
  'API Integration': Link2,
  'Prompt Engineering': Brain,
  'AI Agent': Bot,
  'Multi-LLM Integration': Cpu,
  'AI-Assisted Coding': Code,
  'Automation Solutions Development': Cpu,
  'n8n automation workflow': Workflow,
};

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3"
          >
            Capabilities Index
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Technical Expertise
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base font-light max-w-lg mt-6 leading-relaxed">
            Explore my core competencies mapped across engineering, data systems, visualization architectures, and automated artificial intelligence frameworks.
          </p>
        </div>

        {/* Sectors Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {SKILL_SECTORS.map((sector) => {
            const Icon = sector.icon;
            const isHovered = hoveredCard === sector.id;

            return (
              <motion.div
                key={sector.id}
                onMouseEnter={() => setHoveredCard(sector.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -6, scale: 1.01 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-6 border bg-[#050816]/30 relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300"
                style={{
                  borderColor: isHovered ? sector.color : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered 
                    ? `0 12px 30px -10px ${sector.color}25, 0 0 15px ${sector.color}12` 
                    : 'none',
                  backgroundColor: isHovered ? 'rgba(5, 8, 22, 0.6)' : 'rgba(5, 8, 22, 0.3)'
                }}
              >
                {/* Planetary Glowing Aurora Backdrop */}
                <div
                  className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full filter blur-[35px] opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: sector.color }}
                />

                {/* Header Row */}
                <div className="flex items-center justify-between gap-4">
                  <div
                    className="p-2.5 rounded-lg border transition-all duration-300"
                    style={{
                      borderColor: isHovered ? `${sector.color}40` : 'rgba(255, 255, 255, 0.05)',
                      backgroundColor: isHovered ? `${sector.color}08` : 'rgba(255, 255, 255, 0.02)',
                      color: isHovered ? sector.color : '#9ca3af',
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className="text-[9px] font-mono tracking-widest px-2.5 py-0.5 rounded border transition-all duration-300 font-bold"
                    style={{
                      borderColor: isHovered ? `${sector.color}45` : 'rgba(255, 255, 255, 0.1)',
                      color: isHovered ? sector.color : 'rgba(255, 255, 255, 0.4)',
                      backgroundColor: isHovered ? `${sector.color}08` : 'transparent',
                    }}
                  >
                    {sector.secCode}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3 className="text-lg font-bold text-white tracking-wide transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-light mt-2 leading-relaxed min-h-[40px]">
                    {sector.description}
                  </p>
                </div>

                {/* Divider */}
                <div 
                  className="w-full h-[1px] my-4 transition-colors duration-300" 
                  style={{ 
                    backgroundColor: isHovered ? `${sector.color}20` : 'rgba(255, 255, 255, 0.06)' 
                  }}
                />

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {sector.skills.map((skill) => {
                    const SkillIcon = SKILL_ICONS[skill] || Code;
                    return (
                      <span
                        key={skill}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-md transition-all duration-300 border flex items-center gap-1.5"
                        style={{
                          borderColor: isHovered ? `${sector.color}35` : 'rgba(255, 255, 255, 0.08)',
                          color: isHovered ? '#ffffff' : 'rgba(156, 163, 175, 0.8)',
                          backgroundColor: isHovered ? `${sector.color}12` : 'rgba(255, 255, 255, 0.03)',
                          boxShadow: isHovered ? `0 0 8px ${sector.color}08` : 'none',
                        }}
                      >
                        <SkillIcon 
                          className="w-3.5 h-3.5 transition-all duration-300"
                          style={{
                            color: isHovered ? sector.color : 'rgba(156, 163, 175, 0.6)'
                          }}
                        />
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>

                {/* Underline Indicator Glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                  style={{ backgroundImage: `linear-gradient(to right, transparent, ${sector.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
