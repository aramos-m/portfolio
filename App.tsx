import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useLanguage } from './LanguageContext';
import { Download } from 'lucide-react';

const App: React.FC = () => {
  const { language, setLanguage, content } = useLanguage();

  return (
    <div className="relative w-full min-h-screen selection:bg-cinnabar selection:text-white font-sans">
      
      {/* Navigation (Simple Floating) */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-porcelain/80 backdrop-blur-md border-b border-gray-100 md:border-none md:bg-transparent transition-all duration-300">
        <div className="font-display font-bold text-lg text-ink-black tracking-wider md:hidden">ARM</div>
        <div className="hidden md:block">
            {/* Desktop logo placeholder */}
        </div>
        
        <div className="flex items-center gap-6">
          <ul className="flex items-center space-x-8 font-mono text-xs tracking-widest text-gray-600 bg-white/50 md:bg-transparent px-4 py-2 rounded-full backdrop-blur-sm md:backdrop-blur-none">
            <li><a href="#about" className="hover:text-cinnabar transition-colors">{content.ui.nav.about}</a></li>
            <li><a href="#projects" className="hover:text-cinnabar transition-colors">{content.ui.nav.work}</a></li>
            <li><a href="#contact" className="hover:text-cinnabar transition-colors">{content.ui.nav.contact}</a></li>
            <li className="border-l border-gray-300 pl-8">
              <a 
                href="Ana_Ramos_Moya_CV.pdf" 
                download="Ana_Ramos_Moya_CV.pdf"
                className="flex items-center gap-2 text-ink-black hover:text-cinnabar transition-colors font-bold"
              >
                <span>{content.ui.nav.cv}</span>
                <Download size={14} />
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-2 text-xs font-mono bg-white/50 md:bg-transparent px-2 py-1 rounded-full">
            <button 
              onClick={() => setLanguage('en')} 
              className={`transition-colors ${language === 'en' ? 'text-cinnabar font-bold' : 'text-gray-400 hover:text-ink-black'}`}
            >
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button 
              onClick={() => setLanguage('es')} 
              className={`transition-colors ${language === 'es' ? 'text-cinnabar font-bold' : 'text-gray-400 hover:text-ink-black'}`}
            >
              ES
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
      </main>
      
      <Contact />
    </div>
  );
};

export default App;