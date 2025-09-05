// src/pages/services/UtilitiesHub.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function UtilitiesHub() {
  const PHONE_DISPLAY = "346-479-1647";
  const PHONE_TEL = "3464791647";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are your electricians and plumbers licensed and insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We work with licensed and insured electricians and plumbers and coordinate permits and inspections when required.",
        },
      },
      {
        "@type": "Question",
        name: "Can you diagnose and fix urgent issues?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prioritize urgent leaks, clogs, and electrical faults. We’ll stabilize the issue and provide a clear, written repair plan.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle code upgrades during remodels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. When we remodel kitchens or baths, we update plumbing and electrical to current code and coordinate inspections.",
        },
      },
    ],
  };

  return (
    <section className="serviceHub container section" id="utilities">
      <Helmet>
        <title>Utilities | Electrical & Plumbing Services in Houston</title>
        <meta
          name="description"
          content="Licensed electrical and plumbing services: panel upgrades, lighting, outlets, leak repairs, water heaters, fixture installs, and code updates for remodels."
        />
        <link
          rel="canonical"
          href="https://www.yoursite.com/services/utilities"
        />
        <meta property="og:title" content="Utilities | Electrical & Plumbing" />
        <meta
          property="og:description"
          content="Safe, code-compliant electrical and plumbing—diagnostics, repairs, and upgrades."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <header className="serviceHub__head">
        <h1 className="serviceHub__title">Utilities</h1>
        <p className="serviceHub__lead">
          From flickering lights to leaky pipes, we keep your home’s critical
          systems safe, efficient, and up to code. Our licensed partners handle
          diagnostics, repairs, and upgrades, and we coordinate permits and
          inspections when required.
        </p>
        <div className="serviceHub__media">
          <img
            className="serviceHub__img"
            src="/images/services/utilities-hero.jpg"
            alt="Licensed electrician and plumber working safely on residential systems"
            loading="eager"
            width={1600}
            height={900}
          />
        </div>
      </header>

      {/* Content */}
      <div className="serviceHub__content prose">
        <h2>What We Do</h2>
        <ul>
          <li>Electrical: panel upgrades, new circuits, outlets &amp; GFCI</li>
          <li>
            Lighting: recessed, under-cabinet, exterior &amp; smart controls
          </li>
          <li>
            Plumbing: leaks, clogs, supply/drain repipes, fixture installs
          </li>
          <li>
            Water heaters (tank &amp; tankless), shut-off valves, regulators
          </li>
          <li>Code updates and inspections during remodels</li>
        </ul>
      </div>

      {/* Child services grid */}
      <div className="serviceHub__grid osgrid">
        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Electrical</h3>
          <p className="serviceHub__cardText">
            Safe, code-compliant wiring, service upgrades, lighting layouts, and
            troubleshooting for additions and remodels.
          </p>
          <Link className="serviceHub__cta" to="/services/electrical">
            Electrical Services →
          </Link>
        </article>

        <article className="serviceHub__card">
          <h3 className="serviceHub__cardTitle">Plumbing</h3>
          <p className="serviceHub__cardText">
            Leak detection and repairs, fixture installs, repipes, water
            heaters, and rough-ins for kitchens and baths.
          </p>
          <Link className="serviceHub__cta" to="/services/plumbing">
            Plumbing Services →
          </Link>
        </article>
      </div>

      {/* Process */}
      <div className="serviceHub__content prose">
        <h2>Our Process</h2>
        <ol className="serviceHub__steps">
          <li>Diagnose: inspect, test, and pinpoint the root cause.</li>
          <li>Plan: explain options, costs, and timelines up front.</li>
          <li>Fix: licensed work with quality parts and clean job sites.</li>
          <li>Verify: testing, walkthrough, and labeled documentation.</li>
        </ol>
      </div>

      {/* FAQs */}
      <div className="serviceHub__faqs">
        <h2 className="serviceHub__subtitle">Utilities FAQs</h2>
        <details>
          <summary>Can you add outlets or lighting?</summary>
          <p>
            Yes, including dedicated appliance circuits, GFCI/AFCI protection,
            dimmers, and smart switches.
          </p>
        </details>
        <details>
          <summary>Do you install tankless water heaters?</summary>
          <p>
            We install both tank and tankless systems and can advise on sizing,
            venting, and code requirements.
          </p>
        </details>
        <details>
          <summary>Will you coordinate permits?</summary>
          <p>
            Yes—when required by your city or county, we handle permits and
            schedule inspections.
          </p>
        </details>
      </div>

      {/* CTA */}
      <div className="serviceHub__ctaRow" style={{ marginTop: "1rem" }}>
        <a className="btn btn--accent" href={`tel:${PHONE_TEL}`}>
          Call {PHONE_DISPLAY} for a Free Estimate
        </a>
        <Link className="btn btn--ghost" to="/contact">
          Get Free Estimate
        </Link>
      </div>
    </section>
  );
}
