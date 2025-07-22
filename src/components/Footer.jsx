import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 md:fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
        {/* Branding */}
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Seneth Jayashan</span> – S JAY Web Solutions (Pvt) Ltd. All rights reserved.
        </p>

        {/* Socials (Optional) */}
        <div className="flex gap-4">
          <a href="https://github.com/Seneth-Jayashan" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/seneth-jayashan" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            LinkedIn
          </a>
          <a href="mailto:sjayashan35@gmail.com" className="hover:text-cyan-400 transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
