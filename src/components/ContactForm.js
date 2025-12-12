import React, { useState } from "react";

function ContactForm() {
  const [emailError, setEmailError] = useState("");

  const WORKER_URL = "https://discord-bot.8tyrypyxvn.workers.dev/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!email.includes("@")) {
      setEmailError("Email должен содержать символ @");
      return;
    }

    const data = { name, email, message };

    try {
      const resp = await fetch(WORKER_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Worker-Secret": "brita"
  },
  body: JSON.stringify(data),
});

      if (resp.ok) {
        alert("Сообщение отправлено!");
        e.target.reset();
      } else {
        alert("Ошибка сервера Cloudflare Worker");
      }
    } catch (error) {
      alert("Ошибка сети: " + error.message);
    }
  };

  return (
    <section
      id="contact"
      className="fade-section glass"
      style={{ textAlign: "center" }}
    >
      <h2>Связаться со мной</h2>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        style={{ margin: "0 auto" }}
      >
        <input type="text" name="name" placeholder="Имя" required />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            if (!e.target.value.includes("@"))
              setEmailError("Email должен содержать @");
            else setEmailError("");
          }}
          required
        />

        {emailError && (
          <span style={{ color: "red", textAlign: "center" }}>
            {emailError}
          </span>
        )}

        <textarea name="message" placeholder="Сообщение" rows="5" required />

        <button type="submit" className="glow-button">
          Отправить
        </button>
      </form>
    </section>
  );
}

export default ContactForm;