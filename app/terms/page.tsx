export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Пользовательское соглашение</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">1. Общие условия</h2>
            <p>
              Сайт airent24 и услуги предоставляет ИП Албу Валентин Георгиевич, ИНН 890400136608, ОГРНИП 305890404100029. Используя сайт https://airent24.ru, вы принимаете настоящее Соглашение.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">2. Описание услуг</h2>
            <p>
              Компания предоставляет услуги аренды вычислительных ресурсов (GPU серверы) для различных вычислительных задач, включая машинное обучение, обработку данных и другие высокопроизводительные вычисления.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">3. Учётная запись</h2>
            <p>
              Вы несёте ответственность за сохранение конфиденциальности пароля и информации вашей учётной записи. Вы согласны не передавать доступ к своей учётной записи третьим лицам и несёте полную ответственность за все действия, выполненные с использованием вашей учётной записи.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">4. Платежи и биллинг</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Стоимость услуг указана в рублях и рассчитывается в соответствии с выбранным тарифом</li>
              <li>Оплата производится в соответствии с выбранным методом платежа</li>
              <li>Счета выставляются ежемесячно на основе фактического использования ресурсов</li>
              <li>Компания оставляет право изменять тарифы с предварительным уведомлением</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">5. Запрещённая деятельность</h2>
            <p>При использовании Услуг вы обязуетесь не:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Использовать Услуги в незаконных целях</li>
              <li>Осуществлять DDoS атаки или другие кибератаки</li>
              <li>Использовать ресурсы для добычи криптовалют (если это не предусмотрено условиями)</li>
              <li>Нарушать авторские права и интеллектуальную собственность</li>
              <li>Распространять вредоносное ПО и вирусы</li>
              <li>Нарушать локальное законодательство</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">6. Прекращение услуги</h2>
            <p>
              Компания оставляет право прекратить предоставление Услуг с предварительным уведомлением (минимум 24 часа) в случае нарушения пользователем условий настоящего Соглашения.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">7. Ограничение ответственности</h2>
            <p>
              Компания не несёт ответственность за прямые, косвенные, случайные или последующие убытки, возникшие в результате использования или невозможности использования Услуг, даже если компания была уведомлена о возможности таких убытков.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">8. Гарантия доступности</h2>
            <p>
              Компания стремится обеспечить доступность Услуг 99% времени. Плановое обслуживание и обновления могут привести к временному прерыванию Услуг.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">9. Изменение условий</h2>
            <p>
              Компания оставляет право изменять условия настоящего Соглашения в любое время. Продолжение использования Услуг после публикации измененных условий означает ваше согласие с новыми условиями.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">10. Контактная информация</h2>
            <p>
              По вопросам, связанным с условиями обслуживания, обращайтесь на: <a href="mailto:legal@airent24.ru" className="text-blue-600 hover:underline">legal@airent24.ru</a>
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
