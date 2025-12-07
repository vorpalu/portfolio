import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import "./Gallery.css";

function Gallery() {
  const images = [img1, img2, img3];
  // индивидуальные смещения кадрирования
  const imagePositions = ["center 6%", "center 30%", "center 30%"];
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (modalImg) {
      const { overflow } = document.body.style;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = overflow;
      };
    }

    document.body.style.overflow = "";
  }, [modalImg]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setModalImg(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="gallery" className="fade-section">
      <h2>Галерея</h2>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <button
            key={i}
            className="gallery-item"
            type="button"
            onClick={() => setModalImg(src)}
          >
            <img
              src={src}
              alt={`Фото ${i + 1}`}
              className="gallery-photo"
              style={{ objectPosition: imagePositions[i] || "center center" }}
            />
          </button>
        ))}
      </div>

      {modalImg &&
        createPortal(
          <div className="modal-overlay" onClick={() => setModalImg(null)}>
            <button
              type="button"
              className="modal-close"
              aria-label="Закрыть"
              onClick={() => setModalImg(null)}
            >
              ×
            </button>

            <div className="modal-inner">
              <img
                src={modalImg}
                alt="Просмотр"
                className="modal-image"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

export default Gallery;
