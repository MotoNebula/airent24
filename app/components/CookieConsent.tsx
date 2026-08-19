'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const frame = requestAnimationFrame(() => setShow(true));
      return () => cancelAnimationFrame(frame);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black dark:bg-gray-900 text-white p-4 shadow-lg z-40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            Мы используем cookies для улучшения пользовательского опыта. Продолжая использовать сайт, вы соглашаетесь с использованием cookies в соответствии с нашей{' '}
            <a href="/privacy" className="text-blue-400 hover:underline">
              Политикой конфиденциальности
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-gray-600 rounded hover:border-gray-400 transition"
          >
            Отклонить
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-white text-black rounded hover:bg-gray-200 transition font-semibold"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
