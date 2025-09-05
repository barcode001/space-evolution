import { Helmet } from "react-helmet-async";

export default function Plumbing() {
  const phone = "346-479-1647";
  const business = "Space Evolution";

  const faq = [
    {
      q: "Do you handle small repairs and full rough-ins?",
      a: "Yes. From faucet swaps and leak repairs to full kitchen/bath rough-ins and fixture installs during remodels.",
    },
    {
      q: "Are permits included when required?",
      a: "We pull permits when the scope requires it and coordinate inspections to keep your project compliant.",
    },
    {
      q: "What brands do you install?",
      a: "We work with Moen, Delta, Kohler and others. We’ll install owner-supplied fixtures or source matched products for you.",
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
        <title>Plumbing Services in Houston, TX | Space Evolution</title>
        <meta
          name="description"
          content="Licensed plumbing for remodels and repairs: rough-ins, repipes, fixture installs, drains, and leak fixes done cleanly and safely."
        />
        <link
          rel="canonical"
          href="https://www.yoursite.com/services/plumbing"
        />
        <script type="application/ld+json">{JSON.stringify(faqLD)}</script>
      </Helmet>

      <h1 className="service__title">Plumbing Services</h1>

      <div className="service__media">
        <img
          src="/images/plumbing-service.jpg"
          alt="Licensed plumber installing sink and faucet during a remodel"
          className="service__img"
          loading="eager"
        />
      </div>

      <p className="service__lead">
        Dependable, code-compliant plumbing that keeps your project on schedule.
        We coordinate with our remodeling team for clean installs and finishes.
      </p>

      <h2 className="service__subtitle">Common Work We Do</h2>
      <ul className="service__list">
        <li>Kitchen and bath rough-ins & fixture installs</li>
        <li>Shower valves, tubs, sinks, and toilets</li>
        <li>Supply line and drain repairs / reroutes</li>
        <li>Water heater replacement (tank & tankless)</li>
        <li>Garbage disposals and dishwasher hookups</li>
      </ul>

      <h2 className="service__subtitle">Why Choose Us</h2>
      <ul className="service__list">
        <li>Licensed & insured pros</li>
        <li>Clear pricing and communication</li>
        <li>Respectful, tidy work areas and protection</li>
      </ul>

      <div className="service__cta">
        <a className="btn btn--accent" href={`tel:${phone}`}>
          Schedule a Plumbing Visit
        </a>
      </div>
    </section>
  );
}
