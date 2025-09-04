import { HashLink } from "react-router-hash-link";
import clientInfo from "../config/clientInfo";
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

        {/* Footer nav links */}
        <div className="footer-links">
          <HashLink smooth to="#hero">
            Home
          </HashLink>
          <HashLink smooth to="#services">
            Services
          </HashLink>
          <HashLink smooth to="#about">
            About
          </HashLink>
          <HashLink smooth to="#contact">
            Contact
          </HashLink>
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
