import { motion } from 'motion/react';
import {
  Sparkles,
  Bot,
  Lightbulb,
  Zap,
  Trophy,
  GraduationCap,
  Code2,
  Compass,
  Cpu,
} from 'lucide-react';

export function AboutSection() {
  const featureCards = [
    {
      title: 'AI Enthusiast',
      icon: Bot,
      color: '#915EFF',
      glowClass: 'group-hover:border-[#915EFF]/50 group-hover:shadow-[0_0_25px_rgba(145,94,255,0.25)]',
      description:
        'Fascinated by neural representations, speech intelligence, and automated inference algorithms.',
    },
    {
      title: 'Problem Solver',
      icon: Lightbulb,
      color: '#00DBFF',
      glowClass: 'group-hover:border-[#00DBFF]/50 group-hover:shadow-[0_0_25px_rgba(0,219,255,0.25)]',
      description:
        'Decomposing real-world complexities into clear mathematical structures and modular software pipelines.',
    },
    {
      title: 'Fast Learner',
      icon: Zap,
      color: '#FF4D9D',
      glowClass: 'group-hover:border-[#FF4D9D]/50 group-hover:shadow-[0_0_25px_rgba(255,77,157,0.25)]',
      description:
        'Rapidly absorbing cutting-edge Python libraries, modern frameworks, and emerging ML breakthroughs.',
    },
    {
      title: 'Hackathon Explorer',
      icon: Trophy,
      color: '#10B981',
      glowClass: 'group-hover:border-emerald-500/50 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]',
      description:
        'Passionate about collaborative sprints, fast prototyping, and translating concepts into working demos.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-20"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#915EFF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-[#00DBFF] bg-[#00DBFF]/10 border border-[#00DBFF]/30 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVERY & BACKGROUND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#915EFF] via-[#00DBFF] to-[#FF4D9D] rounded-full mt-4"
          />
        </div>

        {/* Modern Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Professional Stylized Image / Holographic Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/15 via-[#915EFF]/20 to-white/5 backdrop-blur-xl border border-white/15 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              {/* Top Card Bar */}
              <div className="bg-[#090d24]/90 rounded-[22px] p-6 sm:p-8 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#00DBFF] shadow-[0_0_8px_#00DBFF]" />
                    <span className="font-mono text-xs text-gray-300 font-semibold">
                      ENGINEER_PROFILE.v1
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#915EFF] px-2 py-0.5 rounded bg-[#915EFF]/10 border border-[#915EFF]/20">
                    ACCREDITED
                  </span>
                </div>

                {/* Main Visual Display */}
                <div className="relative aspect-4/3 rounded-2xl bg-gradient-to-br from-[#121636] to-[#060a1d] border border-white/10 flex flex-col items-center justify-center p-6 overflow-hidden group">
                  <div className="absolute inset-0 bg-cyber-grid opacity-30" />
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#00DBFF]/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                  <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#915EFF]/20 rounded-full blur-2xl" />

                  {/* Profile Holographic Symbol */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-[#915EFF] to-[#00DBFF] p-[2px] mb-4 shadow-[0_0_25px_rgba(145,94,255,0.4)]">
                    <div className="w-full h-full rounded-full bg-[#050816] flex items-center justify-center">
                      <Cpu className="w-12 h-12 text-[#00DBFF]" />
                    </div>
                  </div>

                  <h4 className="relative z-10 font-display font-bold text-xl text-white">
                    MUBEENA
                  </h4>
                  <p className="relative z-10 text-xs font-mono text-gray-400 mt-1 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#915EFF]" />
                    B.Tech AI & Data Science
                  </p>
                </div>

                {/* Profile Spec Rows */}
                <div className="mt-6 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-gray-400">Academic Standing</span>
                    <span className="text-[#00DBFF] font-medium">First-Year Undergraduate</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-gray-400">Primary Core</span>
                    <span className="text-white font-medium">AI, ML, Data Science</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-gray-400">Key Domain</span>
                    <span className="text-[#FF4D9D] font-medium">Speech & Safety AI</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content & Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white leading-snug">
                Pioneering the Next Wave of{' '}
                <span className="bg-gradient-to-r from-[#915EFF] via-[#00DBFF] to-[#FF4D9D] bg-clip-text text-transparent">
                  Intelligent Technology
                </span>
              </h3>

              {/* Exact content specified by user */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                I am Mubeena, a first-year B.Tech student in Artificial Intelligence and
                Data Science. Passionate about technology, innovation, machine learning, and
                creating meaningful solutions. I enjoy participating in hackathons,
                exploring new ideas, and continuously developing my skills as an aspiring AI
                engineer.
              </p>
            </div>

            {/* 4 Feature Cards with glassmorphism, hover lift, glow border */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {featureCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className={`group p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-300 ${card.glowClass}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${card.color}15`,
                        border: `1px solid ${card.color}40`,
                      }}
                    >
                      <IconComponent
                        className="w-5 h-5"
                        style={{ color: card.color }}
                      />
                    </div>
                    <h4 className="font-display font-bold text-base text-white mb-1.5 flex items-center gap-1.5">
                      {card.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
