/* eslint-disable @next/next/no-img-element */
import React from "react";
/* import Link from "next/link"; */
import { Link } from "react-scroll";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img
                  ref={lr}
                  src={appData.darkLogo}
                  style={{ width: "130px" }}
                  alt="logo"
                />
              ) : (
                <img
                  ref={lr}
                  src={appData.lightLogo}
                  style={{ width: "130px" }}
                  alt="logo"
                />
              )
            ) : (
              <img
                ref={lr}
                src={appData.lightLogo}
                style={{ width: "130px" }}
                alt="logo"
              />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <Link
                to=""
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  handleMobileDropdown();
                }}
                offset={50}
                duration={500}
              >
                <a className="nav-link">Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros">
                <a className="nav-link">Quienes somos</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="servicios">
                <a className="nav-link" to="servicios">
                  Servicios
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="blog" spy={true} offset={50} duration={500}>
                <a className="nav-link">Experiencia</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto">
                <a className="nav-link">Contacto</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
