'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abdulafran0101@gmail.com',
    href: 'mailto:abdulafran0101@gmail.com',
    color: '#00E5FF',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/a-afran-b88968259',
    href: 'https://www.linkedin.com/in/a-afran-b88968259',
    color: '#6C63FF',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Afran-dataviz',
    href: 'https://github.com/Afran-dataviz',
    color: '#8A2BE2',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mangalore, Karnataka, India',
    href: '#',
    color: '#F2C811',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState({ name: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);

  const handleFocus = (field: string) => setFocused((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setFocused((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
      setFocused({ name: false, email: false, message: false });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="nebula-purple bottom-10 left-[-100px] opacity-20" />
      <div className="nebula-cyan top-10 right-[-100px] opacity-20" />

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
            Inquiries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Contact Me
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info cards (Left - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
              Let&apos;s build something <span className="text-primary font-black">insightful</span>
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
              I am open to discussions regarding database development, reporting anomalies, predictive modeling, or internship and full-time opportunities.
            </p>

            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={idx}
                    href={item.href}
                    target={item.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-4 glass-panel border border-white/5 hover:border-white/10 rounded-2xl group transition-all duration-300"
                  >
                    <div
                      className="p-3 rounded-xl border transition-all duration-300"
                      style={{
                        backgroundColor: `${item.color}08`,
                        borderColor: `${item.color}20`,
                        color: item.color,
                      }}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                        {item.label}
                      </span>
                      <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Contact Form (Right - 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 md:p-10 border border-white/5 bg-[#050816]/30 h-full flex flex-col justify-between gap-6"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,229,255,0.4)] animate-bounce">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4">Message Transmitted!</h3>
                  <p className="text-sm text-gray-400 max-w-xs leading-relaxed font-light">
                    Your analytical inquiry was successfully routed to Afran. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-8">
                    {/* Name Input */}
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 tracking-wider pointer-events-none transition-all duration-300 ${
                          focused.name || formState.name ? '-translate-y-9 text-xs text-primary font-bold' : ''
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        onFocus={() => handleFocus('name')}
                        onBlur={(e) => handleBlur('name', e.target.value)}
                        className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/8 hover:border-white/15 focus:border-primary focus:bg-white/8 outline-none text-sm text-white transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 tracking-wider pointer-events-none transition-all duration-300 ${
                          focused.email || formState.email ? '-translate-y-9 text-xs text-primary font-bold' : ''
                        }`}
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        onFocus={() => handleFocus('email')}
                        onBlur={(e) => handleBlur('email', e.target.value)}
                        className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/8 hover:border-white/15 focus:border-primary focus:bg-white/8 outline-none text-sm text-white transition-all duration-300 focus:shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                      />
                    </div>

                    {/* Message Area */}
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className={`absolute left-4 top-6 text-sm text-gray-500 tracking-wider pointer-events-none transition-all duration-300 ${
                          focused.message || formState.message ? '-translate-y-5 text-xs text-primary font-bold' : ''
                        }`}
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        onFocus={() => handleFocus('message')}
                        onBlur={(e) => handleBlur('message', e.target.value)}
                        className="w-full px-4 pt-6 pb-4 rounded-xl bg-white/5 border border-white/8 hover:border-white/15 focus:border-primary focus:bg-white/8 outline-none text-sm text-white transition-all duration-300 resize-none focus:shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-sm tracking-wider flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all duration-300 mt-6"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
