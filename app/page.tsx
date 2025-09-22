"use client";
import Image from "next/image";
import davidImg from "../public/david.jpg";
import { Inter, Space_Grotesk } from "next/font/google";
import { useState } from "react";
import { FaGithub, FaEnvelope, FaLink, FaPhone, FaArrowDown, FaArrowUp, FaGlobe } from 'react-icons/fa';
import { useLanguage } from "../contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const { t, language, setLanguage } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: "MindCast",
      emoji: "🧠",
      description: {
        en: "An innovative platform for Ideas Library and Temporary Conversations",
        ro: "O platformă inovatoare pentru Biblioteca de Idei și Conversații Temporare"
      },
      features: {
        en: [
          "AI Smart Suggestions: Personalized playlist recommendations",
          "Controlled Anonymity: Options for private or public conversations"
        ],
        ro: [
          "Sugestii inteligente AI: Recomandări personalizate de playlisturi",
          "Anonimat controlat: Opțiuni pentru conversații private sau publice"
        ]
      },
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      demoLink: "https://mindcast.netlify.app",
      githubLink: "https://github.com/davidstef77/infoeducatie2025"
    },
    {
      id: 2,
      title: "Romanian Ethnogenesis",
      emoji: "📚",
      description: {
        en: "Interactive historical presentation of Romanian people and language formation",
        ro: "Prezentare istorică interactivă a formării poporului și limbii române"
      },
      features: {
        en: [
          "Interactive presentation of Romanian ethnogenesis stages",
          "Timeline with significant historical events"
        ],
        ro: [
          "Prezentare interactivă a etapelor etnogenezei românești",
          "Linie cronologică cu evenimente istorice marcante"
        ]
      },
      technologies: ["React", "TailwindCSS", "JavaScript"],
      demoLink: "https://davidstef77.github.io/istorie1/",
      githubLink: "https://github.com/davidstef77/istorie1"
    },
    {
      id: 3,
      title: "News Application",
      emoji: "📰",
      description: {
        en: "A complete news application with pagination, categories and breaking news",
        ro: "O aplicație completă de știri cu paginare, categorii și știri de ultimă oră"
      },
      features: {
        en: [
          "Breaking News: Dedicated section for latest events",
          "Responsive Design: Optimal experience on any device"
        ],
        ro: [
          "Știri de ultimă oră: Secțiune dedicată pentru cele mai recente evenimente",
          "Design responsiv: Experiență optimă pe orice dispozitiv"
        ]
      },
      technologies: ["Next.js", "TailwindCSS", "Node.js"],
      demoLink: "https://news-application-virid.vercel.app/",
      githubLink: "https://github.com/davidstef77/"
    }
  ];

  const sections = [
    { id: 'hero', title: 'Hero' },
    { id: 'about', title: 'About' },
    ...projects.map(p => ({ id: `project-${p.id}`, title: p.title })),
    { id: 'contact', title: 'Contact' }
  ];

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const renderSection = () => {
    const section = sections[currentSection];
    
    if (section.id === 'hero') {
      return (
        <div className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="mb-16">
              <div className="hover:scale-105 transition-all duration-700 ease-out">
                <Image
                  src={davidImg}
                  alt="David"
                  className="rounded-full mx-auto border-4 border-blue-400 shadow-2xl hover:scale-105 transition-all duration-500"
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-900 tracking-tight">
              {t('hero.greeting')} <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('hero.name')}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-6 font-light tracking-wide">
              {t('hero.title')}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      );
    }
    
    if (section.id === 'about') {
      return (
        <div className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-white to-gray-50">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-gray-900 tracking-tight">
              {t('about.title')}
            </h2>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
                {t('about.description')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                {t('about.passion')}
              </p>
            </div>
          </div>
        </div>
      );
    }
    
    if (section.id.startsWith('project-')) {
      const projectId = parseInt(section.id.split('-')[1]);
      const project = projects.find(p => p.id === projectId);
      if (!project) return null;
      
      return (
        <div className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <div className="text-6xl mb-8 opacity-80">{project.emoji}</div>
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              {project.description[language]}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-medium mb-6 text-gray-800">Features</h3>
                <ul className="text-gray-600 space-y-3">
                  {project.features[language].map((feature, index) => (
                    <li key={index} className="text-sm leading-relaxed font-light flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-medium mb-6 text-gray-800">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-light border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaLink className="text-sm" /> {t('projects.demo')}
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaGithub className="text-sm" /> {t('projects.code')}
              </a>
            </div>
          </div>
        </div>
      );
    }
    
    if (section.id === 'contact') {
      return (
        <div className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-white to-gray-50">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-gray-900 tracking-tight">
              {t('contact.title')}
            </h2>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100 mb-12">
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                {t('contact.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:dstef068@gmail.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaEnvelope className="text-sm" /> {t('contact.email')}
              </a>
              <a
                href="tel:+40770877011"
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaPhone className="text-sm" /> {t('contact.phone')}
              </a>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <main className="bg-gradient-to-br from-white to-gray-50 text-gray-900 min-h-screen font-light">
      {/* Language Toggle */}
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'ro' : 'en')}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-light transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <FaGlobe className="text-xs" />
          {language === 'en' ? 'RO' : 'EN'}
        </button>
      </div>

      {renderSection()}
      
      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 border border-gray-200 shadow-xl">
        <button
          onClick={prevSection}
          className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-300 disabled:opacity-30 hover:scale-110"
          disabled={currentSection === 0}
        >
          <FaArrowUp className="text-sm" />
        </button>
        
        <div className="flex gap-3">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSection 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 w-8 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSection}
          className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-300 disabled:opacity-30 hover:scale-110"
          disabled={currentSection === sections.length - 1}
        >
          <FaArrowDown className="text-sm" />
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </main>
  );
}
