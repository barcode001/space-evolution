// src/components/Hero.jsx
import React from "react";
import clientInfo from "../config/clientInfo";
import heroImg from "../assets/images/hero-image.jpg";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* content overlay */}
      <div className="hero__content">
        <h1 className="hero__title">
          Transform Your Home with Space Evolution
        </h1>
        <p className="hero__subtitle">
          Kitchens, bathrooms, painting, and full remodels done right in
          Houston, TX.
        </p>

        <div className="hero__ctas">
          <a
            href={`tel:${clientInfo.contact.phone}`}
            className="btn btn--accent"
          >
            📞 {clientInfo.contact.phone}
          </a>
          <a href="/contact" className="btn btn--ghost">
            Get Free Estimate
          </a>
        </div>
      </div>

      {/* gradient scrim for contrast */}
      <div className="hero__scrim" aria-hidden="true" />
    </section>
  );
}
