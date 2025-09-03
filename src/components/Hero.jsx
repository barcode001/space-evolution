import React from "react";
import BeforeAfterSlider from "pages/BeforeAfterSlider";
import clientInfo from "../config/clientInfo";

export default function Hero() {
  return (
    <section className="hero">
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

      {/* background slider */}
      <BeforeAfterSlider
        initial={50}
        autoplay
        min={0} // go all the way left
        max={100} // go all the way right
        speed={0.25}
      />

      {/* optional: dark gradient for text contrast */}
      <div className="hero__scrim" aria-hidden="true" />
    </section>
  );
}
