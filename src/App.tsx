import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';

interface AppProps {
  showCookieBanner?: boolean;
  showReviews?: boolean;
}

export function App({ showCookieBanner = true, showReviews = true }: AppProps) {
  return (
    <BrowserRouter>
      <div className="min-h-full w-full bg-white font-sans text-ink">
        <Header />
        <Routes>
          <Route path="/" element={<Landing showReviews={showReviews} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        {showCookieBanner && <CookieBanner />}
      </div>
    </BrowserRouter>);

}