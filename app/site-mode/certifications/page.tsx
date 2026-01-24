"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";


interface Certification {
  cert_name: string;
  org: string;
  credentials: string;
  title?: string;
  Title?: string;
  name?: string;
  Name?: string;
  Organization?: string;
  organization?: string;
  link?: string;
  Link?: string;
}

export default function CertificationsPage() {
  const [isDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  const [certifications, setCertifications] = useState<Certification[]>([]);

  // Fetch certifications from CSV API
  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await fetch('/api/certifications');
        const data = await response.json();
        setCertifications(data.reverse()); // Reverse to show newest first
      } catch (error) {
        console.error('Error loading certifications:', error);
      }
    };

    fetchCertifications();
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
          All Certifications
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.credentials || cert.link || cert.Link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-xl ${isDarkMode ? 'bg-gray-800/80 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300'} shadow-sm hover:shadow-md transition-all cursor-pointer`}
            >
              <h3 className={`font-semibold text-base mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {cert.cert_name || cert.title || cert.Title || cert.name || cert.Name}
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {cert.org || cert.Organization || cert.organization}
              </p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
