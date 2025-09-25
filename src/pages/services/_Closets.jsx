import { Helmet } from "react-helmet-async";
import closet from "../../assets/images/closet2.png";

export default function Closets() {
  return (
    <section className="service container section">
      <Helmet>
        <title>Closet Remodeling & Custom Storage | Space Evolution</title>
        <meta
          name="description"
          content="Maximize your space with custom closet remodeling. Built-in shelving, walk-in closets, and smart storage solutions in Houston."
        />
        <link
          rel="canonical"
          href="https://spaceevolutionhouston.com/services/closets"
        />
      </Helmet>

      <h1 className="service__title">Closet Remodeling</h1>

      <div className="service__media">
        <img
          src={closet}
          alt="Custom walk-in closet with shelves and storage"
          className="service__img"
        />
      </div>

      <p className="service__lead">
        Transform your closets into highly functional, stylish spaces. From
        walk-ins to reach-ins, our team designs storage solutions that maximize
        organization while looking beautiful.
      </p>

      <h2 className="service__subtitle">What We Offer</h2>
      <ul className="service__list">
        <li>Walk-in closet design & installation</li>
        <li>Built-in shelving and drawers</li>
        <li>Custom storage for shoes, bags, and accessories</li>
        <li>Lighting and mirror upgrades</li>
        <li>Space-saving layouts for any home</li>
      </ul>

      <div className="service__cta">
        <a className="btn btn--accent" href="tel:3464791647">
          Call Now for a Free Estimate
        </a>
      </div>
    </section>
  );
}
