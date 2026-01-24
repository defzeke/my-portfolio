"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";


interface Project {
  project_name: string;
  short_description: string;
  link: string;
  name?: string;
  description?: string;
  url?: string;
}

export default function ProjectsPage() {
  const [isDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  const [projects, setProjects] = useState<Project[]>([]);

  // Fetch projects from CSV API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data.reverse()); // Reverse to show newest first
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    };

    fetchProjects();
  }, []);

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
          All Projects
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => {
            const projectName = project.project_name || project.name || 'Untitled Project';
            const description = project.short_description || project.description || 'No description available';
            const link = project.link || project.url || '#';
            
            // Extract domain from link
            let displayLink = link;
            try {
              const url = new URL(link);
              displayLink = url.hostname.replace('www.', '');
            } catch {
              displayLink = link;
            }

            return (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/80 border border-gray-700 hover:border-gray-600 hover:bg-gray-800' : 'bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50'} shadow-sm transition-all cursor-pointer`}
              >
                <h3 className={`font-semibold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {projectName}
                </h3>
                <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {description}
                </p>
                <span className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {displayLink}
                </span>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}
