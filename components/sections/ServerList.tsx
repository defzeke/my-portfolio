'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

interface ServerListProps {
  active: number;
  setActive: (index: number) => void;
}

export default function ServerList({ active, setActive }: ServerListProps) {
  const router = useRouter();
  const servers = [
    { src: '/zeke.jpg', alt: 'Zeke', tooltip: 'My Portfolio' },
    { src: '/gf.jpg', alt: 'GF', tooltip: '<3' },
    { src: '/cicada.jpg', alt: 'Cicada', tooltip: 'Team Cicada' }
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Defer setMounted to avoid cascading renders
    queueMicrotask(() => setMounted(true));

    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (!isDesktop) return; // Disable tooltip on mobile
    setHoveredIndex(index);
    const element = itemRefs.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 12
      });
    }
  };

  return (
    <>
      <div className="w-[72px] bg-[#202225] flex flex-col items-center py-3 gap-2 overflow-y-auto h-screen md:h-full">
        {/* Home Button */}
      <div 
        className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer"
        onClick={() => router.push('/')}
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
        </svg>
      </div>

      <div className="w-8 h-[2px] bg-[#36393f] rounded-full"/>

      {/* Server Icons */}
      {servers.map((img, i) => (
        <div key={img.alt} className="relative flex items-center">
          {/* White indicator on the left */}
          <div
            className={`absolute -left-3 h-10 w-1 bg-white rounded-r transition-all duration-200 ${
              active === i ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            ref={(el) => { itemRefs.current[i] = el; }}
            onClick={() => setActive(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer overflow-hidden ${
              active === i ? 'rounded-xl' : ''
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      ))}
    </div>

    {/* Tooltip Portal - Desktop only */}
    {mounted && isDesktop && hoveredIndex !== null && createPortal(
      <div 
        className="fixed bg-black text-white text-sm font-medium px-3 py-2 rounded-md shadow-lg whitespace-nowrap pointer-events-none"
        style={{ 
          top: `${tooltipPosition.top}px`, 
          left: `${tooltipPosition.left}px`,
          transform: 'translateY(-50%)',
          zIndex: 10001
        }}
      >
        {servers[hoveredIndex].tooltip}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black rotate-45" />
      </div>,
      document.body
    )}
  </>
  );
}
