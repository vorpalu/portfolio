import React from "react";

function Footer() {
  return (
    <footer>
      <p>
        © 2025 • Портфолио программиста
        <br />
        Сделано с ❤️ в России (и на Реакте)
      </p>

      <div style={{ marginBottom: "10px" }}>
        <a href="https://github.com/vorpalu" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        •{" "}
        <a href="https://t.me/icanbetrue" target="_blank" rel="noreferrer">
          Telegram
        </a>
      </div>

      <div>
        <a href="mailto:liljuuk@icloud.com">liljuuk@icloud.com</a>
      </div>
    </footer>
  );
}

export default Footer;
