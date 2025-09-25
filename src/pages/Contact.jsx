import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    // basic client validation
    const fd = new FormData(formRef.current);
    const name = fd.get("name")?.trim();
    const phone = fd.get("phone")?.trim();
    const email = fd.get("email")?.trim();
    const service = fd.get("service")?.trim();
    const message = fd.get("message")?.trim();

    if (!name || !phone || !service || !message) {
      setStatus({ type: "error", msg: "Please complete all required fields." });
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          phone,
          email,
          service,
          message,
          // helpful extra fields:
          submitted_at: new Date().toISOString(),
          source_page: window.location.pathname,
        },
        PUBLIC_KEY
      );
      setStatus({ type: "ok", msg: "Thanks! We’ll get back to you shortly." });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        msg: "Something went wrong sending your message. Please call or email us.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <Helmet>
        <title>Contact | Space Evolution Remodeling Houston</title>
        <meta
          name="description"
          content="Contact Space Evolution for remodeling, painting, cabinets, and more in Houston. Call (346) 479-1647 or request a free estimate online."
        />
        <link
          rel="canonical"
          href="https://spaceevolutionhouston.com/contact"
        />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact | Space Evolution Remodeling"
        />
        <meta
          property="og:description"
          content="Need a quote? Call or message Space Evolution for home remodeling in Houston."
        />
        <meta
          property="og:url"
          content="https://spaceevolutionhouston.com/contact"
        />
        <meta
          property="og:image"
          content="https://spaceevolutionhouston.com/images/og-home.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact | Space Evolution Remodeling"
        />
        <meta
          name="twitter:description"
          content="Houston remodeling company: fast estimates, quality work. Call or message us today."
        />
        <meta
          name="twitter:image"
          content="https://spaceevolutionhouston.com/images/og-home.png"
        />
      </Helmet>

      <div className="container contact__wrap">
        {/* Left: business + quick actions */}
        <div className="contact__info">
          <h2 className="contact__title">Get a Free Estimate</h2>
          <p className="contact__lead">
            Serving <strong>Houston</strong> and surrounding areas. Fast
            responses, quality craftsmanship.
          </p>

          <ul className="contact__list">
            <li>
              <span>Phone:</span>{" "}
              <a
                className="contact__link contact__link--call"
                href="tel:13464791647"
              >
                (346) 479-1647
              </a>
            </li>
            <li>
              <span>Email:</span>{" "}
              <a
                className="contact__link"
                href="mailto:spacevolution1@yahoo.com"
              >
                spacevolution1@yahoo.com
              </a>
            </li>
            <li>
              <span>Service Area:</span> Houston Metro + nearby cities
            </li>
          </ul>

          <div className="contact__ctaRow">
            <a href="tel:13464791647" className="btn btn--primary">
              Call Now
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get Free Estimate
            </a>
          </div>

          {/* Optional Map */}
          {/* <iframe
            className="contact__map"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!...YOUR_EMBED..."
            title="Service Area Map"
          /> */}
        </div>

        {/* Right: form */}
        <form
          ref={formRef}
          className="contact__form card"
          onSubmit={onSubmit}
          noValidate
        >
          <div className="field">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
            />
          </div>

          <div className="fieldGrid">
            <div className="field">
              <label htmlFor="phone">Phone *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(###) ###-####"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="service">Service Needed *</label>
            <select id="service" name="service" defaultValue="" required>
              <option value="" disabled>
                Select a service
              </option>
              <option>Kitchen Remodel</option>
              <option>Bathroom Remodel</option>
              <option>Interior/Exterior Painting</option>
              <option>Flooring / Tile</option>
              <option>Custom Cabinets / Closets</option>
              <option>Driveway / Patio / Fencing</option>
              <option>Electrical</option>
              <option>Plumbing</option>
              <option>Other</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Tell us briefly about your project…"
            />
          </div>

          {status.msg && (
            <p className={`contact__status contact__status--${status.type}`}>
              {status.msg}
            </p>
          )}

          <button className="btn btn--primary" type="submit" disabled={loading}>
            {loading ? "Sending…" : "Send Message"}
          </button>

          <p className="contact__safe">
            By submitting, you agree we may contact you about your request. We
            never share your info.
          </p>
        </form>
      </div>
    </section>
  );
}
