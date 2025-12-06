import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <a href="#home">Главная</a>
        <a href="#about">Обо мне</a>
        <a href="#projects">Проекты</a>
        <a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }}
>
  Контакты
</a>
      </nav>
    </header>
  );
}

export default Header;