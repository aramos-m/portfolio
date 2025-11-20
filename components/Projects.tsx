import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Github, ExternalLink, Terminal } from 'lucide-react';

const Projects: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-stone-paper/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-16">
           <div className="h-px bg-ink-black w-12 mr-4"></div>
           <h3 className="font-display text-3xl font-light text-ink-black tracking-wide">{content.ui.projects.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-porcelain border-t-4 border-cinnabar p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between rounded-b-xl"
              style={{
                backgroundImage: "linear-gradient(to bottom, #fcfbf9 0%, #fcfbf9 95%, #e6e5e3 100%)" 
              }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-300 rounded-tr-lg"></div>

              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="p-2 bg-white shadow-sm rounded-lg border border-stone-100">
                    <Terminal size={20} className="text-jade-dark" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gray-400 uppercase border border-gray-200 px-2 py-1 rounded tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <h4 className="font-display text-xl font-bold text-ink-black mb-3 group-hover:text-cinnabar transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-gray-500 bg-gray-100/80 border border-gray-200 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-sm font-mono text-ink-black hover:text-cinnabar transition-colors">
                      <Github size={16} className="mr-2" /> {content.ui.projects.code}
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center text-sm font-mono text-ink-black hover:text-cinnabar transition-colors">
                      <ExternalLink size={16} className="mr-2" /> {content.ui.projects.demo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
