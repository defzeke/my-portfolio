'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    // Animate background zoom
    const body = document.body;
    body.style.transition = 'background-size 1s ease-in-out, background-position 1s ease-in-out';
    body.style.backgroundSize = '200%';
    body.style.backgroundPosition = '60% 38%';
    
    setTimeout(() => {
      router.push('/portfolio');
    }, 1000);
  };

  useEffect(() => {
    return () => {
      document.body.style.backgroundSize = '115%';
      document.body.style.backgroundPosition = 'center';
    };
  }, []);

  return (
    <>
      <main className="flex items-end justify-center min-h-screen pb-12">
        {/* Clickable screen area */}
        <div 
          onClick={handleClick}
          className="absolute top-[42%] left-[57%] -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[58vh] cursor-pointer"
        />
        
        <div className="text-center">
          <h1 className="text-lg md:text-xl text-white/80 animate-pulse">
            Press the screen to start
          </h1>
        </div>
      </main>
      
      {/* Black overlay fade */}
      <div className={`fixed inset-0 bg-black pointer-events-none transition-opacity duration-1000 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`} style={{ zIndex: 9999 }} />
    </>
  );
}
