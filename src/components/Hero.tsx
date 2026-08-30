import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogInIcon, MonitorIcon, SmartphoneIcon, StarIcon } from 'lucide-react';
import { proofPoints } from '../data/site';

const HERO_IMAGE = "/959287c0-add4-4758-bbbb-17a171483eaf.jpg";


export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-shell px-5 pb-14 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
            
            <h1 className="max-w-[560px] text-[42px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[56px] lg:text-[64px]">
              Own your keys.
              <br />
              Own your crypto.
            </h1>
            <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-ink-muted">
              A free self-custody wallet for 100+ blockchains. Buy, swap, stake, and
              collect while your keys stay on your device — no account, no waiting on
              anyone else to move your money.
            </p>

            {/* Mobile: signing in comes first, and only the mobile app is installable here */}
            <div className="mt-9 flex flex-col gap-3 sm:hidden">
              <Link
                to="/login"
                className="flex items-center justify-center gap-3 rounded-full bg-brand px-6 py-4 transition-colors duration-150 ease-smooth hover:bg-brand-hover">
                
                <LogInIcon className="h-6 w-6 text-white" />
                <span className="text-[15px] font-extrabold text-white">Log in</span>
              </Link>
              <a
                href="#download"
                className="flex items-center justify-center gap-3 rounded-full border border-brand/40 px-6 py-4 transition-colors duration-150 ease-smooth hover:bg-brand-soft">
                
                <SmartphoneIcon className="h-6 w-6 text-brand" />
                <span className="text-[15px] font-extrabold text-brand">
                  Download Mobile
                </span>
              </a>
            </div>

            {/* Desktop: both install targets side by side */}
            <div className="mt-9 hidden gap-3 sm:flex">
              <a
                href="#download"
                className="group flex items-center gap-3 rounded-full border border-brand/40 px-6 py-4 transition-colors duration-150 ease-smooth hover:bg-brand-soft">
                
                <SmartphoneIcon className="h-6 w-6 text-brand" />
                <span className="text-left text-[15px] font-bold leading-tight text-brand">
                  Download
                  <span className="block font-extrabold">Mobile app</span>
                </span>
              </a>
              <a
                href="#download"
                className="group flex items-center gap-3 rounded-full border border-brand/40 px-6 py-4 transition-colors duration-150 ease-smooth hover:bg-brand-soft">
                
                <MonitorIcon className="h-6 w-6 text-brand" />
                <span className="text-left text-[15px] font-bold leading-tight text-brand">
                  Download
                  <span className="block font-extrabold">Extension</span>
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.06, ease: [0.23, 1, 0.32, 1] }}
            className="relative">
            
            <img
              src={HERO_IMAGE}
              alt="Two phones showing a crypto portfolio surrounded by 3D lock, key, and shield objects"
              className="mx-auto w-full max-w-[560px]"
              loading="eager" />
            
          </motion.div>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-y-8 border-t border-hairline pt-10 lg:mt-4 lg:grid-cols-4">
          {proofPoints.map((point, i) =>
          <li key={point.title} className="flex flex-col items-center text-center">
              <span className="max-w-[180px] text-xl font-extrabold leading-tight tracking-tight text-ink">
                {point.title}
              </span>
              {i === proofPoints.length - 1 ?
            <span className="mt-2 flex gap-0.5" aria-label="Rated 4.8 out of 5">
                  {Array.from({ length: 5 }).map((_, s) =>
              <StarIcon key={s} className="h-4 w-4 fill-brand text-brand" />
              )}
                </span> :

            <span className="mt-2 text-sm text-ink-faint">{point.detail}</span>
            }
            </li>
          )}
        </ul>
      </div>
    </section>);

}