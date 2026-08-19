import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white text-black pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Политика использования cookies</h1>
        <div className="max-w-none space-y-6 text-gray-700">
          <section><h2 className="text-2xl font-bold text-black mb-4">1. Общие положения</h2><p>Настоящая Политика описывает использование cookies и локального хранилища браузера на сайте airent24.ru. Оператор — ИП Албу Валентин Георгиевич, ИНН 890400136608, ОГРНИП 305890404100029.</p></section>
          <section><h2 className="text-2xl font-bold text-black mb-4">2. Какие технологии используются</h2><p>Сайт сохраняет в локальном хранилище браузера только значение <code>cookieConsent</code>, необходимое для запоминания выбора пользователя. На момент публикации сайт не использует рекламные и аналитические cookies.</p></section>
          <section><h2 className="text-2xl font-bold text-black mb-4">3. Правовое основание</h2><p>Технически необходимые данные используются для работы интерфейса. Необязательные cookies, если они будут подключены, могут применяться только после получения согласия пользователя.</p></section>
          <section><h2 className="text-2xl font-bold text-black mb-4">4. Управление cookies</h2><p>Пользователь может принять или отклонить необязательные cookies в баннере, а также удалить сохранённые данные в настройках браузера. Отказ не ограничивает доступ к основным материалам сайта.</p></section>
          <section><h2 className="text-2xl font-bold text-black mb-4">5. Контакты</h2><p>Вопросы и отзыв согласия: <a className="text-blue-600 hover:underline" href="mailto:privacy@airent24.ru">privacy@airent24.ru</a>.</p></section>
          <section className="border-t border-gray-200 pt-6"><p className="text-sm text-gray-500">Последнее обновление: 19 августа 2026 г.</p><Link className="text-blue-600 hover:underline" href="/">Вернуться на главную</Link></section>
        </div>
      </div>
    </div>
  );
}
