import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CookieIcon } from 'lucide-react';

export function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <motion.div
      role="region"
      aria-label="Cookie preferences"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="fixed inset-x-0 bottom-0 z-50 bg-ink px-5 py-5 lg:px-8">
      
      <div className="mx-auto flex max-w-shell flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
        <CookieIcon className="hidden h-8 w-8 shrink-0 text-mint lg:block" />
        <p className="text-sm leading-relaxed text-white/75">
          We use strictly necessary cookies to keep the site working, plus optional ones to
          understand how it's used. You can change your choice at any time in privacy
          settings.
        </p>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:w-[420px]">
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="flex-1 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors duration-150 ease-smooth hover:bg-white/10">
            
            Reject optional
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="flex-1 rounded-full bg-white px-6 py-3 text-sm font-bold text-ink transition-colors duration-150 ease-smooth hover:bg-white/90">
            
            Accept and continue
          </button>
        </div>
      </div>
    </motion.div>);

}