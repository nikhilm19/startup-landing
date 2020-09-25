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
function Pricing() {
  return (
    <>
      <section className="pricing" id="pricing">
        <div className="pricing-container">
          <div className="pricing-heading">
            <h1 className="pricing-heading__title">Pricing</h1>
            <span className="section__underline"></span>
          </div>
          <div className="pricing-content">
            {data.map((card, i) => {
              const even = i % 2 === 0 ? "even" : "odd";
              return (
                <>
                  <div className={`price-card-container `}>
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
                    <div className="price-labors-container">
                      <div className="price-labors-content">
                        <h3 className="price-labors__nos">
                          <span className="price-labors__nos price-labors__nos--span ">
                            {card.nos}
                          </span>
                          Labors
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
                    <div className="price-buy-container">
                      <button className="price-buy">Buy Now</button>
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

export default Pricing;
