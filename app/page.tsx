'use client';

import { useState, useCallback, useEffect, useTransition } from 'react';
import LoadingScreen from '@/components/sections/LoadingScreen';
import PortfolioLayout from '@/components/sections/PortfolioLayout';

export default function HomePage() {
  const [state, setState] = useState({ loading: true, isClient: false });
  const [, startTransition] = useTransition();

  useEffect(() => {
    // Check if we're navigating back (sessionStorage only persists during active session)
    const hasPlayedInSession = sessionStorage.getItem('hasPlayedLoading');
    startTransition(() => {
      setState({ loading: !hasPlayedInSession, isClient: true });
    });
  }, []);

  const handleLoadingComplete = useCallback(() => {
    // Mark that loading has played in this session
    sessionStorage.setItem('hasPlayedLoading', 'true');
    setState(prev => ({ ...prev, loading: false }));
  }, []);

  // Prevent flash during hydration
  if (!state.isClient) {
    return <div className="fixed inset-0 bg-white" suppressHydrationWarning />;
  }

  if (state.loading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return <PortfolioLayout />;
}