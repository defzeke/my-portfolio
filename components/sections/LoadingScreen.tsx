'use client';

import { useState, useEffect, useCallback } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoEnd = useCallback(() => {
    setFadeOut(true);
    setTimeout(() => onLoadingComplete(), 500);
  }, [onLoadingComplete]);

  // Fallback timeout in case video doesn't play
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleVideoEnd();
    }, 5000); // 5 second fallback

    return () => clearTimeout(timeout);
  }, [handleVideoEnd]);

  return (
    <div className={`fixed inset-0 bg-white z-[10000] flex items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <video 
        autoPlay 
        playsInline
        muted
        className="max-w-[70%] max-h-[70%] md:max-w-[40%] md:max-h-[40%] object-contain"
        onEnded={handleVideoEnd}
        onError={handleVideoEnd}
      >
        <source src="/videos/load screen.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
