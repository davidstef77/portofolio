"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ro';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': "Hey, I'm",
    'hero.name': 'David',
    'hero.badge': '🚀 Full-Stack Developer & Innovator',
    'hero.subtitle': 'Transform complex ideas into fast apps, elegant interfaces, and AI-powered solutions.',
    'hero.chips': 'Web Apps | Mobile Apps | AI Solutions | Full-Stack | Video Editing',
    'hero.cta': 'Explore Projects',
    
    // About Section
    'about.title': 'About Me',
    'about.paragraph': "I'm a dedicated Full-Stack developer with a passion for clean code, intuitive interfaces, and AI-driven solutions — every project is an opportunity to grow and exceed expectations.",
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.features': 'Key Features',
    'projects.technologies': 'Technologies Used',
    'projects.challenges': 'Challenges & Solutions',
    'projects.demo': 'Live Demo',
    'projects.code': 'View Code',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'Let\'s build something amazing together! Send me a message anytime. I\'m open to collaborations and new opportunities.',
    'contact.email': 'Send Email',
    'contact.phone': 'Call Me',
    
    // Other Work Section
    'other.title': 'Other Work',
    'other.subtitle': 'Beyond code — video production, automation scripts, and creative side projects.',
    'other.youtube.title': 'Video Editing & YouTube',
    'other.youtube.description': 'I create and edit videos on my YouTube channel, combining storytelling with visual effects and motion graphics.',
    'other.youtube.cta': 'Watch on YouTube',
    'other.python.title': 'Python Automation',
    'other.python.description': 'Built custom scripts to automate repetitive tasks — from extracting audio timestamps to aligning Google image flows with precise timing.',
    'other.python.tags': 'Audio Timestamps | Image Alignment | Google Flow | Automation',
  },
  ro: {
    // Navigation
    'nav.about': 'Despre',
    'nav.projects': 'Proiecte',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Salut! Sunt',
    'hero.name': 'David',
    'hero.badge': '🚀 Full-Stack Developer & Inovator',
    'hero.subtitle': 'Transform idei complexe în aplicații rapide, interfețe elegante și soluții bazate pe inteligență artificială.',
    'hero.chips': 'Aplicații Web | Aplicații Mobile | Soluții AI | Full-Stack | Video Editing',
    'hero.cta': 'Explorează Proiectele',
    
    // About Section
    'about.title': 'Despre Mine',
    'about.paragraph': 'Sunt un dezvoltator Full-Stack dedicat, cu pasiune pentru cod curat, interfețe intuitive și soluții bazate pe inteligență artificială — fiecare proiect este o oportunitate de a mă depăși.',
    
    // Projects Section
    'projects.title': 'Proiectele Mele',
    'projects.features': 'Funcționalități Principale',
    'projects.technologies': 'Tehnologii Folosite',
    'projects.challenges': 'Provocări și Soluții',
    'projects.demo': 'Demo Live',
    'projects.code': 'Vezi Codul',
    
    // Contact Section
    'contact.title': 'Contactează-mă',
    'contact.description': 'Hai să construim ceva uimitor împreună! Trimite-mi un mesaj oricând. Sunt deschis la colaborări și noi oportunități.',
    'contact.email': 'Trimite un Email',
    'contact.phone': 'Apelează-mă',
    
    // Other Work Section
    'other.title': 'Alte Proiecte',
    'other.subtitle': 'Dincolo de cod — producție video, scripturi de automatizare și proiecte creative.',
    'other.youtube.title': 'Video Editing & YouTube',
    'other.youtube.description': 'Creez și editez videoclipuri pe canalul meu de YouTube, combinând storytelling cu efecte vizuale și motion graphics.',
    'other.youtube.cta': 'Vezi pe YouTube',
    'other.python.title': 'Automatizare Python',
    'other.python.description': 'Am construit scripturi custom pentru automatizarea task-urilor repetitive — de la extragerea timestamp-urilor audio la alinierea imaginilor din Google Flow cu timing precis.',
    'other.python.tags': 'Audio Timestamps | Aliniere Imagini | Google Flow | Automatizare',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ro');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
