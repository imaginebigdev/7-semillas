/* eslint-disable @next/next/no-img-element */
import React from "react";

const PagesHeader = () => {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" style={{ marginTop: "100px" }}>
            <div className="img">
              <img src="/img/slid/about.jpg" className="img-full" alt="" />
              <img src="/img/slid/about2.jpg" className="img-phone" alt="" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="cont mt-100 mb-50 text-center">
              <h2 className="color-font fw-700">
                Nacimos hace más de 20 años dedicandonos a transportes
                petroleros DTM para equipos de perforación (drilling),
                terminación (workover), pulling, obras civiles y movimiento de
                suelo.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
