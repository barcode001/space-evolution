// src/components/Gallery.jsx
import React, { useState } from "react";

// ✅ Import assets
import kitchenBefore1 from "../assets/images/before-image2.jpg";
import kitchenAfter1 from "../assets/images/after-image9.png";
import bathroom from "../assets/images/bathroom.jpg";
import bathroom2 from "../assets/images/bathroom2.jpg";
const photos = [
  { id: 1, type: "kitchen", image: kitchenAfter1 },
  { id: 2, type: "bathroom", image: bathroom2 },
  { id: 3, type: "exterior", image: kitchenAfter1 },
  { id: 4, type: "kitchen", image: kitchenBefore1 },
  { id: 5, type: "bathroom", image: bathroom },
  { id: 6, type: "exterior", image: kitchenBefore1 },
];

const filters = ["all", "kitchen", "bathroom", "exterior"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = photos.filter(
    (p) => activeFilter === "all" || p.type === activeFilter
  );

  return (
    <section className="gallery section">
      <div className="container">
        <h2 className="gallery__title">Our Work</h2>

        {/* Filter buttons */}
        <div className="gallery__filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`gallery__filter ${
                activeFilter === f ? "is-active" : ""
              }`}
              onClick={() => setActiveFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid of images */}
        <div className="gallery__grid">
          {filtered.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={`${item.type} project`}
              className="gallery__item"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
