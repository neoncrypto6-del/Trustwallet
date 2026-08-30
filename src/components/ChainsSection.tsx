import React from 'react';
import { chains, stats } from '../data/site';

export function ChainsSection() {
  return (
    <section id="build" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 className="text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-white lg:text-[44px]">
              One wallet, most of the chains you'll ever touch
            </h2>
            <p className="mt-4 max-w-[440px] text-[17px] leading-relaxed text-white/70">
              Add a network and your assets show up in the same portfolio view. New chains
              land continuously, and developers can ship support themselves.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-8">
              {stats.map((stat) =>
              <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-3xl font-extrabold tracking-tight text-mint lg:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block max-w-[170px] text-sm leading-snug text-white/60">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <ul className="grid grid-cols-2 gap-3 self-center sm:grid-cols-3 lg:grid-cols-4">
            {chains.map((chain) =>
            <li
              key={chain}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white/90">
              
                {chain}
              </li>
            )}
            <li className="rounded-2xl border border-mint/30 bg-mint/10 px-4 py-3.5 text-sm font-bold text-mint">
              +84 more
            </li>
          </ul>
        </div>
      </div>
    </section>);

}