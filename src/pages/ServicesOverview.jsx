import React from "react";
import { Link } from "react-router-dom";

import {
  LuHammer, // good for Remodeling
  LuPaintbrush, // Painting
  LuTreePine, // Outdoor
  LuDroplet, // Utilities (plumbing/electric could also use LuPlug)
} from "react-icons/lu";

const SERVICES = [
  {
    icon: <LuHammer size={28} aria-hidden="true" />,
    title: "Remodeling",
    items: ["Bathrooms", "Kitchens", "Custom Cabinets", "Closets"],
    to: "/services/remodeling",
    blurb:
      "From concept to completion kitchens, baths, and custom storage built to last.",
  },
  {
    icon: <LuPaintbrush size={28} aria-hidden="true" />,
    title: "Painting & Finishes",
    items: ["Interior & Exterior", "Sheetrock", "Siding"],
    to: "/services/painting",
    blurb:
      "Premium prep and finishes crisp lines, smooth walls, and durable exteriors.",
  },
  {
    icon: <LuTreePine size={28} aria-hidden="true" />,
    title: "Outdoor & Structural",
    items: ["Driveways", "Patios", "Fencing"],
    to: "/services/outdoor",
    blurb:
      "Concrete, patios, and fences that boost curb appeal and stand up to weather.",
  },
  {
    icon: <LuDroplet size={28} aria-hidden="true" />,
    title: "Utilities",
    items: ["Electrical", "Plumbing"],
    to: "/services/utilities",
    blurb:
      "Licensed pros for safe electrical and plumbing repairs, upgrades, and installs.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="services">
      <div className="services__head">
        <h2 className="services__title">Services</h2>
        <p className="services__subtitle">
          Everything you need from full remodels to premium finishes and
          utilities.
        </p>
      </div>

      <ul className="services__grid" role="list">
        {SERVICES.map((s) => (
          <li key={s.title} className="services__card">
            <div className="services__icon" aria-hidden="true">
              {s.icon}
            </div>
            <h3 className="services__cardTitle">{s.title}</h3>
            <p className="services__blurb">{s.blurb}</p>
            <ul className="services__bullets" role="list">
              {s.items.map((it) => (
                <li key={it} className="services__bullet">
                  • {it}
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
