'use client';

import { useState, useCallback, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import LoadingScreen from '@/components/sections/LoadingScreen';
import PortfolioLayout from '@/components/sections/PortfolioLayout';

export default function HomePage() {
  const [state, setState] = useState({ loading: true, isClient: false });
  const [, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    const hasPlayedInSession = sessionStorage.getItem('hasPlayedLoading');
    startTransition(() => {
      // If loading already played, skip it and show discord mode directly
      setState({ loading: !hasPlayedInSession, isClient: true });
    });
  }, []);

  const handleLoadingComplete = useCallback(() => {
    sessionStorage.setItem('hasPlayedLoading', 'true');
    router.replace('/site-mode');
  }, [router]);

  // Prevent flash during hydration
  if (!state.isClient) {
    return <div className="fixed inset-0 bg-white" suppressHydrationWarning />;
  }

  if (state.loading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return <PortfolioLayout />;
}