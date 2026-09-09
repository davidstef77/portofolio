"use client";
import Image from "next/image";
import davidImg from "../public/david.jpg";
import { Inter, Space_Grotesk } from "next/font/google";
import { FaGithub, FaEnvelope, FaLink, FaPhone } from 'react-icons/fa';
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

  const projectsRef = useRef<HTMLElement>(null);
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
      <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden z-10">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-purple-600/20 blur-[130px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto z-10 w-full flex flex-col items-center justify-center"
        >
          {/* Avatar Profile */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-6 relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
            <Image
              src={davidImg}
              alt="David"
              className="rounded-full relative border-2 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500 object-cover"
              width={140}
              height={140}
              priority
              sizes="(max-width: 640px) 120px, 160px"
              style={{ width: 'clamp(110px, 18vw, 150px)', height: 'clamp(110px, 18vw, 150px)' }}
            />
          </motion.div>

          {/* Eye-catching Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg shadow-blue-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>{t('hero.badge')}</span>
          </motion.div>

          {/* Main Hero Headline */}
          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1] ${spaceGrotesk.className}`}>
            {t('hero.greeting')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 drop-shadow-sm">
              {t('hero.name')}
            </span>
          </h1>

          {/* Hero Sub-titles with enlarged sizes */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-slate-200 to-gray-400 mb-6 font-semibold max-w-4xl mx-auto leading-snug px-2">
            {t('hero.title')}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-4">
            {t('hero.subtitle')}
          </p>
          
          {/* Action Call-To-Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transform hover:-translate-y-0.5 text-base sm:text-lg"
            >
              {t('hero.cta')}
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-base sm:text-lg font-semibold transform hover:-translate-y-0.5"
            >
              {t('nav.contact')}
            </a>
          </motion.div>
        </motion.div>
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
          className="max-w-4xl mx-auto text-center relative z-10 p-8 md:p-14 rounded-3xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-2xl"
        >
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 ${spaceGrotesk.className}`}>
            {t('about.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 font-light">
            {t('about.description')}
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            {t('about.passion')}
          </p>
        </motion.div>
      </section>

      {/* Projects Pinned Stacking Section */}
      <section id="projects" ref={projectsRef} className="relative h-[220vh] z-10">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-8 text-center"
          >
            <h2 className={`text-4xl sm:text-6xl md:text-7xl font-bold ${spaceGrotesk.className}`}>
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
                className={`absolute inset-0 shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 overflow-hidden bg-gradient-to-br ${project.cardGradient} border ${project.border} backdrop-blur-md flex flex-col md:flex-row gap-6 md:gap-8 items-center group transition-all duration-300 transform-gpu`}
              >
                {/* Background glowing aura & mesh texture */}
                <div className={`absolute -top-32 -right-32 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-gradient-to-br ${project.glow} rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-500`} />
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accentGradient}`} />
                
                <div className="w-full md:w-5/12 flex justify-center z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.appleEmoji}
                    alt={project.title}
                    className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain transform hover:scale-105 transition-transform duration-300 origin-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                  />
                </div>
                
                <div className="relative z-10 w-full md:w-7/12 flex flex-col h-full justify-center">
                  <h3 className={`text-2xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5 ${spaceGrotesk.className}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4 md:mb-8 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                    {project.description[language]}
                  </p>
                  
                  <div className="mt-auto space-y-4 md:space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className={`px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-semibold rounded-full border shadow-inner ${project.badgeStyle}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-4 md:pt-6 border-t border-white/10">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r ${project.accentGradient} text-white rounded-full text-sm sm:text-base font-bold hover:opacity-90 transition-all w-full sm:w-auto shadow-lg hover:shadow-cyan-500/25`}>
                        <FaLink /> {t('projects.demo')}
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 border border-white/20 text-white rounded-full text-sm sm:text-base font-bold hover:bg-white/10 transition-all w-full sm:w-auto">
                        <FaGithub /> {t('projects.code')}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
