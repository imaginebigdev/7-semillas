import React from "react";
import featuresData from "../../data/sections/features.json";
import { Link } from "react-scroll";

const Services5 = () => {
  return (
    <section className="services box lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3 className="wow color-font">Nuestras unidades de negocios</h3>
              <br />
              <p>
                Tenemos una estructura moderna y ágil que ofrece respuestas
                adaptadas a las necesidades de cada Cliente, con la flexibilidad
                y eficiencia necesaria para satisfacer las más variadas y
                complejas demandasen todo el territorio nacional e internacional
                mediante la apertura de oficinas en distintos países. La gran
                experiencia, conocimientos, profesionalismo y vocación de
                servicio de nuestros recursos nos permite atender las cinco
                unidades de negocio actuales:
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {featuresData.map((item, index) => (
            <div
              className="col-lg-6"
              data-wow-delay={
                index == 0
                  ? ".5s"
                  : index == 1
                  ? ".7s"
                  : index === 2
                  ? ".9s"
                  : ".5s"
              }
              key={item.id}
            >
              <div className="item-box no-curve">
                <div>
                  <img
                    src={`${item.img}`}
                    alt="logo"
                    style={{ width: "108px", height: "108px" }}
                  />
                </div>
                <div className="cont">
                  <h6>{item.title}</h6>
                  <Link
                    className="nav-link"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <span className="butn bord2 curve mt-30">Mas info</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services5;
