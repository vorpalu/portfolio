import React from "react";

function Gallery() {
  return (
    <section id="gallery" className="fade-section glass">
      <h2>Галерея</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
        <img src="ВАШЕ_ФОТО.jpg" alt="gallery" />
        </div>

        <div className="gallery-item">
        <img src="ВАШЕ_ФОТО.jpg" alt="gallery" />
        </div>

        <div className="gallery-item">
        <img src="ВАШЕ_ФОТО.jpg" alt="gallery" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;