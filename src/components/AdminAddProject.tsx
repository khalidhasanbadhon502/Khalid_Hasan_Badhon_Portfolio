import React, { useState } from 'react';

const AdminAddProject: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tech: '',
    liveLink: '',
    githubLink: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://khalid-hasan-badhon-be.onrender.com/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tech: formData.tech.split(',').map((item) => item.trim()),
        }),
      });

      if (response.ok) {
        alert('Project saved successfully!');
        setFormData({ title: '', description: '', tech: '', liveLink: '', githubLink: '' });
      } else {
        alert('Failed to save project!');
      }
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Could not connect to the backend server!');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#131b2e] rounded-xl shadow-lg border border-cyan-500/20 my-8 text-white">
      <h3 className="text-xl font-semibold mb-4 text-center text-cyan-400">Add New Project</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">Project Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 bg-[#0a0f1d] border border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-400"
            placeholder="e.g. Dev Stack Builder"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Technologies (comma separated)</label>
          <input
            type="text"
            name="tech"
            value={formData.tech}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 bg-[#0a0f1d] border border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-400"
            placeholder="e.g. React, Node.js, MongoDB"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            required
            className="w-full mt-1 p-2 bg-[#0a0f1d] border border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-400"
            placeholder="Project details..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Live Link</label>
          <input
            type="url"
            name="liveLink"
            value={formData.liveLink}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-[#0a0f1d] border border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-400"
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">GitHub Link</label>
          <input
            type="url"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-[#0a0f1d] border border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-400"
            placeholder="https://github.com/username/repo"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-md transition duration-200"
        >
          Save Project
        </button>
      </form>
    </div>
  );
};

export default AdminAddProject;