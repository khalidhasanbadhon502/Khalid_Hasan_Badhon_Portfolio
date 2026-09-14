import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
}

const myProjects: ProjectItem[] = [
  {
    id: '1',
    title: 'JobPilotAI',
    category: 'AI JOB MATCHING PLATFORM',
    description: 'An AI-powered job matching platform featuring real-time matching algorithms, automated resume parsing, and role recommendation workflows for job seekers and employers.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tech: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'VERCEL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/username/jobpilot-ai'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">Featured Projects</h2>
        <p className="text-gray-400 text-sm">Here are some of the projects I have built through code.</p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {myProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-[#0b1329] p-6 md:p-8 rounded-2xl shadow-xl border border-cyan-500/20 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
                {project.category}
              </span>
              <div className="flex space-x-3">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-[#131b2e] hover:bg-cyan-950 text-white rounded-full border border-gray-700 transition"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              {project.title}
            </h3>

            <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden border border-gray-800 bg-[#131b2e] shadow-inner">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-top"
              />
            </div>

            <p className="text-gray-300 text-base leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t, index) => (
                <span 
                  key={index} 
                  className="text-xs font-semibold bg-[#131b2e] text-gray-300 px-3.5 py-1.5 rounded-full border border-gray-700 uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;