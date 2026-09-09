"use client";
import Image from "next/image";
import davidImg from "../public/david.jpg";
import { Inter, Space_Grotesk } from "next/font/google";
import { FaGithub, FaEnvelope, FaLink, FaPhone, FaYoutube, FaPython } from 'react-icons/fa';
import { useLanguage } from "../contexts/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  const { t, language } = useLanguage();
  const aboutRef = useRef<HTMLElement>(null);

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const traverseX1 = useTransform(aboutScrollProgress, [0, 1], ["-80%", "180%"]);
  const traverseX2 = useTransform(aboutScrollProgress, [0, 1], ["180%", "-80%"]);
  const traverseScale = useTransform(aboutScrollProgress, [0, 0.5, 1], [0.6, 1.2, 0.6]);
  const traverseRotate = useTransform(aboutScrollProgress, [0, 1], [0, 180]);

  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: projectsProgress } = useScroll({
    target: projectsRef,
    offset: ["start start", "end end"]
  });

  const card0Y = useTransform(projectsProgress, [0, 0.05], ["0%", "0%"]);
  const card0Scale = useTransform(projectsProgress, [0.1, 0.3], [1, 0.92]);
  const card0Opacity = useTransform(projectsProgress, [0.1, 0.3], [1, 0.4]);

  const card1Y = useTransform(projectsProgress, [0.1, 0.3], ["100%", "0%"]);
  const card1Scale = useTransform(projectsProgress, [0.35, 0.55], [1, 0.92]);
  const card1Opacity = useTransform(projectsProgress, [0.35, 0.55], [1, 0.4]);

  const card2Y = useTransform(projectsProgress, [0.35, 0.55], ["100%", "0%"]);
  const card2Scale = useTransform(projectsProgress, [0.6, 0.8], [1, 0.92]);
  const card2Opacity = useTransform(projectsProgress, [0.6, 0.8], [1, 0.4]);

  const card3Y = useTransform(projectsProgress, [0.6, 0.8], ["100%", "0%"]);
  const card3Scale = useTransform(projectsProgress, [0.8, 1], [1, 1]);
  const card3Opacity = useTransform(projectsProgress, [0.8, 1], [1, 1]);

  const cardTransforms = [
    { y: card0Y, scale: card0Scale, opacity: card0Opacity },
    { y: card1Y, scale: card1Scale, opacity: card1Opacity },
    { y: card2Y, scale: card2Scale, opacity: card2Opacity },
    { y: card3Y, scale: card3Scale, opacity: card3Opacity }
  ];

  const projects = [
    {
      id: 1,
      title: "MindCast",
      emoji: "🧠",
      appleEmoji: "https://em-content.zobj.net/source/apple/391/brain_1f9e0.png",
      cardGradient: "from-[#0d1127] via-[#0f172a] to-[#191638]",
      glow: "from-indigo-500/30 via-blue-500/25 to-purple-600/25",
      border: "border-indigo-500/30",
      accentGradient: "from-indigo-500 via-blue-500 to-cyan-400",
      badgeStyle: "bg-indigo-500/10 border-indigo-400/30 text-indigo-200",
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
      appleEmoji: "https://em-content.zobj.net/source/apple/391/books_1f4da.png",
      cardGradient: "from-[#1a120b] via-[#0f172a] to-[#26150c]",
      glow: "from-amber-500/30 via-orange-500/25 to-yellow-600/20",
      border: "border-amber-500/30",
      accentGradient: "from-amber-500 via-orange-500 to-yellow-400",
      badgeStyle: "bg-amber-500/10 border-amber-400/30 text-amber-200",
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
      appleEmoji: "https://em-content.zobj.net/source/apple/391/newspaper_1f4f0.png",
      cardGradient: "from-[#081919] via-[#0f172a] to-[#062c2b]",
      glow: "from-teal-500/30 via-cyan-500/25 to-emerald-600/20",
      border: "border-teal-500/30",
      accentGradient: "from-teal-400 via-cyan-400 to-emerald-400",
      badgeStyle: "bg-teal-500/10 border-teal-400/30 text-teal-200",
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
    },
    {
      id: 4,
      title: "MathMind",
      emoji: "🧮",
      appleEmoji: "https://em-content.zobj.net/source/apple/391/abacus_1f9ee.png",
      cardGradient: "from-[#1c0c2a] via-[#0f172a] to-[#270e38]",
      glow: "from-fuchsia-500/30 via-purple-500/25 to-pink-600/20",
      border: "border-fuchsia-500/30",
      accentGradient: "from-fuchsia-500 via-purple-500 to-pink-400",
      badgeStyle: "bg-fuchsia-500/10 border-fuchsia-400/30 text-fuchsia-200",
      description: {
        en: "Upload a photo of your problem (math, physics, CS, or chemistry) and get clear explanations and guidance from our AI chatbot to help you solve it on your own.",
        ro: "Încarci o fotografie cu problema și îi explici chatbotului ce nu înțelegi. Acesta îți oferă rapid explicații clare, formule și îndrumare."
      },
      features: {
        en: [
          "📸 Photo Upload: Instantly capture and upload your exercise",
          "🤖 AI Tutor: Get step-by-step explanations, formulas, and guidance"
        ],
        ro: [
          "📸 Încărcare Foto: Capturezi și încarci rapid exercițiul",
          "🤖 Tutor AI: Primești explicații pas cu pas, formule și îndrumare"
        ]
      },
      technologies: ["React Native", "Expo", "Expo router", "Firebase", "Gemini Api", "Node.js"],
      demoLink: "https://www.canva.com/design/DAHKAR4yovA/SKCyvyc3DWORZwwBS67puQ/edit?ui=e30",
      githubLink: "https://github.com/davidstef77/mathmind"
    }
  ];

  return (
    <main className={`bg-[#05070e] text-white min-h-screen ${inter.className} selection:bg-blue-500/30 relative overflow-x-clip`}>
      {/* Ambient Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden z-10">
        {/* Layered background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[700px] sm:h-[1000px] bg-gradient-to-tr from-blue-600/25 via-cyan-500/20 to-purple-600/25 blur-[160px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/15 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyan-500/15 blur-[100px] rounded-full pointer-events-none animate-pulse [animation-delay:1s]"></div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full pointer-events-none"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
        
        <div className="text-center max-w-5xl mx-auto z-10 w-full flex flex-col items-center justify-center">
          {/* Avatar with orbital rings */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.35 }}
            className="mb-10 relative"
          >
            {/* Outer orbital ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-28px] sm:inset-[-35px] rounded-full border border-cyan-400/20 pointer-events-none"
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee]" />
            </motion.div>

            {/* Inner orbital ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-16px] sm:inset-[-20px] rounded-full border border-indigo-400/15 pointer-events-none"
            >
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_#818cf8]" />
            </motion.div>

            {/* Pulsing glow behind photo */}
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-purple-600/30 rounded-full blur-2xl opacity-40"></div>
            
            <Image
              src={davidImg}
              alt="David"
              className="rounded-full relative border-2 border-white/25 shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform duration-500 object-cover"
              width={220}
              height={220}
              priority
              sizes="(max-width: 640px) 160px, 220px"
              style={{ width: 'clamp(150px, 22vw, 220px)', height: 'clamp(150px, 22vw, 220px)' }}
            />
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1] ${spaceGrotesk.className}`}
          >
            {t('hero.greeting')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 drop-shadow-sm">
              {t('hero.name')}
            </span>
          </motion.h1>

          {/* Skill chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {(t('hero.chips') as string).split('|').map((chip, i) => (
              <span
                key={i}
                className="px-4 py-1.5 text-sm sm:text-base font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-sm"
              >
                {chip.trim()}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-14 sm:mb-16 leading-relaxed font-light px-4"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Down Arrow */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="inline-flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          >
            <motion.svg
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </motion.a>
        </div>
      </section>

      {/* About Section with Unique Background & Scroll Traversing Animations */}
      <section 
        id="about" 
        ref={aboutRef}
        className="py-36 px-6 relative overflow-hidden z-10 border-y border-cyan-500/20 bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-950 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      >
        {/* Background Grid Pattern Specific to About Section */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293720_1px,transparent_1px),linear-gradient(to_bottom,#1f293720_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Scroll-Triggered Traversing Beams & Orbs */}
        <motion.div 
          style={{ x: traverseX1, scale: traverseScale }}
          className="absolute top-1/4 left-0 w-[500px] h-32 bg-gradient-to-r from-transparent via-cyan-400/30 to-blue-600/40 rounded-full blur-2xl pointer-events-none z-0"
        />
        <motion.div 
          style={{ x: traverseX1 }}
          className="absolute top-1/4 left-0 w-96 h-[3px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_25px_#06b6d4] pointer-events-none z-0"
        />

        <motion.div 
          style={{ x: traverseX2, rotate: traverseRotate }}
          className="absolute bottom-1/4 right-0 w-[600px] h-40 bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-transparent rounded-full blur-3xl pointer-events-none z-0"
        />
        <motion.div 
          style={{ x: traverseX2 }}
          className="absolute bottom-1/4 right-0 w-96 h-[3px] bg-gradient-to-r from-purple-400 via-pink-400 to-transparent shadow-[0_0_25px_#ec4899] pointer-events-none z-0"
        />

        {/* Content Card with Glassmorphic backdrop */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center relative z-10 p-8 md:p-14 rounded-3xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-2xl"
        >
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 ${spaceGrotesk.className}`}>
            {t('about.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
            {t('about.paragraph')}
          </p>
        </motion.div>
      </section>

      {/* Projects Section — sticky on desktop, simple list on mobile */}
      <section id="projects" className="relative z-10">
        {/* Desktop: Pinned Stacking */}
        <div ref={projectsRef} className="hidden md:block relative h-[220vh]">
          <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-center"
            >
              <h2 className={`text-6xl md:text-7xl font-bold ${spaceGrotesk.className}`}>
                {t('projects.title')}
              </h2>
            </motion.div>
            
            <div className="relative w-full max-w-5xl h-[520px] md:h-[560px]">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  style={{
                    y: cardTransforms[i].y,
                    scale: cardTransforms[i].scale,
                    opacity: cardTransforms[i].opacity,
                    zIndex: i + 1,
                    willChange: "transform, opacity"
                  }}
                  className={`absolute inset-0 shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-[2.5rem] p-8 md:p-12 overflow-hidden bg-gradient-to-br ${project.cardGradient} border ${project.border} backdrop-blur-md flex md:flex-row gap-8 items-center group transition-all duration-300 transform-gpu`}
                >
                  <div className={`absolute -top-32 -right-32 w-[450px] h-[450px] bg-gradient-to-br ${project.glow} rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-500`} />
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accentGradient}`} />
                  
                  <div className="w-5/12 flex justify-center z-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.appleEmoji}
                      alt={project.title}
                      className="w-44 h-44 object-contain transform hover:scale-105 transition-transform duration-300 origin-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                  
                  <div className="relative z-10 w-7/12 flex flex-col h-full justify-center">
                    <h3 className={`text-4xl md:text-5xl font-bold mb-5 ${spaceGrotesk.className}`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-8 text-base md:text-lg font-light leading-relaxed">
                      {project.description[language]}
                    </p>
                    
                    <div className="mt-auto space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className={`px-4 py-1.5 text-sm font-semibold rounded-full border shadow-inner ${project.badgeStyle}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r ${project.accentGradient} text-white rounded-full text-base font-bold hover:opacity-90 transition-all shadow-lg`}>
                          <FaLink /> {t('projects.demo')}
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white rounded-full text-base font-bold hover:bg-white/10 transition-all">
                          <FaGithub /> {t('projects.code')}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Simple vertical list */}
        <div className="md:hidden px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className={`text-4xl font-bold ${spaceGrotesk.className}`}>
              {t('projects.title')}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`rounded-2xl p-6 overflow-hidden bg-gradient-to-br ${project.cardGradient} border ${project.border} relative`}
              >
                <div className={`absolute -top-20 -right-20 w-[200px] h-[200px] bg-gradient-to-br ${project.glow} rounded-full blur-[60px] pointer-events-none`} />
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentGradient}`} />

                <div className="flex items-center gap-4 mb-4 relative z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.appleEmoji} alt={project.title} className="w-14 h-14 object-contain drop-shadow-lg" />
                  <h3 className={`text-2xl font-bold ${spaceGrotesk.className}`}>{project.title}</h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={`px-3 py-1 text-xs font-semibold rounded-full border ${project.badgeStyle}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 relative z-10">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r ${project.accentGradient} text-white rounded-full text-sm font-bold`}>
                    <FaLink size={12} /> {t('projects.demo')}
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-white/20 text-white rounded-full text-sm font-bold">
                    <FaGithub size={12} /> {t('projects.code')}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Work Section */}
      <section id="other-work" className="py-20 sm:py-28 px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 ${spaceGrotesk.className}`}>
            {t('other.title')}
          </h2>
          <p className="text-gray-500 text-center mb-12 sm:mb-16 text-sm sm:text-base max-w-xl mx-auto">
            {t('other.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* YouTube / Video Editing */}
            <motion.a
              href="https://www.youtube.com/@TheAncientWiring-y7t/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl p-6 sm:p-8 bg-slate-900/50 border border-white/[0.06] hover:border-red-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-red-500/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 transition-colors duration-300">
                    <FaYoutube size={20} />
                  </div>
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold text-gray-100 ${spaceGrotesk.className}`}>{t('other.youtube.title')}</h3>
                    <p className="text-xs text-gray-500">@TheAncientWiring</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {t('other.youtube.description')}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-red-400/80 font-medium group-hover:text-red-400 transition-colors">
                  {t('other.youtube.cta')} <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
              </div>
            </motion.a>

            {/* Python Automation */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-2xl p-6 sm:p-8 bg-slate-900/50 border border-white/[0.06] hover:border-yellow-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-yellow-500/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <FaPython size={20} />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold text-gray-100 ${spaceGrotesk.className}`}>{t('other.python.title')}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {t('other.python.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(t('other.python.tags') as string).split('|').map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/5 border border-yellow-500/15 text-yellow-300/70">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative z-10 border-t border-white/5 bg-gradient-to-b from-[#05070e] to-blue-950/30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className={`text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 ${spaceGrotesk.className}`}>
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            {t('contact.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:dstef068@gmail.com"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <FaEnvelope /> {t('contact.email')}
            </a>
            <a
              href="tel:+40770877011"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
            >
              <FaPhone /> {t('contact.phone')}
            </a>
          </div>
        </motion.div>
      </section>
      
    </main>
  );
}
