import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Clients from "../../components/Clients/clients";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import LightTheme from "../../layouts/Light";
import Team2 from "../../components/Team2/team2";
import MinimalArea from "../../components/Minimal-Area/minimal-area";
import BlogDetailsUnidadesDeNegocio from "../../components/Blog-details/blog-details-unidadesDeNegocio";
import DarkTheme from "../../layouts/Dark";
import Nav from "../../components/Navbar/nav";

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Nav nr={navbarRef} lr={logoRef} theme="themeL" />
      <PagesHeader />
      {/*  <AboutIntro /> */}
      <Team2 />
      <MinimalArea />
      <br></br>
      <BlogDetailsUnidadesDeNegocio />
      {/*  <Team /> */}
      {/*  <Clients theme="light" /> */}
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default About;
