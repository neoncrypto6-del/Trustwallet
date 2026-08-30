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
      aria-label={`${brand.name} home`}>
      
      <svg viewBox="0 0 32 36" className="h-8 w-8" aria-hidden="true">
        <path
          d="M16 1.5 30 7v11.4c0 7.4-5.4 13.4-14 16.1-8.6-2.7-14-8.7-14-16.1V7L16 1.5Z"
          fill="#1B15E8" />
        
        <path
          d="M16 1.5 30 7v11.4c0 7.4-5.4 13.4-14 16.1V1.5Z"
          fill="#00D69E"
          opacity="0.9" />
        
      </svg>
      <span
        className={`text-xl font-extrabold tracking-tight ${
        tone === 'light' ? 'text-white' : 'text-ink'}`
        }>
        
        {brand.wordmark}
      </span>
    </a>);

}