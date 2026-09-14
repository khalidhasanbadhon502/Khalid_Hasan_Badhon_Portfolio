import { useState } from 'react';

export default function Projects() {
  const [loading, setLoading] = useState(false);

  const handleProjectSubmit = async (e: any) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const title = form.title.value;
    const technologies = form.technologies.value;
    const description = form.description.value;

    const projectData = {
      title,
      technologies,
      description,
    };

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        alert('Project added successfully!');
        form.reset(); 
      } else {
        alert('Failed to add project');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or server is offline.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="projects" className="min-h-screen bg-slate-950 text-white p-6 flex flex-col justify-center items-center">
      <div className="w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Dashboard</h2>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Add New Project</h3>
          
          <form onSubmit={handleProjectSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Project Title</label>
              <input 
                type="text" 
                name="title" 
                required
                placeholder="e.g. Dev Stack Builder" 
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Technologies (comma separated)</label>
              <input 
                type="text" 
                name="technologies" 
                required
                placeholder="e.g. React, Node.js, MongoDB" 
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Description</label>
              <textarea 
                name="description" 
                required
                rows={4}
                placeholder="Project details..." 
                className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-500"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 rounded transition disabled:opacity-50"
            >
              {loading ? 'Adding...' : 'Add Project'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}