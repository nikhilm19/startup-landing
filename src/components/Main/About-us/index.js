import React from "react";
import img1 from "../../../assets/social-media/google.svg";
const mouseOver = (e) => {
  document.getElementById("vision-right").classList.add("right-fade-in");
  document.getElementById("mission-right").classList.add("left-fade-in");

  document.getElementById("vision-container").style.flexDirection =
    "column-reverse";
  document.getElementById("mission-container").style.flexDirection = "column";
};
class AboutUs extends React.Component {
  render() {
    return (
      <section className="about-us">
        <div className="about-us-container">
          <div
            className="mission-container"
            id="mission-container"
            onMouseOver={() => mouseOver()}
          >
            <div className="mission-left">
              <div className="heading">
                <h1>Our Mission</h1>
              </div>
            </div>
            <div className="mission-right" id="mission-right">
              <div className="mission-right-container">
                <div className="tagline-container">
                  <h1 className="tagline__text">To upskill the unskilled</h1>
                </div>
                <div className="subtitle-container">
                  <h1 className="subtitle__text">
                    We've already upskilled over lorem ipsum lorem ipsum lorem
                    ipsum lorem ipsum
                  </h1>
                </div>
                <div className="stats-list-container ">
                  <div className="content">
                    <div className="content-heading"></div>
                    <ul className="stats-list">
                      <li className="stats-list__item">
                        {/* <img src={img1} width="50px" width="50px" /> */}
                        <i class="fas fa-user fa-2x"></i>
                        <p className="">
                          <span>250+ </span> Labors
                        </p>
                      </li>
                      <li className="stats-list__item">
                        <img src={img1} width="50px" width="50px" />
                        <p className="">
                          <span>250+ </span> Labors
                        </p>
                      </li>
                      <li className="stats-list__item">
                        <img src={img1} width="50px" width="50px" />
                        <p className="">
                          <span>250+ </span> Labors
                        </p>
                      </li>
                      <li className="stats-list__item">
                        <img src={img1} width="50px" width="50px" />
                        <p className="">
                          <span>250+ </span> Labors
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vision-container" id="vision-container">
            <div className="vision-left">
              <div className="heading">
                <h1>Our Vision</h1>
              </div>
            </div>
            <div className="vision-right" id="vision-right">
              <div className="vision-right-container">
                <div className="tagline-container">
                  <h1 className="tagline__text">
                    {" "}
                    We've already upskilled over lorem ipsum lorem ipsum lorem
                    ipsum lorem ipsum
                  </h1>
                </div>
                <div className="subtitle-container">
                  <h1 className="subtitle__text">
                    We've already upskilled over lorem ipsum lorem ipsum lorem
                    ipsum lorem ipsum
                  </h1>
                </div>
                <div className="stats-list-container "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
