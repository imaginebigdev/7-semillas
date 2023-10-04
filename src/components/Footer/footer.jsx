/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contacto</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Dirección</h6>
                    <p>Caseros 625 Pb Dpto. E, SFV de Catamarca.</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>info.grupo7s@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Teléfono</h6>
                    <p>+549 383 478 6895</p>
                    <p>+549 383 478 6896 </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Descargar Brochure</h5>
              </div>
              <div className="item">
                <div className="social">
                  <a
                    href="http://smitsrl.com.ar/pdf/smit.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-file-pdf fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img
                  src={appData.lightLogo}
                  style={{ width: "130px" }}
                  alt=""
                />
              </div>
              <div className="social">
                <a href=" " target="_blank" rel="noreferrer" className="icon">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href=" " target="_blank" rel="noreferrer" className="icon">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href=" " target="_blank" rel="noreferrer" className="icon">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href=" " target="_blank" rel="noreferrer" className="icon">
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
                <a href=" " target="_blank" rel="noreferrer">
                  <i className="fab fa-whatsapp fa-2x"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  Copyright © 2023 - SMIT - Todos los derechos reservados -
                  imagineBig .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
