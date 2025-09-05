// src/pages/services/_OutdoorStructuralHub.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function OutdoorStructuralHub() {
  const PHONE_TEL = "3464791647";

  return (
    <section className="serviceHub container section">
      <Helmet>
        <title>
          Outdoor & Structural | Patios, Concrete, Fencing, Driveways
        </title>
        <meta
          name="description"
          content="Patios & concrete, fencing, and driveway projects that boost curb appeal and stand up to Houston weather. Proper prep, drainage, and durable finishes."
        />
        <link
          rel="canonical"
          href="https://www.yoursite.com/services/outdoor"
        />
        <meta property="og:title" content="Outdoor & Structural" />
        <meta
          property="og:description"
          content="Concrete, patios, and fences built for everyday life and Texas weather."
        />
      </Helmet>

      {/* Hero */}
      <header className="serviceHub__head">
        <h1 className="serviceHub__title">Outdoor &amp; Structural</h1>
        <p className="serviceHub__lead">
          Concrete, patios, and fencing that add value and stand up to the
          elements. We focus on the right base, drainage, and finishes so your
          project looks great for years.
        </p>
        <div className="serviceHub__media">
          <img
            className="serviceHub__img"
            src="/images/services/outdoor-hero.jpg"
            alt="Stamped concrete patio with wood fence and seating area"
            loading="eager"
          />
        </div>
      </header>

      {/* Content */}
      <div className="serviceHub__content prose">
        <h2>What we build</h2>
        <ul>
          <li>Patios, walkways, and outdoor living slabs</li>
          <li>Driveways (new, extensions, and replacements)</li>
          <li>Wood &amp; metal fencing, gates, and repairs</li>
          <li>Footings, small masonry, and site prep</li>
          <li>Sealants, stains, and protective coatings</li>
        </ul>

        <h2>Built the right way</h2>
        <p>
          We start with sub-base prep and compaction, add correct depth and
          rebar/mesh reinforcement, and finish with control joints and curing.
          For fencing, we set posts deep with proper concrete and hardware for
          straight lines and long life.
        </p>
      </div>

      {/* Child services grid */}
      <div className="serviceHub__grid osgrid">
        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Patios &amp; Concrete</h3>
          <p className="serviceHub__cardText">
            New slabs, extensions, broom or stamped finishes, and repairs with
            correct base and drainage.
          </p>
          <Link className="serviceHub__cta" to="/services/patios-concrete">
            Learn more →
          </Link>
        </article>

        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Fencing &amp; Driveways</h3>
          <p className="serviceHub__cardText">
            Wood or metal fencing, gates, plus driveway installs and
            replacements built to last.
          </p>
          <Link className="serviceHub__cta" to="/services/fencing-driveways">
            Learn more →
          </Link>
        </article>
      </div>

      {/* CTA */}
      <div className="serviceHub__ctaRow">
        <a className="btn btn--accent" href={`tel:${PHONE_TEL}`}>
          Call for a Free Estimate
        </a>
        <Link className="btn btn--ghost" to="/contact">
          Get a Quote Online
        </Link>
      </div>

      {/* FAQs */}
      <div className="serviceHub__faqs">
        <h2 className="serviceHub__subtitle">Outdoor &amp; Structural FAQs</h2>
        <details>
          <summary>Do you do stamped or stained concrete?</summary>
          <p>
            Yes—broom, trowel, stamped, and stained finishes. We’ll recommend
            the right sealer for Houston’s climate.
          </p>
        </details>
        <details>
          <summary>How deep do you set fence posts?</summary>
          <p>
            Typically 24–36″ depending on height/soil, set in concrete with
            proper spacing and hardware for stability.
          </p>
        </details>
        <details>
          <summary>Can you replace part of a driveway?</summary>
          <p>
            We can do sections or full replacements. We’ll match thickness and
            joints to blend with existing areas.
          </p>
        </details>
      </div>
    </section>
  );
}
