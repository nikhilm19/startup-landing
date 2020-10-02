import React from "react";
import img1 from "../../../assets/add-files.gif";

import { ReactComponent as ReactLogo } from "../../../assets/blob-icon.svg";

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
        <div className="contacts-info-container">
          <div className="contacts-content">
            {data.map((detail, i) => {
              const even = i % 2 === 0 ? "even" : "odd";
              return (
                <>
                  <div className={`contact-container  `}>
                    <div className="contact-media">
                      <i className="fa fa-check-circle contact-media__img" />
                    </div>
                    <div className="contact-content">
                      <div className="contact-title">
                        <h4 className="contact-title__content">
                          {detail.title}
                        </h4>
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

          <div className="contacts-form">
            <div className="contacts-form-container">
              <div className="contacts-form-content">
                <div className="names-container">
                  <div className="first-name-container">
                    <input
                      className="first-name__content"
                      type="text"
                      name="First Name"
                      placeholder="First Name"
                    ></input>
                  </div>
                  <div className="last-name-container">
                    <input
                      className="last-name__content"
                      type="text"
                      name="Last Name"
                      placeholder="Last Name"
                    ></input>
                  </div>
                </div>
                <div className="email-container">
                  <input
                    className="email__content"
                    type="email"
                    required
                    placeholder="Email Id"
                    aria-placeholder="email id"
                  />
                </div>
                <div className="message-container">
                  <textarea
                    className="message__content"
                    required
                    rows={5}
                    cols={40}
                    placeholder="Type your message"
                    aria-placeholder="Your query message"
                  />
                </div>
                <div className="submit-btn-container">
                  <button className="submit-btn__content">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
