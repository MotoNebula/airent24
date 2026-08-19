import LeadForm from "./components/LeadForm";

const services = [
  { number: "01", title: "GPU-инфраструктура", text: "Аренда мощностей, выделенные серверы и кластеры для обучения и промышленного запуска моделей." },
  { number: "02", title: "Внедрение ИИ", text: "Ассистенты, RAG, обработка документов, аналитика, компьютерное зрение и автоматизация операций." },
  { number: "03", title: "Интеграции", text: "Связываем ИИ с 1С, CRM, ERP, базами данных, API, камерами, датчиками и оборудованием." },
];

const cases = ["Корпоративные ИИ-ассистенты", "Поиск по внутренним документам", "Обработка заявок и договоров", "Аналитика данных из 1С", "Контроль производства и складов", "Распознавание речи и изображений"];

export default function Home() {
  return (
    <main>
      <nav className="nav"><a className="logo" href="#top">airent<span>24</span></a><div className="nav-links"><a href="#solutions">Решения</a><a href="#placement">Размещение</a><a href="#contact">Контакты</a></div><a className="nav-cta" href="#request">Обсудить проект</a></nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="pulse" /> Инфраструктура в России</div>
          <h1>ИИ для бизнеса.<br /><span>На ваших условиях.</span></h1>
          <p>GPU-серверы и внедрение искусственного интеллекта в реальные бизнес-процессы. Интегрируем с 1С, вашим стеком и оборудованием.</p>
          <div className="hero-actions"><a className="button primary" href="#request">Обсудить задачу</a><a className="button secondary" href="#solutions">Наши решения</a></div>
        </div>
        <div className="hero-panel reveal delay-1">
          <div className="panel-head"><span>airent24 / infrastructure</span><span className="live">● online</span></div>
          <div className="server-visual"><div className="server-ring ring-a" /><div className="server-ring ring-b" /><div className="server-core">AI<span>GPU</span></div></div>
          <div className="metrics"><div><strong>РФ</strong><span>хранение данных</span></div><div><strong>24/7</strong><span>контроль контура</span></div><div><strong>1–N</strong><span>GPU в кластере</span></div></div>
        </div>
      </section>

      <section className="trust-line"><span>ДАННЫЕ В РФ</span><i /><span>ЗАКРЫТЫЙ КОНТУР</span><i /><span>1С И API</span><i /><span>ON-PREMISE</span></section>

      <section className="section" id="solutions">
        <div className="section-heading"><div><span className="kicker">Возможности</span><h2>От серверов<br />до результата</h2></div><p>Берём ответственность за вычисления, программный слой и интеграцию. Решение становится частью процессов компании, а не отдельным экспериментом.</p></div>
        <div className="service-grid">{services.map((item) => <article className="service-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><div className="card-arrow">↗</div></article>)}</div>
      </section>

      <section className="placement" id="placement">
        <div className="placement-copy"><span className="kicker">Где работает ИИ</span><h2>У нас.<br />Или у вас.</h2><p>Архитектура под требования безопасности, производительности и бюджета. Во всех сценариях данные остаются на территории России.</p></div>
        <div className="placement-options">
          <article><span className="option-tag">01 / AIRент24</span><h3>В нашем дата-центре</h3><p>Быстрый запуск без капитальных затрат. Выделенные мощности и изолированная инфраструктура в РФ.</p><ul><li>Аренда по потреблению</li><li>Выделенные GPU-серверы</li><li>Масштабирование кластера</li></ul></article>
          <article className="featured"><span className="option-tag">02 / ON-PREMISE</span><h3>На территории заказчика</h3><p>Проектируем, поставляем и запускаем локальный ИИ-контур внутри вашей инфраструктуры.</p><ul><li>Полный контроль данных</li><li>Интеграция с оборудованием</li><li>Работа без публичного облака</li></ul></article>
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-heading"><div><span className="kicker">Практика</span><h2>Что можно<br />автоматизировать</h2></div><p>Начинаем с процесса, где ИИ даст измеримый эффект. Проводим аудит, запускаем пилот и доводим до промышленной эксплуатации.</p></div>
        <div className="case-list">{cases.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><b>→</b></div>)}</div>
      </section>

      <section className="process section"><span className="kicker">Как мы работаем</span><div className="process-line">{["Аудит задачи", "Архитектура", "Пилот", "Интеграция", "Сопровождение"].map((item, i) => <div key={item}><span>{i + 1}</span><p>{item}</p></div>)}</div></section>

      <section className="request" id="request">
        <div className="request-copy"><span className="kicker">Начать проект</span><h2>Расскажите<br />о вашей задаче</h2><p>Вернёмся с предварительной архитектурой и предложим оптимальный вариант размещения.</p><div className="contact-card" id="contact"><span>Оператор и исполнитель</span><strong>ИП Албу Валентин Георгиевич</strong><small>ИНН 890400136608</small><small>ОГРНИП 305890404100029</small><small>ЯНАО, г. Новый Уренгой</small><a href="mailto:privacy@airent24.ru">privacy@airent24.ru</a></div></div>
        <LeadForm />
      </section>

      <footer><a className="logo" href="#top">airent<span>24</span></a><p>GPU-инфраструктура и внедрение ИИ в России</p><div><a href="/privacy">Политика конфиденциальности</a><a href="/terms">Условия использования</a></div><small>© 2026 ИП Албу В. Г.<br />ИНН 890400136608</small></footer>
    </main>
  );
}
