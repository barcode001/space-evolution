import { Helmet } from "react-helmet-async";

export default function ExteriorPainting() {
  const phone = "346-479-1647";
  const business = "Space Evolution";

  const faq = [
    {
      q: "How long does an exterior paint job last?",
      a: "With proper prep and quality paint, most Houston homes see 7–10 years depending on sun exposure, siding type, and maintenance.",
    },
    {
      q: "Do you handle power washing and repairs?",
      a: "Yes. We include washing, scraping, sanding, caulking, minor siding/trim repair, and priming as needed before painting.",
    },
    {
      q: "What paint brands do you use?",
      a: "We typically use premium exterior lines from Sherwin-Williams or Benjamin Moore, chosen for your substrate and budget.",
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
        <title>Exterior Painting in Houston, TX | Space Evolution</title>
        <meta
          name="description"
          content="Crisp, durable exterior painting in Houston. Full prep, repairs, priming, and premium paint for siding, trim, doors, and more."
        />
        <link
          rel="canonical"
          href="https://www.yoursite.com/services/exterior-painting"
        />
        <script type="application/ld+json">{JSON.stringify(faqLD)}</script>
      </Helmet>

      <h1 className="service__title">Exterior Painting</h1>

      <div className="service__media">
        <img
          src="/images/exterior-painting.jpg"
          alt="Freshly painted Houston home exterior with clean trim and siding"
          className="service__img"
          loading="eager"
        />
      </div>

      <p className="service__lead">
        Boost curb appeal and protect your home from Houston weather. We handle
        full prep, quality materials, and careful application for a finish that
        lasts.
      </p>

      <h2 className="service__subtitle">What’s Included</h2>
      <ul className="service__list">
        <li>Power washing, scraping, sanding, and caulking</li>
        <li>Spot-priming or full priming depending on condition</li>
        <li>Premium exterior paint for siding, trim, doors, and fascia</li>
        <li>Minor siding/trim repair and wood rot replacement</li>
        <li>Neat masking, clean lines, and thorough cleanup</li>
      </ul>

      <h2 className="service__subtitle">Our Process</h2>
      <ol className="service__list service__list--ol">
        <li>Site walk-through and color/finish consultation</li>
        <li>Wash + surface prep and repairs</li>
        <li>Prime as needed</li>
        <li>Two-coat finish application</li>
        <li>Final touch-ups and customer walkthrough</li>
      </ol>

      <div className="service__cta">
        <a className="btn btn--accent" href={`tel:${phone}`}>
          Call {business} – Free Estimate
        </a>
      </div>
    </section>
  );
}
