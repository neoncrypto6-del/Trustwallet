import React from 'react';
import { GithubIcon, LinkedinIcon, SendIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { Logo } from './Logo';
import { brand, footerColumns } from '../data/site';

const socials = [
{ label: 'X', Icon: TwitterIcon },
{ label: 'Telegram', Icon: SendIcon },
{ label: 'YouTube', Icon: YoutubeIcon },
{ label: 'GitHub', Icon: GithubIcon },
{ label: 'LinkedIn', Icon: LinkedinIcon }];


export function Footer() {
  return (
    <footer id="about" className="bg-white pb-12 pt-16 lg:pt-20">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-ink-muted">
              {brand.tagline} for 100+ blockchains. Your keys never leave your device.
            </p>
            <ul className="mt-6 flex gap-2">
              {socials.map(({ label, Icon }) =>
              <li key={label}>
                  <a
                  href="#about"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-ink transition-colors duration-150 ease-smooth hover:border-brand hover:text-brand">
                  
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) =>
            <div key={column.heading}>
                <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-ink">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) =>
                <li key={link}>
                      <a
                    href="#about"
                    className="text-sm text-ink-muted transition-colors duration-150 ease-smooth hover:text-brand">
                    
                        {link}
                      </a>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {brand.name}. Crypto assets are volatile and you
            are responsible for your own keys.
          </p>
          <ul className="flex gap-6">
            {['Terms', 'Privacy', 'Cookies'].map((item) =>
            <li key={item}>
                <a
                href="#about"
                className="text-xs font-semibold text-ink-muted transition-colors duration-150 ease-smooth hover:text-brand">
                
                  {item}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>);

}