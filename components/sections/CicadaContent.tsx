'use client';

import { FaTrophy, FaUsers, FaCode, FaShieldAlt, FaMedal } from 'react-icons/fa';
import Image from 'next/image';

export default function CicadaContent() {
  const members = [
    { name: 'Ezekiel Bustamante', img: '/zeke.jpg', role: 'Full-Stack Developer' },
    { name: 'Jhered Miguel Republica', img: '/jhered.jpg', role: 'Full-Stack Developer' },
    { name: 'Carl Melvin Erosa', img: '/carle.jpg', role: 'Full-Stack Developer' },
    { name: 'Carl Blancaflor', img: '/carlb.png', role: 'Full-Stack Developer' }
  ];

  const achievements = [
    {
      title: 'PUP Hackathon: Uthack ang Puhunan',
      position: '1st Runner Up',
      icon: <FaMedal className="w-8 h-8 text-[#fbbf24]" />
    },
    {
      title: 'ICTO Hackathon',
      position: 'Top 8 Finalists',
      icon: <FaTrophy className="w-8 h-8 text-[#5865f2]" />
    },
    {
      title: 'Create&Conquer Hackathon',
      position: 'First Competition',
      icon: <FaCode className="w-8 h-8 text-[#72767d]" />
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Team Header */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
            <Image src="/cicada.png" alt="Team Cicada Logo" width={128} height={128} className="w-full h-full object-contain" style={{objectFit:'contain'}} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold text-white mb-4">Team Cicada</h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
              <div className="flex items-center gap-2 bg-[#36393f] px-4 py-2 rounded border border-[#404449]">
                <FaShieldAlt className="text-[#5865f2]" />
                <span className="text-[#dcddde] text-sm">Cybersecurity</span>
              </div>
              <div className="flex items-center gap-2 bg-[#36393f] px-4 py-2 rounded border border-[#404449]">
                <FaCode className="text-[#5865f2]" />
                <span className="text-[#dcddde] text-sm">Software Development</span>
              </div>
            </div>
            <p className="text-[#b9bbbe] leading-relaxed">
              A team of aspiring professional cybersecurity experts and software developers, 
              actively participating in hackathons and building innovative solutions together.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FaUsers className="text-[#5865f2] text-xl" />
          <div>
            <h3 className="text-2xl font-semibold text-white">Team Members</h3>
            <p className="text-[#b9bbbe] text-sm">4 passionate developers and security enthusiasts</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {members.map((member, index) => (
            <div 
              key={index}
              className="bg-[#36393f] border border-[#404449] rounded-lg p-5 hover:bg-[#3c3f45] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#5865f2]">
                  <Image src={member.img} alt={member.name} width={64} height={64} className="w-full h-full object-cover" style={{objectFit:'cover'}} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{member.name}</h4>
                  <p className="text-[#b9bbbe] text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FaTrophy className="text-[#5865f2] text-xl" />
          <div>
            <h3 className="text-2xl font-semibold text-white">Hackathon Achievements</h3>
            <p className="text-[#b9bbbe] text-sm">Competing and learning in the tech community</p>
          </div>
        </div>

        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-[#36393f] border border-[#404449] rounded-lg p-6 hover:bg-[#3c3f45] transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg mb-1">{achievement.title}</h4>
                  <p className="text-[#b9bbbe] text-sm">{achievement.position}</p>
                </div>
                <div className="flex-shrink-0">
                  {achievement.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Focus */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-white mb-6">What We Do</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#36393f] border border-[#404449] rounded-lg p-6">
            <FaShieldAlt className="text-[#5865f2] text-3xl mb-3" />
            <h4 className="text-white font-semibold text-lg mb-2">Cybersecurity</h4>
            <p className="text-[#b9bbbe] text-sm leading-relaxed">
              Exploring security vulnerabilities, ethical hacking, and building secure applications 
              to protect systems and data.
            </p>
          </div>
          <div className="bg-[#36393f] border border-[#404449] rounded-lg p-6">
            <FaCode className="text-[#5865f2] text-3xl mb-3" />
            <h4 className="text-white font-semibold text-lg mb-2">Software Development</h4>
            <p className="text-[#b9bbbe] text-sm leading-relaxed">
              Creating innovative solutions through full-stack development, focusing on scalable 
              and user-friendly applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
