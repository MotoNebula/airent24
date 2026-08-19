export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Политика конфиденциальности</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">1. Общие положения</h2>
            <p>
              Настоящая Политика определяет порядок обработки персональных данных посетителей сайта https://airent24.ru. Оператор персональных данных — ИП Албу В. Г. (далее — «Оператор»).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">2. Типы собираемой информации</h2>
            <p>Компания собирает следующие типы информации:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Личные данные (имя, адрес электронной почты, номер телефона)</li>
              <li>Сведения о компании и описание задачи, указанные в обращении</li>
              <li>Технические данные (IP-адрес и cookies), если они обрабатываются инфраструктурой сайта</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">3. Цели обработки данных</h2>
            <p>Ваши данные используются для:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Обработки обращения и связи с заявителем</li>
              <li>Подготовки предложения по аренде GPU-серверов и внедрению ИИ</li>
              <li>Заключения и исполнения договора по инициативе заявителя</li>
              <li>Выполнения требований законодательства Российской Федерации</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">4. Защита данных</h2>
            <p>
              Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных. Данные российских пользователей обрабатываются с использованием баз данных, находящихся на территории Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">5. Передача данных третьим лицам</h2>
            <p>
              Оператор не передаёт персональные данные третьим лицам без законного основания или отдельного согласия, кроме случаев, предусмотренных законодательством РФ. Трансграничная передача данных из формы заявки не осуществляется.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">6. Использование cookies</h2>
            <p>
              Необязательные cookies используются только после согласия пользователя. Вы можете отказаться от них в уведомлении или удалить в настройках браузера.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">7. Ваши права</h2>
            <p>В соответствии с Федеральным законом №152-ФЗ вы имеете право на:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Доступ к своим личным данным</li>
              <li>Исправление неточных данных</li>
              <li>Удаление данных</li>
              <li>Отзыв согласия на обработку данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">8. Контактная информация</h2>
            <p>
              Для получения сведений, уточнения или удаления данных, а также отзыва согласия направьте обращение оператору ИП Албу В. Г. на: <a href="mailto:privacy@airent24.ru" className="text-blue-600 hover:underline">privacy@airent24.ru</a>
            </p>
          </section>

          <section className="border-t border-gray-200 dark:border-gray-800 pt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Последнее обновление: 19 августа 2026 г.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
