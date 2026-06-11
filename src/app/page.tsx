import React from 'react';
import SpaceCanvas from '@/components/SpaceCanvas';
import ExpandableTabsNav from '@/components/ExpandableTabsNav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import GithubRegistry from '@/components/GithubRegistry';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Dynamic Cosmic Background Canvas */}
      <SpaceCanvas />

      {/* Floating Center-Aligned Navigation */}
      <ExpandableTabsNav />

      <main className="flex-1 w-full relative z-10">
        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubRegistry />
        <Education />
        <Contact />
      </main>

      {/* Futuristic Premium Footer */}
      <footer className="relative border-t border-white/5 bg-[#050816]/75 backdrop-blur-md z-10 py-12 select-none">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <a href="#home" className="text-lg font-black tracking-widest text-white hover:text-primary transition-colors">
              AFRAN<span className="text-primary font-light">.analytics</span>
            </a>
            <span className="text-xs text-gray-500 font-light">
              Transforming complex data into insights.
            </span>
          </div>

          <div className="text-xs text-gray-500 font-light text-center md:text-right">
            A AFRAN &copy; 2026. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Afran-dataviz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-primary/30 text-gray-400 hover:text-primary transition-all duration-300 shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/a-afran-b88968259"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-secondary/30 text-gray-400 hover:text-secondary transition-all duration-300 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:abdulafran0101@gmail.com"
              className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-accent/30 text-gray-400 hover:text-accent transition-all duration-300 shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

