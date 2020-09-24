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
    title: "Location",
    text: "Scet College Opp Athwaline, Surat",
  },
  {
    img: img1,
    title: "Email",
    text: "nikmul19@gmail.com",
  },
  {
    img: img1,
    title: "Call",
    text: "+911234567890",
  },
];
function ContactUs() {
  return (
    <>
      <section className="contacts" id="contacts">
        <div className="contacts-heading">
          <h1 className="contacts-heading__title">Contact Us</h1>
          <span className="section__underline"></span>
        </div>
        <div className="contacts-content">
          {data.map((detail, i) => {
            const even = i % 2 === 0 ? "even" : "odd";
            return (
              <>
                <div
                  className={`contact-container contact-container--${even} `}
                >
                  <div className="contact-media">
                    <i className="fa fa-check-circle contact-media__img" />
                  </div>
                  <div className="contact-content">
                    <div className="contact-title">
                      <h4 className="contact-title__content">{detail.title}</h4>
                    </div>
                    <div className="contact-text">
                      <h5 className="contact-text__content">{detail.text}</h5>
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

export default ContactUs;
