'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

interface MembersSidebarProps {
  activeServer: number;
}

interface Member {
  name: string;
  img: string;
  username?: string;
  status?: string;
  activity?: string;
  banner?: string;
}

export default function MembersSidebar({ activeServer }: MembersSidebarProps) {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, right: 0 });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer setMounted to avoid cascading renders
    queueMicrotask(() => setMounted(true));
  }, []);

  const handleMemberClick = (member: Member, index: number) => {
    if (selectedMember?.name === member.name) {
      setSelectedMember(null);
    } else {
      setSelectedMember(member);
      const element = itemRefs.current[index];
      if (element) {
        const rect = element.getBoundingClientRect();
        setCardPosition({
          top: rect.top,
          right: window.innerWidth - rect.left + 8
        });
      }
    }
  };
  
  const members: Member[][] = [
    [{ 
      name: 'Ezekiel Bustamante', 
      img: '/zeke.jpg',
      username: 'ziiik',
      status: 'There\'s no place like 127.0.0.1',
      activity: 'Visual Studio Code',
      banner: '/gifs/zeke.gif'
    }], // Server 0 (Me)
    [
      { 
        name: 'Ezekiel Bustamante', 
        img: '/zeke.jpg',
        username: 'ziiik',
        status: 'There\'s no place like 127.0.0.1',
        activity: 'Visual Studio Code',
        banner: '/gifs/zeke.gif'
      },
      { 
        name: 'Mary Ruth Relator', 
        img: '/mary.jpg',
        username: 'prettymary',
        status: 'Powered by music and good vibes',
        activity: 'Spotify',
        banner: '/gifs/mary.gif'
      }
    ], // Server 1 (<3)
    [
      { 
        name: 'Ezekiel Bustamante', 
        img: '/zeke.jpg',
        username: 'ziiik',
        status: 'There\'s no place like 127.0.0.1',
        activity: 'Visual Studio Code',
        banner: '/gifs/zeke.gif'
      },
      { 
        name: 'Carl Blancaflor', 
        img: '/carlb.png',
        username: 'daddycarl',
        status: 'Git commit, git paid',
        activity: 'GitHub',
        banner: '/gifs/carlb.gif'
      },
      { 
        name: 'Carl Melvin Erosa', 
        img: '/carle.jpg',
        username: 'itsyaboikaru',
        status: 'I put the fun in function()',
        activity: 'Visual Studio Code',
        banner: '/gifs/carle.gif'
      },
      { 
        name: 'Jhered Miguel Republica', 
        img: '/jhered.jpg',
        username: 'red-sakai',
        status: 'Designing the future, one frame at a time',
        activity: 'Figma',
        banner: '/gifs/jhered.gif'
      }
    ]  // Server 2 (Team)
  ];

  const currentMembers = members[activeServer] || members[0];

  return (
    <>
      <div className="w-60 bg-[#2f3136] p-4 relative overflow-y-auto h-screen md:h-full">
        <div className="mb-4">
          <div className="text-[#8e9297] text-xs font-semibold uppercase mb-2">Online — {currentMembers.length}</div>
          {currentMembers.map((member, index) => (
            <div 
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              className="flex items-center px-2 py-1.5 rounded hover:bg-[#36393f] cursor-pointer relative"
              onClick={() => handleMemberClick(member, index)}
            >
              <div className="w-8 h-8 rounded-full mr-3 relative overflow-hidden">
                <Image src={member.img} alt={member.name} width={32} height={32} className="w-full h-full object-cover" style={{objectFit:'cover'}} />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#3ba55d] border-2 border-[#2f3136] rounded-full"/>
              </div>
              <span className="text-[#dcddde] text-sm">{member.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Card Modal - Rendered via Portal */}
      {mounted && selectedMember && createPortal(
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-transparent z-[9998]"
            onClick={() => setSelectedMember(null)}
          />
          
          {/* Profile Card */}
          <div 
            className="fixed w-[340px] bg-[#18191c] rounded-lg shadow-2xl z-[9999] overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:left-auto md:top-auto md:translate-x-0 md:translate-y-0"
            style={{
              top: window.innerWidth >= 768 ? `${cardPosition.top}px` : undefined,
              right: window.innerWidth >= 768 ? `${cardPosition.right}px` : undefined
            }}
          >
                  {/* Banner */}
                  <div className="h-[120px] bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                    {selectedMember.banner && (
                      <Image
                        src={selectedMember.banner}
                        alt="Banner"
                        width={340}
                        height={120}
                        className="w-full h-full object-cover"
                        style={{objectFit:'cover'}}
                      />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="px-4 pb-4 -mt-12">
                    {/* Profile Picture */}
                    <div className="w-[92px] h-[92px] rounded-full border-[6px] border-[#18191c] mb-3 relative overflow-hidden bg-[#36393f]">
                      <Image src={selectedMember.img} alt={selectedMember.name} width={92} height={92} className="w-full h-full object-cover" style={{objectFit:'cover'}} />
                      <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#3ba55d] border-[4px] border-[#18191c] rounded-full"/>
                    </div>

                    {/* User Info */}
                    <div className="bg-[#111214] rounded-lg p-3 mb-3">
                      <h2 className="text-white text-xl font-semibold">{selectedMember.name}</h2>
                      <p className="text-[#b5bac1] text-sm">{selectedMember.username || '_user'}</p>
                      
                      {selectedMember.status && (
                        <div className="mt-3 flex items-start gap-2">
                          <div className="text-lg">💭</div>
                          <p className="text-[#b5bac1] text-sm italic">{selectedMember.status}</p>
                        </div>
                      )}
                    </div>

                    {/* Activity */}
                    {selectedMember.activity && (
                      <div className="bg-[#111214] rounded-lg p-3 mb-3">
                        <div className="text-[#b5bac1] text-xs font-semibold uppercase mb-2">Playing</div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#5865f2] rounded flex items-center justify-center">
                            {selectedMember.activity === 'Spotify' ? (
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                              </svg>
                            ) : selectedMember.activity === 'GitHub' ? (
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            ) : selectedMember.activity === 'Figma' ? (
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
                                <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
                                <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
                                <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
                                <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
                              </svg>
                            ) : (
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352z"/>
                              </svg>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-semibold text-sm">{selectedMember.activity}</div>
                            <div className="text-[#b5bac1] text-xs">
                              {selectedMember.activity === 'Spotify' ? 'Juno by Sabrina Carpenter' : 
                               selectedMember.name === 'Ezekiel Bustamante' && selectedMember.activity === 'Visual Studio Code' ? 'Workspace: Hello World' :
                               (selectedMember.name === 'Carl Blancaflor' || selectedMember.name === 'Carl Melvin Erosa' || selectedMember.name === 'Jhered Miguel Republica') ? 'Workspace: Lunti' :
                               'Workspace: folio'}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
            </>,
            document.body
          )
        }
    </>
  );
}
