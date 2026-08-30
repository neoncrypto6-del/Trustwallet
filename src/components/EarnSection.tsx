import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';

const EARN_IMAGE = "/234b07da-4822-4270-9744-2a8ec0d821b6.jpg";


const positions = [
{ asset: 'Ethereum', network: 'Staking', apy: '3.1%' },
{ asset: 'Solana', network: 'Staking', apy: '6.8%' },
{ asset: 'Cosmos', network: 'Delegation', apy: '14.2%' }];


export function EarnSection() {
  return (
    <section id="markets" className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto grid max-w-shell items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <img
            src={EARN_IMAGE}
            alt="Stacked 3D coins beside a rising chart of rounded blocks"
            className="mx-auto w-full max-w-[420px]"
            loading="lazy" />
          
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">Earn</p>
          <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink lg:text-[44px]">
            Idle assets, working quietly
          </h2>
          <p className="mt-4 max-w-[500px] text-[17px] leading-relaxed text-ink-muted">
            Stake directly from your balance on a dozen networks. Rewards accrue to your
            own address, and you can unstake whenever the network allows.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-hairline bg-white">
            {positions.map((p, i) =>
            <div
              key={p.asset}
              className={`flex items-center justify-between px-5 py-4 ${
              i > 0 ? 'border-t border-hairline' : ''}`
              }>
              
                <div>
                  <p className="text-[15px] font-bold text-ink">{p.asset}</p>
                  <p className="text-sm text-ink-faint">{p.network}</p>
                </div>
                <p className="text-lg font-extrabold tracking-tight text-ink">
                  {p.apy}
                  <span className="ml-1 text-xs font-semibold text-ink-faint">APY</span>
                </p>
              </div>
            )}
          </div>
          <p className="mt-3 text-xs text-ink-faint">
            Rates are illustrative and set by each network, not by us.
          </p>

          <a
            href="#features"
            className="mt-7 inline-flex items-center gap-1.5 text-[15px] font-bold text-brand transition-colors duration-150 ease-smooth hover:text-brand-hover">
            
            See supported networks
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>);

}