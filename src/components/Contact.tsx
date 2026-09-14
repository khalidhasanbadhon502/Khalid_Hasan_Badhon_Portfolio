export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-xl mx-auto bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl">
        <h3 className="text-2xl font-bold mb-6 text-cyan-400">Get in Touch</h3>

        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
          <input type="hidden" name="access_key" value="de4503db-87c9-4be2-b44e-c0b1b91da6cc" />

          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Enter your name" 
              className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Enter your email" 
              className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea 
              name="message" 
              required 
              rows={4} 
              placeholder="Write your message here..." 
              className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-500"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}