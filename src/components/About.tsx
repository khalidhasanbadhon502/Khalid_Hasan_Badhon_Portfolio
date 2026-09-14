const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0D1117] text-white px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">BIOGRAPHY</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
          <p>
            Hello! I'm <span className="text-cyan-400 font-semibold">Khalid Hasan Badhon</span>. I specialize in building modern web applications using React, Next.js, TypeScript, Node.js, and MongoDB.
          </p>
          <p>
            I focus on writing clean, maintainable code, optimizing performance, and crafting smooth user experiences from front to back.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;