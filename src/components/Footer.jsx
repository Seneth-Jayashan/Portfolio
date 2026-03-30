import React from 'react';

export default function Footer() {
  return (
    <footer className="pb-6 pt-2">
      <div className="w-[min(1240px,calc(100%-1.3rem))] md:w-[min(1240px,calc(100%-2.5rem))] mx-auto glass rounded-2xl px-5 py-5 md:px-7 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm md:text-base text-slate-200/90 text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="text-teal-300 font-semibold">Seneth Jayashan</span> | S JAY Web Solutions (Pvt) Ltd.
        </p>

        <div className="flex gap-5 text-sm text-slate-200/85">
          <a href="https://github.com/Seneth-Jayashan" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/seneth-jayashan" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition">
            LinkedIn
          </a>
          <a href="mailto:sjayashan35@gmail.com" className="hover:text-teal-300 transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
