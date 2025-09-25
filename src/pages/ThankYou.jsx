import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="thankyou section">
      <div className="container thankyou__wrap">
        <h1 className="thankyou__title">Thank You!</h1>
        <p className="thankyou__message">
          We’ve received your message and will be in touch shortly. We
          appreciate your interest in Space Evolution.
        </p>

        <div className="thankyou__actions">
          <Link to="/" className="btn btn--primary">
            Back to Home
          </Link>
          <a href="tel:13464791647" className="btn btn--ghost">
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
