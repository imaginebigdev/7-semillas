import React from "react";
import Split from "../Split";
import Link from "next/link";

const CallToAction = ({ img }) => {
  return (
    <section
      className="call-action section-padding sub-bg bg-img"
      style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
      id="/contacto"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <h6 className="wow words chars splitting" data-splitting>
                Hablemos
              </h6>
              <h2 className="wow words chars splitting" data-splitting>
                De su proximo
                <br />{" "}
                <b className="back-color" style={{ color: "white" }}>
                  proyecto
                </b>
                .
              </h2>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <Link href={`/contacto`}>
              <a className="butn bord curve wow fadeInUp" data-wow-delay=".5s">
                <span>Contacto</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
