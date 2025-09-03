import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const firstFocusable = useRef(null);
  const lastFocusable = useRef(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => (document.documentElement.style.overflow = "");
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      // basic focus trap
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

  const close = () => setOpen(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="nav">
      <div className="nav__bar">
        <Link to="/" className="nav__brand" aria-label="Go to homepage">
          {/* Replace with your logo/SVG */}
          <span className="nav__brandText">ClientName</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav__links" role="menubar" aria-label="Primary">
          {navItems.map((item) => (
            <li key={item.to} role="none">
              <NavLink
                role="menuitem"
                to={item.to}
                className={({ isActive }) =>
                  "nav__link" + (isActive ? " is-active" : "")
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Backdrop */}
      <button
        className={"nav__backdrop" + (open ? " is-open" : "")}
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        onClick={close}
      />

      {/* Mobile drawer */}
      <aside
        id="mobile-drawer"
        className={"nav__drawer" + (open ? " is-open" : "")}
        aria-hidden={!open}
      >
        <button className="nav__close" aria-label="Close menu" onClick={close}>
          <span></span>
          <span></span>
        </button>
        <div className="nav__drawerInner">
          <Link
            to="/"
            className="nav__brand nav__brand--drawer"
            onClick={close}
            ref={firstFocusable}
          >
            <span className="nav__brandText">ClientName</span>
          </Link>

          <ul className="nav__drawerLinks" role="menu" aria-label="Mobile">
            {navItems.map((item, idx) => {
              const isLast = idx === navItems.length - 1;
              return (
                <li key={item.to} role="none">
                  <NavLink
                    role="menuitem"
                    to={item.to}
                    className={({ isActive }) =>
                      "nav__link nav__link--drawer" +
                      (isActive ? " is-active" : "")
                    }
                    onClick={close}
                    ref={isLast ? lastFocusable : null}
                    end={item.to === "/"}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </nav>
  );
}
