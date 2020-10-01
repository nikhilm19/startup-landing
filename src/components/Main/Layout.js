import React from "react";
import App from "./App";
import ControlledCarousel from "./Carousel";
import ContactUs from "./Contact-Us";
import Features from "./Features";
import Header from "./Header";
import Services from "./Services";
import WhyUs from "./Why-Us";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Login from "./Login";
import AboutUs from "./About-us";
export default (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
