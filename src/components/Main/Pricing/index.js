import React from "react";
import logo from "../../../logo.jpg";
import img1 from "../../../assets/add-files.gif";
import img2 from "../../../assets/bib.gif";
import img3 from "../../../assets/Bibliophile.gif";
import img4 from "../../../assets/data-report.gif";
import { ReactComponent as ReactLogo } from "../../../assets/blob-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Reveal from "react-reveal/Reveal";
import VisibilitySensor from "react-visibility-sensor";

const data = [
  {
    img: img1,
    title: "Batch a",
    nos: "16",
    caption: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    img: img2,
    title: "Batch b",
    nos: "32",
    caption: "Lorem Ipsum ",
  },
  {
    img: img3,
    title: "Batch c",
    nos: "64",
    caption: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
];

function onChange(onVis) {
  console.log(onVis);
  if (onVis) {
    document.getElementById("pricing").classList.add("fadeinDown-1");
  }
}
function Pricing() {
  return (
    <>
      <section className="pricing " id="pricing">
        <div className="pricing-container">
          <div className="pricing-heading">
            <h1 className="pricing-heading__title">Pricing</h1>
            <span className="section__underline"></span>
          </div>
          <div className="pricing-content">
            {data.map((card, i) => {
              const even = i % 2 === 0 ? "even" : "odd";
              return (
                <VisibilitySensor
                  partialVisibility
                  onChange={(isVisible) => {
                    onChange(isVisible);
                  }}
                >
                  <div className={`price-card-container fadeinDown-${i}`}>
                    {i === data.length - 1 ? (
                      <span className="advanced-ribbon">Advanced</span>
                    ) : (
                      ""
                    )}
                    <div className="price-title-container">
                      <h5 className="price-title__content">{card.title}</h5>
                    </div>
                    {/* <div className="price-card-media">
                      <ReactLogo className="service-media__img" />
                      <i className="fa fa-calculator fa-2x"></i>
                    </div> */}
                    <div className="price-card-main">
                      <div className="price-labors-container">
                        <div className="price-labors-content">
                          <h3 className="price-labors__nos">
                            <span className="price-labors__nos price-labors__nos--span ">
                              {card.nos}
                            </span>
                            Nos
                          </h3>
                        </div>
                      </div>
                      <div className="price-card-text">
                        <div className="price-text">
                          <p>{card.caption}</p>
                        </div>
                        <div className="price-text">
                          <p>{card.caption}</p>
                        </div>
                        <div className="price-text">
                          <p>{card.caption}</p>
                        </div>
                      </div>
                    </div>
                    <div className="price-buy-container">
                      <button className="price-buy">Buy Now</button>
                    </div>
                  </div>
                </VisibilitySensor>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
