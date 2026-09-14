import { motion } from 'motion/react';
import {
  Sparkles,
  GraduationCap,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  Rocket,
  Award,
  BookOpen,
} from 'lucide-react';
import { TimelineMilestone } from '../types';

export function EducationSection() {
  const timeline: TimelineMilestone[] = [
    {
      year: '2025',
      title: 'Started B.Tech AI & Data Science',
      status: 'completed',
      description:
        'Commenced undergraduate journey into computational foundations, linear algebra, discrete mathematics, and Python programming principles.',
      highlights: [
        'Enrolled in Artificial Intelligence & Data Science Program',
        'Built core foundations in algorithmic problem solving',
        'Explored introductory neural models & Python architectures',
      ],
    },
    {
      year: '2026',
      title: 'First-Year Student (Active Cohort)',
      status: 'current',
      description:
        'Actively advancing machine learning capabilities, speech analytics, and developing VocalShield safety framework while collaborating on hackathon prototypes.',
      highlights: [
        'Developed VocalShield Voice Safety AI project',
        'Mastering Data Structures, Pandas, NumPy, and modern UI',
        'Participating in collegiate coding hackathons & AI challenges',
      ],
    },
    {
      year: '2027',
      title: 'Hackathons & Projects',
      status: 'upcoming',
      description:
        'Expanding into national-level hackathons, open-source AI contributions, multi-agent systems, and specialized NLP applications.',
      highlights: [
        'Scale competitive hackathon submissions and cross-discipline teams',
        'Publish research prototypes in speech & vision intelligence',
        'Engage in developer summits and tech community building',
      ],
    },
    {
      year: '2028',
      title: 'Advanced AI Learning',
      status: 'upcoming',
      description:
        'Deep-dive into transformer architectures, large multimodal models, reinforcement learning, distributed training, and AI ethics.',
      highlights: [
        'Advanced neural optimization & high-throughput inference',
        'Research internship in industrial AI laboratories',
        'Enterprise data engineering & cloud AI deployment',
      ],
    },
    {
      year: '2029',
      title: 'Graduate & Career Launch',
      status: 'upcoming',
      description:
        'Completion of B.Tech degree with academic honors, stepping into the global technology ecosystem as a specialized AI & Data Science Engineer.',
      highlights: [
        'B.Tech Artificial Intelligence & Data Science Graduation',
        'Launch of production-grade AI solutions or startup venture',
        'Pioneering meaningful human-centered intelligent technology',
      ],
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-[#FF4D9D] bg-[#FF4D9D]/10 border border-[#FF4D9D]/30 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC TIMELINE & ROADMAP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight"
          >
            Education & Journey
          </motion.h2>

          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl">
            My structured trajectory through B.Tech Artificial Intelligence & Data Science, from foundational learning to global engineering impact.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#915EFF] via-[#00DBFF] to-[#FF4D9D] rounded-full mt-4"
          />
        </div>

        {/* Animated Vertical Timeline */}
        <div className="relative">
          {/* Central Glowing Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#915EFF] via-[#00DBFF] to-white/10" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = item.status === 'current';
              const isCompleted = item.status === 'completed';

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    {isCurrent ? (
                      <div className="relative flex items-center justify-center">
                        <span className="animate-ping absolute w-8 h-8 rounded-full bg-[#00DBFF] opacity-75" />
                        <div className="w-7 h-7 rounded-full bg-[#050816] border-2 border-[#00DBFF] flex items-center justify-center shadow-[0_0_15px_#00DBFF]">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#00DBFF]" />
                        </div>
                      </div>
                    ) : isCompleted ? (
                      <div className="w-6 h-6 rounded-full bg-[#050816] border-2 border-[#915EFF] flex items-center justify-center shadow-[0_0_12px_#915EFF]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#915EFF]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-[#050816] border-2 border-white/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      </div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 rounded-3xl backdrop-blur-xl border transition-all duration-300 relative ${
                        isCurrent
                          ? 'bg-[#00DBFF]/[0.05] border-[#00DBFF]/40 shadow-[0_0_30px_rgba(0,219,255,0.2)]'
                          : isCompleted
                          ? 'bg-white/[0.03] border-[#915EFF]/30 shadow-[0_0_20px_rgba(145,94,255,0.15)]'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                      }`}
                    >
                      {/* Year & Status Pill */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`font-display font-black text-2xl tracking-tight ${
                            isCurrent
                              ? 'text-[#00DBFF]'
                              : isCompleted
                              ? 'text-[#915EFF]'
                              : 'text-gray-400'
                          }`}
                        >
                          {item.year}
                        </span>

                        <span
                          className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-semibold border ${
                            isCurrent
                              ? 'bg-[#00DBFF]/15 text-[#00DBFF] border-[#00DBFF]/40 animate-pulse'
                              : isCompleted
                              ? 'bg-[#915EFF]/15 text-[#915EFF] border-[#915EFF]/30'
                              : 'bg-white/5 text-gray-400 border-white/10'
                          }`}
                        >
                          {isCurrent
                            ? 'CURRENT FOCUS'
                            : isCompleted
                            ? 'FOUNDATION'
                            : 'ROADMAP'}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h4 className="text-lg font-display font-bold text-white mb-2">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-2 border-t border-white/5">
                        {item.highlights.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-center gap-2 text-[11px] font-mono text-gray-400"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#915EFF]" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
