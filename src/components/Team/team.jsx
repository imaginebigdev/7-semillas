/* eslint-disable @next/next/no-img-element */
import React from "react";
import teamSkillsProgress from "../../common/teamSkillsProgress";
import tooltipEffect from "../../common/tooltipEffect";
import teamsDate from "../../data/sections/team.json";

const Team = () => {
  React.useEffect(() => {
    teamSkillsProgress();
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp md-mb30" data-wow-delay=".5s">
              <div className="sub-title">
                <h6 style={{ color: "white" }}>NUESTROS VALORES</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className="feat">
                <li>
                  <h6>
                    <span>•</span> Compromiso
                  </h6>
                  <p>
                    Identificamos, sentimos cómo propios los objetivos comunes y
                    proponemos mejorar para su buen funcionamiento.
                  </p>
                </li>
                <li>
                  <h6>
                    <span>•</span> Confiabilidad
                  </h6>
                  <p>
                    Nos comprometemos con nuestros Clientes a proveerlos de
                    soluciones profesionales, específicas y ajustadas a cada uno
                    de sus requerimientos.
                  </p>
                </li>
                <li>
                  <h6>
                    <span>•</span> Innovación
                  </h6>
                  <p>
                    Nos comprometemos a la mejora continua buscando soluciones
                    creativas y eficientes que garanticen la sustentabilidad de
                    la empresa.
                  </p>
                </li>
                <li>
                  <h6>
                    <span>•</span> Responsabilidad social
                  </h6>
                  <p>
                    Nos comprometemos social y culturalmente con la comunidad,
                    devolviéndole a la sociedad parte de lo que hemos recibido
                    de ellos.
                  </p>
                </li>
                <li>
                  <h6>
                    <span>•</span> Seguridad
                  </h6>
                  <p>
                    Nos comprometemos a garantizar la seguridad, salud y
                    bienestar de todos nuestros ambientes de trabajo.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    {teamsDate.teams.slice(0, 2).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(0, 2).length
                              ? "mb-30"
                              : null
                          }`}
                        >
                          <img src={team.image} alt="" className="imago wow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(2, 4).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(2, 4).length
                              ? "mb-30"
                              : null
                          }`}
                        >
                          <img src={team.image} alt="" className="imago wow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
