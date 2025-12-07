import React, { useEffect } from "react";
import "./Lightbox.css";

export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="lightbox" onClick={onClose}>
      <img
        src={image}
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}