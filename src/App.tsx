import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { SkillsSection } from './components/SkillsSection';
import { BigStatementSection } from './components/BigStatementSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { TechStackShowcase } from './components/TechStackShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050816] text-white selection:bg-[#915EFF]/30 selection:text-[#00DBFF]">
      {/* 1. Futuristic Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* 2. Interactive Spotlight & Glowing Cursor */}
      <CustomCursor />

      {/* 3. Three.js 3D Neural Network & Interactive Particle Canvas */}
      <ThreeCanvas />

      {/* 4. Global Ambient Matrix Grid Layer */}
      <div className="fixed inset-0 bg-cyber-grid opacity-30 pointer-events-none z-0" />

      {/* 5. Main Application Content */}
      <div className="relative z-20 flex flex-col">
        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Skills Matrix Section */}
        <SkillsSection />

        {/* Big Statement Section */}
        <BigStatementSection />

        {/* Featured Projects (VocalShield) Section */}
        <ProjectsSection />

        {/* Education Timeline Section */}
        <EducationSection />

        {/* Tech Stack Showcase */}
        <TechStackShowcase />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
