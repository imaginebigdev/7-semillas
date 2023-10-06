/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img className="thumparallax-down" src="/img/propu.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">NUESTRA PROPUESTA</h4>

              <ul className="feat" style={{ color: "white" }}>
                <li>
                  <h6>
                    <p>
                      {" "}
                      <span>1</span>
                      Ofrecemos llevar a cabo el desarrollo de proyectos y la
                      ejecución de obras de infraestructura publicas - privadas
                      y anexas al desarrollo minero, tanto en las especialidades
                      vial, civil e hidráulica, integrando esto con actividades
                      complementarias y de apoyo, tales como estudios
                      topográficos y geotécnicos.
                    </p>
                  </h6>
                </li>
                <li>
                  <h6>
                    <p>
                      <span>2</span>
                      También, planteamos como propuesta el gerenciamiento y/o
                      la auditoria externa, de las obras de infraestructura, en
                      el caso de que las mismas no fuesen ejecutadas como parte
                      de nuestro servicio.
                    </p>
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
