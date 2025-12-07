import React, { useState } from "react";
import Lightbox from "./Lightbox";
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
// добавь свои фото

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const images = [img1, img2, img3]; // твои фотки

  return (
    <section id="gallery" className="fade-section">
      <h2>Галерея</h2>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            onClick={() => setSelected(src)}
            className="gallery-photo"
          />
        ))}
      </div>

      <Lightbox image={selected} onClose={() => setSelected(null)} />
    </section>
  );
}