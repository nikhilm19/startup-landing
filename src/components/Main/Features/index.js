import React from "react";
import logo from "../../../logo.jpg";
import img1 from "../../../assets/add-files.gif";
import img2 from "../../../assets/bib.gif";
import img3 from "../../../assets/Bibliophile.gif";
import img4 from "../../../assets/data-report.gif";

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
function Features() {
  return (
    <>
      <section className="features" id="features">
        <div className="features-heading">
          <h1 className="features-heading__title">Features</h1>
          <span className="section__underline"></span>
        </div>
        <div className="features-content">
          {data.map((feature, i) => {
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
          <div></div>
        </div>
      </section>
    </>
  );
}

export default Features;
