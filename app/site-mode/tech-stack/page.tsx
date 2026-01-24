"use client";

import Link from "next/link";
import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";

export default function TechStackPage() {
  const [isDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  const techStacks = {
    frontend: ['Tailwind CSS', 'Next.js', 'Vite', 'React', 'JavaScript', 'TypeScript', 'ESLint', 'ReactBits'],
    backend: ['Node.js', 'FastAPI', 'Express.js', 'Python', 'Supabase', 'Firebase', 'SQL', 'PostgreSQL', 'MongoDB', 'OAuth', 'REST'],
    developerTools: ['Git', 'GitHub', 'VS Code', 'Discord'],
    devopsCloud: ['Azure', 'AWS', 'Vercel', 'Docker'],
    cybersecurity: ['Kali Linux', 'Nmap', 'Wireshark', 'Snort']
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <Link 
            href="/site-mode"
            className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Tech Stack
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-16 space-y-8">
        {/* Frontend */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Frontend
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStacks.frontend.map((tech) => (
              <span 
                key={tech} 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-white text-gray-700 border border-gray-200'} shadow-sm`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Backend */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Backend
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStacks.backend.map((tech) => (
              <span 
                key={tech} 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-white text-gray-700 border border-gray-200'} shadow-sm`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* DevOps and Cloud */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            DevOps and Cloud
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStacks.devopsCloud.map((tech) => (
              <span 
                key={tech} 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-white text-gray-700 border border-gray-200'} shadow-sm`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Developer Tools */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Developer Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStacks.developerTools.map((tech) => (
              <span 
                key={tech} 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-white text-gray-700 border border-gray-200'} shadow-sm`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Cybersecurity */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Cybersecurity
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStacks.cybersecurity.map((tech) => (
              <span 
                key={tech} 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-white text-gray-700 border border-gray-200'} shadow-sm`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
