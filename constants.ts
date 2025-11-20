import { Experience, Education, Project, TechnicalSkillGroup, LanguageSkill } from './types';

export interface Content {
  personalInfo: typeof PERSONAL_INFO_BASE & { location: string; title: string };
  ui: {
    nav: { about: string; work: string; contact: string; cv: string };
    hero: { 
      role: string; 
      desc1: string; 
      desc2: string; 
      desc3: string; 
      desc4: string; 
      desc5: string; 
      projects: string; 
      contact: string 
    };
    about: { 
      title: string; 
      bio: string; 
      technicalTitle: string; 
      languagesTitle: string; 
      experienceTitle: string; 
      educationTitle: string;
    };
    projects: { title: string; code: string; demo: string };
    contact: { 
      title: string; 
      text: string; 
      email: string; 
      linkedin: string; 
      github: string; 
      rights: string 
    };
  };
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  technicalSkills: TechnicalSkillGroup[];
  languages: LanguageSkill[];
}

const PERSONAL_INFO_BASE = {
  name: "Ana Ramos Moya",
  email: "annaramosmoya@gmail.com",
  linkedin: "https://www.linkedin.com/in/aramos-m",
  github: "https://github.com/aramos-m",
  phone: "+34 647198393"
};

export const CONTENT: { en: Content; es: Content } = {
  en: {
    personalInfo: { ...PERSONAL_INFO_BASE, location: "Madrid, Spain", title: "Computational Linguist" },
    ui: {
      nav: { about: "ABOUT", work: "WORK", contact: "CONTACT", cv: "CV" },
      hero: {
        role: "Conversational AI Analyst",
        desc1: "Bridging the gap between",
        desc2: "Natural Language",
        desc3: "and",
        desc4: "Machine Intelligence",
        desc5: "Specialized in NLP, Process Automation, and Chinese Studies.",
        projects: "Projects",
        contact: "Contact"
      },
      about: {
        title: "About Me",
        bio: "My journey combines the precision of C programming with the linguistic nuance of Chinese Studies. I build systems that understand human language by bridging cultural context with algorithmic logic.",
        technicalTitle: "Technical Arsenal",
        languagesTitle: "Languages",
        experienceTitle: "Experience",
        educationTitle: "Education"
      },
      projects: { title: "Selected Works", code: "Code", demo: "Demo" },
      contact: {
        title: "Let's Connect",
        text: "Open to opportunities in NLP, Conversational AI, and Data Analysis. Based in Madrid, Spain.",
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        rights: "Designed with React & Tailwind."
      }
    },
    experiences: [
      {
        role: "Junior Data & Process Analyst",
        company: "Bechtle, S.L.",
        period: "03/2025 - Present",
        location: "Madrid",
        description: [
          "Maintenance of corporate systems (SAP S/4HANA, Dynamics 365).",
          "Created Power BI dashboards for KPI visualization.",
          "Process automation using Power Automate and Python scripts."
        ]
      },
      {
        role: "AI Solutions Intern",
        company: "Prosol Ingeniería, S.L.",
        period: "03/2025 - 06/2025",
        location: "Madrid",
        description: [
          "Developed intelligent bidding analysis solutions.",
          "Implemented Azure Logic Apps & Functions for data extraction.",
          "Document classification with Azure Document Intelligence & OpenAI."
        ]
      },
      {
        role: "Office Manager & Executive Assistant",
        company: "Bechtle, S.L.",
        period: "02/2022 - 03/2025",
        location: "Madrid",
        description: []
      }
    ],
    education: [
      {
        degree: "Master's in Digital Letters (Computational Linguistics)",
        institution: "Universidad Complutense de Madrid",
        period: "09/2024 - 09/2025",
        details: [
          "TFM (9.5/10): AI-based audiovisual accessibility system.",
          "Stack: Python, JavaScript, Dialogflow, XML/JSON."
        ]
      },
      {
        degree: "Computer Programming Degree",
        institution: "42 Madrid Fundación Telefónica",
        period: "09/2023 - Present",
        details: [
          "C programming, Git, Linux administration, Shell scripting.",
          "Implemented standard C library functions from scratch."
        ]
      },
      {
        degree: "BA in Asian & African Studies: Chinese",
        institution: "Universidad Autónoma de Madrid",
        period: "09/2017 - 06/2021",
        details: [
          "Exchange at National Taiwan University (2019-20).",
          "Thesis: AI in Chinese E-Commerce."
        ]
      }
    ],
    projects: [
      {
        title: "Audiovisual Accessibility System (TFM)",
        description: "A comprehensive AI-based system for subtitling, speaker diarization, and multilingual translation developed in collaboration with Telefónica.",
        tags: ["Python", "OpenAI Whisper", "PyTorch", "NLP"],
        category: "AI",
        github: "https://github.com/aramos-m"
      },
      {
        title: "Libft (C Library)",
        description: "Implementation of a personal C library with 43 standard functions (strlcpy, split, join, memory management) to understand low-level computing concepts.",
        tags: ["C", "Make", "Algorithms", "Memory Management"],
        category: "Development",
        github: "https://github.com/aramos-m"
      },
      {
        title: "NLP Rule-Based Extractor",
        description: "Creation and development of NLP rules for information extraction using Python and NLTK, focusing on Spanish language patterns.",
        tags: ["Python", "NLTK", "Regex", "Linguistics"],
        category: "NLP",
        github: "https://github.com/aramos-m"
      }
    ],
    technicalSkills: [
      { category: "Programming Languages", skills: ["C", "Python"] },
      { category: "Operating Systems", skills: ["Linux (Ubuntu)", "Windows"] },
      { category: "Containers & Virtualization", skills: ["Docker", "VirtualBox"] },
      { category: "Version Control", skills: ["Git", "GitHub"] }
    ],
    languages: [
      { language: "Spanish", level: "Native", proficiency: 100 },
      { language: "English", level: "Advanced (TOEFL iBT 106/120)", proficiency: 90 },
      { language: "Chinese", level: "Intermediate (HSK 3)", proficiency: 60 }
    ]
  },
  es: {
    personalInfo: { ...PERSONAL_INFO_BASE, location: "Madrid, España", title: "Lingüista Computacional" },
    ui: {
      nav: { about: "SOBRE MÍ", work: "PROYECTOS", contact: "CONTACTO", cv: "CV" },
      hero: {
        role: "Analista de IA Conversacional",
        desc1: "Uniendo",
        desc2: "Lenguaje Natural",
        desc3: "e",
        desc4: "Inteligencia Artificial",
        desc5: "Especializada en PNL, Automatización de Procesos y Estudios Chinos.",
        projects: "Proyectos",
        contact: "Contacto"
      },
      about: {
        title: "Sobre Mí",
        bio: "Mi trayectoria combina la precisión de la programación en C con el matiz lingüístico de los estudios chinos. Construyo sistemas que entienden el lenguaje humano uniendo el contexto cultural con la lógica algorítmica.",
        technicalTitle: "Arsenal Técnico",
        languagesTitle: "Idiomas",
        experienceTitle: "Experiencia",
        educationTitle: "Formación"
      },
      projects: { title: "Trabajos Seleccionados", code: "Código", demo: "Demo" },
      contact: {
        title: "Conectemos",
        text: "Abierta a oportunidades en PNL, IA Conversacional y Análisis de Datos. Resido en Madrid, España.",
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        rights: "Diseñado con React y Tailwind."
      }
    },
    experiences: [
      {
        role: "Analista Junior de Datos y Procesos",
        company: "Bechtle, S.L.",
        period: "03/2025 - Actualidad",
        location: "Madrid",
        description: [
          "Mantenimiento de sistemas corporativos (SAP S/4HANA, Dynamics 365).",
          "Creación de cuadros de mando en Power BI para visualización de KPIs.",
          "Automatización de procesos usando Power Automate y scripts en Python."
        ]
      },
      {
        role: "Becaria de Soluciones IA",
        company: "Prosol Ingeniería, S.L.",
        period: "03/2025 - 06/2025",
        location: "Madrid",
        description: [
          "Desarrollo de soluciones inteligentes de análisis de licitaciones.",
          "Implementación de Azure Logic Apps & Functions para extracción de datos.",
          "Clasificación de documentos con Azure Document Intelligence & OpenAI."
        ]
      },
      {
        role: "Office Manager & Asistente Ejecutiva",
        company: "Bechtle, S.L.",
        period: "02/2022 - 03/2025",
        location: "Madrid",
        description: []
      }
    ],
    education: [
      {
        degree: "Máster en Letras Digitales (Lingüística Computacional)",
        institution: "Universidad Complutense de Madrid",
        period: "09/2024 - 09/2025",
        details: [
          "TFM (9.5/10): Sistema de accesibilidad audiovisual basado en IA.",
          "Stack: Python, JavaScript, Dialogflow, XML/JSON."
        ]
      },
      {
        degree: "Programación Informática",
        institution: "42 Madrid Fundación Telefónica",
        period: "09/2023 - Actualidad",
        details: [
          "Programación en C, Git, administración Linux, Shell scripting.",
          "Implementación de funciones estándar de la librería C desde cero."
        ]
      },
      {
        degree: "Grado en Estudios de Asia y África: Chino",
        institution: "Universidad Autónoma de Madrid",
        period: "09/2017 - 06/2021",
        details: [
          "Intercambio en la Universidad Nacional de Taiwán (2019-20).",
          "TFG: IA en el comercio electrónico chino."
        ]
      }
    ],
    projects: [
      {
        title: "Sistema de Accesibilidad Audiovisual (TFM)",
        description: "Sistema integral basado en IA para subtitulado, diarización y traducción multilingüe desarrollado en colaboración con Telefónica.",
        tags: ["Python", "OpenAI Whisper", "PyTorch", "NLP"],
        category: "AI",
        github: "https://github.com/aramos-m"
      },
      {
        title: "Libft (Librería C)",
        description: "Implementación de librería personal en C con 43 funciones estándar (strlcpy, split, join, gestión de memoria) para entender conceptos de bajo nivel.",
        tags: ["C", "Make", "Algoritmos", "Gestión de Memoria"],
        category: "Development",
        github: "https://github.com/aramos-m"
      },
      {
        title: "Extractor Basado en Reglas PNL",
        description: "Desarrollo de reglas de PNL para extracción de información usando Python y NLTK, enfocado en patrones del español.",
        tags: ["Python", "NLTK", "Regex", "Lingüística"],
        category: "NLP",
        github: "https://github.com/aramos-m"
      }
    ],
    technicalSkills: [
      { category: "Lenguajes de Programación", skills: ["C", "Python"] },
      { category: "Sistemas Operativos", skills: ["Linux (Ubuntu)", "Windows"] },
      { category: "Contenedores y Virtualización", skills: ["Docker", "VirtualBox"] },
      { category: "Control de Versiones", skills: ["Git", "GitHub"] }
    ],
    languages: [
      { language: "Español", level: "Nativo", proficiency: 100 },
      { language: "Inglés", level: "Avanzado (TOEFL iBT 106/120)", proficiency: 90 },
      { language: "Chino", level: "Intermedio (HSK 3)", proficiency: 60 }
    ]
  }
};