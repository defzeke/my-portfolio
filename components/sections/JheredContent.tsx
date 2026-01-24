'use client';

import { FaGlobe, FaCode, FaShieldAlt, FaLaptopCode } from 'react-icons/fa';
import Image from 'next/image';

export default function JheredContent() {
  return (
    <div className="space-y-5">
      {/* Profile Header */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg overflow-hidden">
        <div className="h-56 relative overflow-hidden">
          <Image src="/gifs/jhered.gif" alt="Banner" width={1200} height={224} className="w-full h-full object-cover" style={{objectFit:'cover'}} />
        </div>
        <div className="px-8 pb-8 pt-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 -mt-20 md:-mt-24">
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#2f3136] bg-[#2f3136]">
                <Image src="/jhered.jpg" alt="Jhered" width={128} height={128} className="w-full h-full object-cover" style={{objectFit:'cover'}} />
              </div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#3ba55d] border-4 border-[#2f3136] rounded-full"></div>
            </div>
            
            <div className="flex-1 mt-16 md:mt-20 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-1">Jhered Miguel Republica</h2>
              <p className="text-[#b9bbbe]">Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-6">
        <h3 className="text-sm font-semibold text-[#b9bbbe] uppercase tracking-wide mb-4">About</h3>
        <p className="text-[#dcddde] leading-relaxed">
          A hardworking friend and talented teammate, Jhered is a passionate cybersecurity and software developer 
          with a strong focus on building secure, scalable applications. Dedicated to exploring the intersection 
          of security and development, constantly learning and implementing best practices in both fields.
        </p>
      </div>

      {/* Skills */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-6">
        <h3 className="text-sm font-semibold text-[#b9bbbe] uppercase tracking-wide mb-4">Focus Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <FaShieldAlt className="text-blue-400 text-xl mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold mb-1">Cybersecurity</h4>
              <p className="text-[#b9bbbe] text-sm">
                Security analysis, vulnerability assessment, and ethical hacking
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaLaptopCode className="text-purple-400 text-xl mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold mb-1">Software Development</h4>
              <p className="text-[#b9bbbe] text-sm">
                Full-stack development with modern frameworks and technologies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Link */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <FaGlobe className="text-[#5865f2]" />
          <h3 className="text-sm font-semibold text-[#b9bbbe] uppercase tracking-wide">Portfolio</h3>
        </div>
        <a 
          href="https://jhered.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#00aff4] hover:underline text-lg"
        >
          <FaCode className="text-sm" />
          <span>jhered.me</span>
        </a>
      </div>
    </div>
  );
}
