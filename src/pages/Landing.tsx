import React from 'react';
import { Hero } from '../components/Hero';
import { FeatureGrid } from '../components/FeatureGrid';
import { SecuritySection } from '../components/SecuritySection';
import { EarnSection } from '../components/EarnSection';
import { ChainsSection } from '../components/ChainsSection';
import { Reviews } from '../components/Reviews';
import { DownloadSection } from '../components/DownloadSection';

interface LandingProps {
  showReviews?: boolean;
}

export function Landing({ showReviews = true }: LandingProps) {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <SecuritySection />
      <EarnSection />
      <ChainsSection />
      {showReviews && <Reviews />}
      <DownloadSection />
    </main>);

}