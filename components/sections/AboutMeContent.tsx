'use client';

import { FaHands, FaCode, FaShieldAlt, FaGraduationCap, FaBolt, FaUserShield, FaGlobe, FaCloud, FaLock, FaMobileAlt, FaRobot, FaLightbulb, FaRocket, FaBullseye, FaHandshake } from 'react-icons/fa';
import { BsQuote } from 'react-icons/bs';
import Link from 'next/link';

export default function AboutMeContent() {
  return (
    <div className="space-y-6">
      {/* Hero Section with Gradient */}
      <div className="relative rounded-xl overflow-hidden shadow-xl">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/gifs/banner1.gif)' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5865f2]/40 via-[#7289da]/30 to-[#5865f2]/40" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        {/* Content */}
        <div className="relative p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="text-3xl sm:text-4xl md:text-5xl text-white animate-pulse">
              <FaHands className="inline-block transform rotate-12" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">Ezekiel Bustamante</h1>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5">
                  <FaCode className="text-xs" /> Software Developer
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5">
                  <FaShieldAlt className="text-xs" /> Cybersecurity
                </span>
              </div>
            </div>
          </div>
          <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Computer Engineering student with a <span className="font-bold text-white border-b-2 border-white/50">passion for innovation</span> and building secure, impactful solutions.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-gradient-to-br from-[#2f3136] to-[#26282c] rounded-lg p-4 sm:p-5 border-2 border-transparent hover:border-[#5865f2] hover:shadow-lg hover:shadow-[#5865f2]/20 transition-all group cursor-pointer">
          <FaGraduationCap className="text-3xl sm:text-4xl mb-2 sm:mb-3 text-[#5865f2] group-hover:scale-110 transition-transform" />
          <div className="text-[#b9bbbe] text-xs uppercase font-semibold mb-1 tracking-wider">Education</div>
          <div className="text-white font-bold group-hover:text-[#5865f2] transition-colors text-sm leading-tight">Bachelor of Science in Computer Engineering</div>
          <div className="text-[#8e9297] text-xs mt-1">Polytechnic University of the Philippines</div>
        </div>
        <div className="bg-gradient-to-br from-[#2f3136] to-[#26282c] rounded-lg p-4 sm:p-5 border-2 border-transparent hover:border-[#5865f2] hover:shadow-lg hover:shadow-[#5865f2]/20 transition-all group cursor-pointer">
          <FaBolt className="text-3xl sm:text-4xl mb-2 sm:mb-3 text-[#faa61a] group-hover:scale-110 transition-transform" />
          <div className="text-[#b9bbbe] text-xs uppercase font-semibold mb-1 tracking-wider">Focus</div>
          <div className="text-white font-bold group-hover:text-[#5865f2] transition-colors text-sm leading-tight">Cybersecurity & Full Stack Software Developer</div>
        </div>
        <div className="bg-gradient-to-br from-[#2f3136] to-[#26282c] rounded-lg p-4 sm:p-5 border-2 border-transparent hover:border-[#5865f2] hover:shadow-lg hover:shadow-[#5865f2]/20 transition-all group cursor-pointer">
          <FaUserShield className="text-3xl sm:text-4xl mb-2 sm:mb-3 text-[#43b581] group-hover:scale-110 transition-transform" />
          <div className="text-[#b9bbbe] text-xs uppercase font-semibold mb-1 tracking-wider">Interests</div>
          <div className="text-white font-bold group-hover:text-[#5865f2] transition-colors text-xs leading-tight">
            Ethical Hacking • Cybersecurity • Machine Learning • Web Dev • Mobile Dev • Cloud Computing
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gradient-to-br from-[#2f3136] to-[#26282c] rounded-lg p-4 sm:p-5 md:p-6 shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
          <span className="text-[#5865f2]">▶</span> About Me
        </h2>
        <div className="space-y-4">
          <p className="text-[#dcddde] leading-relaxed">
            My journey in tech is driven by <span className="text-[#5865f2] font-semibold">curiosity</span> and the desire to create solutions that make a real difference. I love diving deep into how systems work and finding ways to make them better, more secure, and more efficient.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#5865f2]/10 text-[#5865f2] px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#5865f2]/20 transition-colors">
              <FaGlobe /> Web Development
            </span>
            <span className="bg-[#5865f2]/10 text-[#5865f2] px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#5865f2]/20 transition-colors">
              <FaCloud /> Cloud Tech
            </span>
            <span className="bg-[#5865f2]/10 text-[#5865f2] px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#5865f2]/20 transition-colors">
              <FaLock /> Security
            </span>
            <span className="bg-[#5865f2]/10 text-[#5865f2] px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#5865f2]/20 transition-colors">
              <FaMobileAlt /> Mobile Apps
            </span>
            <span className="bg-[#5865f2]/10 text-[#5865f2] px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-[#5865f2]/20 transition-colors">
              <FaRobot /> AI/ML
            </span>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="bg-gradient-to-br from-[#2f3136] to-[#26282c] rounded-lg p-4 sm:p-5 md:p-6 shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
          <span className="text-[#5865f2]">▶</span> What I Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-[#36393f] rounded-lg hover:bg-[#3c3f45] hover:shadow-md transition-all cursor-pointer border-l-4 border-transparent hover:border-[#5865f2]">
            <FaLightbulb className="text-2xl sm:text-3xl text-[#faa61a] flex-shrink-0 mt-1" />
            <div>
              <div className="text-white font-semibold mb-1">Hackathons</div>
              <div className="text-[#b9bbbe] text-sm leading-relaxed">Competing in coding competitions and tech challenges</div>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-[#36393f] rounded-lg hover:bg-[#3c3f45] hover:shadow-md transition-all cursor-pointer border-l-4 border-transparent hover:border-[#5865f2]">
            <FaRocket className="text-2xl sm:text-3xl text-[#5865f2] flex-shrink-0 mt-1" />
            <div>
              <div className="text-white font-semibold mb-1">Building Projects</div>
              <div className="text-[#b9bbbe] text-sm leading-relaxed">Creating impactful applications and tools</div>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-[#36393f] rounded-lg hover:bg-[#3c3f45] hover:shadow-md transition-all cursor-pointer border-l-4 border-transparent hover:border-[#5865f2]">
            <FaBullseye className="text-2xl sm:text-3xl text-[#f04747] flex-shrink-0 mt-1" />
            <div>
              <div className="text-white font-semibold mb-1">HackTheBox, CTF, TryHackMe</div>
              <div className="text-[#b9bbbe] text-sm leading-relaxed">Active on cybersecurity training platforms</div>
            </div>
          </div>
          <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-[#36393f] rounded-lg hover:bg-[#3c3f45] hover:shadow-md transition-all cursor-pointer border-l-4 border-transparent hover:border-[#5865f2]">
            <FaHandshake className="text-2xl sm:text-3xl text-[#43b581] flex-shrink-0 mt-1" />
            <div>
              <div className="text-white font-semibold mb-1">Internships & Collaboration</div>
              <div className="text-[#b9bbbe] text-sm leading-relaxed">Gaining industry experience and working with teams</div>
            </div>
          </div>
        </div>
      </div>

      {/* Site Modes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <Link href="/site-mode" className="bg-gradient-to-br from-[#5865f2]/20 to-[#4752c4]/10 rounded-lg p-4 sm:p-5 md:p-6 border-2 border-[#5865f2]/30 hover:border-[#5865f2] hover:shadow-lg hover:shadow-[#5865f2]/30 transition-all group cursor-pointer">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="bg-[#5865f2] p-2 sm:p-3 rounded-lg group-hover:scale-110 transition-transform">
              <FaGlobe className="text-xl sm:text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Site Mode</h3>
              <div className="text-[#5865f2] text-xs sm:text-sm font-semibold">Interactive Experience</div>
            </div>
          </div>
          <p className="text-[#dcddde] text-xs sm:text-sm leading-relaxed">
            An portfolio showcasing my personality, projects, and journey through an engaging and clean interface.
          </p>
        </Link>
        
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#43b581]/20 to-[#3ca374]/10 rounded-lg p-4 sm:p-5 md:p-6 border-2 border-[#43b581]/30 hover:border-[#43b581] hover:shadow-lg hover:shadow-[#43b581]/30 transition-all group cursor-pointer">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="bg-[#43b581] p-2 sm:p-3 rounded-lg group-hover:scale-110 transition-transform">
              <FaGraduationCap className="text-xl sm:text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">CV Mode</h3>
              <div className="text-[#43b581] text-xs sm:text-sm font-semibold">Professional Format</div>
            </div>
          </div>
          <p className="text-[#dcddde] text-xs sm:text-sm leading-relaxed">
            A traditional, clean curriculum vitae format perfect for formal applications and professional networking.
          </p>
        </a>
      </div>

      {/* Quote */}
      <div className="relative bg-gradient-to-r from-[#5865f2]/20 to-transparent border-l-4 border-[#5865f2] rounded-r-lg p-4 sm:p-5 md:p-6 shadow-lg">
        <BsQuote className="text-[#5865f2] text-4xl sm:text-5xl md:text-6xl opacity-20 absolute top-3 sm:top-4 left-3 sm:left-4" />
        <p className="text-white text-sm sm:text-base md:text-lg italic relative z-10 pl-10 sm:pl-12 leading-relaxed">
          If you don&apos;t take risks, you can&apos;t create a future. - <span className="font-semibold">Monkey D. Luffy</span>
        </p>
      </div>
    </div>
  );
}
