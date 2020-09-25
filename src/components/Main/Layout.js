import React from "react";
import App from "./App";
import ControlledCarousel from "./Carousel";
import ContactUs from "./Contact-Us";
import Features from "./Features";
import Header from "./Header/Header";
import Services from "./Services";
import WhyUs from "./Why-Us";
import Footer from "./Footer";
import Pricing from "./Pricing";
export default () => {
  return (
    <>
      <Header />
      <ControlledCarousel />
      <Features />
      <WhyUs />
      <Services />
      <Pricing />
      <ContactUs />
      <Footer />
    </>
  );
};
