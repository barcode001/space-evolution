import { Helmet } from "react-helmet-async";
import kitchen from "../assets/images/kitchen001.png";

export default function KitchenRemodeling() {
  return (
    <>
      <Helmet>
        <title>Kitchen Remodeling in Houston | Space Evolution</title>
        <meta
          name="description"
          content="Custom cabinets, countertops, flooring, and full kitchen remodeling in Houston. Functional layouts, clean installs, and modern finishes."
        />
        <meta
          name="keywords"
          content="kitchen remodeling Houston, kitchen renovation, custom cabinets Houston, kitchen contractors"
        />
        <link
          rel="canonical"
          href="https://spaceevolutionhouston.com/services/kitchen-remodeling"
        />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Kitchen Remodeling in Houston | Space Evolution"
        />
        <meta
          property="og:description"
          content="Transform your outdated kitchen into a modern, functional, and beautiful space with Space Evolution."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://spaceevolutionhouston.com/services/kitchen-remodeling"
        />
        <meta
          property="og:image"
          content="https://www.spaceevolutionhouston.com/images/og-home.png"
        />
      </Helmet>

      <section className="service container section">
        <h1 className="service__title">Kitchen Remodeling</h1>

        {/* Hero Image */}
        <div className="service__media">
          <img
            src={kitchen}
            alt="Modern kitchen remodel with custom cabinets and island"
            className="service__img"
          />
        </div>

        <p className="service__lead">
          Your kitchen is the heart of your home. Whether you’re looking for a
          modern upgrade or a complete redesign, we transform outdated kitchens
          into functional and beautiful spaces your family will love.
        </p>

        <h2 className="service__subtitle">What We Offer</h2>
        <ul className="service__list">
          <li>Custom cabinets and storage solutions</li>
          <li>Granite, quartz, or marble countertops</li>
          <li>Stylish backsplashes and accent walls</li>
          <li>Open-concept layouts and kitchen islands</li>
          <li>Durable flooring and modern lighting</li>
        </ul>

        <div className="service__cta">
          <a className="btn btn--accent" href="tel:3464791647">
            Call Now for a Free Estimate
          </a>
        </div>
      </section>
    </>
  );
}
