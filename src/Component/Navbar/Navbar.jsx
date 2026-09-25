import { useEffect } from "react";
import { setupNavbar } from "./NavbarData";
import "./Navbar.css";
import netlinkslogo from "../../assets/netlinkslogo.jpg";

function Navbar() {
  useEffect(() => {
    const cleanup = setupNavbar();
    return cleanup;
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="/" className="navbar-logo">
        <img src={netlinkslogo} alt="Netlinks" />
      </a>

      {/* Hamburger button */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation links */}
      <div className="nav-links">
        <a href="#solutions" className="nav-link">
          Solutions <span className="arrow"></span>
        </a>

        <a href="#services" className="nav-link">
          Services <span className="arrow"></span>
        </a>

        <a href="#industries" className="nav-link">
          Industries <span className="arrow"></span>
        </a>

        <a href="#partners" className="nav-link">
          Partners
        </a>

        <a href="#company" className="nav-link">
          Company <span className="arrow"></span>
        </a>

        <a href="#contact" className="mobile-cta">
          Get started ↗
        </a>
      </div>

      {/* Desktop button */}
      <a href="#contact" className="nav-button">
        Get started <span>↗</span>
      </a>
    </nav>
  );
}

export default Navbar;