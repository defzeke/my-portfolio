'use client';

import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import LoadingScreen from '@/components/sections/LoadingScreen';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onLoadingComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <Hero />
    </>
  );
}