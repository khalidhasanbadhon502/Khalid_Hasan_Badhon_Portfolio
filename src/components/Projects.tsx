import React from 'react';
import devStackImg from '../assets/Dev Stack.png';

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
    title: 'Dev Stack Builder',
    category: 'FULL-STACK WEB APPLICATION',
    description: 'A modern full-stack web application built with React, TypeScript, Tailwind CSS, and Vite.',
    image: devStackImg,
    tech: ['REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'VITE'],
    liveLink: 'https://dev-stack-builder-01.netlify.app/',
    githubLink: 'https://github.com/khalidhasanbadhon502/Khalid_Hasan_Badhon_Portfolio'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-16 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">Featured Projects</h2>
        <p className="text-gray-400 text-sm">Here are some of the projects I have built through code.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-[#0b1329] p-5 rounded-xl shadow-xl border border-cyan-500/20 flex flex-col justify-between gap-4"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold tracking-wider text-cyan-400 uppercase">
                {project.category}
              </span>
              <div className="flex space-x-2">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-[#131b2e] hover:bg-cyan-950 text-white rounded-full border border-gray-700 transition flex items-center justify-center"
                    title="GitHub"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition flex items-center justify-center"
                    title="Live Preview"
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>

            <div className="w-full h-44 rounded-lg overflow-hidden border border-gray-800 bg-[#131b2e]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-top"
              />
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech.map((t, index) => (
                <span 
                  key={index} 
                  className="text-[10px] font-semibold bg-[#131b2e] text-gray-300 px-2.5 py-1 rounded-md border border-gray-700 uppercase"
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