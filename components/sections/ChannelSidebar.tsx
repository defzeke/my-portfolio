'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ChannelSidebarProps {
  activeServer: number;
  activeChannel: string;
  setActiveChannel: (channel: string) => void;
}

export default function ChannelSidebar({ activeServer, activeChannel, setActiveChannel }: ChannelSidebarProps) {
  const router = useRouter();

  // Different channels for different servers
  const channelsByServer = [
    ['about-me'], // Server 0 (Me)
    ['us', /* 'since', */ 'referral'], // Server 1 (<3)
    ['cicada', 'about-jhered', 'about-carl-e', 'about-carl-b'] // Server 2 (Team Cicada)
  ];

  const currentChannels = channelsByServer[activeServer] || channelsByServer[0];

  // Different server names
  const serverNames = [
    'My Portfolio',  // Server 0
    '<3',       // Server 1
    'Team Cicada'    // Server 2
  ];

  const currentServerName = serverNames[activeServer] || serverNames[0];

  return (
    <div className="w-60 bg-[#2f3136] flex flex-col h-screen md:h-full">
      {/* Server Name */}
      <div className="h-12 px-4 shadow-md flex items-center justify-between cursor-pointer hover:bg-[#36393f] transition-colors">
        <h2 className="text-white font-semibold text-[15px]">{currentServerName}</h2>
        <svg className="w-4 h-4 text-[#b9bbbe]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 10L12 15L17 10H7Z"/>
        </svg>
      </div>

      {/* Channels */}
      <div className="flex-1 overflow-y-auto px-2 pt-4">
        <div className="mb-2">
          <div className="flex items-center px-2 mb-1">
            <span className="text-[#8e9297] text-xs font-semibold uppercase">Text Channels</span>
          </div>
          
          {currentChannels.map((channel) => (
            <div 
              key={channel} 
              className={`flex items-center px-2 py-1.5 mx-1 rounded hover:bg-[#3c3f45] cursor-pointer group ${
                activeChannel === channel ? 'bg-[#3c3f45]' : ''
              }`}
              onClick={() => setActiveChannel(channel)}
            >
              <span className={`mr-1.5 ${
                activeChannel === channel ? 'text-white' : 'text-[#8e9297]'
              }`}>#</span>
              <span className={`text-[15px] ${
                activeChannel === channel ? 'text-white' : 'text-[#96989d] group-hover:text-[#dcddde]'
              }`}>{channel}</span>
            </div>
          ))}
        </div>
        
        {/* Only show Other Mode for Server 0 (My Portfolio) */}
        {activeServer === 0 && (
          <div className="mb-2 mt-4">
            <div className="flex items-center px-2 mb-1">
              <span className="text-[#8e9297] text-xs font-semibold uppercase">Other Mode</span>
            </div>
            
            <div 
              className={`flex items-center px-2 py-1.5 mx-1 rounded hover:bg-[#3c3f45] cursor-pointer group ${
                activeChannel === 'site-mode' ? 'bg-[#3c3f45]' : ''
              }`}
              onClick={() => router.push('/site-mode')}
            >
              <span className={`mr-1.5 ${
                activeChannel === 'site-mode' ? 'text-white' : 'text-[#8e9297]'
              }`}>🌐</span>
              <span className={`text-[15px] ${
                activeChannel === 'site-mode' ? 'text-white' : 'text-[#96989d] group-hover:text-[#dcddde]'
              }`}>site-mode</span>
            </div>

            <div 
              className={`flex items-center px-2 py-1.5 mx-1 rounded hover:bg-[#3c3f45] cursor-pointer group ${
                activeChannel === 'cv-mode' ? 'bg-[#3c3f45]' : ''
              }`}
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              <span className={`mr-1.5 ${
                activeChannel === 'cv-mode' ? 'text-white' : 'text-[#8e9297]'
              }`}>📄</span>
              <span className={`text-[15px] ${
                activeChannel === 'cv-mode' ? 'text-white' : 'text-[#96989d] group-hover:text-[#dcddde]'
              }`}>cv-mode</span>
            </div>
          </div>
        )}
      </div>

      {/* User Area */}
      <div className="h-[53px] bg-[#292b2f] px-2 flex items-center">
        <div className="flex items-center flex-1">
          <div className="w-8 h-8 rounded-full mr-2 overflow-hidden">
            <Image src="/zeke.jpg" alt="Ezekiel Bustamante" width={32} height={32} className="w-full h-full object-cover" style={{objectFit:'cover'}} />
          </div>
          <div className="flex-1">
            <div className="text-white text-sm font-semibold">Ezekiel Bustamante</div>
            <div className="text-[#b9bbbe] text-xs">#0000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
