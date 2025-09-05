import { Helmet } from "react-helmet-async";

export default function FencingDriveways() {
  const phone = "346-479-1647";
  const business = "Space Evolution";

  const faq = [
    {
      q: "What fence types do you build?",
      a: "Wood privacy, board-on-board, horizontal slat, wrought iron, and custom gates. We also repair/straighten leaning sections.",
    },
    {
      q: "Do you pour new driveways or just repair?",
      a: "Both. We install new sections, widenings, and replacement panels, and we handle crack control and proper slope for drainage.",
    },
    {
      q: "Can you match my existing style?",
      a: "Yes. We match height, picket size, stain, and posts for fences, and finish/score patterns for concrete driveways.",
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
        <title>Fencing & Driveways in Houston, TX | Space Evolution</title>
        <meta
          name="description"
          content="Quality fencing and driveway work: new builds, extensions, and repairs with strong foundations, clean lines, and great curb appeal."
        />
        <link
          rel="canonical"
          href="https://www.yoursite.com/services/fencing-driveways"
        />
        <script type="application/ld+json">{JSON.stringify(faqLD)}</script>
      </Helmet>

      <h1 className="service__title">Fencing & Driveways</h1>

      <div className="service__media">
        <img
          src="/images/fencing-driveways.jpg"
          alt="New wood privacy fence and fresh concrete driveway at a home"
          className="service__img"
          loading="eager"
        />
      </div>

      <p className="service__lead">
        Boost privacy and curb appeal. We build solid fences and clean,
        long-lasting driveways that handle Texas weather and everyday use.
      </p>

      <h2 className="service__subtitle">Fencing</h2>
      <ul className="service__list">
        <li>Wood privacy, board-on-board, horizontal slat</li>
        <li>Wrought iron, gates, and hardware</li>
        <li>Repairs: leaning posts, broken rails, new sections</li>
        <li>Stain and sealing options for longevity</li>
      </ul>

      <h2 className="service__subtitle">Driveways</h2>
      <ul className="service__list">
        <li>New slabs, widenings, and panel replacements</li>
        <li>Rebar reinforcement and control joints</li>
        <li>Proper slope and drainage planning</li>
        <li>Finish options: broom, smooth, decorative scoring</li>
      </ul>

      <div className="service__cta">
        <a className="btn btn--accent" href={`tel:${phone}`}>
          Get a Free Fencing/Driveway Estimate
        </a>
      </div>
    </section>
  );
}
