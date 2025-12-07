import React from "react";

function Footer() {
  return (
    <footer>
      <p>
        © 2025 • Портфолио программиста
        <br />
        Сделано с ❤️ в России (и на Реакте)
      </p>

      <div className="footer-links">
        <a
          className="footer-link"
          href="https://github.com/vorpalu"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.57.1.78-.25.78-.55v-1.9c-3.18.7-3.85-1.37-3.85-1.37-.52-1.3-1.28-1.65-1.28-1.65-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.74-1.54-2.54-.3-5.2-1.27-5.2-5.67 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.5.12-3.1 0 0 .98-.32 3.2 1.17a11.1 11.1 0 0 1 5.83 0c2.2-1.49 3.2-1.17 3.2-1.17.65 1.6.25 2.8.12 3.1.75.8 1.2 1.82 1.2 3.07 0 4.42-2.67 5.36-5.22 5.65.42.37.8 1.1.8 2.22v3.3c0 .3.2.66.78.55A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
          <span>GitHub</span>
        </a>

        <a
          className="footer-link"
          href="https://t.me/icanbetrue"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
        >
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.82 14.59 9.5 18.9c.48 0 .69-.21.94-.46l2.27-2.16 4.7 3.43c.86.47 1.47.22 1.7-.79l3.09-14.48h.01c.27-1.25-.45-1.74-1.28-1.43L1.75 9.4c-1.2.47-1.18 1.15-.21 1.46l4.8 1.5 11.15-7.02c.52-.32.99-.14.6.18z" />
          </svg>
          <span>Telegram</span>
        </a>

        <a
          className="footer-link"
          href="mailto:liljuuk@icloud.com"
          aria-label="Email"
        >
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3.5 5.5h17c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-17c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2Zm0 2 8.5 5 8.5-5v-1l-8.5 5-8.5-5v1Z" />
          </svg>
          <span>Email</span>
        </a>

        <a
          className="footer-link"
          href="tel:+79222313324"
          aria-label="Телефон"
        >
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l1.47-1.47a1 1 0 0 1 1.01-.24c1.11.37 2.3.57 3.31.57.55 0 1 .45 1 1v2.49c0 .55-.45 1-1 1C11.3 20.73 3.27 12.7 3.27 3.5c0-.55.45-1 1-1H6.8c.55 0 1 .45 1 1 0 1.01.2 2.2.57 3.31.12.36.03.75-.24 1.02z" />
          </svg>
          <span>+7 982 304-08-60</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
