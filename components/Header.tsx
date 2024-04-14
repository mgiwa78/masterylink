import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="tu-header">
      <nav className="navbar navbar-expand-xl tu-navbar">
        <div className="container-fluid">
          <strong>
            <Link className="navbar-brand" href="/">
              <img src="/images/logo.png" alt="Logo" />
            </Link>
          </strong>
          <button
            className="tu-menu"
            aria-label="Main Menu"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle="collapse"
          >
            <i className="icon icon-menu"></i>
          </button>
          <div
            className="collapse navbar-collapse tu-themenav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="listings">
                  Online classes
                  <span className="tu-tag">NEW</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="listings">
                  Learning material
                  <span className="tu-tag tu-bggreen">FREE</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/#tu-sucesstorsection">
                  Success stories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/how-it-works">
                  How it works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/packages">
                  Packages
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
