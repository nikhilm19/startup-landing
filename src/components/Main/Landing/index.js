import React from "react";
import ControlledCarousel from "../Carousel";
import ContactUs from "../Contact-Us";
import Features from "../Features";

import Services from "../Services";
import WhyUs from "../Why-Us";

import Pricing from "../Pricing";
import Layout from "../Layout";

export default () => {
  return (
    <>
      <Layout>
        <ControlledCarousel />
        <Features />
        <WhyUs />
        <Services />
        <Pricing />
        <ContactUs />
      </Layout>
    </>
  );
};
