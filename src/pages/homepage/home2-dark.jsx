import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Intro4 from "../../components/Intro4/intro4";
import Services4 from "../../components/Services4/services4";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import LightTheme from "../../layouts/Light";
import Clients from "../../components/Clients/clients";
import MinimalArea2 from "../../components/Minimal-Area2/minimal-area2";
import Numbers from "../../components/Numbers/numbers"

const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
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
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro4 />
      <MinimalArea2 />
      <Numbers />
      <Services4/>
      <Clients theme="dark" />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage2;
