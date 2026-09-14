const Expertise = () => {
  const skills = [
    { name: 'React / Next.js', level: 90 },
    { name: 'TypeScript / JavaScript', level: 88 },
    { name: 'Tailwind CSS / DaisyUI', level: 95 },
    { name: 'Node.js / Express', level: 82 },
    { name: 'MongoDB', level: 80 },
  ];

  return (
    <section id="expertise" className="py-24 bg-[#0D1117] text-white px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">TECHNICAL SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">Expertise</h2>
        </div>
        <div className="space-y-6 max-w-2xl">
          {skills.map((s, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-200">{s.name}</span>
                <span className="text-cyan-400">{s.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-cyan-400 h-2 rounded-full transition-all duration-500" style={{ width: `${s.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;