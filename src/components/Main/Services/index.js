import React from "react";
import logo from "../../../logo.jpg";
import img1 from "../../../assets/add-files.gif";
import img2 from "../../../assets/bib.gif";
import img3 from "../../../assets/Bibliophile.gif";
import img4 from "../../../assets/data-report.gif";
import { ReactComponent as ReactLogo } from "../../../assets/blob-icon.svg";

import "./index.css";

const data = [
  {
    img: img1,
    title: "Lorem Ipsum",
    caption: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    img: img2,
    title: "Lorem Ipsum",
    caption: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    img: img3,
    title: "Lorem Ipsum",
    caption: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    img: img4,
    title: "Lorem Ipsum",
    caption: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    img: img4,
    title: "Lorem Ipsum",
    caption: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    img: img1,
    title: "Lorem Ipsum",
    caption: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    img: img1,
    title: "Lorem Ipsum",
    caption: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
];
function Services() {
  return (
    <>
      <section className="services" id="services">
        <div className="services-container">
          <div className="services-heading">
            <h1 className="services-heading__title">Services</h1>
            <span className="section__underline"></span>
          </div>
          <div className="services-content">
            {data.map((service, i) => {
              const even = i % 2 === 0 ? "even" : "odd";
              return (
                <>
                  <div className={`service-container `}>
                    <div className="service-media">
                      <ReactLogo className="service-media__img" />
                      <i className="fa fa-calculator fa-2x"></i>
                    </div>
                    <div className="service-content">
                      <div className="service-title">
                        <h5 className="service-title__content">
                          {service.title}
                        </h5>
                      </div>
                      <div className="service-text">
                        <p>{service.caption}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
