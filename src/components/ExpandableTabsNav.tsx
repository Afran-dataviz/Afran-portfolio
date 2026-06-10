'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function ExpandableTabsNav() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // Shrink nav bar on scroll
      setIsScrolled(window.scrollY > 50);

      // Determine active section on scroll
      const scrollPosition = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveTab(id);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[100] shadow-[0_0_8px_rgba(0,229,255,0.6)]"
        style={{ scaleX }}
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <motion.nav
          animate={{
            padding: isScrolled ? '6px 12px' : '10px 20px',
            backgroundColor: isScrolled ? 'rgba(5, 8, 22, 0.7)' : 'rgba(5, 8, 22, 0.4)',
            backdropFilter: 'blur(16px)',
            borderRadius: '9999px',
            borderColor: isScrolled ? 'rgba(0, 229, 255, 0.3)' : 'rgba(255, 255, 255, 0.08)',
            boxShadow: isScrolled ? '0 0 20px rgba(0, 229, 255, 0.15)' : 'none',
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-1 border pointer-events-auto transition-shadow"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="relative px-4 py-2 text-sm font-medium transition-colors select-none"
                style={{
                  color: isActive ? '#00E5FF' : 'rgba(243, 244, 246, 0.65)',
                }}
              >
                {/* Highlight active tab underlay */}
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/10 via-secondary/15 to-accent/10 border border-primary/20"
                    transition={{ type: 'spring' as const, stiffness: 380, damping: 30 }}
                    style={{
                      boxShadow: '0 0 12px rgba(0, 229, 255, 0.15)',
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </motion.nav>
      </motion.header>
    </>
  );
}
