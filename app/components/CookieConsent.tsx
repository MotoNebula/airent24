'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  // Баннер рендерится на сервере, чтобы уведомление было доступно
  // пользователям и автоматическим проверкам без выполнения JavaScript.
  const [show, setShow] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      const frame = requestAnimationFrame(() => setShow(false));
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
            Сайт использует технические данные браузера и локальное хранилище для сохранения вашего выбора. Необязательные cookies применяются только с вашего согласия. Подробнее в{' '}
            <a href="/cookies" className="text-blue-400 hover:underline">
              Политике использования cookies
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
