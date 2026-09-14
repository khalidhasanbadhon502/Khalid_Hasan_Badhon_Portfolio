import React, { useState } from 'react';
import logo from '../assets/logo.png';
import hamburgerImg from '../assets/hamburger.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b1329]/90 backdrop-blur-md z-50 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-full object-cover border border-cyan-500/40" />
            <span className="text-xl font-extrabold tracking-wider text-cyan-400">KHB</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition">Services</button>
            <button onClick={() => scrollToSection('expertise')} className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition">Expertise</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition">Contact</button>
          </div>

          <div className="flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-1 focus:outline-none"
            >
              <img src={hamburgerImg} alt="Menu" className="w-7 h-7 object-contain filter invert" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0b1329] border-b border-gray-800 px-4 pt-2 pb-4 space-y-2">
          <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 text-sm font-medium">Home</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 text-sm font-medium">About</button>
          <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 text-sm font-medium">Services</button>
          <button onClick={() => scrollToSection('expertise')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 text-sm font-medium">Expertise</button>
          <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 text-sm font-medium">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 text-sm font-medium">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;