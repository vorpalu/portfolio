import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      <Header />

      {/* hero-wrapper + ЭФФЕКТЫ ТОЛЬКО ЗДЕСЬ */}
      <div className="hero-wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div id="aurora"></div>

        <div className="comet" style={{ "--delay": "0s" }}></div>
        <div className="comet" style={{ "--delay": "3s" }}></div>
        <div className="comet" style={{ "--delay": "7s" }}></div>
        <div className="comet" style={{ "--delay": "12s" }}></div>
        <div className="comet" style={{ "--delay": "18s" }}></div>

        <Hero />
      </div>

      <div className="section-separator"></div>

      <About className="fade-section" />
      <div className="section-separator"></div>

      <Gallery className="fade-section" />
      <div className="section-separator"></div>

      <Projects className="fade-section" />
      <div className="section-separator"></div>

      <ContactForm className="fade-section" />

      <Footer />
    </>
  );
}

export default App;