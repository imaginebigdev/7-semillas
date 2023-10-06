/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import blog2Data from "../../data/blog2.json";

const Footer = ({ hideBGCOLOR }) => {
  const ultimosTresNoticias = blog2Data.slice(-1);
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`} style={{padding: "0"}}>
      <div className="container">
        <div className="row mt-50">
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
          <div className="col-lg-4">
            <Link href={"/experiencia"}>
              <div className="item md-mb50">
                <div className="title">
                  <h5>Ultimas experiencias</h5>
                </div>
                <div className="col-lg-7 offset-lg-1">
                  <div className="posts mt-80" style={{ cursor: "pointer" }}>
                    {ultimosTresNoticias?.map((blogItem, index) => (
                      <div
                        className="item mb-80 wow fadeInUp"
                        key={blogItem.id}
                        data-wow-delay=".3s"
                      >
                        <div className="img valign">
                          <img
                            /* style={{ widt: "200px", height: "300px" }} */
                            src={blogItem.image}
                            alt=""
                          />
                        </div>

                        <div className="cont valign">
                          <div>
                            <div className="info">
                              <span
                                style={{ color: "#ffe00e" }}
                                className="pt-20"
                              >
                                {blogItem.date.day}
                              </span>
                              <span>/</span>
                              <span className="tag">{blogItem.Cliente}</span>
                            </div>{/* 
                            <h5>{blogItem.title}</h5> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img
                  src={appData.lightLogo}
                  style={{ width: "130px" }}
                  alt=""
                />
              </div>
              {/* <div className="social">
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
              </div> */}
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
