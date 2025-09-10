import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import remodeling from "../assets/images/remodeling002.png";

export default function Remodeling() {
  return (
    <section className="serviceHub container section">
      <Helmet>
        <title>
          Remodeling Services | Kitchens, Bathrooms, Cabinets & Closets
        </title>
        <meta
          name="description"
          content="Full home remodeling in Houston: kitchen remodels, bathroom renovations, custom cabinets and closets. Quality craftsmanship, clear timelines, and clean jobsites."
        />
        <link
          rel="canonical"
          href="https://www.spaceevolutionhouston.com/remodeling"
        />
      </Helmet>

      {/* Hero */}
      <header className="serviceHub__head">
        <h1 className="serviceHub__title">Remodeling</h1>
        <p className="serviceHub__lead">
          From layout changes to premium finishes, we transform outdated spaces
          into functional, beautiful rooms built to last. Clear timelines, daily
          cleanup, and craftsmanship you can see.
        </p>
        <div className="serviceHub__media">
          <img
            className="serviceHub__img"
            src={remodeling}
            alt="Modern remodeled kitchen and living space"
            loading="eager"
          />
        </div>
      </header>

      {/* Content */}
      <div className="serviceHub__content prose">
        <h2>What’s included</h2>
        <ul>
          <li>Space planning, layout changes, and wall reconfiguration</li>
          <li>Cabinetry, countertops, flooring, tile, paint & lighting</li>
          <li>Plumbing & electrical coordination with licensed pros</li>
          <li>Permits, inspections, and project management</li>
        </ul>

        <h2>Popular Remodels</h2>
        <p>
          Whether you want an open-concept kitchen, a spa style bathroom, or
          smarter storage throughout the home, we’ll guide you from concept to
          completion.
        </p>
      </div>

      {/* Child services grid */}
      <div className="serviceHub__grid">
        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Kitchen Remodeling</h3>
          <p className="serviceHub__cardText">
            Custom cabinets, islands, backsplashes, flooring, and lighting that
            elevate everyday cooking and gathering.
          </p>
          <Link className="serviceHub__cta" to="/services/kitchen-remodeling">
            Learn more →
          </Link>
        </article>

        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Bathroom Remodeling</h3>
          <p className="serviceHub__cardText">
            Walk in showers, tile surrounds, vanities, and waterproofing done
            the right way for long term durability.
          </p>
          <Link className="serviceHub__cta" to="/services/bathroom-remodeling">
            Learn more →
          </Link>
        </article>

        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Custom Cabinets</h3>
          <p className="serviceHub__cardText">
            Built to fit cabinetry with quality hardware and finishes for
            kitchens, bathrooms, laundries, and more.
          </p>
          <Link className="serviceHub__cta" to="/services/custom-cabinets">
            Learn more →
          </Link>
        </article>

        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Closets & Storage</h3>
          <p className="serviceHub__cardText">
            Closets, pantries, and mudrooms that organize your life and maximize
            every inch.
          </p>
          <Link className="serviceHub__cta" to="/services/closets">
            Learn more →
          </Link>
        </article>
      </div>

      {/* CTA */}
      <div className="serviceHub__ctaRow">
        <a className="btn btn--accent" href="tel:3464791647">
          Call for a Free Estimate
        </a>
        <Link className="btn btn--ghost" to="/contact">
          Get a Quote Online
        </Link>
      </div>

      {/* FAQs (optional but SEO-friendly) */}
      <div className="serviceHub__faqs">
        <h2 className="serviceHub__subtitle">Remodeling FAQs</h2>
        <details>
          <summary>Do you help with layout and design?</summary>
          <p>
            Yes. We handle space planning, cabinet layouts, fixture selections,
            and finish guides so decisions are fast and confident.
          </p>
        </details>
        <details>
          <summary>Can you work in phases?</summary>
          <p>
            Absolutely. We can split projects to fit your schedule and budget
            while minimizing downtime.
          </p>
        </details>
        <details>
          <summary>Do you pull permits?</summary>
          <p>
            Yes, we manage permits and coordinate inspections whenever required
            by your city or county.
          </p>
        </details>
      </div>
    </section>
  );
}
