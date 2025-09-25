import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import siding from "../../assets/images/siding.png";

export default function Siding() {
  const PHONE_DISPLAY = "346-479-1647";
  const PHONE_TEL = "3464791647";

  const faqLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What siding materials do you install?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We install fiber-cement (Hardie), engineered wood, and select vinyl profiles. We’ll recommend what fits your budget, maintenance, and look.",
        },
      },
      {
        "@type": "Question",
        name: "Can you match existing siding and paint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—profile, exposure, trim details, and color. We also handle full prep and paint so everything blends cleanly.",
        },
      },
      {
        "@type": "Question",
        name: "Do you repair siding or only replace?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. We handle targeted repairs (rot, impact damage) or full tear-offs with weather-resistant barrier and flashing upgrades.",
        },
      },
    ],
  };

  return (
    <section className="service container section">
      <Helmet>
        <title>Siding Installation & Repair in Houston | Space Evolution</title>
        <meta
          name="description"
          content="Professional siding installation and repairs: Hardie/fiber-cement, engineered wood, trim, caulking, and full prep/paint. Durable, weather-ready exteriors."
        />
        <link
          rel="canonical"
          href="https://spaceevolutionhouston.com/services/siding"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Siding Installation & Repair in Houston | Space Evolution"
        />
        <meta
          property="og:description"
          content="Hardie board, fiber cement, and engineered wood siding installs and repairs. Clean caulking, trim work, and durable painted finishes built for Houston."
        />
        <meta
          property="og:url"
          content="https://spaceevolutionhouston.com/services/siding"
        />
        <meta
          property="og:image"
          content="https://spaceevolutionhouston.com/images/og-home.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Siding Installation & Repair in Houston | Space Evolution"
        />
        <meta
          name="twitter:description"
          content="Houston siding pros for Hardie, engineered wood, and trim. Repairs, installs, caulking, and painted finishes that last."
        />
        <meta
          name="twitter:image"
          content="https://spaceevolutionhouston.com/images/og-home.png"
        />

        {/* FAQ Structured Data */}
        <script type="application/ld+json">{JSON.stringify(faqLD)}</script>
      </Helmet>

      <h1 className="service__title">Siding</h1>

      {/* Hero image — swap to your asset */}
      <div className="service__media">
        <img
          src={siding}
          alt="Freshly installed fiber-cement siding with crisp trim and paint"
          className="service__img"
          loading="eager"
        />
      </div>

      <p className="service__lead">
        Upgrade curb appeal and protect your home from Houston weather. We
        install and repair fiber-cement, engineered wood, and select vinyl
        systems—with proper flashing, caulking, and a paint job that lasts.
      </p>

      <h2 className="service__subtitle">What We Do</h2>
      <ul className="service__list">
        <li>Full tear-off & replacement or targeted repairs</li>
        <li>Hardie/fiber-cement, engineered wood, and select vinyl</li>
        <li>Trim, soffits, fascia, and moisture-barrier upgrades</li>
        <li>Pro caulking, priming, and finish paint</li>
      </ul>

      <h2 className="service__subtitle">Our Process</h2>
      <ol className="service__steps">
        <li>Inspect & measure; document damage and moisture risks.</li>
        <li>Remove damaged sections; install WRB and flashing correctly.</li>
        <li>Install siding/trim with proper fasteners and gaps.</li>
        <li>Seal joints, prime, and paint for a uniform finish.</li>
        <li>Final walkthrough and clean up.</li>
      </ol>

      <h2 className="service__subtitle">Materials & Options</h2>
      <ul className="service__list">
        <li>Profiles: lap, vertical, board & batten, shingle</li>
        <li>Finishes: factory-prime, on-site paint, color-matched trim</li>
        <li>Upgrades: vented soffits, gutters, pest-resistant details</li>
      </ul>

      <div className="service__cta">
        <a className="btn btn--accent" href={`tel:${PHONE_TEL}`}>
          Call {PHONE_DISPLAY}
        </a>{" "}
        <Link className="btn" to="/contact">
          Get Free Estimate
        </Link>
      </div>

      <h2 className="service__subtitle">Siding FAQs</h2>
      <div className="faq">
        <details className="faq__item">
          <summary className="faq__q">
            How long does siding replacement take?
          </summary>
          <div className="faq__a">
            Most homes take 3–7 days depending on scope, weather, and paint.
          </div>
        </details>
        <details className="faq__item">
          <summary className="faq__q">Do you paint after installation?</summary>
          <div className="faq__a">
            Yes—full prep/paint is included unless you prefer factory color.
          </div>
        </details>
        <details className="faq__item">
          <summary className="faq__q">Is there a warranty?</summary>
          <div className="faq__a">
            We provide a 1-year workmanship warranty plus manufacturer coverage
            where applicable.
          </div>
        </details>
      </div>
    </section>
  );
}
