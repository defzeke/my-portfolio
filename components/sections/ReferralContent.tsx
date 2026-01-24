'use client';

import { FaLinkedin, FaInstagram, FaFacebook, FaBuilding, FaUsers, FaCheckCircle, FaStar, FaAward, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

export default function ReferralContent() {
  const organizations = [
    { name: 'The Engineering Spectrum', position: 'Senior Writer', logo: '/her-orgs/spectrum.jpg' },
    { name: 'PUP Student Council Commission on Student Organizations and Accreditation', position: 'CE Deputy Commissioner', logo: '/her-orgs/sc.jpg' },
    { name: 'Google Developer Groups on Campus PUP', position: 'Industry Partnerships Co-Lead', logo: '/her-orgs/gdg.jpg' },
    { name: 'ICPEP Student Edition - PUP Manila', position: 'Executive Auditor', logo: '/her-orgs/icpep.jpg' },
    { name: 'Cisco NetConnect PUP - Manila', position: 'Chief Public Relations (CPRO)', logo: '/her-orgs/cisco.jpg' },
    { name: 'AWS Cloud Club PUP', position: 'Partnerships Team', logo: '/her-orgs/awspup.jpg' },
    { name: 'AWS Cloud Club Philippines', position: 'Partnerships Team', logo: '/her-orgs/awsph.jpg' },
    { name: 'CyberPH', position: 'Vice President of Business Development', logo: '/her-orgs/cyberph.jpg' }
  ];

  const contacts = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      link: 'https://www.linkedin.com/in/maryruthprelator/',
      color: 'bg-[#0077b5] hover:bg-[#006399]'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      link: 'https://www.instagram.com/its_mary.py/',
      color: 'bg-[#E4405F] hover:bg-[#d12e4c]'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-5 h-5" />,
      link: 'https://www.facebook.com/y.maryruth17',
      color: 'bg-[#1877f2] hover:bg-[#0d65d9]'
    }
  ];

  const highlights = [
    { icon: <FaHandshake className="w-5 h-5" />, text: 'Exceptional at partnerships and building strategic collaborations' },
    { icon: <FaUsers className="w-5 h-5" />, text: 'Outstanding public speaker and communicator' },
    { icon: <FaStar className="w-5 h-5" />, text: 'Highly skilled hardware expert with deep expertise in electronics and components' },
    { icon: <FaAward className="w-5 h-5" />, text: 'Skilled software developer (Next.js, Unity, TypeScript, Tailwind, Python, Vite, C#)' }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Professional Header */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg overflow-hidden">
        <div className="h-40 relative overflow-hidden">
          <Image src="/gifs/mary.gif" alt="Banner" width={1200} height={200} className="w-full h-full object-cover" style={{objectFit:'cover'}} />
        </div>
        <div className="px-8 pb-8 pt-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 -mt-20 md:-mt-24">
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#2f3136] bg-[#2f3136]">
                <Image src="/mary.jpg" alt="Mary Ruth Relator" width={128} height={128} className="w-full h-full object-cover" style={{objectFit:'cover'}} />
              </div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#3ba55d] border-4 border-[#2f3136] rounded-full"></div>
            </div>
            
            <div className="flex-1 mt-16 md:mt-20 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-center gap-3 mb-3">
                <h2 className="text-4xl font-bold text-white">Mary Ruth Relator</h2>
                <div className="bg-[#5865f2] text-white p-1.5 rounded-full">
                  <FaCheckCircle className="w-4 h-4" />
                </div>
              </div>
              <p className="text-[#b9bbbe] text-base mb-4">
                Tech Community Leader • Active in 8+ Organizations
              </p>
              <p className="text-[#dcddde] leading-relaxed text-base">
                An exceptionally active leader in the tech community with a proven track record of excellence. 
                A great developer and hardware enthusiast, highly recommended for professional collaborations, 
                partnerships, and community initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-[#5865f2] mb-1">8+</div>
          <div className="text-[#b9bbbe] text-sm">Organizations</div>
        </div>
        <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-[#5865f2] mb-1 flex items-center justify-center gap-1">
            5.0
            <FaStar className="w-5 h-5 text-[#5865f2]" />
          </div>
          <div className="text-[#b9bbbe] text-sm">Rating</div>
        </div>
        <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-[#5865f2] mb-1">100%</div>
          <div className="text-[#b9bbbe] text-sm">Recommended</div>
        </div>
      </div>

      {/* Organizations */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FaBuilding className="text-[#5865f2] text-xl" />
          <div>
            <h3 className="text-xl font-semibold text-white">Professional Affiliations</h3>
            <p className="text-[#b9bbbe] text-sm">Active member and contributor</p>
          </div>
        </div>
        
        <div className="space-y-2">
          {organizations.map((org, index) => (
            <div 
              key={index}
              className="bg-[#36393f] border border-[#404449] rounded p-4 hover:bg-[#3c3f45] transition-colors group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                  <Image src={org.logo} alt={org.name} width={48} height={48} className="w-full h-full object-cover" style={{objectFit:'cover'}} />
                </div>
                <div className="flex-1">
                  <span className="text-[#dcddde] font-medium block">{org.name}</span>
                  <span className="text-[#b9bbbe] text-sm">{org.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Strengths */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FaStar className="text-[#5865f2] text-xl" />
          <div>
            <h3 className="text-xl font-semibold text-white">Professional Strengths</h3>
            <p className="text-[#b9bbbe] text-sm">Key qualifications and expertise</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 bg-[#36393f] border border-[#404449] rounded p-4"
            >
              <div className="text-[#5865f2] mt-0.5">
                {highlight.icon}
              </div>
              <span className="text-[#dcddde] text-sm leading-relaxed">
                {highlight.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#2f3136] border border-[#404449] rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FaUsers className="text-[#5865f2] text-xl" />
          <div>
            <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
            <p className="text-[#b9bbbe] text-sm">Available for collaborations and professional inquiries</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${contact.color} px-6 py-3 rounded transition-colors text-white font-medium`}
            >
              {contact.icon}
              <span>{contact.name}</span>
            </a>
          ))}
          
          {/* Portfolio Button with Tooltip */}
          <div className="relative group">
            <button
              className="flex items-center gap-3 bg-[#36393f] hover:bg-[#3c3f45] border border-[#404449] px-6 py-3 rounded transition-colors text-[#b9bbbe] font-medium cursor-not-allowed"
              disabled
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Portfolio</span>
            </button>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Coming Soon - In Development
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
