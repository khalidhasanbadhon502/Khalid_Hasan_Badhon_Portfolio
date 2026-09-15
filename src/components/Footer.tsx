export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-300/60 bg-[#F3F3F3] py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-xs text-slate-800">
        
        <div>
          <h4 className="font-bold mb-1">Phone</h4>
          <p className="text-slate-600">+8801987-762406</p>
        </div>

        <div>
          <h4 className="font-bold mb-1">Email</h4>
          <p className="text-slate-600 text-[11px] sm:text-xs whitespace-nowrap">khalidhasanbadhon02@gmail.com</p>
        </div>

        <div>
          <h4 className="font-bold mb-1">Follow Me</h4>
          <div className="flex items-center gap-3 mt-2">
            
            <a 
              href="https://www.linkedin.com/in/khalid-hasan-badhon502/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-black hover:bg-slate-100 transition-all shadow-sm"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            <a 
              href="https://github.com/khalidhasanbadhon502" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-black hover:bg-slate-100 transition-all shadow-sm"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>

            <a 
              href="https://leetcode.com/u/khalidhasanbadhon02/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-black hover:bg-slate-100 transition-all shadow-sm"
              title="LeetCode"
            >
              <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </a>

          </div>
        </div>

        <div className="text-slate-500 text-[11px] sm:text-right col-span-2 sm:col-span-1 flex items-end sm:justify-end">
          <p>© 2026 By Khalid Hasan Badhon. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}