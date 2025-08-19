"use client";
import Image from "next/image";
import davidImg from "../public/david.jpg";
import { Orbitron } from "next/font/google";
// Am eliminat importurile Pagination și Box de la MUI, deoarece nu le vom mai folosi.
// import { Pagination, Box } from "@mui/material";
import { useState, useEffect } from "react";
// Am adăugat importurile necesare pentru iconițe, așa cum erau în discuțiile anterioare.
// Asigură-te că ai instalat 'react-icons' cu `npm install react-icons`
import { FaGithub, FaLinkedin, FaEnvelope, FaTools, FaLink, FaPhone, FaLaptopCode, FaDatabase, FaServer } from 'react-icons/fa'; // Am adaugat FaPhone


const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function Home() {
  const [currentProject, setCurrentProject] = useState(1);
  const projects = [
    {
      id: 1,
      title: "MindCast",
      emoji: "🧠",
      description: "MindCast este o platformă inovatoare pentru Biblioteca de Idei și Conversații Temporare",
      features: [
        "🤖 Sugestii inteligente AI: Recomandări personalizate de playlisturi, asemănător muzicii pe Spotify.",
        "🔒 Anonimat controlat: Opțiuni pentru conversații private sau publice, pentru libertate și siguranță."
      ],
      technologies: [
        "Frontend: React — UI fluidă și animații performante.",
        "Backend: Node.js + ExpressJS — chat în timp real.",
        "Bază de date: MongoDB — stocare citate și cărți."
      ],
      // Adaugă challenges_solutions pentru a le putea afișa în proiect
      challenges_solutions: [
        "Implementarea unui sistem de chat efemer cu auto-distrugere după 24 de ore, asigurând persistența mesajelor pe durata stabilită.",
        "Dezvoltarea unui motor de recomandări AI pentru playlisturi, optimizat pentru scalabilitate și relevanță."
      ],
      demoLink: "https://mindcast.netlify.app",
      githubLink: "https://github.com/davidstef77/infoeducatie2025" // Adaugă linkul real
    },
    {
      id: 2,
      title: "Etnogeneza Românească",
      emoji: "📚",
      description: "Etnogeneza românească proces istoric de formare a poporului român și a limbii române",
      features: [
        "🗺️ Prezentare interactivă a etapelor etnogenezei românești",
        "📜 Linie cronologică cu evenimente istorice marcante",
        "🧠 Quiz-uri rapide pentru testarea cunoștințelor",
        "🎧 Secțiune multimedia cu video/audio explicative",
        "🔍 Glosar de termeni istorici importanți",
        "🌍 Hartă interactivă a spațiului carpato-danubiano-pontic"
      ],
      technologies: [
        "Frontend: React — UI fluidă și animații performante.",
        "Styles: TailwindCSS — design modern și responsive."
      ],
      // Adaugă challenges_solutions pentru a le putea afișa în proiect
      challenges_solutions: [
        "Structurarea unei cantități mari de date istorice într-un format ușor de accesat și renderizat interactiv.",
        "Crearea unei experiențe de navigare intuitive pentru o linie cronologică complexă și hărți interactive."
      ],
      demoLink: "https://davidstef77.github.io/istorie1/",
      githubLink: "https://github.com/davidstef77/istorie1" // Adaugă linkul real
    },
    {
      id: 3,
      title: "News Application",
      emoji: "📰",
      description: "O aplicație completă de știri, cu paginare, categorii și știri de ultimă oră, oferind o experiență de lectură modernă și responsivă.",
      features: [
        "⚡ Știri de ultimă oră: Secțiune dedicată pentru cele mai recente evenimente.",
        "🏷️ Paginare și categorii: Navigare ușoară prin știri organizate pe pagini și categorii.",
        "📱 Design responsiv: Experiență optimă pe orice dispozitiv (mobil, tabletă, desktop).",
        "🎨 Interfață modernă: Design curat și intuitiv, cu accent pe lizibilitate."
      ],
      technologies: [
        "Frontend: Next.js (React) — Pentru performanță și SEO.",
        "Styles: TailwindCSS — Pentru un design rapid și personalizabil.",
        "Backend: Node.js/Express (sau similar) — Pentru API-ul de știri.",
        "Bază de date: MongoDB (sau similar) — Stocare știri."
      ],
      // Adaugă challenges_solutions pentru a le putea afișa în proiect
      challenges_solutions: [
        "Optimizarea performanței pentru încărcarea rapidă a știrilor și a imaginilor, în ciuda volumului mare de date.",
        "Implementarea unui sistem de paginare și filtrare eficient pentru a gestiona un număr mare de articole."
      ],
      demoLink: "https://news-application-virid.vercel.app/",
      githubLink: "https://github.com/davidstef77/" // Adaugă linkul real
    }
  ];

  // Acest useEffect va citi tema din localStorage și va aplica clasa 'dark' la <html>
  // Este important pentru a asigura că tema este aplicată corect la încărcarea paginii.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const currentProjectData = projects[currentProject - 1];
  const totalPages = projects.length; // Numărul total de pagini
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentProject(page);
    }
  };


  return (
    // Main container with dynamic background and text colors based on theme
    <main className={`flex flex-col min-h-screen bg-white text-black font-sans px-4 py-20 space-y-40
                     dark:bg-black dark:text-white`}>
      {/* HERO SECTION - Enhanced Design */}
      <section className="container mx-auto flex flex-col md:flex-row items-center md:items-center gap-12 lg:gap-20">
        <div className="flex-shrink-0 relative group">
          <Image
            src={davidImg}
            alt="David"
            className={`rounded-full border-4 border-blue-400 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-400/50
                       dark:border-[#60A5FA] dark:group-hover:shadow-[0_0_40px_rgba(96,165,250,0.5)]`}
            width={250}
            height={250}
            priority
          />
          {/* Optional: Add a subtle glow effect on hover */}
          <div className={`absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400 transition-all duration-300 pointer-events-none
                           dark:group-hover:border-[#60A5FA]`}></div>
        </div>
        <div className="text-center md:text-left">
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight ${orbitron.className}`}>
            Salut! Sunt <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800
                                         dark:from-[#60A5FA] dark:to-[#22D3EE]`}>David</span>
          </h1>
          <p className={`text-xl sm:text-2xl text-gray-700 mt-6 max-w-3xl mx-auto md:mx-0 leading-relaxed
                        dark:text-gray-300`}>
            💻 Dezvoltator Full-stack pasionat de crearea de experiențe digitale, funcționale și scalabile.
          </p>
          
          <div className="mt-10">
            <a
              href="#projects"
              className={`inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg
                         dark:from-[#60A5FA] dark:to-[#22D3EE] dark:hover:from-[#22D3EE] dark:hover:to-[#60A5FA]`}
            >
              Vezi Proiectele Mele
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME & PROJECTS - Refined Layout */}
      <section id="about" className="container mx-auto flex flex-col lg:flex-row gap-20 items-start">
        {/* ABOUT ME - Wider and more prominent */}
        <div className="lg:w-1/2 text-center lg:text-left p-8 rounded-2xl shadow-lg border border-gray-200 bg-white
                        dark:bg-[#1E293B] dark:shadow-xl dark:border-[#334155]">
          <h2 className={`text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800
                          dark:from-[#60A5FA] dark:to-[#22D3EE] ${orbitron.className}`}>
            Despre <span className="text-black dark:text-white">Mine</span>
          </h2>
          <p className={`text-lg text-gray-700 leading-relaxed dark:text-gray-300`}>
            Sunt un dezvoltator dedicat, cu o pasiune pentru cod și interfețe intuitive. 
          </p>
          <p className={`text-lg text-gray-700 leading-relaxed mt-4 dark:text-gray-300`}>
            Cred cu tărie în învățarea continuă. Fiecare proiect este o oportunitate de a învăța și de a mă depăși.
          </p>
        </div>

        {/* PROJECTS - Centralized and with enhanced card design */}
        <div className="lg:w-1/2 text-center lg:text-left" id="projects"> {/* Added id="projects" here for navigation */}
          <h2 className={`text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800
                          dark:from-[#60A5FA] dark:to-[#22D3EE] ${orbitron.className}`}>
            Proiectele <span className="text-black dark:text-white">Mele</span>
          </h2>

          {/* Project Card Container */}
          <div className="flex justify-center"> {/* Centered the project card */}
            {currentProjectData && ( // Ensure currentProjectData exists before rendering
              <div
                key={currentProjectData.id}
                className={`p-8 rounded-3xl shadow-lg border border-gray-200 bg-white space-y-6 max-w-lg w-full
                                 transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-xl
                                 dark:bg-[#1E293B] dark:shadow-[0_0_35px_rgba(96,165,250,0.2)] dark:border-[#334155] dark:hover:shadow-[0_0_45px_rgba(96,165,250,0.4)]`}
              >
                {/* Title */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <span className="text-4xl">{currentProjectData.emoji}</span>
                  <h3 className="text-3xl font-semibold text-black dark:text-[#F3F4F6]">{currentProjectData.title}</h3>
                </div>

                {/* Short Description */}
                <p className="text-gray-700 text-base leading-relaxed dark:text-gray-300">
                  {currentProjectData.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className={`text-blue-600 font-semibold mb-3 text-lg dark:text-[#60A5FA]`}>Funcționalități principale</h4>
                  <ul className="text-gray-600 text-sm list-disc list-inside space-y-2 dark:text-gray-300">
                    {currentProjectData.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className={`text-blue-600 font-semibold mb-3 text-lg dark:text-[#60A5FA]`}>🛠️ Tehnologii folosite</h4>
                  <ul className="text-gray-600 text-sm list-disc list-inside space-y-2 dark:text-gray-300">
                    {currentProjectData.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Solutions (Added if you want to include them in project data) */}
                {currentProjectData.challenges_solutions && currentProjectData.challenges_solutions.length > 0 && (
                  <div>
                    <h4 className={`text-blue-600 font-semibold mb-3 text-lg dark:text-[#60A5FA]`}>🎯 Provocări și Soluții</h4>
                    <ul className="text-gray-600 text-sm list-disc list-inside space-y-2 dark:text-gray-300">
                      {currentProjectData.challenges_solutions.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}


                {/* Live Demo Button */}
                <div className="mt-6 text-center lg:text-left flex flex-col sm:flex-row justify-center gap-4">
                  {currentProjectData.demoLink && (
                    <a
                      href={currentProjectData.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 font-medium shadow-md transform hover:scale-105
                                   dark:from-[#60A5FA] dark:to-[#22D3EE] dark:hover:from-[#22D3EE] dark:hover:to-[#60A5FA]`}
                    >
                      <FaLink className="text-xl" /> Demo Live
                    </a>
                  )}
                  {currentProjectData.githubLink && (
                    <a
                      href={currentProjectData.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:border-[#60A5FA] dark:text-[#60A5FA] dark:hover:bg-blue-900/30`}
                    >
                      <FaGithub className="text-xl" /> Vezi Codul
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Custom Pagination for Projects - AICI ESTE SCHIMBAREA */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 rounded-full text-md font-semibold transition-all duration-300
                            ${currentProject === pageNumber
                                ? 'bg-blue-600 text-white shadow-md' // Active state
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300' // Inactive light mode
                            }
                            ${currentProject === pageNumber
                                ? 'dark:bg-[#60A5FA] dark:text-black' // Active dark mode
                                : 'dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600' // Inactive dark mode
                            }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT - Refined Design */}
      <section id="contact" className="container mx-auto text-center p-8 rounded-2xl shadow-lg border border-gray-200 bg-white
                                       dark:bg-[#1E293B] dark:shadow-xl dark:border-[#334155]">
        <h2 className={`text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800
                        dark:from-[#60A5FA] dark:to-[#22D3EE] ${orbitron.className}`}>
          Contacteaza-ma <span className="text-black dark:text-white"></span>
        </h2>
        <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto leading-relaxed dark:text-gray-300">
          Hai să construim ceva uimitor împreună! Trimite-mi un mesaj oricând. Sunt deschis la colaborări și noi oportunități.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4"> {/* Added flex container for buttons */}
          <a
            href="mailto:dstef068@gmail.com"
            className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg
                       dark:from-[#60A5FA] dark:to-[#22D3EE] dark:hover:from-[#22D3EE] dark:hover:to-[#60A5FA]`}
          >
            <FaEnvelope className="text-xl" /> Trimite un Email
          </a>
          {/* Noul buton pentru apel telefonic */}
          <a
            href="tel:+40770877011" // Link telefonic, va activa apelarea pe mobil
            className={`inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-blue-50
                       dark:border-[#60A5FA] dark:text-[#60A5FA] dark:hover:bg-blue-900/30`}
          >
            <FaPhone className="text-xl" /> Apeleză-mă
          </a>
          {/* Adaugă și butoanele pentru LinkedIn și GitHub, dacă dorești să le păstrezi */}
          {/*
          <a
            href="https://linkedin.com/in/davidstefan"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:border-[#60A5FA] dark:text-[#60A5FA] dark:hover:bg-blue-900/30`}
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
          <a
            href="https://github.com/davidstef77"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 dark:border-[#60A5FA] dark:text-[#60A5FA] dark:hover:bg-blue-900/30`}
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
          */}
        </div>
      </section>
    </main>
  );
}