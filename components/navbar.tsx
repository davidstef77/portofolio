"use client";

import { useState } from "react";
import { Home } from "lucide-react";

export default function Navbar() {
 
  return (
    <nav className=" text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center font-bold">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-2xl font-bold hover:text-[#511f3a] ">
            <Home className="inline-block mr-2" />
            
          </a>
        </div>
        <ul className="flex space-x-6 ">
          <li className="">
            <a href="#about" className="hover:text-[#511f3a]">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#511f3a]">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#511f3a]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}   