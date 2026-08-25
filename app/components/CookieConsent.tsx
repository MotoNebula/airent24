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
    <div className="cookie-consent" role="dialog" aria-label="Настройки cookies" aria-live="polite">
      <div className="cookie-inner">
        <div>
          <p>
            Сайт использует технические данные браузера и локальное хранилище для сохранения вашего выбора. Необязательные cookies применяются только с вашего согласия. Подробнее в{' '}
            <a href="/cookies">
              Политике использования cookies
            </a>
            .
          </p>
        </div>
        <div className="cookie-actions">
          <button
            onClick={handleDecline}
            className="cookie-decline"
          >
            Отклонить
          </button>
          <button
            onClick={handleAccept}
            className="cookie-accept"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
