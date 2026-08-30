import React from 'react';
import { StarIcon } from 'lucide-react';
import { reviews } from '../data/site';

export function Reviews() {
  return (
    <section id="support" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-5 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-[520px] text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink lg:text-[44px]">
            Held up by the people using it
          </h2>
          <p className="text-[15px] font-semibold text-ink-muted">
            4.8 average across 3.1M ratings
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) =>
          <li
            key={review.name}
            className="flex flex-col rounded-3xl border border-hairline bg-canvas p-7">
            
              <span className="flex gap-0.5" aria-label="Five out of five stars">
                {Array.from({ length: 5 }).map((_, i) =>
              <StarIcon key={i} className="h-4 w-4 fill-brand text-brand" />
              )}
              </span>
              <p className="mt-5 text-[16px] leading-relaxed text-ink">“{review.quote}”</p>
              <div className="mt-auto pt-6">
                <p className="text-[15px] font-bold text-ink">{review.name}</p>
                <p className="text-sm text-ink-faint">{review.role}</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>);

}