import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobeIcon, MenuIcon, MoonIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { navItems } from '../data/site';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-shell items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) =>
            <li key={item.label}>
                <a
                href={item.href}
                className="text-[15px] font-semibold text-ink transition-colors duration-150 ease-smooth hover:text-brand">
                
                  {item.label}
                </a>
              </li>
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Switch to dark mode"
            className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors duration-150 ease-smooth hover:bg-canvas">
            
            <MoonIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-brand/40 px-4 py-2 text-sm font-semibold text-brand transition-colors duration-150 ease-smooth hover:bg-brand-soft">
            
            <GlobeIcon className="h-4 w-4" />
            Language
          </button>
          <Link
            to="/login"
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white transition-colors duration-150 ease-smooth hover:bg-brand-hover">
            
            Log in
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-11 w-11 place-items-center rounded-full text-ink transition-colors duration-150 ease-smooth hover:bg-canvas lg:hidden">
          
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open &&
      <div className="border-t border-hairline bg-white lg:hidden">
          <ul className="mx-auto max-w-shell px-5 py-4">
            {navItems.map((item) =>
          <li key={item.label}>
                <a
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold text-ink">
              
                  {item.label}
                </a>
              </li>
          )}
            <li className="pt-3">
              <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brand px-6 py-3 text-center text-sm font-bold text-white">
              
                Log in
              </Link>
            </li>
          </ul>
        </div>
      }
    </header>);

}