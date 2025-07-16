"use client";

import { useState, useEffect } from "react";
import { Home } from "lucide-react"; // Importăm doar iconița Home, deoarece nu mai avem Sun/Moon

export default function Navbar() {
  // Am eliminat starea isDarkMode și useEffect-urile asociate,
  // deoarece tema va fi fixă (dark mode colors)
  const [isOpen, setIsOpen] = useState(false); // Stare pentru meniul mobil

  return (
    // Am setat direct culorile de dark mode ca default, eliminând prefixul 'dark:'
    <nav className="bg-black text-white p-4 shadow-xl sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center font-semibold">
        {/* Logo / Home Link */}
        <div className="flex items-center space-x-4">
          <a
            href="/"
            // Am setat culorile de hover și gradientul direct pe cele de dark mode
            className="text-2xl font-bold transition-colors duration-300 hover:text-[#60A5FA] flex items-center gap-2"
          >
            <Home className="inline-block w-7 h-7 text-[#60A5FA]" /> {/* Iconiță colorată */}
            <span className="hidden sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#22D3EE]">David</span> {/* Numele David cu gradient */}
          </a>
        </div>

        {/* Hamburger Menu for Mobile (Dark Mode Toggle a fost eliminat) */}
        <div className="flex items-center gap-4">
          {/* Butonul de Dark Mode a fost eliminat */}

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              // Am setat direct culorile de dark mode
              className="text-white focus:outline-none focus:ring-2 focus:ring-[#60A5FA] rounded-md p-2"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li>
            <a
              href="#about"
              // Am setat direct culorile de dark mode
              className="transition-colors duration-300 hover:text-[#60A5FA] relative group"
            >
              Despre Mine
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#60A5FA] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              // Am setat direct culorile de dark mode
              className="transition-colors duration-300 hover:text-[#60A5FA] relative group"
            >
              Proiecte
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#60A5FA] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              // Am setat direct culorile de dark mode
              className="transition-colors duration-300 hover:text-[#60A5FA] relative group"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#60A5FA] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Conditionally rendered) */}
      {isOpen && (
        // Am setat direct culorile de dark mode
        <div className="lg:hidden mt-4 bg-gray-900 rounded-lg shadow-lg py-4 px-6 transition-all duration-300 ease-in-out transform origin-top animate-fade-in-down">
          <ul className="flex flex-col space-y-4 text-center text-lg">
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)} // Close menu on click
                // Am setat direct culorile de dark mode
                className="block py-2 transition-colors duration-300 hover:text-[#60A5FA] hover:bg-gray-800 rounded-md"
              >
                Despre Mine
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)} // Close menu on click
                // Am setat direct culorile de dark mode
                className="block py-2 transition-colors duration-300 hover:text-[#60A5FA] hover:bg-gray-800 rounded-md"
              >
                Proiecte
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)} // Close menu on click
                // Am setat direct culorile de dark mode
                className="block py-2 transition-colors duration-300 hover:text-[#60A5FA] hover:bg-gray-800 rounded-md"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Basic CSS for fade-in-down animation (can be moved to global CSS) */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
