/* eslint-disable @next/next/no-img-element */
import React from "react";
import initIsotope from "../../common/initIsotope";

const Projects = () => {
  let [section, setSection] = React.useState({
    youth: true,
    sports: false,
    security: false,
    urbanism: false,
  });
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  return (
    <section
      className="portfolio po-arch section-padding pb-70"
      id="servicios"
      style={{ marginBottom: "100vh" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3
                className="fw-600 text-u ls1 mb-30 color-font"
                data-wow-delay=".3s"
              >
                Forma de desarrollo de proyectos
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span
                className="active"
                value="youth"
                onClick={() =>
                  setSection({
                    youth: true,
                    sports: false,
                    security: false,
                    urbanism: false,
                  })
                }
              >
                diseño y calculo Estructural
              </span>
              <span
                value="sports"
                onClick={() =>
                  setSection({
                    youth: false,
                    sports: true,
                    security: false,
                    urbanism: false,
                  })
                }
              >
                infraestructura vial
              </span>
              <span
                value="security"
                onClick={() =>
                  setSection({
                    youth: false,
                    sports: false,
                    security: true,
                    urbanism: false,
                  })
                }
              >
                infraestructura sanitaria e hidráulica
              </span>
              {/* <span
                value="urbanism"
                onClick={() =>
                  setSection({
                    youth: false,
                    sports: false,
                    security: false,
                    urbanism: true,
                  })
                }
              >
                URBANISMO
              </span> */}
            </div>
          </div>

          <div className="gallery full-width">
            {section.youth === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <img
                        className="thumparallax-down"
                        src="/img/012.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font">
                        Proyectos de diseño y calculo Estructural
                      </h4>
                      <p className="wow txt" data-splitting>
                        Desarrollo de proyectos de ingeniería estructural,
                        mediante el diseño, modelación tridimensional mediante
                        método de elementos finitos, calculo y dimensionamiento
                        de estructuras de hormigón armado, estructuras metálicas
                        y madera, etc. Elaboración de memorias, planos,
                        planillas y documentación de detalle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {section.sports === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <img
                        className="thumparallax-down"
                        src="/img/013.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font">
                        Proyectos de infraestructura vial
                      </h4>
                      <p className="wow txt" data-splitting>
                        Desarrollo de proyectos de ingeniería civil y vial,
                        mediante la realización de estudios topográficos, diseño
                        geométrico de caminos, puentes y obras complementarias.
                        Elaboración de planos, planillas y documentación de
                        detalle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {section.security === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <img
                        className="thumparallax-down"
                        src="/img/014.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font">
                        Proyectos de infraestructura sanitaria e hidráulica
                      </h4>
                      <p className="wow txt" data-splitting>
                        Desarrollo de proyectos de agua potable, saneamiento y
                        desagües pluviales, análisis de variables, cálculos y
                        verificaciones integrales. Asesoramiento tecnológico
                        relacionado a los proyectos y planteo de alternativas de
                        aplicación según la magnitud de la implementación.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {section.urbanism === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <img
                        className="thumparallax-down"
                        src="/img/min-area.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font">urbanismo</h4>
                      <p className="wow txt" data-splitting>
                        Our creative Ad agency is ranked among the finest in the
                        US. We cultivate smart ideas for start-ups and seasoned
                        players. Our creative Ad agency is ranked among the
                        finest in the US. We cultivate smart ideas for start-ups
                        and seasoned players. Our creative Ad agency is ranked
                        among the finest in the US. We cultivate smart ideas for
                        start-ups and seasoned players. Our creative Ad agency
                        is ranked among the finest in the US. We cultivate smart
                        ideas for start-ups and seasoned players.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
