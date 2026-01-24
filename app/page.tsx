'use client';

import { useState, useCallback } from 'react';
import LoadingScreen from '@/components/sections/LoadingScreen';
import PortfolioLayout from '@/components/sections/PortfolioLayout';

export default function HomePage() {
  const [loading, setLoading] = useState(() => {
    // Check if user has already seen the loading screen
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('hasSeenLoading');
    }
    return true;
  });

  const handleLoadingComplete = useCallback(() => {
    // Mark that user has seen the loading screen
    if (typeof window !== 'undefined') {
      localStorage.setItem('hasSeenLoading', 'true');
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return <PortfolioLayout />;
}