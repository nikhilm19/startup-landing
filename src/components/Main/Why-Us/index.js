import React from "react";
import logo from "../../../logo.jpg";
import img1 from "../../../assets/labor-person.jpg";
import img2 from "../../../assets/bib.gif";
import img3 from "../../../assets/Bibliophile.gif";
import img4 from "../../../assets/data-report.gif";
import "./index.css";

const data = [
  {
    img: img1,
    title: "Lorem Ipsum",
    points: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
    ],
  },
  {
    img: img3,
    title: "Lorem Ipsum",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
  },
  {
    img: img4,
    title: "Lorem Ipsum",
    points: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
];
function WhyUs() {
  return (
    <>
      <section className="why-us" id="why-us">
        <div className="why-us-container">
          <div className="why-us-heading">
            <h1 className="why-us-heading__title">Why Us?</h1>
            <span className="section__underline"></span>
          </div>
          <div className="why-us-content-container">
            <div className="why-us-content">
              <div className="why-us-media">
                <div className="why-us-media__img-container">
                  <img className="why-us-media__img-content" src={img1}></img>
                </div>
              </div>
              <div className="why-us-points">
                <div className="why-us-points__container">
                  {data[0].points.map((point) => {
                    return (
                      <div className="why-us-point__container">
                        <div className="why-us-point__icon">
                          <i className="fa fa-shipping-fast"></i>
                        </div>
                        <div className="why-us-point-text-container">
                          <div className="why-us-point__text-content">
                            <h4>Lorem Ipsum</h4>
                            <p>{point}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* {data.map((feature, i) => {
            const even = i % 2 === 0 ? "even" : "odd";
            return (
              <>
                <div
                  className={`feature-container feature-container--${even} `}
                >
                  <div className="feature-media">
                    <img
                      src={feature.img}
                      alt=""
                      className="feature-media__img"
                    ></img>
                  </div>
                  <div className="feature-content">
                    <div className="feature-title">
                      <h3 className="feature-title__content">
                        {feature.title}
                      </h3>
                    </div>
                    <div className="feature-points">
                      {feature.points.map((point, i) => {
                        return (
                          <div className={`feature-point-container `}>
                            <div className="feature-point__icon">
                              <i className="fa fa-check-circle"></i>
                            </div>
                            <p className="feature-point__content">{point}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div></div> */}
        </div>
      </section>
    </>
  );
}

export default WhyUs;
