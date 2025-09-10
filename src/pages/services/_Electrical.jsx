import { Helmet } from "react-helmet-async";
import eletrical from "../../assets/images/electrical-services.png";

export default function Electrical() {
  const phone = "346-479-1647";
  const business = "Space Evolution";

  const faq = [
    {
      q: "Do you handle both small fixes and remodel wiring?",
      a: "Yes. From adding a single outlet or light to full kitchen/bath rewiring, panel upgrades, and dedicated appliance circuits.",
    },
    {
      q: "Are permits and inspections included when needed?",
      a: "When the scope requires, we pull permits and schedule inspections to keep your project code-compliant and safe.",
    },
    {
      q: "Can you add under-cabinet and recessed lighting?",
      a: "Absolutely. We design lighting plans, add dimmers, smart switches, and run clean wiring during cabinet or ceiling work.",
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
        <title>Electrical Services in Houston, TX | Space Evolution</title>
        <meta
          name="description"
          content="Licensed electrical service for remodels and repairs: lighting plans, outlets, panel upgrades, dedicated circuits, and code-safe wiring."
        />
        <link
          rel="canonical"
          href="https://www.spaceevolutionhouston.com/services/electrical"
        />
        <script type="application/ld+json">{JSON.stringify(faqLD)}</script>
      </Helmet>

      <h1 className="service__title">Electrical Services</h1>

      <div className="service__media">
        <img
          src={eletrical}
          alt="Electrician installing recessed lighting in a newly remodeled room"
          className="service__img"
          loading="eager"
        />
      </div>

      <p className="service__lead">
        Safe, tidy, and to-code electrical work that integrates perfectly with
        your remodel. We plan, wire, and finish so everything works and looks
        right.
      </p>

      <h2 className="service__subtitle">Common Work We Do</h2>
      <ul className="service__list">
        <li>Lighting design, recessed & under-cabinet lights</li>
        <li>Outlet/switch adds, GFCI/AFCI protection</li>
        <li>Panel upgrades and dedicated appliance circuits</li>
        <li>Range, oven, microwave, and hood connections</li>
        <li>Bathroom fan/light combos and smart controls</li>
      </ul>

      <h2 className="service__subtitle">Why Homeowners Choose Us</h2>
      <ul className="service__list">
        <li>Licensed & insured professionals</li>
        <li>Clean installs that respect your finishes</li>
        <li>Clear communication and scheduling</li>
      </ul>

      <div className="service__cta">
        <a className="btn btn--accent" href={`tel:${phone}`}>
          Call {business} – Electrical Estimate
        </a>
      </div>
    </section>
  );
}
