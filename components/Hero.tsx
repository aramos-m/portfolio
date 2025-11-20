import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import InkNetworkBackground from './InkNetworkBackground';

const Hero: React.FC = () => {
  const { content } = useLanguage();
  const [char, setChar] = useState('文');
  const characters = ['文', '字', '语', '言', '数', '据', '网', '络'];
  const binaries = ['0101', '1010', '0011', '1100', '0x4A', 'NULL'];

  useEffect(() => {
    const interval = setInterval(() => {
      const isChinese = Math.random() > 0.5;
      if (isChinese) {
        setChar(characters[Math.floor(Math.random() * characters.length)]);
      } else {
        setChar(binaries[Math.floor(Math.random() * binaries.length)]);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden p-8 bg-porcelain">
      
      {/* Background Effect confined to Hero */}
      <InkNetworkBackground />

      {/* SVG Filters for Ink Effect */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="ink-flow-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs>
      </svg>

      {/* Left Ink/Neural Decoration */}
      <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 w-64 h-[600px] opacity-25 pointer-events-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 300 600" className="overflow-visible">
            <g filter="url(#ink-flow-texture)" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round">
                <path d="M-40,300 C60,300 80,200 150,180" />
                <path d="M150,180 C200,160 250,200 280,250" />
                <path d="M150,180 C180,100 120,50 160,20" />
                <path d="M-40,350 C70,360 110,450 180,480" />
                <path d="M180,480 C240,500 260,550 290,580" />
                <path d="M150,180 C160,250 140,350 180,480" strokeDasharray="5,5" opacity="0.6"/>
            </g>
            <g filter="url(#ink-flow-texture)" fill="#1a1a1a">
                <circle cx="150" cy="180" r="4" />
                <circle cx="280" cy="250" r="3" />
                <circle cx="160" cy="20" r="3" />
                <circle cx="180" cy="480" r="5" />
                <circle cx="290" cy="580" r="3" />
            </g>
          </svg>
      </div>

      {/* Right Ink/Neural Decoration */}
      <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-64 h-[600px] opacity-25 pointer-events-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 300 600" className="overflow-visible">
            <g filter="url(#ink-flow-texture)" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round">
                <path d="M340,300 C240,300 210,400 150,420" />
                <path d="M150,420 C100,440 50,400 20,350" />
                <path d="M150,420 C120,500 180,550 140,580" />
                <path d="M340,250 C260,240 220,150 150,120" />
                <path d="M150,420 C140,300 160,200 150,120" strokeDasharray="5,5" opacity="0.6"/>
            </g>
            <g filter="url(#ink-flow-texture)" fill="#1a1a1a">
                <circle cx="150" cy="420" r="4" />
                <circle cx="20" cy="350" r="3" />
                <circle cx="140" cy="580" r="3" />
                <circle cx="150" cy="120" r="5" />
            </g>
          </svg>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-5xl relative mt-12">
        
        {/* Animated Seal/Logo */}
        <div className="mb-12 flex justify-center">
          <div className="w-24 h-24 border-4 border-cinnabar flex items-center justify-center rounded-xl rotate-3 transition-transform duration-700 hover:rotate-0 bg-porcelain shadow-lg z-20">
             <span className="font-mono text-cinnabar text-2xl font-bold transition-all duration-500 select-none">
               {char}
             </span>
          </div>
        </div>

        {/* Primary Title - Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-ink-black mb-6 tracking-tight z-10 relative">
          {content.personalInfo.name}
        </h1>
        
        {/* Subtitle - Role */}
        <h2 className="text-xl md:text-3xl text-gray-500 mb-10 font-display font-light tracking-wide flex justify-center">
          <span className="text-cinnabar font-medium">{content.ui.hero.role}</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-12 font-sans text-lg">
          {content.ui.hero.desc1} <span className="text-jade-dark font-semibold border-b border-jade-dark/20">{content.ui.hero.desc2}</span> {content.ui.hero.desc3} <span className="text-jade-dark font-semibold border-b border-jade-dark/20">{content.ui.hero.desc4}</span>. 
          <br/>{content.ui.hero.desc5}
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#projects" className="px-10 py-3 border border-ink-black bg-transparent hover:bg-ink-black hover:text-porcelain transition-colors duration-300 font-mono text-sm uppercase tracking-widest rounded-lg w-48 text-center">
              {content.ui.hero.projects}
            </a>
            <a href="#contact" className="px-10 py-3 bg-cinnabar text-white hover:bg-red-900 transition-colors duration-300 font-display font-semibold tracking-wide rounded-lg w-48 text-center shadow-md">
              {content.ui.hero.contact}
            </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
