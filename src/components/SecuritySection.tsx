import React from 'react';
import { CheckIcon } from 'lucide-react';

const SECURITY_IMAGE = "/237e7c21-11d3-4a3c-a530-6de2f67d9a03.jpg";


const guarantees = [
'Keys are generated and stored on your device, never on a server',
'Encrypted cloud backup you control, plus a printable recovery phrase',
'Transaction screening warns you about known drainers and fake tokens',
'Open-source core libraries and a permanent bug bounty'];


export function SecuritySection() {
  return (
    <section id="wallet" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-shell items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
            Security
          </p>
          <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink lg:text-[44px]">
            No one can freeze what only you can unlock
          </h2>
          <p className="mt-4 max-w-[520px] text-[17px] leading-relaxed text-ink-muted">
            Self-custody means the wallet is a tool, not a bank. We can't move your funds,
            pause your account, or lose them for you.
          </p>
          <ul className="mt-8 space-y-4">
            {guarantees.map((item) =>
            <li key={item} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint/20">
                  <CheckIcon className="h-3.5 w-3.5 text-ink" strokeWidth={3} />
                </span>
                <span className="text-[15px] leading-relaxed text-ink">{item}</span>
              </li>
            )}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <img
            src={SECURITY_IMAGE}
            alt="A 3D shield with a keyhole beside a floating key and lock"
            className="mx-auto w-full max-w-[440px]"
            loading="lazy" />
          
        </div>
      </div>
    </section>);

}