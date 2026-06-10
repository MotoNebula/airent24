export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Политика конфиденциальности</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности (далее – «Политика») определяет порядок обработки и защиты информации о физических и юридических лицах (далее – «Пользователи»), которые посещают веб-сайт https://airent24.ru (далее – «Сайт») и используют услуги компании (далее – «Компания»).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">2. Типы собираемой информации</h2>
            <p>Компания собирает следующие типы информации:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Личные данные (имя, адрес электронной почты, номер телефона)</li>
              <li>Информация о платежах и расчётные данные</li>
              <li>Данные об использовании услуг (логи, IP-адреса, cookies)</li>
              <li>Информация о вашем оборудовании и программном обеспечении</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">3. Цели обработки данных</h2>
            <p>Ваши данные используются для:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Предоставления услуг аренды GPU серверов</li>
              <li>Обработки платежей и счётов</li>
              <li>Улучшения качества услуг</li>
              <li>Соответствия требованиям российского законодательства</li>
              <li>Отправки важных уведомлений и информации о службе</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">4. Защита данных</h2>
            <p>
              Компания принимает необходимые меры для защиты ваших данных от несанкционированного доступа, включая использование шифрования SSL, защиту от DDoS атак и регулярное обновление систем безопасности.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">5. Передача данных третьим лицам</h2>
            <p>
              Компания не передаёт ваши личные данные третьим лицам без вашего согласия, за исключением случаев, когда это требуется законодательством РФ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">6. Использование cookies</h2>
            <p>
              Сайт использует cookies для улучшения пользовательского опыта. Вы можете отключить cookies в настройках вашего браузера.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">7. Ваши права</h2>
            <p>В соответствии с Федеральным законом №152-ФЗ вы имеете право на:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Доступ к своим личным данным</li>
              <li>Исправление неточных данных</li>
              <li>Удаление данных</li>
              <li>Возражение против обработки данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">8. Контактная информация</h2>
            <p>
              По вопросам конфиденциальности обращайтесь на: <a href="mailto:privacy@airent24.ru" className="text-blue-600 hover:underline">privacy@airent24.ru</a>
            </p>
          </section>

          <section className="border-t border-gray-200 dark:border-gray-800 pt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
