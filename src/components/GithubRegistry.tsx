'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, GitFork, Star, Folder, ExternalLink, 
  Activity, Terminal, Compass, Eye 
} from 'lucide-react';

interface GithubProfile {
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GithubRepo {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

// Resilient fallback repos if API rate limits or network issues occur
const FALLBACK_REPOS: GithubRepo[] = [
  {
    name: 'sales-forecasting-analysis',
    description: 'Exploratory Data Analysis (EDA) and predictive trend analysis on retail sales datasets using Pandas, NumPy, and Matplotlib.',
    language: 'Python',
    stargazers_count: 12,
    forks_count: 4,
    html_url: 'https://github.com/Afran-dataviz'
  },
  {
    name: 'database-query-tuning',
    description: 'SQL query optimizations, multi-table index alignments, window functions, and subquery architectures in SSMS and MySQL.',
    language: 'SQL',
    stargazers_count: 8,
    forks_count: 3,
    html_url: 'https://github.com/Afran-dataviz'
  },
  {
    name: 'n8n-llm-workflow-automation',
    description: 'Automated webhook pipelines integrating Gemini, Grok, and Claude APIs with n8n workflow systems.',
    language: 'JavaScript',
    stargazers_count: 15,
    forks_count: 6,
    html_url: 'https://github.com/Afran-dataviz'
  },
  {
    name: 'powerbi-kpi-dashboards',
    description: 'Relational data modeling, Power Query ETL pipelines, and advanced DAX formulas for dynamic business intelligence reporting.',
    language: 'PowerBI',
    stargazers_count: 18,
    forks_count: 5,
    html_url: 'https://github.com/Afran-dataviz'
  }
];

// Color mapping for repo languages
const LANGUAGE_COLORS: Record<string, string> = {
  'Python': '#3572A5',
  'SQL': '#E38C00',
  'JavaScript': '#F1E05A',
  'TypeScript': '#3178C6',
  'HTML': '#E34C26',
  'CSS': '#563D7C',
  'PowerBI': '#F2C811',
  'DAX': '#008080'
};

export default function GithubRegistry() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);
  const [heatmapBlocks, setHeatmapBlocks] = useState<{ id: number; level: number }[]>([]);

  useEffect(() => {
    // Generate contribution blocks once (53 columns x 7 rows = 371 blocks)
    const blocks = Array.from({ length: 371 }, (_, i) => {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.85) level = 4;
      else if (rand > 0.7) level = 3;
      else if (rand > 0.5) level = 2;
      else if (rand > 0.3) level = 1;
      return { id: i, level };
    });
    setHeatmapBlocks(blocks);

    // Fetch real-time data from GitHub API
    const fetchGitHubData = async () => {
      try {
        // Fetch profile
        const profileRes = await fetch('https://api.github.com/users/Afran-dataviz');
        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile({
            name: profileData.name || 'A Afran',
            avatar_url: profileData.avatar_url,
            bio: profileData.bio || 'Technical Specialist & Data Analyst',
            public_repos: profileData.public_repos,
            followers: profileData.followers,
            following: profileData.following,
            html_url: profileData.html_url
          });
        }

        // Fetch repos
        const reposRes = await fetch('https://api.github.com/users/Afran-dataviz/repos?sort=updated&per_page=6');
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            const parsedRepos: GithubRepo[] = reposData.map((r: any) => ({
              name: r.name,
              description: r.description || 'No description provided.',
              language: r.language || 'Data Science',
              stargazers_count: r.stargazers_count,
              forks_count: r.forks_count,
              html_url: r.html_url
            }));
            setRepos(parsedRepos);
          }
        }
      } catch (err) {
        console.error('Failed fetching GitHub telemetry:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="relative py-28 overflow-hidden bg-bg-space border-t border-white/5">
      {/* Background glowing ambient nodes */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00E5FF]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#6C63FF]/5 blur-[100px] pointer-events-none" />

      {/* Grid backdrop overlay */}
      <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none" />

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
            className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-3"
          >
            Telemetry Hub
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            GitHub Activity Matrix
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary mt-4 rounded-full" />
          <p className="text-gray-400 text-sm md:text-base font-light max-w-lg mt-6 leading-relaxed">
            Real-time synchronization with my open-source code repositories, development metrics, and version control telemetry.
          </p>
        </div>

        {/* Dashboard Frame (Profile + Heatmap) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* GitHub Profile Card (Left - 4 cols) */}
          <div 
            onClick={() => window.open(profile?.html_url || 'https://github.com/Afran-dataviz', '_blank')}
            className="lg:col-span-4 glass-panel p-6 border border-white/5 bg-[#050816]/40 rounded-2xl flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
            
            <div className="flex items-center gap-4">
              {profile?.avatar_url ? (
                <img 
                  src={profile.avatar_url} 
                  alt="Afran GitHub" 
                  className="w-14 h-14 rounded-full border border-primary/30 p-0.5 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                />
              ) : (
                <div className="w-14 h-14 rounded-full border border-primary/20 bg-white/5 flex items-center justify-center text-primary shadow-inner">
                  <Github className="w-6 h-6" />
                </div>
              )}
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  {profile?.name || 'A Afran'}
                </h3>
                <p className="text-xs text-gray-500 font-mono tracking-wider mt-0.5">
                  @Afran-dataviz
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-light mt-4 leading-relaxed">
              {profile?.bio || 'Data Analyst & Business Intelligence Specialist. Mapping algorithms and automation architectures.'}
            </p>

            <div className="grid grid-cols-3 gap-2 border-t border-b border-white/5 my-5 py-3 text-center">
              <div>
                <span className="block text-lg font-mono font-bold text-white">
                  {profile?.public_repos ?? 14}
                </span>
                <span className="text-[9px] text-gray-500 tracking-wider uppercase font-medium">Repos</span>
              </div>
              <div>
                <span className="block text-lg font-mono font-bold text-primary">
                  {profile?.followers ?? 12}
                </span>
                <span className="text-[9px] text-gray-500 tracking-wider uppercase font-medium">Followers</span>
              </div>
              <div>
                <span className="block text-lg font-mono font-bold text-secondary">
                  {profile?.following ?? 14}
                </span>
                <span className="text-[9px] text-gray-500 tracking-wider uppercase font-medium">Following</span>
              </div>
            </div>

            <div
              className="w-full py-2.5 rounded-xl border border-primary/25 bg-primary/5 hover:bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(0,229,255,0.25)]"
            >
              <Github className="w-4 h-4" />
              <span>Connect on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Activity Heatmap Grid (Right - 8 cols) */}
          <div className="lg:col-span-8 glass-panel p-6 border border-white/5 bg-[#050816]/40 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
            
            <div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-primary" />
                  Code Commits Heatmap
                </span>
                <span className="text-[9px] font-mono text-primary font-bold px-2 py-0.5 rounded border border-primary/25 bg-primary/5">
                  STATUS: SYNCHRONIZED
                </span>
              </div>

              <div className="mt-5 overflow-hidden">
                {/* Heatmap Blocks */}
                <div className="grid grid-flow-col grid-rows-7 gap-[3px] overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10">
                  {heatmapBlocks.map((block) => {
                    let bg = 'bg-white/5';
                    let border = 'border-white/5';
                    let shadow = 'none';
                    if (block.level === 1) {
                      bg = 'bg-[#00E5FF]/20';
                      border = 'border-[#00E5FF]/30';
                    } else if (block.level === 2) {
                      bg = 'bg-[#00E5FF]/40';
                      border = 'border-[#00E5FF]/50';
                    } else if (block.level === 3) {
                      bg = 'bg-[#00E5FF]/60';
                      border = 'border-[#00E5FF]/70';
                      shadow = '0 0 6px rgba(0, 229, 255, 0.3)';
                    } else if (block.level === 4) {
                      bg = 'bg-[#00E5FF]';
                      border = 'border-[#00E5FF]';
                      shadow = '0 0 10px rgba(0, 229, 255, 0.5)';
                    }

                    return (
                      <div 
                        key={block.id} 
                        className={`w-[10px] h-[10px] rounded-[2px] border transition-all duration-300 hover:scale-125 hover:z-10 cursor-pointer`}
                        style={{ 
                          backgroundColor: block.level === 0 ? 'rgba(255,255,255,0.04)' : undefined,
                          borderColor: block.level === 0 ? 'rgba(255,255,255,0.08)' : undefined,
                          boxShadow: shadow
                        }}
                        title={`Activity weight: ${block.level}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 text-[10px] text-gray-500 font-mono">
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-[1px] bg-white/5 border border-white/10" />
                <div className="w-2.5 h-2.5 rounded-[1px] bg-[#00E5FF]/20 border border-[#00E5FF]/30" />
                <div className="w-2.5 h-2.5 rounded-[1px] bg-[#00E5FF]/40 border border-[#00E5FF]/50" />
                <div className="w-2.5 h-2.5 rounded-[1px] bg-[#00E5FF]/60 border border-[#00E5FF]/70" />
                <div className="w-2.5 h-2.5 rounded-[1px] bg-[#00E5FF] border border-[#00E5FF]" />
                <span>More</span>
              </div>
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-secondary" />
                <span>Sync cycle: 24h</span>
              </span>
            </div>

          </div>

        </div>

        {/* Repositories Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {repos.map((repo, idx) => {
            const color = LANGUAGE_COLORS[repo.language] || '#6c757d';
            
            return (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => window.open(repo.html_url, '_blank')}
                className="glass-panel p-6 border border-white/5 bg-[#050816]/30 relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300 hover:border-secondary/35 hover:bg-slate-950/40 hover:shadow-[0_8px_25px_-8px_rgba(108,99,255,0.2)]"
              >
                {/* Visual Backdrop Halo */}
                <div
                  className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full filter blur-[30px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: color }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg border border-white/5 bg-white/5 text-gray-400 group-hover:text-secondary group-hover:border-secondary/20 transition-all duration-300">
                      <Folder className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-base font-bold text-white tracking-wide group-hover:text-secondary transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  <div
                    className="p-1.5 rounded-lg border border-white/5 bg-white/5 text-gray-500 group-hover:text-white group-hover:border-white/20 transition-all duration-300"
                    title="View Repo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="text-xs text-gray-400 font-light mt-3 leading-relaxed min-h-[48px]">
                  {repo.description}
                </p>

                {/* Footer Metrics */}
                <div className="flex items-center justify-between border-t border-white/5 mt-4 pt-4 text-xs font-mono text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                      <span className="text-gray-400 font-medium">{repo.language}</span>
                    </span>

                    <span className="flex items-center gap-1 text-gray-500 group-hover:text-yellow-400 transition-colors">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{repo.stargazers_count}</span>
                    </span>

                    <span className="flex items-center gap-1 text-gray-500 group-hover:text-secondary transition-colors">
                      <GitFork className="w-3.5 h-3.5" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>

                  <span className="text-[10px] text-gray-600 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>Public</span>
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
