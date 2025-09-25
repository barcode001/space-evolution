import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import bathroom from "../assets/images/bathroom3.jpeg";
export default function BathroomRemodeling() {
  const PHONE = "3464791647";

  return (
    <section className="service container section">
      <Helmet>
        <title>Bathroom Remodeling in Houston | Space Evolution</title>
        <meta
          name="description"
          content="Transform your bathroom with custom tile, vanities, showers, and lighting. Licensed & insured Houston remodelers delivering clean, durable finishes."
        />
        <meta
          name="keywords"
          content="bathroom remodeling Houston, shower remodel, tile installation, vanities, bathroom renovation"
        />
        <link
          rel="canonical"
          href="https://spaceevolutionhouston.com/services/bathroom-remodeling"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bathroom Remodeling in Houston | Space Evolution"
        />
        <meta
          property="og:description"
          content="Custom showers, tile, vanities, lighting, and plumbing done right and built to last."
        />
        <meta
          property="og:url"
          content="https://spaceevolutionhouston.com/services/bathroom-remodeling"
        />
        <meta
          property="og:image"
          content="https://spaceevolutionhouston.com/images/bathroom-remodel-og.jpg"
        />

        {/* Twitter Card (optional but recommended) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bathroom Remodeling in Houston | Space Evolution"
        />
        <meta
          name="twitter:description"
          content="Tile, vanities, lighting, and plumbing upgrades for Houston homes. Licensed & insured bathroom remodelers."
        />
        <meta
          name="twitter:image"
          content="https://spaceevolutionhouston.com/images/bathroom-remodel-og.jpg"
        />

        {/* Structured Data for Service Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Bathroom remodeling",
            areaServed: {
              "@type": "Place",
              name: "Houston, TX and surrounding areas",
            },
            provider: {
              "@type": "LocalBusiness",
              name: "Space Evolution",
              telephone: "+1-346-479-1647",
              url: "https://spaceevolutionhouston.com/",
            },
            offers: {
              "@type": "Offer",
              category: "HomeAndConstructionBusiness",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              eligibleRegion: "US-TX",
            },
          })}
        </script>
      </Helmet>

      <h1 className="service__title">Bathroom Remodeling</h1>

      {/* Hero Image */}
      <div className="service__media">
        <img
          src={bathroom}
          alt="Modern bathroom remodel with custom tile shower and vanity"
          className="service__img"
          loading="eager"
        />
      </div>

      <p className="service__lead">
        Upgrade your bathroom with durable, easy to clean materials and a layout
        that just makes sense. From custom tile showers to stylish vanities and
        lighting, we deliver a clean, watertight finish that stands up to daily
        use.
      </p>

      <h2 className="service__subtitle">What We Offer</h2>
      <ul className="service__list">
        <li>Custom tile showers, niches, benches & glass enclosures</li>
        <li>Vanities, countertops, mirrors & storage built-ins</li>
        <li>Flooring (porcelain, ceramic, LVP) with proper waterproofing</li>
        <li>Lighting upgrades & ventilation improvements</li>
        <li>Plumbing fixtures (faucets, valves, drains) and reconfiguration</li>
      </ul>

      <h2 className="service__subtitle">Our Process</h2>
      <ol className="service__steps prose">
        <li>
          <strong>Consult & Measure:</strong> We review goals, style, and
          budget, then verify dimensions and existing plumbing/electrical.
        </li>
        <li>
          <strong>Design & Selections:</strong> Tile layouts, grout, fixtures,
          vanity, lighting organized so decisions are easy.
        </li>
        <li>
          <strong>Demolition & Prep:</strong> Careful demo, moisture inspection,
          and substrate prep (cement board/membranes).
        </li>
        <li>
          <strong>Build & Waterproof:</strong> Pans, curbs, niches; tile set
          with correct slope and waterproofing details.
        </li>
        <li>
          <strong>Finishes & Punchlist:</strong> Plumbing trim, glass, mirrors,
          accessories, final clean and walkthrough.
        </li>
      </ol>

      {/* Cross-links to related services */}
      <div className="service__related">
        <p>
          Planning a larger project? Explore{" "}
          <Link to="/services/kitchen-remodeling">Kitchen Remodeling</Link>,{" "}
          <Link to="/services/custom-cabinets">Custom Cabinets</Link>, or{" "}
          <Link to="/services/painting">Interior Painting</Link>.
        </p>
      </div>

      <div className="service__cta">
        <a className="btn btn--accent" href={`tel:${PHONE}`}>
          Call {PHONE} for a Free Estimate
        </a>
      </div>

      {/* FAQs */}
      <h2 className="service__subtitle">Bathroom Remodeling FAQs</h2>
      <div className="service__faqs">
        <details>
          <summary>How long does a bathroom remodel usually take?</summary>
          <div className="faq__panel">
            <div className="faq__panel__inner">
              <p>
                Typical hall bathrooms take 2–3 weeks; primary bathrooms with
                custom tile and glass can run 3–5 weeks depending on material
                lead times and scope.
              </p>
            </div>
          </div>
        </details>

        <details>
          <summary>Do you handle waterproofing?</summary>
          <div className="faq__panel">
            <div className="faq__panel__inner">
              <p>
                Yes. We install proper backer boards, membranes, and shower pans
                to protect framing and prevent leaks or mold issues.
              </p>
            </div>
          </div>
        </details>

        <details>
          <summary>Can you relocate plumbing or add a walk in shower?</summary>
          <div className="faq__panel">
            <div className="faq__panel__inner">
              <p>
                Absolutely. We can reconfigure layouts, move drains, add niches
                and benches, or convert tubs to low threshold walk in showers.
              </p>
            </div>
          </div>
        </details>

        <details>
          <summary>Do you supply materials?</summary>
          <div className="faq__panel">
            <div className="faq__panel__inner">
              <p>
                We can source tile, fixtures, vanities, and glass or coordinate
                with your preferred vendors. We’ll provide an organized
                selections list.
              </p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
