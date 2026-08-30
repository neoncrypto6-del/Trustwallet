import React from 'react';
import {
  ArrowLeftRightIcon,
  CompassIcon,
  CoinsIcon,
  ImageIcon,
  ShieldCheckIcon,
  WalletIcon } from
'lucide-react';
import { features } from '../data/site';

const ICONS: Record<string, React.ComponentType<{className?: string;}>> = {
  wallet: WalletIcon,
  swap: ArrowLeftRightIcon,
  stake: CoinsIcon,
  nft: ImageIcon,
  dapp: CompassIcon,
  shield: ShieldCheckIcon
};

export function FeatureGrid() {
  return (
    <section id="features" className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <div className="max-w-[620px]">
          <h2 className="text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink lg:text-[44px]">
            Everything you'd open five apps for
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">
            One wallet handles the whole loop — funding, trading, earning, and signing —
            without ever handing custody to a middleman.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = ICONS[feature.icon] ?? WalletIcon;
            return (
              <li key={feature.title} className="flex flex-col">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft">
                  <Icon className="h-6 w-6 text-brand" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  {feature.body}
                </p>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}