// import React from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// export default function Remodeling() {
//   const PHONE_DISPLAY = "346-479-1647";
//   const PHONE_TEL = "3464791647";

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: [
//       {
//         "@type": "Question",
//         name: "Do you help with layout and design?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes—space planning, cabinet layouts, fixture selections, and finish guides are included as part of our remodeling service.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Can you work in phases to match my budget?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Absolutely. We can split kitchens, baths, and storage projects into phases to minimize disruption and fit your budget.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Do you handle permits and inspections?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes. When required, we handle permits and coordinate inspections with your local jurisdiction.",
//         },
//       },
//     ],
//   };

//   return (
//     <section className="service container section">
//       <Helmet>
//         <title>Remodeling | Space Evolution</title>
//         <meta
//           name="description"
//           content="Full-service home remodeling in Houston: kitchens, bathrooms, custom cabinets, and closets. Licensed & insured, clear timelines, and clean job sites."
//         />
//         <link
//           rel="canonical"
//           href="https://www.yoursite.com/services/remodeling"
//         />
//         <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
//       </Helmet>

//       <h1 className="service__title">Remodeling</h1>

//       {/* Hero Image */}
//       <div className="service__media">
//         <img
//           src="/images/remodeling-hero.jpg"
//           alt="Remodeled Houston kitchen with island and custom cabinetry"
//           className="service__img"
//         />
//       </div>

//       <p className="service__lead">
//         From concept to completion, we remodel kitchens, bathrooms, and storage
//         spaces with durable materials and clean, professional workmanship.
//         You’ll get an organized plan, a clear schedule, and daily updates—so the
//         process is as stress-free as possible.
//       </p>

//       {/* Quick links to child services */}
//       <h2 className="service__subtitle">Popular Remodeling Services</h2>
//       <ul className="service__list">
//         <li>
//           <Link to="/services/kitchen-remodeling">Kitchen Remodeling</Link>
//         </li>
//         <li>
//           <Link to="/services/bathroom-remodeling">Bathroom Remodeling</Link>
//         </li>
//         <li>
//           <Link to="/services/custom-cabinets">Custom Cabinets</Link>
//         </li>
//         <li>
//           <Link to="/services/closets">Closets & Built-Ins</Link>
//         </li>
//       </ul>

//       {/* Trust */}
//       <h2 className="service__subtitle">Why Choose Space Evolution</h2>
//       <ul className="service__list">
//         <li>Licensed & insured crew, clean job sites, daily communication.</li>
//         <li>Upfront scope and pricing—no surprises.</li>
//         <li>
//           Skilled installers for cabinets, counters, tile, electrical &
//           plumbing.
//         </li>
//         <li>1-year workmanship warranty; manufacturer warranties honored.</li>
//       </ul>

//       {/* Timelines */}
//       <h2 className="service__subtitle">Typical Timelines</h2>
//       <ul className="service__list">
//         <li>Kitchen refresh (paint, hardware, backsplash): 1–2 weeks</li>
//         <li>Full kitchen (cabinets, counters, flooring): 3–6 weeks</li>
//         <li>Bathroom remodel: 2–4 weeks</li>
//         <li>Custom built-ins / closets: 1–2 weeks</li>
//       </ul>

//       {/* Materials */}
//       <h2 className="service__subtitle">Materials & Finishes</h2>
//       <p className="service__lead">
//         Shaker & slab cabinetry, soft-close hardware, quartz/granite/marble
//         counters, porcelain & ceramic tile, durable LVP and engineered wood
//         flooring, premium paints, LED lighting, and modern fixtures.
//       </p>

//       {/* Service Area */}
//       <h2 className="service__subtitle">Service Area</h2>
//       <p className="area">
//         Houston, Katy, Sugar Land, Pasadena, The Woodlands, Pearland, Cypress,
//         Spring, and nearby communities.
//       </p>

//       {/* Mini Gallery — swap with your real paths */}
//       <div className="service__gallery">
//         <img
//           src="/images/kitchen-1.jpg"
//           alt="Kitchen renovation with quartz island"
//         />
//         <img src="/images/bath-1.jpg" alt="Bathroom remodel with tile shower" />
//         <img src="/images/cabinets-1.jpg" alt="Custom built-in media cabinet" />
//       </div>

//       {/* FAQs */}
//       <h2 className="service__subtitle">Remodeling FAQs</h2>

//       <div className="service__faqs">
//         <details>
//           <summary>Do you help with layout and design?</summary>
//           <div className="faq__panel">
//             <div className="faq__panel__inner">
//               <p>
//                 Yes—space planning, cabinet layouts, fixture selections, and
//                 finish guides are included. We’ll help you make confident
//                 decisions quickly.
//               </p>
//             </div>
//           </div>
//         </details>

//         <details>
//           <summary>Can you work in phases?</summary>
//           <div className="faq__panel">
//             <div className="faq__panel__inner">
//               <p>
//                 Absolutely. We can split projects to fit your schedule and
//                 budget while minimizing downtime in your home.
//               </p>
//             </div>
//           </div>
//         </details>

//         <details>
//           <summary>Do you pull permits?</summary>
//           <div className="faq__panel">
//             <div className="faq__panel__inner">
//               <p>
//                 Yes, we handle permits and coordinate inspections whenever
//                 they’re required by your city or county.
//               </p>
//             </div>
//           </div>
//         </details>
//       </div>

//       {/* CTA */}
//       <div className="service__cta" style={{ marginTop: "1rem" }}>
//         <a className="btn btn--accent" href={`tel:${PHONE_TEL}`}>
//           Call {PHONE_DISPLAY} for a Free Estimate
//         </a>{" "}
//         <Link className="btn" to="/contact">
//           Get Free Estimate
//         </Link>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Remodeling() {
  return (
    <section className="serviceHub container section">
      <Helmet>
        <title>
          Remodeling Services | Kitchens, Bathrooms, Cabinets & Closets
        </title>
        <meta
          name="description"
          content="Full home remodeling in Houston: kitchen remodels, bathroom renovations, custom cabinets and closets. Quality craftsmanship, clear timelines, and clean jobsites."
        />
        <link
          rel="canonical"
          href="https://www.yoursite.com/services/remodeling"
        />
      </Helmet>

      {/* Hero */}
      <header className="serviceHub__head">
        <h1 className="serviceHub__title">Remodeling</h1>
        <p className="serviceHub__lead">
          From layout changes to premium finishes, we transform outdated spaces
          into functional, beautiful rooms built to last. Clear timelines, daily
          cleanup, and craftsmanship you can see.
        </p>
        <div className="serviceHub__media">
          <img
            className="serviceHub__img"
            src="/images/remodeling-hero.jpg"
            alt="Modern remodeled kitchen and living space"
            loading="eager"
          />
        </div>
      </header>

      {/* Content */}
      <div className="serviceHub__content prose">
        <h2>What’s included</h2>
        <ul>
          <li>Space planning, layout changes, and wall reconfiguration</li>
          <li>Cabinetry, countertops, flooring, tile, paint & lighting</li>
          <li>Plumbing & electrical coordination with licensed pros</li>
          <li>Permits, inspections, and project management</li>
        </ul>

        <h2>Popular Remodels</h2>
        <p>
          Whether you want an open-concept kitchen, a spa style bathroom, or
          smarter storage throughout the home, we’ll guide you from concept to
          completion.
        </p>
      </div>

      {/* Child services grid */}
      <div className="serviceHub__grid">
        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Kitchen Remodeling</h3>
          <p className="serviceHub__cardText">
            Custom cabinets, islands, backsplashes, flooring, and lighting that
            elevate everyday cooking and gathering.
          </p>
          <Link className="serviceHub__cta" to="/services/kitchen-remodeling">
            Learn more →
          </Link>
        </article>

        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Bathroom Remodeling</h3>
          <p className="serviceHub__cardText">
            Walk in showers, tile surrounds, vanities, and waterproofing done
            the right way for long term durability.
          </p>
          <Link className="serviceHub__cta" to="/services/bathroom-remodeling">
            Learn more →
          </Link>
        </article>

        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Custom Cabinets</h3>
          <p className="serviceHub__cardText">
            Built to fit cabinetry with quality hardware and finishes for
            kitchens, bathrooms, laundries, and more.
          </p>
          <Link className="serviceHub__cta" to="/services/custom-cabinets">
            Learn more →
          </Link>
        </article>

        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Closets & Storage</h3>
          <p className="serviceHub__cardText">
            Closets, pantries, and mudrooms that organize your life and maximize
            every inch.
          </p>
          <Link className="serviceHub__cta" to="/services/closets">
            Learn more →
          </Link>
        </article>
      </div>

      {/* CTA */}
      <div className="serviceHub__ctaRow">
        <a className="btn btn--accent" href="tel:3464791647">
          Call for a Free Estimate
        </a>
        <Link className="btn btn--ghost" to="/contact">
          Get a Quote Online
        </Link>
      </div>

      {/* FAQs (optional but SEO-friendly) */}
      <div className="serviceHub__faqs">
        <h2 className="serviceHub__subtitle">Remodeling FAQs</h2>
        <details>
          <summary>Do you help with layout and design?</summary>
          <p>
            Yes. We handle space planning, cabinet layouts, fixture selections,
            and finish guides so decisions are fast and confident.
          </p>
        </details>
        <details>
          <summary>Can you work in phases?</summary>
          <p>
            Absolutely. We can split projects to fit your schedule and budget
            while minimizing downtime.
          </p>
        </details>
        <details>
          <summary>Do you pull permits?</summary>
          <p>
            Yes, we manage permits and coordinate inspections whenever required
            by your city or county.
          </p>
        </details>
      </div>
    </section>
  );
}
