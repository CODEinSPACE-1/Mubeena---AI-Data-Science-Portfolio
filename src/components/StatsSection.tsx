import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FolderGit2, Code, Flame, Award, Cpu } from 'lucide-react';

interface StatItemProps {
  targetNumber: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
  icon: typeof FolderGit2;
  color: string;
  delay: number;
}

function StatCounterCard({
  targetNumber,
  prefix = '',
  suffix,
  label,
  sublabel,
  icon: IconComponent,
  color,
  delay,
}: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = targetNumber / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  const formattedCount =
    targetNumber >= 10 || suffix.includes('%')
      ? count
      : count < 10
      ? `0${count}`
      : count;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="group relative p-7 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      {/* Glow highlight */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl transition-opacity duration-300 opacity-20 group-hover:opacity-40"
        style={{ backgroundColor: color }}
      />

      {/* Top bar */}
      <div className="flex items-center justify-between mb-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
          style={{
            backgroundColor: `${color}15`,
            border: `1px solid ${color}40`,
          }}
        >
          <IconComponent className="w-6 h-6" style={{ color }} />
        </div>
        <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/5">
          METRIC
        </span>
      </div>

      {/* Counter Number */}
      <div className="flex items-baseline gap-1 font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
        <span style={{ color }}>{prefix}</span>
        <span>{formattedCount}</span>
        <span className="text-3xl sm:text-4xl text-gray-300 font-bold ml-0.5">
          {suffix}
        </span>
      </div>

      {/* Card Label */}
      <div className="mt-2">
        <h4 className="text-lg font-display font-bold text-white tracking-wide">
          {label}
        </h4>
        <p className="text-xs font-mono text-gray-400 mt-0.5">{sublabel}</p>
      </div>

      {/* Cyber line indicator */}
      <div className="mt-5 w-full bg-white/5 h-1 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: isInView ? '100%' : '0%' }}
          transition={{ duration: 1.5, delay: delay + 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="relative py-16 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: 01+ Projects */}
          <StatCounterCard
            targetNumber={1}
            suffix="+"
            label="Projects"
            sublabel="Flagship AI Architecture (VocalShield)"
            icon={FolderGit2}
            color="#915EFF"
            delay={0.1}
          />

          {/* Card 2: 05+ Technologies */}
          <StatCounterCard
            targetNumber={5}
            suffix="+"
            label="Technologies"
            sublabel="Core Frameworks, Python & Tooling"
            icon={Code}
            color="#00DBFF"
            delay={0.2}
          />

          {/* Card 3: 100% Passion */}
          <StatCounterCard
            targetNumber={100}
            suffix="%"
            label="Passion"
            sublabel="Dedication to Hackathons & Innovation"
            icon={Flame}
            color="#FF4D9D"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
