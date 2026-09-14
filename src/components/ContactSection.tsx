import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const emailAddress = 'mubeena.ai.engineer@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#00DBFF', '#915EFF'],
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#915EFF', '#00DBFF', '#FF4D9D'],
      });
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#915EFF]/15 via-[#00DBFF]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Header & Subtext */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-[#915EFF] bg-[#915EFF]/10 border border-[#915EFF]/30 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>INITIATE CONNECTION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-tight max-w-3xl"
          >
            Let's Build Something Amazing Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl font-light"
          >
            Interested in collaborating on a project, hackathon, or innovative idea? Let's connect.
          </motion.p>
        </div>

        {/* 3 Core Magnetic Action Buttons (Email, GitHub, LinkedIn) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {/* 1. Email Button */}
          <motion.div
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#915EFF]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(145,94,255,0.3)] transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#915EFF]/15 border border-[#915EFF]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-[#915EFF]" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-1">Email</h3>
            <p className="text-xs font-mono text-gray-400 mb-4">{emailAddress}</p>
            <div className="flex items-center gap-2 w-full">
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 py-2 rounded-xl text-xs font-mono font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors text-center"
              >
                Send Mail
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>

          {/* 2. GitHub Button */}
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#00DBFF]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,219,255,0.3)] transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#00DBFF]/15 border border-[#00DBFF]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Github className="w-7 h-7 text-[#00DBFF]" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-1">GitHub</h3>
            <p className="text-xs font-mono text-gray-400 mb-4">@mubeena-ai-dev</p>
            <span className="w-full py-2 rounded-xl text-xs font-mono font-semibold bg-white/10 group-hover:bg-[#00DBFF]/20 text-white transition-colors flex items-center justify-center gap-1.5">
              <span>View Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </motion.a>

          {/* 3. LinkedIn Button */}
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#FF4D9D]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,77,157,0.3)] transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FF4D9D]/15 border border-[#FF4D9D]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-7 h-7 text-[#FF4D9D]" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-1">LinkedIn</h3>
            <p className="text-xs font-mono text-gray-400 mb-4">Mubeena | AI & DS</p>
            <span className="w-full py-2 rounded-xl text-xs font-mono font-semibold bg-white/10 group-hover:bg-[#FF4D9D]/20 text-white transition-colors flex items-center justify-center gap-1.5">
              <span>Connect Professionally</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </motion.a>
        </div>

        {/* Direct Transmission Dispatch Form */}
        <div className="max-w-2xl mx-auto rounded-3xl p-1 bg-gradient-to-br from-white/10 via-[#915EFF]/20 to-white/5 backdrop-blur-2xl border border-white/15">
          <div className="bg-[#080c26]/95 rounded-[22px] p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#00DBFF]" />
                <span className="font-mono text-xs text-white font-semibold tracking-wider">
                  SEND DIRECT DISPATCH
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                NEURAL_RELAY // READY
              </span>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 flex flex-col items-center text-center space-y-3"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-display font-bold text-white">
                  Transmission Delivered!
                </h4>
                <p className="text-xs font-mono text-gray-300 max-w-sm">
                  Thank you for reaching out. Your message has been routed to Mubeena's inbox.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ada Lovelace"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#00DBFF] focus:outline-none text-sm text-white placeholder-gray-500 font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ada@computing.org"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#00DBFF] focus:outline-none text-sm text-white placeholder-gray-500 font-sans transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">
                    PROJECT / HACKATHON SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="AI Hackathon Collaboration / Project Discussion"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#00DBFF] focus:outline-none text-sm text-white placeholder-gray-500 font-sans transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5">
                    TRANSMISSION MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your idea, hackathon theme, or project..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#00DBFF] focus:outline-none text-sm text-white placeholder-gray-500 font-sans transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#915EFF] to-[#00DBFF] text-white shadow-[0_0_20px_rgba(145,94,255,0.4)] hover:shadow-[0_0_30px_rgba(0,219,255,0.6)] hover:scale-[1.01] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>ENCRYPTING & SENDING...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
