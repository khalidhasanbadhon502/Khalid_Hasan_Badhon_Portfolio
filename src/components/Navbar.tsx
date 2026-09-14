import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#0A0F1D] text-white py-4 px-8 border-b border-gray-800/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex-1 flex justify-start">
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="KHB Logo" 
              className="h-9 w-auto object-contain" 
            />
            <span className="font-extrabold text-xl tracking-widest">
              <span className="text-white">K</span>
              <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">HB</span>
            </span>
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-300">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-cyan-400 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#expertise" className="hover:text-cyan-400 transition-colors">
                Expertise
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-end">
          <a
            href="#contact"
            className="hidden sm:inline-block px-4 py-2 text-xs font-semibold text-cyan-400 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 transition-colors"
          >
            Resume
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;