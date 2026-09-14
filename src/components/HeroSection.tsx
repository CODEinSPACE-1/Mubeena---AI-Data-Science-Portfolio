import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Mail,
  Brain,
  Database,
  Terminal,
  Activity,
  Cpu,
  Layers,
  ShieldCheck,
  Binary,
} from 'lucide-react';

export function HeroSection() {
  // Typewriter effect phrases
  const typewriterPhrases = [
    'AI & Data Science Engineer',
    'Machine Learning Architect',
    'Neural Systems Explorer',
    'B.Tech Innovation Builder',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typewriterPhrases[phraseIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      // Pause at full word
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#915EFF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00DBFF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#FF4D9D]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
        {/* LEFT SIDE: Hero Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          {/* Small Label Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#00DBFF] bg-gradient-to-r from-[#00DBFF]/10 to-[#915EFF]/10 border border-[#00DBFF]/30 shadow-[0_0_15px_rgba(0,219,255,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00DBFF] animate-pulse" />
            <span>ARTIFICIAL INTELLIGENCE & DATA SCIENCE</span>
          </motion.div>

          {/* Large Heading: MUBEENA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold tracking-tight text-white leading-none">
              MUBEENA
            </h1>

            {/* Gradient Subtitle with Typewriter */}
            <div className="h-12 sm:h-14 flex items-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-[#915EFF] via-[#00DBFF] to-[#FF4D9D] bg-clip-text text-transparent">
                {currentText}
                <span className="inline-block w-1 h-7 sm:h-9 bg-[#00DBFF] ml-1 animate-pulse align-middle" />
              </h2>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-light"
          >
            Building intelligent solutions that transform ideas into impact through
            artificial intelligence, innovation, and technology.
          </motion.p>

          {/* Key telemetry pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-gray-400"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10">
              <Brain className="w-3.5 h-3.5 text-[#915EFF]" /> Deep Learning & Speech
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10">
              <Binary className="w-3.5 h-3.5 text-[#00DBFF]" /> Python & Data Science
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> VocalShield Lead Dev
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {/* Explore Projects Button */}
            <button
              id="hero-explore-projects-btn"
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden bg-gradient-to-r from-[#915EFF] to-[#00DBFF] shadow-[0_0_25px_rgba(145,94,255,0.4)] hover:shadow-[0_0_35px_rgba(0,219,255,0.7)] transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
            </button>

            {/* Contact Me Button */}
            <button
              id="hero-contact-me-btn"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-gray-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#00DBFF]/50 backdrop-blur-md transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#00DBFF]" />
              <span>Contact Me</span>
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Floating Holographic Profile Frame & Animated Orbit Rings */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-72 sm:w-88 md:w-96 aspect-square flex items-center justify-center"
          >
            {/* Outer Rotating Orbit Ring 1 */}
            <div className="absolute inset-0 rounded-full border border-[#915EFF]/30 border-dashed animate-spin-slow pointer-events-none" />

            {/* Inner Reverse Rotating Orbit Ring 2 */}
            <div className="absolute inset-4 rounded-full border border-[#00DBFF]/25 border-dotted animate-spin-reverse-slow pointer-events-none" />

            {/* Orbit Node 1: AI Brain */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-[#050816]/90 border border-[#915EFF] shadow-[0_0_15px_rgba(145,94,255,0.6)] flex items-center justify-center pointer-events-auto">
                <Brain className="w-5 h-5 text-[#915EFF]" />
              </div>
            </motion.div>

            {/* Orbit Node 2: Database / Data Science */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-[#050816]/90 border border-[#00DBFF] shadow-[0_0_15px_rgba(0,219,255,0.6)] flex items-center justify-center pointer-events-auto">
                <Database className="w-5 h-5 text-[#00DBFF]" />
              </div>
            </motion.div>

            {/* Orbit Node 3: Python / ML Tensor */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#050816]/90 border border-[#FF4D9D] shadow-[0_0_15px_rgba(255,77,157,0.6)] flex items-center justify-center pointer-events-auto">
                <Cpu className="w-5 h-5 text-[#FF4D9D]" />
              </div>
            </motion.div>

            {/* Main Holographic Profile Card / Frame */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 sm:w-80 aspect-square rounded-3xl p-1 bg-gradient-to-br from-[#915EFF]/40 via-transparent to-[#00DBFF]/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(145,94,255,0.25)] border border-white/15 overflow-hidden group"
            >
              <div className="w-full h-full rounded-[22px] bg-[#050816]/90 relative overflow-hidden flex flex-col justify-between p-6">
                {/* Background matrix mesh */}
                <div className="absolute inset-0 bg-cyber-grid opacity-40" />
                <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#915EFF]/25 rounded-full blur-3xl pointer-events-none" />

                {/* Card Header Telemetry */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] font-mono text-emerald-300 font-semibold">
                      NEURAL_SYNC // ACTIVE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">ID: MUB-2026-AI</span>
                </div>

                {/* Center Holographic Avatar Crest */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-tr from-[#915EFF] to-[#00DBFF] p-[2px] shadow-[0_0_30px_rgba(145,94,255,0.4)] mb-3 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-[14px] bg-[#090d26] flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-radial-gradient opacity-60" />
                      {/* Stylized AI Engineer Hologram Icon */}
                      <Brain className="w-14 h-14 text-white drop-shadow-[0_0_15px_rgba(0,219,255,0.8)]" />
                      <div className="absolute bottom-1.5 px-2 py-0.5 rounded text-[9px] font-mono bg-white/10 text-[#00DBFF] border border-white/10">
                        AI CO-PILOT
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white tracking-wide">
                    MUBEENA
                  </h3>
                  <p className="text-xs font-mono text-[#00DBFF]">
                    B.Tech AI & Data Science
                  </p>
                </div>

                {/* Card Footer Live Telemetry */}
                <div className="relative z-10 grid grid-cols-2 gap-2 pt-3 border-t border-white/10 text-[10px] font-mono">
                  <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                    <span className="text-gray-400 block">SPECIALIZATION</span>
                    <span className="text-white font-medium">Deep Learning</span>
                  </div>
                  <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                    <span className="text-gray-400 block">STATUS</span>
                    <span className="text-[#00DBFF] font-medium">Innovating</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
