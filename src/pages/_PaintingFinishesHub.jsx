import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function PaintingFinishesHub() {
  const PHONE_TEL = "3464791647";

  return (
    <section className="serviceHub container section">
      <Helmet>
        <title>
          Painting & Finishes | Interior, Exterior, Sheetrock, Siding
        </title>
        <meta
          name="description"
          content="Professional interior & exterior painting, drywall & sheetrock repair, texture matching, and siding prep/paint. Clean lines, smooth walls, long-lasting finishes."
        />
        <link
          rel="canonical"
          href="https://www.yoursite.com/services/painting"
        />
        <meta property="og:title" content="Painting & Finishes" />
        <meta
          property="og:description"
          content="Premium prep-first process for crisp lines, smooth walls, and durable exterior coatings."
        />
      </Helmet>

      {/* Hero */}
      <header className="serviceHub__head">
        <h1 className="serviceHub__title">Painting &amp; Finishes</h1>
        <p className="serviceHub__lead">
          From spotless interiors to weather-ready exteriors, we’re prep-first:
          repairs, sanding, caulking, priming—so your paint looks better and
          lasts longer. Expect crisp lines, smooth walls, and clean job sites.
        </p>
        <div className="serviceHub__media">
          <img
            className="serviceHub__img"
            src="/images/services/painting-hero.jpg"
            alt="Freshly painted living room with smooth walls and crisp trim"
            loading="eager"
          />
        </div>
      </header>

      {/* Content */}
      <div className="serviceHub__content prose">
        <h2>What’s included</h2>
        <ul>
          <li>Interior &amp; exterior painting (brush, roll, and spray)</li>
          <li>Sheetrock repair, texture matching, skim-coating</li>
          <li>Trim, doors, crown, cabinet refinishing</li>
          <li>Siding prep/paint and exterior wood repair</li>
          <li>Color consulting and sheen recommendations</li>
        </ul>

        <h2>Prep-First Process</h2>
        <ol>
          <li>Protect: floors, furniture, landscaping; mask & cover.</li>
          <li>
            Repair: patch, tape/float, caulk, sand; spot-prime/full-prime.
          </li>
          <li>Paint: correct products and sheens for each surface.</li>
          <li>Detail: crisp lines, hardware re-install, thorough cleanup.</li>
          <li>Walk-through: punch list and finish-quality check.</li>
        </ol>
      </div>

      {/* Child services grid */}
      <div className="serviceHub__grid pfgrid">
        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Interior Painting</h3>
          <p className="serviceHub__cardText">
            Smooth walls, straight cut lines, and low-VOC finishes for living
            areas, kitchens, bedrooms, and baths.
          </p>
          <Link className="serviceHub__cta" to="/services/painting">
            Learn more →
          </Link>
        </article>

        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Drywall &amp; Sheetrock</h3>
          <p className="serviceHub__cardText">
            Holes, seams, water damage, orange peel/knockdown, and full
            skim-coats prior to paint.
          </p>
          <Link className="serviceHub__cta" to="/services/drywall-sheetrock">
            Sheetrock Services →
          </Link>
        </article>

        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Siding &amp; Exterior</h3>
          <p className="serviceHub__cardText">
            Power-wash, scrape, sand, prime, and top-coat for siding, fascia,
            soffits, and trim that stand up to Houston weather.
          </p>
          <Link className="serviceHub__cta" to="/services/exterior-painting">
            Exterior Painting →
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
        <h2 className="serviceHub__subtitle">Painting &amp; Finishes FAQs</h2>
        <details>
          <summary>What brands do you use?</summary>
          <p>
            We typically use Sherwin-Williams or Benjamin Moore and can match
            your preferred line when requested.
          </p>
        </details>
        <details>
          <summary>Will you help pick colors?</summary>
          <p>
            Yes—popular, proven palettes plus on-site samples to see colors in
            your lighting before we paint.
          </p>
        </details>
        <details>
          <summary>How do you keep the house clean?</summary>
          <p>
            Daily cleanup, plastic protection, and dust control. We treat your
            home like it’s ours.
          </p>
        </details>
      </div>
    </section>
  );
}
