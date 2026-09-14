import profileImg from '../assets/Its me.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-white text-slate-900 flex items-center justify-center px-6 md:px-12 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        
        <div className="w-72 h-[380px] md:w-80 md:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl flex-shrink-0 bg-slate-50">
          <img 
            src={profileImg} 
            alt="Md Khalid Hasan Badhon" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="flex flex-col items-start text-left space-y-4 max-w-lg">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
            Hello
          </h1>
          
          <h2 className="text-xl font-bold text-cyan-600">
            A Bit About Me
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            I'm <span className="text-slate-900 font-semibold">Md Khalid Hasan Badhon</span>. I build scalable, high-performance web applications and design modern user experiences using the MERN stack and Next.js.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a 
              href="#resume" 
              className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold rounded-full transition-colors flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
            >
              Resume <span>→</span>
            </a>
            
            <a 
              href="#projects" 
              className="px-6 py-2.5 bg-transparent border border-cyan-500 text-cyan-600 hover:bg-cyan-50 text-xs font-bold rounded-full transition-colors flex items-center gap-1.5"
            >
              Projects <span>→</span>
            </a>

            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-full transition-colors flex items-center gap-1.5 border border-slate-300"
            >
              Contact <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;