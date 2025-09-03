import React from "react";
import { LuPhone } from "react-icons/lu";

export default function CallToAction() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta__wrap">
        <h2 id="cta-title" className="cta__title">
          Ready to Start Your Project?
        </h2>
        <p className="cta__lead">
          Call us today for a free estimate and let’s bring your vision to life.
        </p>
        <div className="cta__buttons">
          <a href="tel:3464791647" className="btn btn--inverse">
            <LuPhone aria-hidden="true" /> Call Now
          </a>
          <a href="/contact" className="btn btn--ghost">
            Get Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
