import React from "react";
import Split from "../Split";
import AboutInfo1Data from "../../data/sections/about-info1.json";
import Testimonials from "../Testimonials/testimonials";
import TestimonialsArch from "../Testimonials-arch/testimonials-arch";

const AboutIntro = () => {
  return (
    <section
      className="intro-section section-padding pb-0"
      style={{ marginBottom: "150px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>{AboutInfo1Data.title}</h4>
            </div>
          </div>
          <TestimonialsArch />
          {/* <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph1}
              </p>
              <p className="wow txt words chars splitting" data-splitting>
                {AboutInfo1Data.paragraph2}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
