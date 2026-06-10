export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">airent24</div>
          <div className="flex gap-8">
            <a href="#features" className="hover:opacity-60 transition">Возможности</a>
            <a href="#pricing" className="hover:opacity-60 transition">Тариф</a>
            <a href="#faq" className="hover:opacity-60 transition">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            GPU серверы
            <br />
            для ваших задач
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Надёжная аренда мощных видеокарт и GPU кластеров. Начните работу за минуты, оплачивайте только то, что используете.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded hover:opacity-80 transition">
              Попробовать бесплатно
            </button>
            <button className="px-8 py-3 border border-black dark:border-white rounded hover:bg-black/5 dark:hover:bg-white/5 transition">
              Документация
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Быстрый запуск", desc: "Начните работу за несколько минут без лишных настроек" },
              { title: "Гибкие тарифы", desc: "Платите за фактическое использование, без скрытых комиссий" },
              { title: "Поддержка 24/7", desc: "Помощь нашей команды всегда рядом, когда вам нужна" },
              { title: "Высокая производительность", desc: "Последние GPU на серверах с высокоскоростной сетью" },
              { title: "Автоматизация", desc: "API и CLI для полной автоматизации ваших процессов" },
              { title: "Безопасность", desc: "Изолированная сетевая инфраструктура и шифрование данных" },
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gray-200 dark:border-gray-800 rounded">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Тарифные планы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "от 99 ₽/ч", specs: ["1x GPU", "8GB VRAM", "20GB SSD", "1 Gbps сеть"] },
              { name: "Professional", price: "от 299 ₽/ч", specs: ["4x GPU", "48GB VRAM", "500GB SSD", "10 Gbps сеть"], popular: true },
              { name: "Enterprise", price: "Запрос", specs: ["До 16x GPU", "Выделенный канал", "NVME хранилище", "Гарантированная поддержка"] },
            ].map((plan, i) => (
              <div key={i} className={`p-8 border rounded transition ${ plan.popular
                ? "border-black dark:border-white bg-black/5 dark:bg-white/5 scale-105"
                : "border-gray-200 dark:border-gray-800" }`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.specs.map((spec, j) => (
                    <li key={j} className="text-gray-600 dark:text-gray-400">✓ {spec}</li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded font-semibold transition ${
                  plan.popular
                    ? "bg-black dark:bg-white text-white dark:text-black hover:opacity-80"
                    : "border border-black dark:border-white hover:bg-black/5 dark:hover:bg-white/5"
                }`}>
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Часто задаваемые вопросы</h2>
          <div className="space-y-6">
            {[
              { q: "Как начать пользоваться сервисом?", a: "Зарегистрируйтесь, пополните счёт и запустите GPU сервер за несколько кликов." },
              { q: "Какие видеокарты используются?", a: "NVIDIA A100, H100, RTX 4090, RTX 6000 и другие современные GPU." },
              { q: "Есть ли скидки за длительные контракты?", a: "Да, предоставляются скидки при месячной, квартальной и годовой оплате." },
              { q: "Как осуществляется техподдержка?", a: "Поддержка доступна 24/7 через чат, email и телефон." },
              { q: "Есть ли пробный период?", a: "Да, новым пользователям доступен бесплатный пробный период на 48 часов." },
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gray-200 dark:border-gray-800 rounded">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Начните работу прямо сейчас</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Неограниченные возможности ждут вас
          </p>
          <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded hover:opacity-80 transition">
            Создать аккаунт
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Продукты</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:opacity-60">GPU аренда</a></li>
                <li><a href="#" className="hover:opacity-60">API</a></li>
                <li><a href="#" className="hover:opacity-60">Пример кода</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:opacity-60">О нас</a></li>
                <li><a href="#" className="hover:opacity-60">Блог</a></li>
                <li><a href="#" className="hover:opacity-60">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="/privacy" className="hover:opacity-60">Политика конфиденциальности</a></li>
                <li><a href="/terms" className="hover:opacity-60">Пользовательское соглашение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:opacity-60">Telegram</a></li>
                <li><a href="#" className="hover:opacity-60">Twitter</a></li>
                <li><a href="#" className="hover:opacity-60">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 airent24. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
