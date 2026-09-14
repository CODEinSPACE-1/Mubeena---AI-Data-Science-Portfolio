import { motion } from 'motion/react';
import { Sparkles, Terminal, Code, Cpu, Layers, GitBranch, Globe } from 'lucide-react';
import { TechStackItem } from '../types';

export function TechStackShowcase() {
  const techStack: TechStackItem[] = [
    {
      name: 'Next.js',
      role: 'Full-Stack React Framework',
      category: 'Framework',
      color: '#FFFFFF',
      glow: 'rgba(255,255,255,0.4)',
      icon: 'next',
      version: 'v15.x',
    },
    {
      name: 'TypeScript',
      role: 'Type-Safe Architecture',
      category: 'Language',
      color: '#3178C6',
      glow: 'rgba(49,120,198,0.5)',
      icon: 'ts',
      version: 'v5.8',
    },
    {
      name: 'Python',
      role: 'AI & Data Science Core',
      category: 'AI Engine',
      color: '#3776AB',
      glow: 'rgba(55,118,171,0.5)',
      icon: 'python',
      version: 'v3.12',
    },
    {
      name: 'React',
      role: 'Component Engine & Hooks',
      category: 'UI Library',
      color: '#00DBFF',
      glow: 'rgba(0,219,255,0.5)',
      icon: 'react',
      version: 'v19.x',
    },
    {
      name: 'Tailwind CSS',
      role: 'Modern Design System',
      category: 'Styling',
      color: '#38BDF8',
      glow: 'rgba(56,189,248,0.5)',
      icon: 'tailwind',
      version: 'v4.x',
    },
    {
      name: 'GitHub',
      role: 'Version Control & CI/CD',
      category: 'DevOps & Git',
      color: '#915EFF',
      glow: 'rgba(145,94,255,0.5)',
      icon: 'github',
      version: 'Cloud',
    },
  ];

  return (
    <section
      id="techstack"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-[#00DBFF] bg-[#00DBFF]/10 border border-[#00DBFF]/30 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ECOSYSTEM & PLATFORM</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Tech Stack Showcase
          </motion.h2>

          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl">
            The modern developer toolchain and computation ecosystem powering my intelligent applications.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#915EFF] via-[#00DBFF] to-[#FF4D9D] rounded-full mt-4"
          />
        </div>

        {/* 6 Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-7 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Dynamic Glow aura on hover */}
              <div
                className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: tech.color }}
              />

              {/* Card Top Row */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-xl transition-all duration-300 group-hover:scale-110 shadow-lg"
                  style={{
                    backgroundColor: `${tech.color}15`,
                    border: `1.5px solid ${tech.color}50`,
                    color: tech.color,
                  }}
                >
                  {tech.name.substring(0, 2).toUpperCase()}
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    {tech.category}
                  </span>
                  <span className="text-xs font-mono font-semibold text-white">
                    {tech.version}
                  </span>
                </div>
              </div>

              {/* Title & Role */}
              <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#00DBFF] transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs font-mono text-gray-400 mt-1 mb-6">
                {tech.role}
              </p>

              {/* Telemetry bar */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span>PRODUCTION READY</span>
                </span>
                <span className="group-hover:translate-x-1 transition-transform text-white/70">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
