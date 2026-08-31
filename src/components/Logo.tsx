import React from 'react';
import { brand } from '../data/site';

interface LogoProps {
  tone?: 'dark' | 'light';
}

export function Logo({ tone = 'dark' }: LogoProps) {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4"
      aria-label={`${brand.name} home`}
    >
      {/* ✅ Replaced SVG with favicon.png from public folder */}
      <img
        src="/favicon.png"
        alt={`${brand.name} logo`}
        className="h-8 w-8 object-contain"
        aria-hidden="true"
      />

      <span
        className={`text-xl font-extrabold tracking-tight ${
          tone === 'light' ? 'text-white' : 'text-ink'
        }`}
      >
        {brand.wordmark}
      </span>
    </a>
  );
}
