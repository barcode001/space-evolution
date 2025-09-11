import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import clientInfo from "../config/clientInfo";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../assets/images/space-evolution-logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const firstFocusable = useRef(null);
  const lastFocusable = useRef(null);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => (document.documentElement.style.overflow = "");
  }, [open]);

  // Esc + simple focus trap
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileServicesOpen(false);
      }
      if (open && e.key === "Tab") {
        const f = firstFocusable.current;
        const l = lastFocusable.current;
        if (!f || !l) return;
        if (e.shiftKey && document.activeElement === f) {
          e.preventDefault();
          l.focus();
        } else if (!e.shiftKey && document.activeElement === l) {
          e.preventDefault();
          f.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const closeAll = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav__bar">
        <Link to="/" className="nav__brand" aria-label="Go to homepage">
          <img
            className="logo"
            src={logo}
            alt="Space Evolution"
            width={50}
            height={50}
            decoding="async"
          />
        </Link>

        {/* Desktop links */}
        <ul className="nav__links" role="menubar" aria-label="Primary">
          <li role="none">
            <HashLink to="/#about" className="nav__link">
              About
            </HashLink>
          </li>

          {/* Services dropdown */}
          <li
            className="nav__item--hasSub"
            role="none"
            onMouseLeave={(e) => {
              const p = e.currentTarget;
              p.classList.remove("is-open");
              const btn = p.querySelector(".nav__link--button");
              if (btn) btn.setAttribute("aria-expanded", "false");
            }}
          >
            <button
              className="nav__link nav__link--button"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="services-submenu"
              onClick={(e) => {
                // toggle for click/touch/keyboard
                const p = e.currentTarget.closest(".nav__item--hasSub");
                const nowOpen = p.classList.toggle("is-open");
                e.currentTarget.setAttribute(
                  "aria-expanded",
                  nowOpen ? "true" : "false"
                );
              }}
              onBlur={(e) => {
                // close when focus leaves the whole submenu group
                setTimeout(() => {
                  const p = e.currentTarget.closest(".nav__item--hasSub");
                  if (p && !p.contains(document.activeElement)) {
                    p.classList.remove("is-open");
                    e.currentTarget.setAttribute("aria-expanded", "false");
                  }
                }, 0);
              }}
            >
              Services{" "}
              <span className="nav__chev" aria-hidden="true">
                ▾
              </span>
            </button>

            <ul id="services-submenu" className="nav__submenu" role="menu">
              <li role="none">
                <Link
                  to="/services/kitchen-remodeling"
                  className="nav__submenuLink"
                >
                  Kitchen Remodeling
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/services/bathroom-remodeling"
                  className="nav__submenuLink"
                >
                  Bathroom Remodeling
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/services/custom-cabinets"
                  className="nav__submenuLink"
                >
                  Custom Cabinets
                </Link>
              </li>
              <li role="none">
                <Link to="/services/closets" className="nav__submenuLink">
                  Closets
                </Link>
              </li>
              <li role="none">
                <Link to="/services/painting" className="nav__submenuLink">
                  Interior Painting
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/services/exterior-painting"
                  className="nav__submenuLink"
                >
                  Exterior Painting
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/services/drywall-sheetrock"
                  className="nav__submenuLink"
                >
                  Drywall &amp; Sheetrock
                </Link>
              </li>
              <li role="none">
                <Link to="/services/siding" className="nav__submenuLink">
                  Siding
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/services/patios-concrete"
                  className="nav__submenuLink"
                >
                  Patios &amp; Concrete
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/services/fencing-driveways"
                  className="nav__submenuLink"
                >
                  Fencing &amp; Driveways
                </Link>
              </li>
              <li role="none">
                <Link to="/services/plumbing" className="nav__submenuLink">
                  Plumbing
                </Link>
              </li>
              <li role="none">
                <Link to="/services/electrical" className="nav__submenuLink">
                  Electrical
                </Link>
              </li>
            </ul>
          </li>

          <li role="none">
            <HashLink to="/#gallery" className="nav__link">
              Gallery
            </HashLink>
          </li>
          <li role="none">
            <HashLink to="/#testimonials" className="nav__link">
              Testimonials
            </HashLink>
          </li>
          <li role="none">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Call Now */}
        <a
          href={`tel:${clientInfo.contact.phone}`}
          className="btn btn--accent nav__cta"
        >
          <FiPhoneCall size={18} /> Call Now
        </a>

        {/* Burger */}
        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Backdrop */}
      <button
        className={"nav__backdrop" + (open ? " is-open" : "")}
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        onClick={closeAll}
      />

      {/* Mobile drawer */}
      <aside
        id="mobile-drawer"
        className={"nav__drawer" + (open ? " is-open" : "")}
        aria-hidden={!open}
      >
        <button
          className="nav__close"
          aria-label="Close menu"
          onClick={closeAll}
        >
          <span></span>
          <span></span>
        </button>

        <div className="nav__drawerInner" ref={firstFocusable}>
          <HashLink
            smooth
            to="/#hero"
            className="nav__brand nav__brand--drawer"
            onClick={closeAll}
          >
            <span className="nav__brandText">Space Evolution</span>
          </HashLink>

          <ul className="nav__drawerLinks" role="menu" aria-label="Mobile">
            <li role="none">
              <HashLink
                smooth
                to="/#about"
                className="nav__link nav__link--drawer"
                onClick={closeAll}
              >
                About
              </HashLink>
            </li>

            {/* Mobile Services collapsible */}
            <li
              className={
                "nav__drawerGroup" + (mobileServicesOpen ? " is-open" : "")
              }
            >
              <button
                type="button"
                className="nav__drawerToggle"
                aria-expanded={mobileServicesOpen ? "true" : "false"}
                aria-controls="mobile-services-submenu"
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                <span>Services</span>
                <span className="nav__chev">▾</span>
              </button>

              <ul id="mobile-services-submenu" className="nav__drawerSub">
                <li>
                  <HashLink
                    smooth
                    to="/#services"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    All Services
                  </HashLink>
                </li>
                <li>
                  <Link
                    to="/services/kitchen-remodeling"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Kitchen Remodeling
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/bathroom-remodeling"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Bathroom Remodeling
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/custom-cabinets"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Custom Cabinets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/closets"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Closets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/painting"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Interior Painting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/exterior-painting"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Exterior Painting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/drywall-sheetrock"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Drywall &amp; Sheetrock
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/siding"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Siding
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/patios-concrete"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Patios &amp; Concrete
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/fencing-driveways"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Fencing &amp; Driveways
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/plumbing"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Plumbing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/electrical"
                    className="nav__drawerLink"
                    onClick={closeAll}
                  >
                    Electrical
                  </Link>
                </li>
              </ul>
            </li>

            <li role="none">
              <HashLink
                smooth
                to="/#gallery"
                className="nav__link nav__link--drawer"
                onClick={closeAll}
              >
                Gallery
              </HashLink>
            </li>
            <li role="none">
              <HashLink
                smooth
                to="/#testimonials"
                className="nav__link nav__link--drawer"
                onClick={closeAll}
              >
                Testimonials
              </HashLink>
            </li>
            <li role="none">
              <Link
                to="/contact"
                className="nav__link nav__link--drawer"
                onClick={closeAll}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <span tabIndex={-1} ref={lastFocusable} />
      </aside>
    </nav>
  );
}
