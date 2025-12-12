import React from "react";

function Projects() {
  return (
    <section id="projects" className="fade-section glass">
      <h2>Проекты</h2>

      <div className="projects-list">
        <div className="project-card">
          <h3>Реализация алгоритма хаффмана на C# с графическим интерфейсом</h3>
          <p>Работа алгоритма Хаффмана на языке C#. Создан для конкурса в 10 классе. Использована библиотека winForms.</p>
        </div>
{/* 
        <div className="project-card">
          <h3>Проект 2</h3>
          <p>Краткое описание проекта. Заглушка.</p>
        </div>

        <div className="project-card">
          <h3>Проект 3</h3>
          <p>Краткое описание проекта. Заглушка.</p> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default Projects;