import React from 'react';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
}

const myProjects: ProjectItem[] = [
  {
    id: '1',
    title: 'Dev Stack Builder',
    description: 'A modern full-stack web application built with React, TypeScript, Tailwind CSS, and Vite.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/username/dev-stack-builder'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">My Projects</h2>
        <p className="text-gray-400 text-sm">Here are some of the projects I have built through code.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-[#131b2e] p-6 rounded-xl shadow-lg border border-cyan-500/20 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-cyan-950 text-cyan-400 px-2.5 py-1 rounded-md border border-cyan-800/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-3 pt-4 border-t border-gray-800">
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs bg-cyan-600 hover:bg-cyan-500 text-white px-3.5 py-2 rounded-md font-medium transition duration-200"
                >
                  Live Preview
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-200 px-3.5 py-2 rounded-md font-medium transition duration-200 border border-gray-700"
                >
                  GitHub Source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;