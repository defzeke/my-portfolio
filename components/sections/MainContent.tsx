'use client';

import AboutMeContent from './AboutMeContent';
import SinceContent from './SinceContent';
import UsContent from './UsContent';
import ReferralContent from './ReferralContent';
import CicadaContent from './CicadaContent';
import JheredContent from './JheredContent';
import CarlEContent from './CarlEContent';
import CarlBContent from './CarlBContent';

interface MainContentProps {
  activeChannel: string;
}

export default function MainContent({ activeChannel }: MainContentProps) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Channel Header */}
      <div className="h-12 px-4 shadow-md flex items-center border-b border-[#202225]">
        <span className="text-[#8e9297] mr-2">#</span>
        <h3 className="text-white font-semibold">{activeChannel}</h3>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#1a1b1e] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#2e3035]">
        <div className="text-[#dcddde]">
          {activeChannel === 'about-me' && <AboutMeContent />}
          {activeChannel === 'since' && <SinceContent />}
          {activeChannel === 'us' && <UsContent />}
          {activeChannel === 'referral' && <ReferralContent />}
          {activeChannel === 'cicada' && <CicadaContent />}
          {activeChannel === 'about-jhered' && <JheredContent />}
          {activeChannel === 'about-carl-e' && <CarlEContent />}
          {activeChannel === 'about-carl-b' && <CarlBContent />}
        </div>
      </div>

      {/* Message Input */}
      <div className="px-4 pb-6">
        <div className="bg-[#40444b] rounded-lg px-4 py-3">
          <input 
            type="text" 
            placeholder={`Message #${activeChannel}`}
            className="w-full bg-transparent text-[#dcddde] outline-none placeholder-[#72767d]"
          />
        </div>
      </div>
    </div>
  );
}
