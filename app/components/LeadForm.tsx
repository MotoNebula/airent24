"use client";

import { FormEvent, useState } from "react";

export default function LeadForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Заявка с сайта airent24");
    const body = encodeURIComponent(`Имя: ${data.get("name")}\nКомпания: ${data.get("company")}\nТелефон или e-mail: ${data.get("contact")}\nЗадача: ${data.get("task")}`);
    setSent(true);
    window.location.href = `mailto:privacy@airent24.ru?subject=${subject}&body=${body}`;
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="field-row"><label><span>Ваше имя *</span><input name="name" autoComplete="name" required /></label><label><span>Компания</span><input name="company" autoComplete="organization" /></label></div>
      <label><span>Телефон или e-mail *</span><input name="contact" autoComplete="email" required /></label>
      <label><span>Что хотите автоматизировать?</span><textarea name="task" rows={4} /></label>
      <label className="consent"><input type="checkbox" required /><span>Я даю согласие ИП Албу В. Г. на обработку указанных персональных данных для ответа на обращение и принимаю <a href="/privacy" target="_blank">Политику конфиденциальности</a>. Согласие можно отозвать по e-mail.</span></label>
      <button className="button primary submit" type="submit">Отправить заявку <span>→</span></button>
      <p className="form-note">Данные не передаются сторонним сервисам и направляются через ваш почтовый клиент.</p>
      {sent && <p className="form-status" role="status">Открываем почтовое приложение для отправки заявки.</p>}
    </form>
  );
}
