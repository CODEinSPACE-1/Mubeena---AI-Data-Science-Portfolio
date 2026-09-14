import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Stats', href: '#stats' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#050816]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#915EFF] to-[#00DBFF] p-[1px] shadow-[0_0_20px_rgba(145,94,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,219,255,0.7)] transition-all">
            <div className="w-full h-full bg-[#050816] rounded-[11px] flex items-center justify-center">
              <span className="font-display font-black text-lg bg-gradient-to-r from-[#915EFF] to-[#00DBFF] bg-clip-text text-transparent">
                M
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-base tracking-wide text-white group-hover:text-[#00DBFF] transition-colors">
                MUBEENA
              </span>
              <span className="text-xs font-mono text-[#915EFF] font-semibold tracking-wider">
                // AI.DS
              </span>
            </div>
            <span className="text-[10px] font-mono text-gray-400 tracking-wider">
              PORTFOLIO 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white rounded-full transition-all duration-200 hover:bg-white/10 relative"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA / Badge */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>B.Tech AI & DS • Year 1</span>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-[#915EFF] to-[#00DBFF] text-white shadow-[0_0_20px_rgba(145,94,255,0.4)] hover:shadow-[0_0_30px_rgba(0,219,255,0.6)] hover:scale-105 transition-all duration-200"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050816]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>B.Tech AI & DS • Year 1</span>
            </div>

            <div className="flex flex-col space-y-2 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-[#00DBFF] hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="block w-full text-center py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#915EFF] to-[#00DBFF] text-white shadow-[0_0_20px_rgba(145,94,255,0.4)]"
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
