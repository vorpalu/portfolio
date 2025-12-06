import React from "react";

function Footer() {
  return (
    <footer>
      <p>© 2025 • Портфолио программиста</p>

      <div style={{ marginBottom: "10px" }}>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        •{" "}
        <a href="https://t.me/" target="_blank" rel="noreferrer">
          Telegram
        </a>
      </div>

      <div>
        <a href="tel:+79990000000">+7 (999) 000-00-00</a>
        <br />
        <a href="mailto:example@mail.ru">example@mail.ru</a>
      </div>
    </footer>
  );
}

export default Footer;