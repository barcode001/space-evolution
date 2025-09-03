import { Link } from "react-router-dom";
import React from "react";
import clientInfo from "../config/clientInfo";

// import icons from react-icons
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="design-credit">
          Designed by{" "}
          <a
            href="https://theedenscode.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            EdensCode
          </a>
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social icons */}
        <div className="footer-social">
          {clientInfo.social.instagram && (
            <a
              href={clientInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={22} />
            </a>
          )}
          {clientInfo.social.facebook && (
            <a
              href={clientInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={22} />
            </a>
          )}
          {clientInfo.social.tiktok && (
            <a
              href={clientInfo.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={22} />
            </a>
          )}
        </div>

        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
}
