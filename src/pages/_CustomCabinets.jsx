import React from "react";
import { Helmet } from "react-helmet-async";

export default function CustomCabinets() {
  return (
    <section className="service container section">
      <Helmet>
        <title>Custom Cabinets & Closets | Space Evolution</title>
        <meta
          name="description"
          content="Built-to-fit cabinets, pantries, and walk-in closets. Premium materials, smart storage, and clean installs across Houston and surrounding areas."
        />
        <link
          rel="canonical"
          href="https://www.yourdomain.com/services/custom-cabinets"
        />
        <meta
          property="og:title"
          content="Custom Cabinets & Closets | Space Evolution"
        />
        <meta
          property="og:description"
          content="From shaker to modern slab—maximize storage with custom cabinets and closets designed for your home and lifestyle."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="service__title">Custom Cabinets & Closets</h1>

      {/* Hero Image */}
      <div className="service__media">
        <img
          src="/images/custom-cabinets.jpg"
          alt="Built-in custom cabinets and organized walk-in closet"
          className="service__img"
        />
      </div>

      <p className="service__lead">
        Get storage that actually fits your space. We design and build custom
        cabinets and closets with durable materials, smooth hardware, and a
        clean, professional finish.
      </p>

      <h2 className="service__subtitle">Cabinet Styles & Options</h2>
      <ul className="service__list">
        <li>Shaker, slab, and raised-panel doors</li>
        <li>Painted, stained, and natural wood finishes</li>
        <li>Soft-close doors & drawers, pull-outs, spice racks</li>
        <li>Pantries, mudrooms, laundry & garage storage</li>
        <li>Built-ins for living rooms, offices, and media walls</li>
      </ul>

      <h2 className="service__subtitle">Closet Systems</h2>
      <ul className="service__list">
        <li>Walk-in and reach-in closets tailored to your layout</li>
        <li>Shoe walls, drawers, jewelry organizers</li>
        <li>Adjustable shelving and double-hang solutions</li>
        <li>Lighting upgrades and mirrored doors</li>
      </ul>

      <h2 className="service__subtitle">Our Process</h2>
      <ol className="service__steps">
        <li>
          <strong>Measure & Consult:</strong> We take precise measurements and
          discuss goals, styles, and budget.
        </li>
        <li>
          <strong>Design & Quote:</strong> You’ll get a clear layout, material
          options, and an upfront price.
        </li>
        <li>
          <strong>Build & Install:</strong> Professional fabrication and clean
          installation with minimal disruption.
        </li>
      </ol>

      <div className="service__cta">
        <a className="btn btn--accent" href="tel:3464791647">
          Call Now for a Free Estimate
        </a>
      </div>
    </section>
  );
}
