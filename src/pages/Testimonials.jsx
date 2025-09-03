import React, { useMemo } from "react";

/** Simple star renderer (supports halves if you want later) */
function Stars({
  value = 5,
  outOf = 5,
  label = `${value} out of ${outOf} stars`,
}) {
  const stars = Array.from({ length: outOf }, (_, i) => i < Math.round(value));
  return (
    <div className="stars" aria-label={label} role="img">
      {stars.map((on, i) => (
        <span
          key={i}
          className={`star ${on ? "star--on" : "star--off"}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

const REVIEWS = [
  {
    author: "Maria G.",
    rating: 5,
    text: "Space Evolution remodeled our kitchen and it came out beautiful. On time, clean, and super professional.",
    source: "Facebook",
    date: "2025-08-12",
  },
  {
    author: "Daniel P.",
    rating: 5,
    text: "They repaired drywall, repainted our home, and updated a bathroom—great craftsmanship, fair price.",
    source: "Client",
    date: "2025-07-28",
  },
  {
    author: "Stephanie R.",
    rating: 5,
    text: "Eladio’s crew is amazing. Clear communication and the result exceeded expectations.",
    source: "Client",
    date: "2025-06-15",
  },
];

export default function Testimonials() {
  const { average, count } = useMemo(() => {
    const count = REVIEWS.length || 0;
    const sum = REVIEWS.reduce((s, r) => s + (r.rating || 0), 0);
    const average = count ? +(sum / count).toFixed(1) : 5;
    return { average, count };
  }, []);

  // JSON-LD for Review Snippets (LocalBusiness with AggregateRating + individual reviews)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Space Evolution",
    image: "/images/logo.png",
    url: "https://www.yoursite.com/",
    telephone: "346-479-1647",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: average,
      reviewCount: count,
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  };

  return (
    <section
      className="testimonials section"
      aria-labelledby="testimonials-title"
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <header className="testimonials__head">
          <h2 id="testimonials-title" className="testimonials__title">
            What Clients Say
          </h2>
          <div className="testimonials__summary">
            <Stars value={average} />
            <span className="testimonials__avg">
              {average} / 5.0 <span className="muted">({count} reviews)</span>
            </span>
          </div>
        </header>

        <ul className="testimonials__grid" role="list">
          {REVIEWS.map((r, i) => (
            <li key={i} className="testimonial">
              <div className="testimonial__stars">
                <Stars value={r.rating} />
              </div>
              <p className="testimonial__text">“{r.text}”</p>
              <div className="testimonial__meta">
                <span className="testimonial__author">— {r.author}</span>
                {r.source && (
                  <span className="testimonial__source"> · {r.source}</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="testimonials__cta">
          <a className="btn btn--primary" href="/contact">
            Get a Free Estimate
          </a>
          <a className="btn btn--ghost" href="/reviews">
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
