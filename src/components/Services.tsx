const Services = () => {
  const services = [
    { title: 'Full-Stack Web Dev', desc: 'Custom web apps built with modern React, Next.js, and Node.js backend solutions.' },
    { title: 'RESTful & GraphQL APIs', desc: 'Secure, scalable API design and smooth database integration with MongoDB.' },
    { title: 'UI/UX & Responsive Design', desc: 'Pixel-perfect, mobile-first design implementation using Tailwind CSS.' },
  ];

  return (
    <section id="services" className="py-24 bg-[#0A0F1D] text-white px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">WHAT I OFFER</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-[#111827] border border-gray-800 rounded-xl hover:border-cyan-500/40 transition-colors">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;