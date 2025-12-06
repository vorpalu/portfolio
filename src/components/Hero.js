import React from "react";

function Hero() {
  return (
    <section id="home" className="hero" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh" }}>
      <h1>Портфолио программиста</h1>
      <p>С++/С# • React • Backend Developmer</p>
<button
  className="glow-button"
  onClick={() => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  }}
  onMouseMove={(e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  }}
>
  Связаться
</button>
    </section>
  );
}

export default Hero;