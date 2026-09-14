import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Terminal, Cpu, Zap } from 'lucide-react';

export function BigStatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.88, 1.05]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0.4, 1, 1, 0.4]);
  const textY1 = useTransform(scrollYProgress, [0, 0.6], [50, -20]);
  const textY2 = useTransform(scrollYProgress, [0, 0.6], [80, -40]);

  return (
    <section
      ref={containerRef}
      id="statement"
      className="relative min-h-[90vh] flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20"
    >
      {/* Background radial spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#915EFF]/20 via-[#00DBFF]/15 to-[#FF4D9D]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <motion.div
        style={{ scale, opacity }}
        className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative z-10"
      >
        {/* Floating AI Mission Chip */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#00DBFF] bg-white/[0.04] border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,219,255,0.2)]"
        >
          <Zap className="w-3.5 h-3.5 text-[#FF4D9D]" />
          <span>MISSION & PHILOSOPHY</span>
        </motion.div>

        {/* Line 1: "I DON'T JUST STUDY AI" */}
        <motion.div style={{ y: textY1 }}>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white/90 uppercase leading-none drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
            I DON'T JUST STUDY AI
          </h2>
        </motion.div>

        {/* Line 2: "I BUILD WITH IT." */}
        <motion.div style={{ y: textY2 }} className="mt-4 sm:mt-6">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight leading-none bg-gradient-to-r from-[#915EFF] via-[#00DBFF] to-[#FF4D9D] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(145,94,255,0.6)]">
            I BUILD WITH IT.
          </h2>
        </motion.div>

        {/* Secondary Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-base sm:text-xl text-gray-300 max-w-2xl font-light leading-relaxed"
        >
          From neural speech classifiers to resilient real-time architectures,
          engineering impactful AI solutions that bridge academic theory and production
          reality.
        </motion.p>

        {/* Cyber Telemetry Indicator bar */}
        <div className="mt-10 flex items-center gap-3 text-xs font-mono text-gray-400">
          <span className="w-2 h-2 rounded-full bg-[#00DBFF] animate-ping" />
          <span className="tracking-widest">CONTINUOUS_INFERENCE // PROACTIVE_BUILDER</span>
        </div>
      </motion.div>
    </section>
  );
}
