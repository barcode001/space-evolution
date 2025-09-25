import { Helmet } from "react-helmet-async";
import interior from "../../assets/images/interior-painting.png";

export default function InteriorPainting() {
  const phone = "346-479-1647";
  const business = "Space Evolution";

  const faq = [
    {
      q: "What areas do you paint indoors?",
      a: "We handle full interior painting for walls, ceilings, trim, doors, cabinets, and more—throughout kitchens, bathrooms, bedrooms, and living spaces.",
    },
    {
      q: "Do you repair drywall before painting?",
      a: "Yes. We patch holes, tape and float seams, sand, and texture-match as needed to create a smooth surface before painting.",
    },
    {
      q: "Can you help me choose colors or finishes?",
      a: "Definitely. We can recommend trending colors and sheens that fit your space and lighting, and we offer sample applications to test options on your walls.",
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
        <title>Interior Painting in Houston, TX | Space Evolution</title>
        <meta
          name="description"
          content="Smooth walls, straight cut lines, and low-odor finishes for kitchens, bedrooms, bathrooms, and more. Interior painting done right in Houston."
        />
        <meta
          name="keywords"
          content="interior painting Houston, drywall repair, bedroom painting, kitchen painting, ceiling painting, painting contractors"
        />
        <link
          rel="canonical"
          href="https://spaceevolutionhouston.com/services/interior-painting"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Interior Painting in Houston, TX | Space Evolution"
        />
        <meta
          property="og:description"
          content="Interior painting that’s clean, smooth, and built to last. Serving Houston with drywall repair, color consulting, and durable paint systems."
        />
        <meta
          property="og:url"
          content="https://spaceevolutionhouston.com/services/interior-painting"
        />
        <meta
          property="og:image"
          content="https://spaceevolutionhouston.com/images/og-home.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Interior Painting in Houston, TX | Space Evolution"
        />
        <meta
          name="twitter:description"
          content="Smooth walls and clean finishes for kitchens, bedrooms, and more. Full interior painting services in Houston with drywall repair included."
        />
        <meta
          name="twitter:image"
          content="https://spaceevolutionhouston.com/images/og-home.png"
        />

        <script type="application/ld+json">{JSON.stringify(faqLD)}</script>
      </Helmet>

      <h1 className="service__title">Interior Painting</h1>

      <div className="service__media">
        <img
          src={interior}
          alt="Freshly painted interior with smooth walls and white trim"
          className="service__img"
          loading="eager"
        />
      </div>

      <p className="service__lead">
        A fresh coat of paint does more than change color—it revives the space.
        We prep properly, work cleanly, and deliver flawless finishes in any
        room of your home.
      </p>

      <h2 className="service__subtitle">What’s Included</h2>
      <ul className="service__list">
        <li>Walls, ceilings, trim, doors, baseboards, cabinets</li>
        <li>Drywall repair and texture matching</li>
        <li>Spot-priming or full priming</li>
        <li>Low-VOC, washable paint finishes</li>
        <li>Neat masking and dust protection</li>
      </ul>

      <h2 className="service__subtitle">Our Process</h2>
      <ol className="service__list service__list--ol">
        <li>Initial walkthrough and color/sheens consultation</li>
        <li>Drywall repairs, taping, sanding, priming</li>
        <li>Careful masking and protection of floors and furniture</li>
        <li>Two coats of high-quality interior paint</li>
        <li>Final detailing and walkthrough</li>
      </ol>

      <div className="service__cta">
        <a className="btn btn--accent" href={`tel:${phone}`}>
          Call {business} – Free Estimate
        </a>
      </div>
    </section>
  );
}
