import React from "react";

function Header() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <nav>
        <a href="#home" onClick={scrollTo("home")}>Главная</a>
        <a href="#about" onClick={scrollTo("about")}>Обо мне</a>
        <a href="#gallery" onClick={scrollTo("gallery")}>Галерея</a>
        <a href="#projects" onClick={scrollTo("projects")}>Проекты</a>
        <a href="#contact" onClick={scrollTo("contact")}>Контакты</a>
      </nav>
    </header>
  );
}

export default Header;
