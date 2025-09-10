import { Helmet } from "react-helmet-async";
import drywall from "../../assets/images/drywall-sheetrock1.png";

export default function DrywallSheetrock() {
  const phone = "346-479-1647";
  const business = "Space Evolution";

  const faq = [
    {
      q: "Can you match my existing texture?",
      a: "Yes. We regularly match orange peel, knockdown, skip trowel, and smooth finishes so repairs blend seamlessly.",
    },
    {
      q: "Do you handle water-damage repairs?",
      a: "Absolutely. We remove damaged sections, treat stains, replace insulation as needed, and restore drywall and paint.",
    },
    {
      q: "Is dust control included?",
      a: "We protect floors/furniture, set containment if needed, and use dust-reducing sanding methods for a cleaner job.",
    },
  ];

  const faqLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="service container section">
      <Helmet>
        <title>
          Drywall & Sheetrock Repair in Houston, TX | Space Evolution
        </title>
        <meta
          name="description"
          content="Professional drywall and sheetrock hanging, taping, texture, and repair. Perfect texture matches and paint-ready finishes."
        />
        <link
          rel="canonical"
          href="https://www.spaceevolutionhouston.com/services/drywall-sheetrock"
        />
        <script type="application/ld+json">{JSON.stringify(faqLD)}</script>
      </Helmet>

      <h1 className="service__title">Drywall & Sheetrock</h1>

      <div className="service__media">
        <img
          src={drywall}
          alt="Drywall finishing and texture applied on interior walls"
          className="service__img"
          loading="eager"
        />
      </div>

      <p className="service__lead">
        From small holes to full rooms, we hang, tape, float, and texture for a
        flawless, paint-ready surface that matches your existing walls and
        ceilings.
      </p>

      <h2 className="service__subtitle">Services</h2>
      <ul className="service__list">
        <li>Drywall hanging, taping, and floating</li>
        <li>Texture match: orange peel, knockdown, smooth, more</li>
        <li>Ceiling repairs, cracks, and settling fixes</li>
        <li>Water-damage removal and restoration</li>
        <li>Paint-ready priming and finish</li>
      </ul>

      <h2 className="service__subtitle">Why Homeowners Choose Us</h2>
      <ul className="service__list">
        <li>Clean site protection and dust-aware sanding</li>
        <li>Fast turnarounds with neat, consistent finishes</li>
        <li>Licensed & insured team</li>
      </ul>

      <div className="service__cta">
        <a className="btn btn--accent" href={`tel:${phone}`}>
          Get a Free Drywall Estimate
        </a>
      </div>
    </section>
  );
}
