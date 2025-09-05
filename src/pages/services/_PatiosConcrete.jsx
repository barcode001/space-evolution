import { Helmet } from "react-helmet-async";

export default function PatiosConcrete() {
  const phone = "346-479-1647";
  const business = "Space Evolution";

  const faq = [
    {
      q: "How long does a concrete patio take?",
      a: "Most standard patios pour and finish in 1–2 days with 3–7 days cure time before regular use (14+ days for heavy loads).",
    },
    {
      q: "Do you offer decorative finishes?",
      a: "Yes. We install broom, smooth, stamped, stained, and exposed aggregate finishes. We’ll recommend the best option for your space and budget.",
    },
    {
      q: "Can you extend an existing patio?",
      a: "Absolutely. We match height, slope, and control joints so additions look intentional and drain properly.",
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
        <title>Patios & Concrete in Houston, TX | Space Evolution</title>
        <meta
          name="description"
          content="Stamped and regular concrete patios, walkways, and slabs. Clean forms, proper slope, rebar reinforcement, and beautiful finishes."
        />
        <link
          rel="canonical"
          href="https://www.yoursite.com/services/patios-concrete"
        />
        <script type="application/ld+json">{JSON.stringify(faqLD)}</script>
      </Helmet>

      <h1 className="service__title">Patios & Concrete</h1>

      <div className="service__media">
        <img
          src="/images/patios-concrete.jpg"
          alt="Stamped concrete patio with seating area and walkway"
          className="service__img"
          loading="eager"
        />
      </div>

      <p className="service__lead">
        Create an outdoor space you actually use. We design and build patios,
        walkways, and slabs with clean forming, proper drainage, and
        long-lasting finishes.
      </p>

      <h2 className="service__subtitle">Services</h2>
      <ul className="service__list">
        <li>New patios, extensions, and walkways</li>
        <li>Rebar reinforcement and control joints</li>
        <li>Stamped, stained, broom, or smooth finishes</li>
        <li>Pergola and cover footings (per plan)</li>
        <li>Driveway sections and concrete pads</li>
      </ul>

      <h2 className="service__subtitle">Our Process</h2>
      <ol className="service__list service__list--ol">
        <li>On-site design and measurements</li>
        <li>Forming, base prep, and reinforcement</li>
        <li>Pour and finish (decorative options available)</li>
        <li>Cleanup, cure, and care guidance</li>
      </ol>

      <div className="service__cta">
        <a className="btn btn--accent" href={`tel:${phone}`}>
          Call {business} – Free Patio Estimate
        </a>
      </div>
    </section>
  );
}
