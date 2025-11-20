import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const { content } = useLanguage();
  const { personalInfo, ui } = content;

  return (
    <footer id="contact" className="bg-ink-black text-porcelain py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-display font-medium mb-8">{ui.contact.title}</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto font-mono text-sm leading-relaxed">
          {ui.contact.text}
        </p>

        <div className="flex justify-center gap-8 mb-16">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="group flex flex-col items-center space-y-3 hover:text-cinnabar transition-colors"
          >
            <div className="p-4 border border-gray-700 rounded-2xl group-hover:border-cinnabar group-hover:bg-cinnabar/10 transition-all duration-300">
              <Mail size={24} />
            </div>
            <span className="text-xs font-mono tracking-wider opacity-60 group-hover:opacity-100">{ui.contact.email}</span>
          </a>

          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center space-y-3 hover:text-blue-400 transition-colors"
          >
            <div className="p-4 border border-gray-700 rounded-2xl group-hover:border-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
              <Linkedin size={24} />
            </div>
            <span className="text-xs font-mono tracking-wider opacity-60 group-hover:opacity-100">{ui.contact.linkedin}</span>
          </a>

          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center space-y-3 hover:text-white transition-colors"
          >
             <div className="p-4 border border-gray-700 rounded-2xl group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
              <Github size={24} />
            </div>
            <span className="text-xs font-mono tracking-wider opacity-60 group-hover:opacity-100">{ui.contact.github}</span>
          </a>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}.</p>
          <p className="mt-2 md:mt-0">{ui.contact.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
