"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";
import SiteHeader from "@/components/sections/site/SiteHeader";
import AboutSection from "@/components/sections/site/AboutSection";
import TechStackSection from "@/components/sections/site/TechStackSection";
import ProjectsSection from "@/components/sections/site/ProjectsSection";
import BeyondCodingSection from "@/components/sections/site/BeyondCodingSection";
import ExperienceSection from "@/components/sections/site/ExperienceSection";
import CertificationsSection from "@/components/sections/site/CertificationsSection";
import RecommendationsSection from "@/components/sections/site/RecommendationsSection";
import SocialLinksSection from "@/components/sections/site/SocialLinksSection";
import GallerySection from "@/components/sections/site/GallerySection";
import SiteFooter from "@/components/sections/site/SiteFooter";


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
}

interface Project {
  project_name: string;
  short_description: string;
  link: string;
  name?: string;
  description?: string;
  url?: string;
}

export default function SiteMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showHackathons, setShowHackathons] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  // Save dark mode preference to localStorage
  const toggleDarkMode = () => {
    setIsTransitioning(true);
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 400;
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowHackathons(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fetch gallery images
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch('/api/gallery-images');
        const data = await response.json();
        setGalleryImages(data);
      } catch (error) {
        console.error('Error loading gallery images:', error);
      }
    };

    fetchGalleryImages();
  }, []);

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
    <div className={`min-h-screen ${isTransitioning ? 'transition-colors duration-300' : ''} ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Back Button */}
      <div className="px-4 sm:px-6 pt-4">
        <Link 
          href="/"
          className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <HiArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" /> Back
        </Link>
      </div>

      {/* Header */}
      <SiteHeader
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        showHackathons={showHackathons}
        setShowHackathons={setShowHackathons}
        dropdownRef={dropdownRef}
      />

      {/* Main Content Grid */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <AboutSection isDarkMode={isDarkMode} />
            <TechStackSection isDarkMode={isDarkMode} />
            <ProjectsSection isDarkMode={isDarkMode} projects={projects} />
            <BeyondCodingSection isDarkMode={isDarkMode} />
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            <ExperienceSection isDarkMode={isDarkMode} />
            <CertificationsSection isDarkMode={isDarkMode} certifications={certifications} />
            <RecommendationsSection isDarkMode={isDarkMode} />
            <SocialLinksSection isDarkMode={isDarkMode} />
          </div>
        </div>
      </main>

      {/* Gallery Section */}
      <GallerySection
        isDarkMode={isDarkMode}
        galleryImages={galleryImages}
        galleryRef={galleryRef}
        scrollGallery={scrollGallery}
        setSelectedImage={setSelectedImage}
      />

      {/* Footer */}
      <SiteFooter isDarkMode={isDarkMode} />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-5xl hover:text-gray-300 transition-colors z-10 w-12 h-12 flex items-center justify-center hover:rotate-90 duration-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Selected"
              width={1200}
              height={900}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl animate-scaleIn"
              style={{objectFit:'contain'}}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
