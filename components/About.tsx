
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Briefcase, GraduationCap, Globe, Terminal, Cpu, Server, GitBranch, Code } from 'lucide-react';

// Helper to get icon for skill category
const getCategoryIcon = (category: string) => {
  // Simple matching based on keywords in both languages
  const catLower = category.toLowerCase();
  if (catLower.includes("program") || catLower.includes("lenguaje")) return <Code size={18} />;
  if (catLower.includes("operating") || catLower.includes("sistemas")) return <Cpu size={18} />;
  if (catLower.includes("container") || catLower.includes("contenedores")) return <Server size={18} />;
  if (catLower.includes("version") || catLower.includes("control")) return <GitBranch size={18} />;
  return <Terminal size={18} />;
};

const About: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto relative">
      
      {/* SVG Filter Definition for the Old Stamp Effect */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="stamp-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Skills & Bio */}
        <div className="lg:col-span-5 space-y-12">
          
           {/* Bio Card with Stamp */}
           <div className="p-8 border border-gray-200 bg-white rounded-xl shadow-sm relative overflow-hidden transition-shadow hover:shadow-md">
            <div className="flex justify-between items-start mb-6">
                <h3 className="font-display text-2xl font-bold text-ink-black">{content.ui.about.title}</h3>
            </div>
            <p className="font-sans text-gray-600 text-base leading-relaxed">
              {content.ui.about.bio}
            </p>
          </div>

          {/* Technical Skills - Enhanced "Data Card" Design */}
          <div>
            <div className="flex items-center mb-6">
               <div className="p-2 bg-jade/10 rounded-md mr-3 text-jade-dark">
                  <Terminal size={20} />
               </div>
               <h3 className="font-display text-xl font-bold text-ink-black">{content.ui.about.technicalTitle}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {content.technicalSkills.map((group, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-lg border border-stone-200 hover:border-cinnabar/30 transition-all duration-300 hover:shadow-md group">
                        <div className="flex items-center mb-3">
                            <span className="text-gray-400 group-hover:text-cinnabar transition-colors mr-2">
                                {getCategoryIcon(group.category)}
                            </span>
                            <h4 className="font-display text-sm font-bold text-gray-800 uppercase tracking-wide">
                                {group.category}
                            </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="font-mono text-xs text-ink-black bg-stone-50 border border-stone-200 px-2.5 py-1 rounded-md group-hover:border-cinnabar/20 group-hover:bg-cinnabar/5 transition-all">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Language Skills */}
          <div>
             <div className="flex items-center mb-6">
               <div className="p-2 bg-cinnabar/10 rounded-md mr-3 text-cinnabar">
                 <Globe size={20} />
               </div>
               <h3 className="font-display text-xl font-bold text-ink-black">{content.ui.about.languagesTitle}</h3>
            </div>
            <div className="space-y-6 bg-white p-6 rounded-xl border border-stone-200">
              {content.languages.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 items-end">
                    <span className="font-sans font-semibold text-gray-800">{skill.language}</span>
                    <span className="font-mono text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{skill.level}</span>
                  </div>
                  <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cinnabar to-orange-400 opacity-90 rounded-full" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column: Experience & Education Timeline */}
        <div className="lg:col-span-7">
          <div className="mb-16">
            <div className="flex items-center mb-8">
               <div className="p-2 bg-ink-black/5 rounded-md mr-3 text-ink-black">
                 <Briefcase size={24} />
               </div>
               <h3 className="font-display text-2xl font-bold text-ink-black">{content.ui.about.experienceTitle}</h3>
            </div>
            <div className="border-l-2 border-stone-200 ml-3 space-y-12">
              {content.experiences.map((exp, i) => (
                <div key={i} className="relative pl-8 group">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-white bg-stone-300 group-hover:bg-cinnabar transition-colors shadow-sm"></div>
                  <h4 className="font-bold text-xl text-gray-900 font-display">{exp.role}</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500 mb-4 font-mono mt-1">
                    <span className="font-semibold text-jade-dark">{exp.company}</span>
                    <span className="italic">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="ml-4 text-gray-600 space-y-2 text-sm font-sans leading-relaxed list-disc marker:text-cinnabar">
                    {exp.description.map((desc, j) => (
                      <li key={j}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
             <div className="flex items-center mb-8">
               <div className="p-2 bg-jade/10 rounded-md mr-3 text-jade-dark">
                  <GraduationCap size={24} />
               </div>
               <h3 className="font-display text-2xl font-bold text-ink-black">{content.ui.about.educationTitle}</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {content.education.map((edu, i) => (
                <div key={i} className="bg-white p-6 border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-jade-dark/30 transition-all duration-300 rounded-xl flex flex-col">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                      <h4 className="font-bold text-gray-900 font-display text-lg pr-4 leading-tight">{edu.degree}</h4>
                      <div className="text-xs font-mono text-jade-dark whitespace-nowrap bg-jade/5 px-2 py-1 rounded self-start md:self-auto border border-jade/20">{edu.period}</div>
                  </div>
                  <div className="text-sm text-gray-500 mb-5 font-sans font-medium">{edu.institution}</div>
                  {edu.details && (
                    <div className="mt-auto bg-stone-50 p-3 rounded-lg border border-stone-100">
                         <ul className="list-none space-y-2">
                            {edu.details.map((detail, dIdx) => (
                                <li key={dIdx} className="text-xs text-gray-600 font-mono flex items-start">
                                    <span className="text-jade mr-2">▹</span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
