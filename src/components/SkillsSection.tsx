import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Terminal,
  Brain,
  Database,
  Code2,
  FileCode,
  Palette,
  GitBranch,
  Github,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { SkillItem } from '../types';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [displayMode, setDisplayMode] = useState<'rings' | 'cards'>('rings');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const skills: SkillItem[] = [
    {
      id: 'python',
      name: 'Python',
      category: 'AI & Data',
      level: 92,
      iconName: 'Terminal',
      description: 'Primary weapon for algorithmic thinking, data manipulation, and neural pipelines.',
      color: 'from-amber-400 to-yellow-500',
      accentHex: '#F59E0B',
    },
    {
      id: 'data-science',
      name: 'Data Science',
      category: 'AI & Data',
      level: 88,
      iconName: 'Database',
      description: 'Exploratory data analysis, statistical modeling, feature engineering, and Pandas/NumPy.',
      color: 'from-[#00DBFF] to-cyan-500',
      accentHex: '#00DBFF',
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      category: 'AI & Data',
      level: 85,
      iconName: 'Brain',
      description: 'Supervised & unsupervised workflows, speech feature classification, loss optimizations.',
      color: 'from-[#915EFF] to-indigo-600',
      accentHex: '#915EFF',
    },
    {
      id: 'html',
      name: 'HTML',
      category: 'Frontend',
      level: 95,
      iconName: 'FileCode',
      description: 'Semantic markup architecture, accessible DOM trees, and modern web structures.',
      color: 'from-orange-500 to-red-500',
      accentHex: '#F97316',
    },
    {
      id: 'css',
      name: 'CSS',
      category: 'Frontend',
      level: 90,
      iconName: 'Palette',
      description: 'Tailwind CSS utility mastery, glassmorphism UI, keyframe animations, and responsive grids.',
      color: 'from-blue-400 to-cyan-400',
      accentHex: '#38BDF8',
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Frontend',
      level: 86,
      iconName: 'Code2',
      description: 'Modern ES6+ syntax, asynchronous event handling, reactive DOM bindings, and APIs.',
      color: 'from-yellow-400 to-amber-500',
      accentHex: '#EAB308',
    },
    {
      id: 'git',
      name: 'Git',
      category: 'Tools',
      level: 89,
      iconName: 'GitBranch',
      description: 'Branching strategies, collaborative pull requests, merge conflict resolution, and commits.',
      color: 'from-rose-500 to-red-600',
      accentHex: '#F43F5E',
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'Tools',
      level: 91,
      iconName: 'Github',
      description: 'Repository orchestration, GitHub Actions CI/CD basics, release tagging, and project boards.',
      color: 'from-purple-400 to-violet-600',
      accentHex: '#A855F7',
    },
  ];

  const categories = ['All', 'AI & Data', 'Frontend', 'Tools'];

  const filteredSkills = skills.filter((skill) =>
    activeCategory === 'All' ? true : skill.category === activeCategory
  );

  const getSkillIcon = (iconName: string, accentHex: string) => {
    const props = { className: 'w-6 h-6', style: { color: accentHex } };
    switch (iconName) {
      case 'Terminal':
        return <Terminal {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Brain':
        return <Brain {...props} />;
      case 'FileCode':
        return <FileCode {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'GitBranch':
        return <GitBranch {...props} />;
      case 'Github':
        return <Github {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-[#915EFF] bg-[#915EFF]/10 border border-[#915EFF]/30 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Skills Matrix
          </motion.h2>

          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl">
            A comprehensive overview of core technologies, analytical libraries, and development tools I deploy in projects.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#915EFF] via-[#00DBFF] to-[#FF4D9D] rounded-full mt-4"
          />
        </div>

        {/* Controls: Category Filter & View Mode Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#915EFF] to-[#00DBFF] text-white font-semibold shadow-[0_0_15px_rgba(145,94,255,0.4)]'
                    : 'bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono">
            <button
              onClick={() => setDisplayMode('rings')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                displayMode === 'rings'
                  ? 'bg-white/15 text-white font-medium shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Circular Rings
            </button>
            <button
              onClick={() => setDisplayMode('cards')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                displayMode === 'cards'
                  ? 'bg-white/15 text-white font-medium shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Cards
            </button>
          </div>
        </div>

        {/* MODE 1: CIRCULAR PROGRESS RINGS */}
        {displayMode === 'rings' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => {
              const radius = 38;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset =
                circumference - (skill.level / 100) * circumference;

              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  onClick={() => setSelectedSkill(skill)}
                  className="group relative p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col items-center text-center cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                >
                  {/* Subtle Glow background */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-xl pointer-events-none"
                    style={{ backgroundColor: skill.accentHex }}
                  />

                  {/* SVG Circular Progress Ring */}
                  <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                    <svg className="w-full h-full -rotate-90">
                      {/* Background track circle */}
                      <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        className="stroke-white/10"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      {/* Animated Progress Circle */}
                      <motion.circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke={skill.accentHex}
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
                        strokeLinecap="round"
                        fill="transparent"
                        style={{
                          filter: `drop-shadow(0 0 6px ${skill.accentHex})`,
                        }}
                      />
                    </svg>

                    {/* Center Icon & percentage */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="transform group-hover:scale-110 transition-transform">
                        {getSkillIcon(skill.iconName, skill.accentHex)}
                      </div>
                      <span className="font-mono text-xs font-bold text-white mt-1">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-white tracking-wide group-hover:text-[#00DBFF] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-mono text-gray-400 mt-0.5">
                    {skill.category}
                  </span>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* MODE 2: INTERACTIVE SKILL CARDS */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedSkill(skill)}
                className="group relative p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${skill.accentHex}15`,
                      border: `1px solid ${skill.accentHex}40`,
                    }}
                  >
                    {getSkillIcon(skill.iconName, skill.accentHex)}
                  </div>
                  <span className="font-mono text-xs font-bold text-white px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-[#00DBFF] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-400 mb-4 line-clamp-2">
                  {skill.description}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.accentHex }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#090d26] border border-white/20 shadow-[0_0_50px_rgba(145,94,255,0.3)] text-white"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${selectedSkill.accentHex}20`,
                        border: `1px solid ${selectedSkill.accentHex}50`,
                      }}
                    >
                      {getSkillIcon(selectedSkill.iconName, selectedSkill.accentHex)}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold">
                        {selectedSkill.name}
                      </h3>
                      <span className="text-xs font-mono text-gray-400">
                        {selectedSkill.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {selectedSkill.description}
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-gray-400">Proficiency Index</span>
                    <span className="text-[#00DBFF] font-semibold">{selectedSkill.level}%</span>
                  </div>
                  <div className="flex justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-gray-400">Application in B.Tech</span>
                    <span className="text-emerald-400 font-semibold">Active Development</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSkill(null)}
                  className="w-full mt-6 py-3 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-[#915EFF] to-[#00DBFF] text-white shadow-lg cursor-pointer"
                >
                  Close Inspection
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
