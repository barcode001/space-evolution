import React from "react";
import clientInfo from "../config/clientInfo";
import { LuCheck } from "react-icons/lu";
import crew from "../assets/images/crew.jpg";
// Optional: centralize contact/city in your clientInfo
// import clientInfo from "config/clientInfo";

export default function AboutUs() {
  return (
    <section className="about section">
      <div className="container about__wrap">
        {/* Photo */}
        <figure className="about__media">
          {/* Replace src with Eladio/crew photo */}
          <img
            src={crew}
            alt="Eladio and the Space Evolution crew at a remodel site"
            className="about__img"
            loading="lazy"
          />
        </figure>

        {/* Copy */}
        <div className="about__content">
          <h2 className="about__title">Why Choose Space Evolution</h2>
          <p className="about__lead">
            Locally owned Houston remodeling company with years of experience.
            We pride ourselves on quality craftsmanship and reliable service.
          </p>

          <ul className="about__bullets">
            <li className="about__bullet">
              <LuCheck aria-hidden="true" />
              <span>Free Estimates</span>
            </li>
            <li className="about__bullet">
              <LuCheck aria-hidden="true" />
              <span>Licensed &amp; Insured</span>
            </li>
            <li className="about__bullet">
              <LuCheck aria-hidden="true" />
              <span>Full Remodeling Services</span>
            </li>
          </ul>
          <div className="about__ctaRow">
            <a className="btn btn--primary" href="tel:3464791647">
              Call for a Free Estimate
            </a>
            <a className="btn btn--ghost" href="/about">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
