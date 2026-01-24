'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { FaHeart, FaCalendarAlt, FaClock } from 'react-icons/fa';

export default function SinceContent() {
  // Set your relationship start date here (Philippines timezone)
  const startDate = useMemo(() => new Date('2025-12-20T00:00:00+08:00'), []); // December 20, 2025, Philippines Time
  
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      // Get current time in Philippines timezone
      const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
      const diff = now.getTime() - startDate.getTime();
      
      // Calculate total days
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      
      // Calculate years, months, days
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      
      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      // Calculate remaining hours, minutes, seconds from the difference
      const remainingMs = diff % (1000 * 60 * 60 * 24); // milliseconds left after days
      const hours = Math.floor(remainingMs / (1000 * 60 * 60));
      const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);
      
      setTimeElapsed({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        totalDays
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-red-500/20 rounded-2xl p-8 border-2 border-pink-500/30 backdrop-blur-sm overflow-hidden">
        {/* Background GIF */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <Image
              src="/us2.jpg"
              alt="Background"
              fill
              className="object-cover opacity-30"
              style={{ objectPosition: 'center 53%' }}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-purple-900/40 to-slate-900/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <FaHeart className="text-6xl text-pink-500 animate-pulse drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
          </div>
          <h2 className="text-4xl font-bold text-center text-white mb-2 drop-shadow-lg">
            
          </h2>
          <p className="text-center text-pink-200 text-lg font-semibold drop-shadow-md">
            Since {startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Main Counter */}
      <div className="bg-gradient-to-br from-[#2f3136] to-[#26282c] rounded-xl p-8 border-l-4 border-pink-500">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-4">We&rsquo;ve Been Together For</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#202225] rounded-lg p-4">
              <div className="text-4xl font-bold text-pink-500">{timeElapsed.years}</div>
              <div className="text-sm text-[#b9bbbe] mt-1">Years</div>
            </div>
            <div className="bg-[#202225] rounded-lg p-4">
              <div className="text-4xl font-bold text-purple-500">{timeElapsed.months}</div>
              <div className="text-sm text-[#b9bbbe] mt-1">Months</div>
            </div>
            <div className="bg-[#202225] rounded-lg p-4">
              <div className="text-4xl font-bold text-red-500">{timeElapsed.days}</div>
              <div className="text-sm text-[#b9bbbe] mt-1">Days</div>
            </div>
          </div>
        </div>

        {/* Live Clock */}
        <div className="bg-[#202225] rounded-lg p-6 mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <FaClock className="text-pink-500" />
            <h4 className="text-lg font-semibold text-white">Live Timer</h4>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">{String(timeElapsed.hours).padStart(2, '0')}</div>
              <div className="text-xs text-[#b9bbbe]">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{String(timeElapsed.minutes).padStart(2, '0')}</div>
              <div className="text-xs text-[#b9bbbe]">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">{String(timeElapsed.seconds).padStart(2, '0')}</div>
              <div className="text-xs text-[#b9bbbe]">Seconds</div>
            </div>
          </div>
        </div>

        {/* Total Days Counter */}
        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg p-6 border border-pink-500/20">
          <div className="flex items-center justify-center gap-3">
            <FaCalendarAlt className="text-2xl text-pink-500" />
            <div className="text-center">
              <div className="text-5xl font-bold text-white">{timeElapsed.totalDays}</div>
              <div className="text-sm text-[#b9bbbe] mt-1">Total Days Together</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sweet Message */}
      <div className="bg-gradient-to-br from-[#2f3136] to-[#26282c] rounded-xl p-6 border-l-4 border-red-500">
        <p className="text-[#dcddde] text-center italic text-lg">
          &quot;My advice is always ruin the friendship, Better that than regret it for all time&quot;
        </p>
        <p className="text-[#b9bbbe] text-center text-sm mt-2">
          -Taylor Swift
        </p>
      </div>
    </div>
  );
}
