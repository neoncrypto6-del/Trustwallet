import React from 'react';
import { ChromeIcon, SmartphoneIcon, TabletSmartphoneIcon } from 'lucide-react';
import { platforms } from '../data/site';

const APP_IMAGE = "/e1d544d4-6f9b-479f-9afb-eca20808ebe1.jpg";


const ICONS: Record<string, React.ComponentType<{className?: string;}>> = {
  apple: TabletSmartphoneIcon,
  android: SmartphoneIcon,
  extension: ChromeIcon
};

export function DownloadSection() {
  return (
    <section id="download" className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <div className="overflow-hidden rounded-4xl bg-brand">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-6 lg:p-16">
            <div>
              <h2 className="text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-white lg:text-[44px]">
                Set up a wallet in under a minute
              </h2>
              <p className="mt-4 max-w-[440px] text-[17px] leading-relaxed text-white/80">
                No email, no ID check, no waiting for approval. Install it, write down your
                recovery phrase, and you're holding your own crypto.
              </p>

              <ul className="mt-9 flex flex-col gap-3 sm:flex-row">
                {platforms.map((platform) => {
                  const Icon = ICONS[platform.icon] ?? SmartphoneIcon;
                  return (
                    <li key={platform.name} className="flex-1">
                      <a
                        href="#download"
                        className="flex h-full items-center gap-3 rounded-2xl bg-white px-5 py-4 transition-transform duration-150 ease-smooth hover:-translate-y-0.5">
                        
                        <Icon className="h-6 w-6 shrink-0 text-brand" />
                        <span className="text-left leading-tight">
                          <span className="block text-[15px] font-extrabold text-ink">
                            {platform.name}
                          </span>
                          <span className="block text-xs text-ink-faint">
                            {platform.detail}
                          </span>
                        </span>
                      </a>
                    </li>);

                })}
              </ul>
            </div>

            <div className="relative">
              <img
                src={APP_IMAGE}
                alt="Phone showing the wallet dashboard with balance and token list"
                className="mx-auto w-full max-w-[360px] rounded-3xl"
                loading="lazy" />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}