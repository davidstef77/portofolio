"use client";
import Image from "next/image";
import davidImg from "../public/david.jpg";
import { Orbitron } from "next/font/google";
import { Pagination, Box } from "@mui/material";
import { useState, useEffect } from "react";

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
      description: "MindCast este o platformă inovatoare pentru Biblioteca de Idei și Conversații Temporare. Utilizatorii pot crea, partaja și explora playlisturi tematice de idei, iar discuțiile se desfășoară în chat-uri efemere, care dispar după 24h.",
      features: [
        "🤖 Sugestii inteligente AI: Recomandări personalizate de playlisturi, asemănător muzicii pe Spotify.",
        "🔒 Anonimat controlat: Opțiuni pentru conversații private sau publice, pentru libertate și siguranță."
      ],
      technologies: [
        "Frontend: React — UI fluidă și animații performante.",
        "Backend: Node.js + ExpressJS — chat în timp real.",
        "Bază de date: MongoDB — stocare citate și cărți."
      ],
      demoLink: "https://mindcast.netlify.app"
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
      demoLink: "https://davidstef77.github.io/istorie1/"
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
      demoLink: "https://news-application-virid.vercel.app/"
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

  return (
    // Main container with dynamic background and text colors based on theme
    <main className="flex flex-col min-h-screen bg-white text-black font-sans px-4 py-20 space-y-40
                    dark:bg-black dark:text-white">
      {/* HERO SECTION - Enhanced Design */}
      <section className="container mx-auto flex flex-col md:flex-row items-center md:items-center gap-12 lg:gap-20">
        <div className="flex-shrink-0 relative group">
          <Image
            src={davidImg}
            alt="David"
            className="rounded-full border-4 border-blue-400 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-400/50
                       dark:border-[#60A5FA] dark:group-hover:shadow-[0_0_40px_rgba(96,165,250,0.5)]"
            width={250}
            height={250}
            priority
          />
          {/* Optional: Add a subtle glow effect on hover */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400 transition-all duration-300 pointer-events-none
                          dark:group-hover:border-[#60A5FA]"></div>
        </div>
        <div className="text-center md:text-left">
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight ${orbitron.className}`}>
            Salut! Sunt <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800
                                       dark:from-[#60A5FA] dark:to-[#22D3EE]">David</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mt-6 max-w-3xl mx-auto md:mx-0 leading-relaxed
                        dark:text-gray-300">
            💻 Dezvoltator Full-stack pasionat de crearea de experiențe digitale curate, funcționale și scalabile.
          </p>
          <p className="text-xl sm:text-2xl text-gray-700 mt-4 max-w-3xl mx-auto md:mx-0 leading-relaxed
                        dark:text-gray-300">
            ⚙️ Mă concentrez pe Next.js, TailwindCSS, MongoDB & instrumente web moderne.
          </p>
          <div className="mt-10">
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg
                         dark:from-[#60A5FA] dark:to-[#22D3EE] dark:hover:from-[#22D3EE] dark:hover:to-[#60A5FA]"
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
          <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
            Sunt un dezvoltator dedicat, cu o pasiune pentru cod curat și interfețe intuitive. Îmi place să rezolv probleme complexe și să transform ideile în produse reale. Când nu codez, explorez tehnologii noi sau fac drumeții în natură.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 dark:text-gray-300">
            Cred cu tărie în învățarea continuă și în crearea de soluții care nu doar funcționează, ci și aduc valoare reală utilizatorilor. Fiecare proiect este o oportunitate de a învăța și de a mă depăși.
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
            {projects.map((project) => {
              if (project.id !== currentProject) return null;
              return (
                <div
                  key={project.id}
                  className="p-8 rounded-3xl shadow-lg border border-gray-200 bg-white space-y-6 max-w-lg w-full
                             transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-xl
                             dark:bg-[#1E293B] dark:shadow-[0_0_35px_rgba(96,165,250,0.2)] dark:border-[#334155] dark:hover:shadow-[0_0_45px_rgba(96,165,250,0.4)]"
                >
                  {/* Title */}
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <span className="text-4xl">{project.emoji}</span>
                    <h3 className="text-3xl font-semibold text-black dark:text-[#F3F4F6]">{project.title}</h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-700 text-base leading-relaxed dark:text-gray-300">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-blue-600 font-semibold mb-3 text-lg dark:text-[#60A5FA]">Funcționalități principale</h4>
                    <ul className="text-gray-600 text-sm list-disc list-inside space-y-2 dark:text-gray-300">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-blue-600 font-semibold mb-3 text-lg dark:text-[#60A5FA]">🛠️ Tehnologii folosite</h4>
                    <ul className="text-gray-600 text-sm list-disc list-inside space-y-2 dark:text-gray-300">
                      {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Live Demo Button */}
                  <div className="mt-6 text-center lg:text-left">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 font-medium shadow-md transform hover:scale-105
                                 dark:from-[#60A5FA] dark:to-[#22D3EE] dark:hover:from-[#22D3EE] dark:hover:to-[#60A5FA]"
                    >
                      🌐 Demo Live
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination for Projects */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Pagination
              count={projects.length}
              page={currentProject}
              onChange={(event, value) => setCurrentProject(value)}
              variant="outlined"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#6B7280", // Light mode: Muted gray for inactive items
                  borderColor: "#D1D5DB", // Light mode: Light border
                  "&:hover": {
                    backgroundColor: "rgba(59, 130, 246, 0.1)", // Light mode: Subtle hover from primary accent
                    borderColor: "#3B82F6", // Light mode: Primary accent border on hover
                  },
                  // Dark mode styles
                  ".dark &": {
                    color: "#9CA3AF", // Dark mode: Muted gray for inactive items
                    borderColor: "#334155", // Dark mode: Darker border
                    "&:hover": {
                      backgroundColor: "rgba(96, 165, 250, 0.1)", // Dark mode: Subtle hover from primary accent
                      borderColor: "#60A5FA", // Dark mode: Primary accent border on hover
                    },
                  },
                },
                "& .Mui-selected": {
                  backgroundColor: "#3B82F6 !important", // Light mode: Primary accent for selected
                  color: "white !important",
                  borderColor: "#3B82F6 !important", // Light mode: Primary accent border for selected
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#3B82F6 !important", // Keep same on hover
                  },
                  // Dark mode styles
                  ".dark &": {
                    backgroundColor: "#60A5FA !important", // Dark mode: Primary accent for selected
                    color: "white !important",
                    borderColor: "#60A5FA !important", // Dark mode: Primary accent border for selected
                    "&:hover": {
                      backgroundColor: "#60A5FA !important", // Keep same on hover
                    },
                  },
                },
                "& .MuiPaginationItem-ellipsis": {
                  color: "#6B7280", // Light mode: Muted gray for ellipsis
                  ".dark &": {
                    color: "#9CA3AF", // Dark mode: Muted gray for ellipsis
                  },
                },
              }}
            />
          </Box>
        </div>
      </section>

      {/* CONTACT - Refined Design */}
      <section id="contact" className="container mx-auto text-center p-8 rounded-2xl shadow-lg border border-gray-200 bg-white
                                      dark:bg-[#1E293B] dark:shadow-xl dark:border-[#334155]">
        <h2 className={`text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800
                        dark:from-[#60A5FA] dark:to-[#22D3EE] ${orbitron.className}`}>
          Contact <span className="text-black dark:text-white">Mă</span>
        </h2>
        <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto leading-relaxed dark:text-gray-300">
          Hai să construim ceva uimitor împreună! Trimite-mi un mesaj oricând. Sunt deschis la colaborări și noi oportunități.
        </p>
        <a
          href="mailto:dstef068@gmail.com"
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg
                     dark:from-[#60A5FA] dark:to-[#22D3EE] dark:hover:from-[#22D3EE] dark:hover:to-[#60A5FA]"
        >
          📩 Trimite un Email
        </a>
      </section>
    </main>
  );
}
