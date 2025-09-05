import React from "react";
import { Link } from "react-router-dom";
import { LuHammer, LuPaintbrush, LuTreePine, LuDroplet } from "react-icons/lu";

const SERVICES = [
  {
    icon: <LuHammer size={28} aria-hidden="true" />,
    title: "Remodeling",
    blurb:
      "From concept to completion—kitchens, baths, and custom storage built to last.",
    to: "/services/remodeling", // hub page (optional)
    items: [
      { name: "Kitchens", to: "/services/kitchen-remodeling" },
      { name: "Bathrooms", to: "/services/bathroom-remodeling" },
      { name: "Custom Cabinets", to: "/services/custom-cabinets" },
      { name: "Closets", to: "/services/closets" },
    ],
  },
  {
    icon: <LuPaintbrush size={28} aria-hidden="true" />,
    title: "Painting & Finishes",
    blurb:
      "Premium prep and finishes—crisp lines, smooth walls, and durable exteriors.",
    to: "/services/painting",
    items: [
      { name: "Interior & Exterior", to: "/services/painting" },
      { name: "Sheetrock", to: "/services/drywall-sheetrock" },
      { name: "Siding", to: "/services/siding" },
    ],
  },
  {
    icon: <LuTreePine size={28} aria-hidden="true" />,
    title: "Outdoor & Structural",
    blurb:
      "Concrete, patios, and fences that boost curb appeal and stand up to weather.",
    to: "/services/outdoor",
    items: [
      { name: "Driveways", to: "/services/fencing-driveways" },
      { name: "Patios", to: "/services/patios-concrete" },
      { name: "Fencing", to: "/services/fencing-driveways" },
    ],
  },
  {
    icon: <LuDroplet size={28} aria-hidden="true" />,
    title: "Utilities",
    blurb:
      "Licensed pros for safe electrical and plumbing repairs, upgrades, and installs.",
    to: "/services/utilities",
    items: [
      { name: "Electrical", to: "/services/electrical" },
      { name: "Plumbing", to: "/services/plumbing" },
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="services" id="services">
      <div className="services__head container">
        <h2 className="services__title">Services</h2>
        <p className="services__subtitle">
          Everything you need—from full remodels to premium finishes and
          utilities.
        </p>
      </div>

      <ul className="services__grid container" role="list">
        {SERVICES.map((s) => (
          <li key={s.title} className="services__card">
            <div className="services__icon" aria-hidden="true">
              {s.icon}
            </div>

            <h3 className="services__cardTitle">{s.title}</h3>
            <p className="services__blurb">{s.blurb}</p>

            <ul className="services__bullets" role="list">
              {s.items.map((it) => (
                <li key={it.name} className="services__bullet">
                  <Link to={it.to} className="services__bulletLink">
                    {it.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              className="services__cta"
              to={s.to}
              aria-label={`Learn more about ${s.title}`}
            >
              Learn More →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
