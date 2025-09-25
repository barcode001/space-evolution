import React from "react";
import { Helmet } from "react-helmet-async";

export default function PaintingServices() {
  const siteUrl = "https://spaceevolutionhouston.com/"; // ← update to real domain
  const pageUrl = `${siteUrl}/services/painting`;
  const businessName = "Space Evolution";
  const phone = "346-479-1647";
  const serviceArea = "Houston, TX and surrounding areas";

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior & Exterior Painting",
    serviceType: "House Painting",
    areaServed: serviceArea,
    provider: {
      "@type": "LocalBusiness",
      name: businessName,
      telephone: phone,
      areaServed: serviceArea,
    },
    description:
      "Professional interior and exterior painting, surface prep, drywall repair, siding/trim painting and finishes for homes in Houston, TX.",
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      { "@type": "ListItem", position: 3, name: "Painting", item: pageUrl },
    ],
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you help choose colors and finishes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We guide you on color selection, sheen (matte, eggshell, satin, semi-gloss) and paint brands that fit your goals and budget.",
        },
      },
      {
        "@type": "Question",
        name: "How do you prep surfaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We patch, sand, caulk, prime, and mask as needed. Exteriors may include pressure washing and spot-priming bare wood or metal.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Houston and nearby communities.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Interior & Exterior Painting in Houston | {businessName}</title>
        <meta
          name="description"
          content="Crisp interior and exterior painting: walls, ceilings, trim, doors, siding and finishes. Clean prep, durable products, beautiful results in Houston."
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Painting Services | ${businessName}`}
        />
        <meta
          property="og:description"
          content="Professional house painting: interior, exterior, drywall repair, cabinet painting and more in Houston, TX."
        />
        <meta property="og:url" content={pageUrl} />
        {/* <meta property="og:image" content={`${siteUrl}/images/painting-hero.jpg`} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Painting Services | ${businessName}`}
        />
        <meta
          name="twitter:description"
          content="Interior & exterior painting done right—prep, prime and finish for lasting results."
        />
        {/* <meta name="twitter:image" content={`${siteUrl}/images/painting-hero.jpg`} /> */}

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdService)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdBreadcrumbs)}
        </script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFAQ)}</script>
      </Helmet>

      <section className="service container section">
        <h1 className="service__title">Interior & Exterior Painting</h1>

        {/* Hero Image */}
        <div className="service__media">
          <img
            src="/images/painting-hero.jpg" // ← add this file
            alt="Freshly painted home interior with clean trim and accent wall"
            className="service__img"
          />
        </div>

        <p className="service__lead">
          A great paint job changes everything. We handle surface prep, priming
          and clean application so your home looks sharp and stays protected.
          From living rooms and kitchens to siding and trim—we’ve got you.
        </p>

        <h2 className="service__subtitle">Interior Painting</h2>
        <ul className="service__list">
          <li>Walls, ceilings, baseboards, doors and crown molding</li>
          <li>Drywall repair, patching, sanding and caulking</li>
          <li>Accent walls, color matching and sheen selection</li>
          <li>Cabinet painting and refinishing</li>
        </ul>

        <h2 className="service__subtitle">Exterior Painting</h2>
        <ul className="service__list">
          <li>Siding, fascias, soffits, shutters and doors</li>
          <li>Pressure wash, scrape/prime, caulk and seal</li>
          <li>Wood, fiber cement, stucco and metal surfaces</li>
          <li>Weather-resistant coatings for long-term protection</li>
        </ul>

        <h2 className="service__subtitle">Our Process</h2>
        <ol className="service__steps">
          <li>
            <strong>Prep:</strong> Protect floors/landscaping, repair surfaces,
            mask carefully.
          </li>
          <li>
            <strong>Prime:</strong> Proper primers for stain-block, adhesion and
            uniform coverage.
          </li>
          <li>
            <strong>Paint:</strong> Two-coat coverage where needed with
            pro-grade products.
          </li>
          <li>
            <strong>Clean Up:</strong> Thorough cleanup and walk-through to
            ensure you love it.
          </li>
        </ol>

        <div className="service__cta">
          <a className="btn btn--accent" href="tel:3464791647">
            Call Now for a Free Estimate
          </a>
        </div>
      </section>
    </>
  );
}
