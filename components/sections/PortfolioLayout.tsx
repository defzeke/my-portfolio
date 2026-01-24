'use client';

import { useEffect, useState, useCallback } from 'react';
import ServerList from '@/components/sections/ServerList';
import ChannelSidebar from '@/components/sections/ChannelSidebar';
import MainContent from '@/components/sections/MainContent';
import MembersSidebar from '@/components/sections/MembersSidebar';

export default function PortfolioLayout() {
  const [fadeIn, setFadeIn] = useState(false);
  const [activeServer, setActiveServer] = useState(0);
  const [activeChannel, setActiveChannel] = useState('about-me');
  const [showMobileSidebars, setShowMobileSidebars] = useState(false);
  const [showMobileMembersSidebar, setShowMobileMembersSidebar] = useState(false);

  useEffect(() => {
    // Trigger fade in after component mounts
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  useEffect(() => {
    // Reset to first channel when server changes, only if needed
    let newChannel = 'about-me';
    if (activeServer === 2) {
      newChannel = 'cicada';
    } else if (activeServer === 1) {
      newChannel = 'us';
    }
    if (activeChannel !== newChannel) {
      setActiveChannel(newChannel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeServer]);

  // Handle swipe gestures for mobile
  const handleSwipe = useCallback((touchStartX: number, touchStartY: number, touchEndX: number, touchEndY: number) => {
    const swipeThreshold = 50;
    const horizontalSwipe = touchEndX - touchStartX;
    const verticalSwipe = Math.abs(touchEndY - touchStartY);

    // Check if it's a horizontal swipe (not vertical)
    if (Math.abs(horizontalSwipe) > swipeThreshold && verticalSwipe < 100) {
      if (horizontalSwipe > 0) {
        // Swipe right
        if (showMobileSidebars) {
          // If left sidebars are open, close them
          setShowMobileSidebars(false);
        } else if (!showMobileMembersSidebar) {
          // If nothing is open, show left sidebars
          setShowMobileSidebars(true);
        } else {
          // If right sidebar is open, close it
          setShowMobileMembersSidebar(false);
        }
      } else if (horizontalSwipe < 0) {
        // Swipe left
        if (showMobileMembersSidebar) {
          // If right sidebar is open, close it
          setShowMobileMembersSidebar(false);
        } else if (!showMobileSidebars) {
          // If nothing is open, show right sidebar
          setShowMobileMembersSidebar(true);
        } else {
          // If left sidebars are open, close them
          setShowMobileSidebars(false);
        }
      }
    }
  }, [showMobileSidebars, showMobileMembersSidebar]);

  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      handleSwipe(touchStartX, touchStartY, touchEndX, touchEndY);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleSwipe]);

  return (
    <main className="flex h-screen min-h-screen bg-[#36393f] overflow-hidden">
      {/* Black overlay that fades out */}
      <div className={`fixed inset-0 bg-black pointer-events-none transition-opacity duration-1000 ${fadeIn ? 'opacity-0' : 'opacity-100'}`} style={{ zIndex: 10000 }} />

      {/* Mobile overlay when sidebars are shown */}
      {(showMobileSidebars || showMobileMembersSidebar) && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => {
            setShowMobileSidebars(false);
            setShowMobileMembersSidebar(false);
          }}
        />
      )}

      {/* Server List - hidden on mobile by default, shown with swipe */}
      <div className={`
        fixed left-0 top-0 h-screen md:relative md:h-full z-40 md:z-auto
        transition-transform duration-300 ease-in-out
        ${showMobileSidebars ? 'translate-x-0' : '-translate-x-[72px]'}
        md:translate-x-0
      `}>
        <ServerList active={activeServer} setActive={setActiveServer} />
      </div>

      {/* Channel Sidebar - hidden on mobile by default, shown with swipe */}
      <div className={`
        fixed left-[72px] top-0 h-screen md:relative md:left-0 md:h-full z-40 md:z-auto
        transition-transform duration-300 ease-in-out
        ${showMobileSidebars ? 'translate-x-0' : '-translate-x-[332px]'}
        md:translate-x-0
      `}>
        <ChannelSidebar activeServer={activeServer} activeChannel={activeChannel} setActiveChannel={setActiveChannel} />
      </div>

      <MainContent activeChannel={activeChannel} />
      
      {/* Members Sidebar - hidden on mobile by default, shown with swipe left */}
      <div className={`
        fixed right-0 top-0 h-screen md:relative md:h-full z-40 md:z-auto
        transition-transform duration-300 ease-in-out
        ${showMobileMembersSidebar ? 'translate-x-0' : 'translate-x-[240px]'}
        md:translate-x-0
      `}>
        <MembersSidebar activeServer={activeServer} />
      </div>
    </main>
  );
}
