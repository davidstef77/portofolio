"use client";
import Image from "next/image";
import davidImg from "../public/david.jpg";
import { Inter, Space_Grotesk } from "next/font/google";
import { useState } from "react";
import { FaGithub, FaEnvelope, FaLink, FaPhone, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useLanguage } from "../contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const { t, language } = useLanguage();
  
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
          "🤖 AI Smart Suggestions: Personalized playlist recommendations, similar to Spotify music.",
          "🔒 Controlled Anonymity: Options for private or public conversations, for freedom and safety."
        ],
        ro: [
          "🤖 Sugestii inteligente AI: Recomandări personalizate de playlisturi, asemănător muzicii pe Spotify.",
          "🔒 Anonimat controlat: Opțiuni pentru conversații private sau publice, pentru libertate și siguranță."
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
          "🗺️ Interactive presentation of Romanian ethnogenesis stages",
          "📜 Timeline with significant historical events"
        ],
        ro: [
          "🗺️ Prezentare interactivă a etapelor etnogenezei românești",
          "📜 Linie cronologică cu evenimente istorice marcante"
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
          "⚡ Breaking News: Dedicated section for latest events",
          "📱 Responsive Design: Optimal experience on any device"
        ],
        ro: [
          "⚡ Știri de ultimă oră: Secțiune dedicată pentru cele mai recente evenimente",
          "📱 Design responsiv: Experiență optimă pe orice dispozitiv"
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
        <div className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-12">
              <Image
                src={davidImg}
                alt="David"
                className="rounded-full mx-auto mb-8 border-4 border-blue-400 shadow-2xl hover:scale-105 transition-all duration-500"
                width={200}
                height={200}
                priority
              />
            </div>
            <h1 className={`text-6xl md:text-8xl font-bold mb-8 ${spaceGrotesk.className}`}>
              {t('hero.greeting')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t('hero.name')}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              {t('hero.title')}
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      );
    }
    
    if (section.id === 'about') {
      return (
        <div className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className={`text-5xl md:text-7xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 ${spaceGrotesk.className}`}>
              {t('about.title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              {t('about.description')}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              {t('about.passion')}
            </p>
          </div>
        </div>
      );
    }
    
    if (section.id.startsWith('project-')) {
      const projectId = parseInt(section.id.split('-')[1]);
      const project = projects.find(p => p.id === projectId);
      if (!project) return null;
      
      return (
        <div className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-8xl mb-8">{project.emoji}</div>
            <h2 className={`text-4xl md:text-6xl font-bold mb-8 text-white ${spaceGrotesk.className}`}>
              {project.title}
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {project.description[language]}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Features</h3>
                <ul className="text-gray-300 space-y-2">
                  {project.features[language].map((feature: string, index: number) => (
                    <li key={index} className="text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <FaLink /> {t('projects.demo')}
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <FaGithub /> {t('projects.code')}
              </a>
            </div>
          </div>
        </div>
      );
    }
    
    if (section.id === 'contact') {
      return (
        <div className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className={`text-5xl md:text-7xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 ${spaceGrotesk.className}`}>
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {t('contact.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:dstef068@gmail.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <FaEnvelope /> {t('contact.email')}
              </a>
              <a
                href="tel:+40770877011"
                className="inline-flex items-center gap-3 border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <FaPhone /> {t('contact.phone')}
              </a>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <main className={`bg-black text-white min-h-screen ${inter.className}`}>
      {renderSection()}
      
      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-gray-900/80 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700">
        <button
          onClick={prevSection}
          className="p-2 text-gray-400 hover:text-white transition-colors"
          disabled={currentSection === 0}
        >
          <FaArrowUp />
        </button>
        
        <div className="flex gap-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSection ? 'bg-blue-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSection}
          className="p-2 text-gray-400 hover:text-white transition-colors"
          disabled={currentSection === sections.length - 1}
        >
          <FaArrowDown />
        </button>
      </div>
    </main>
  );
}
