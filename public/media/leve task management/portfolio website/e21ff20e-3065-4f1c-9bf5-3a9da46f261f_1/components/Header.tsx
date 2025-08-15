
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">
          <span style={{ fontFamily: '"Pacifico", serif' }}>Kiran</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
            Projects
          </button>
          <button onClick={() => scrollToSection('resume')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
            Resume
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
        >
          <i className="ri-menu-line text-xl"></i>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 md:hidden">
            <nav className="flex flex-col py-4">
              <button onClick={() => scrollToSection('hero')} className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-left">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('resume')} className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-left">
                Resume
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer text-left">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
