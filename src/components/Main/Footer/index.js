import React from "react";
import logo from "../../../logo.jpg";
import img1 from "../../../assets/add-files.gif";
import img2 from "../../../assets/bib.gif";
import img3 from "../../../assets/Bibliophile.gif";
import img4 from "../../../assets/data-report.gif";

import { ReactComponent as ReactLogo } from "../../../assets/blob-icon.svg";


function Footer() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer-heading">
          {/* <h1 className="footer-heading__title">Footer</h1> */}
          {/* <span className="section__underline"></span> */}
        </div>
        <div className="footer-info-container">
          <div className="footer-content">
            <div className="brand-info-container">
              <div className="brand-info-content">
                <div className="brand-title-container">
                  <h4 className="brand-title__content">LaborNation</h4>
                </div>
                <div className="brand-location-container">
                  <p className="brand-location__content">
                    A108 Adam Street New York, NY 535022 United States
                  </p>
                </div>
                <div className="brand-phone-container">
                  <p className="brand-phone__content">+1 5589 55488 55</p>
                </div>
                <div className="brand-email-container">
                  <p className="brand-email__content">info@example.com</p>
                </div>
              </div>
            </div>
            <div className="useful-link-container">
              <div className="useful-links-content">
                <div className="title-container">
                  <h4 className="links-title__content">Useful Links</h4>
                </div>
                <div className="about-us-container">
                  <p className="about-us__content">About Us</p>
                </div>
                <div className="about-services-container">
                  <p className="about-services__content">Services</p>
                </div>
                <div className="about-brand-email-container">
                  <p className="brand-email__content">info@example.com</p>
                </div>
              </div>
            </div>
            <div className="our-services-container">
              <div className="our-services-content">
                <div className="services-title-container">
                  <h4 className="services-title__content">Services</h4>
                </div>
                <div className="service-1-container">
                  <p className="service-1__content">Buy me</p>
                </div>

                <div className="service-2-container">
                  <p className="service-2__content">Sell me</p>
                </div>
                <div className="service-3-container">
                  <p className="service-3__content">Hold</p>
                </div>
                <div className="service-4-container">
                  <p className="service-4__content">Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className="newsletter-container">
              <div className="newsletter-content">
                <div className="newsletter-heading-container">
                  <h4 className="newsletter-heading__content">
                    Join our newsletter
                  </h4>
                </div>
                <div className="newsletter-text-container">
                  <p className="newsletter-text__content">
                    Tamen quem nulla quae legam multos aute sint culpa legam
                    noster magna
                  </p>
                </div>
                <div className="newsletter-email-container">
                  <input
                    className="newsletter-email"
                    type="text"
                    placeholder="Email"
                    name="email"
                    aria-placeholder="email id"
                  />
                  <button className="newsletter-subscribe__btn">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="social-media-container">
              <div className="fb-container">
                <i class="fab fa-facebook"></i>
              </div>
              <div className="twitter-container">
                <i class="fab fa-twitter"></i>
              </div>
              <div className="linkedin-container">
                <i class="fab fa-linkedin"></i>
              </div>
              <div className="instagram-container">
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
