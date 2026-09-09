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
    'hero.title': 'Building Next-Gen Digital Products & Scalable Web Apps',
    'hero.subtitle': 'Crafting sleek interfaces, high-performance web applications, and intelligent AI-driven solutions.',
    'hero.cta': 'Explore Projects',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'I\'m a dedicated developer with a passion for clean code and intuitive interfaces.',
    'about.passion': 'I believe in continuous learning. Every project is an opportunity to grow and exceed expectations.',
    
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
    'hero.title': 'Construiesc Aplicații Web Scalabile și Produse Digitale Moderne',
    'hero.subtitle': 'Transform idei complexe în aplicații rapide, interfețe elegante și soluții bazate pe inteligență artificială.',
    'hero.cta': 'Explorează Proiectele',
    
    // About Section
    'about.title': 'Despre Mine',
    'about.description': 'Sunt un dezvoltator dedicat, cu o pasiune pentru cod curat și interfețe intuitive.',
    'about.passion': 'Cred cu tărie în învățarea continuă. Fiecare proiect este o oportunitate de a învăța și de a mă depăși.',
    
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
