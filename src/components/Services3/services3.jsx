import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Nuestros mejores servicios
              </h6>
              <h3 className="wow color-font">
                Servicios petroleros y de logistica.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <img
                  src="/img/icons/A1.png"
                  alt="logo"
                  style={{ width: "140px" }}
                />
              </span>
              <h5>Transporte de carga petrolera</h5>
              <p>
                DTM para equipos de perforación (drilling), terminación
                (workover) y pulling
              </p>
              <Link href="/empresa/unidades-de-negocio/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <img
                  src="/img/icons/A2.png"
                  alt="logo"
                  style={{ width: "140px" }}
                />
              </span>
              <h5> Transporte de cargas generales</h5>
              <p>
                Contamos con el equipo adecuado para adaptarnos a cualquier tipo
                de carga
              </p>
              <Link href="/empresa/unidades-de-negocio/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <img
                  src="/img/icons/A3.png"
                  alt="logo"
                  style={{ width: "140px" }}
                />
              </span>
              <h5>Transporte de carga de grandes dimensiones</h5>
              <p>
                Contamos con el equipo y la organizacion para transportar cargas
                de grandes dimensiones
              </p>
              <Link href="/empresa/unidades-de-negocio/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <img
                  src="/img/icons/A4.png"
                  alt="logo"
                  width="80px"
                  style={{ width: "140px" }}
                />
              </span>
              <h5>
                Contamos con vehículos 4x4 para realizar el mantenimiento en
                campo y/o vehículo guía
              </h5>
              <p></p>
              <Link href="/empresa/unidades-de-negocio/">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
