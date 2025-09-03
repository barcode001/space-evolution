import React, { useState } from "react";
import BeforeAfterSlider from "../pages/BeforeAfterSlider";

// ✅ Import assets that live under src/
import kitchenBefore1 from "../assets/images/before-image2.jpg";
import kitchenAfter1 from "../assets/images/after-image9.png";

// If you prefer not to import, move these to /public/images and keep "/images/..."
const photos = [
  {
    id: 1,
    type: "kitchen",
    before: kitchenBefore1,
    after: kitchenAfter1,
  },
  {
    id: 2,
    type: "bathroom",
    before: kitchenBefore1,
    after: kitchenAfter1,
  },
  {
    id: 3,
    type: "exterior",
    before: kitchenBefore1,
    after: kitchenAfter1,
  },
  {
    id: 4,
    type: "kitchen",
    image: kitchenAfter1,
  },
  {
    id: 5,
    type: "bathroom",
    image: kitchenAfter1,
  },
  {
    id: 6,
    type: "exterior",
    image: kitchenAfter1,
  },
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

        <div className="gallery__grid">
          {filtered.map((item) =>
            item.before && item.after ? (
              <BeforeAfterSlider
                key={item.id}
                beforeSrc={item.before}
                afterSrc={item.after}
                showLabels={false}
                className="gallery__item"
              />
            ) : (
              <img
                key={item.id}
                src={item.image}
                alt={`${item.type} project`}
                className="gallery__item"
                loading="lazy"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
