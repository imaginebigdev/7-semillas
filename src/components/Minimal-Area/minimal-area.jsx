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
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">NUESTROS OBJETIVOS</h4>

              <ul className="feat" style={{ color: "white" }}>
                <li>
                  <h6>
                    <span>1</span> MISIÓN
                  </h6>
                  <p>
                    Proporcionar soluciones profesionales, personalizadas y con
                    la mejor relación costo/beneficio para la Industria
                    Petrolera, Minera, Obras Civiles, Empresas y usuarios
                    finales para acompañar a nuestros Clientes como parte activa
                    en el cumplimiento de sus objetivos.
                  </p>
                </li>
                <li>
                  <h6>
                    <span>2</span> VISIÓN
                  </h6>
                  <p>
                    Satisfacer las expectativas de nuestros Clientes basándonos
                    en la calidad, la mejora continua, la responsabilidad, la
                    calidad de nuestros productosy el profesionalismo de
                    nuestros servicios, ofreciendo soluciones ágiles y adecuadas
                    a cada requerimiento. Respondemos a cada necesidad a partir
                    de un conocimiento exhaustivointegral y comprometido con el
                    negocio, constituyendo esto el estándar de valor y calidad
                    que nos permita construir una multinacional líder en sus
                    mercados.
                  </p>
                </li>
                <li>
                  <h6>
                    <span>3</span> FUNCIÓN
                  </h6>
                  <p>
                    Brindar a cada uno de nuestros Clientes respuestas
                    inmediatas, una provisión eficaz, eficiente, oportuna, que
                    acompañe las necesidades técnicas y económicas, proveyendo
                    marcas líderes, soluciones innovadoras y servicios de la más
                    alta calidada nivel nacional e internacional. Brindamos
                    servicios excepcionales que crean valor, reducen riesgos y
                    optimizanlos costos con la máxima eficiencia para mejorar la
                    rentabilidad, sin límites ni fronteras.
                  </p>
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
