import React from "react";
import img1 from "../../../assets/social-media/google.svg";
import team from "../../../assets/teams-about.png";
import data from "../../../site-meta";
import siteMeta from "../../../site-meta";
const mouseOver = (e) => {
  document.getElementById("vision-right").classList.add("right-fade-in");
  document.getElementById("mission-right").classList.add("left-fade-in");

  document.getElementById("vision-container").style.flexDirection =
    "column-reverse";
  document.getElementById("mission-container").style.flexDirection = "column";
};
class AboutUs extends React.Component {
  componentDidMount() {
    mouseOver();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="about-us" onLoad={() => mouseOver()}>
        <div className="hero-container">
          <div className="content">
            <div className="main">
              <div className="title">
                <h1 className="titile__text">About us</h1>
              </div>
              <div className="text-content">
                <div className="heading">
                  <div className="heading__text">
                    <h1>Know more about {data.siteName}</h1>
                  </div>
                </div>
                <div className="subtitle">
                  <div className="subtitle__text">
                    <h3>On a journey to upskill the unskilled</h3>
                  </div>
                </div>
              </div>
              <div className="cta">
                <div className="go-ahead">
                  <button className="go-ahead__btn">Go ahead</button>
                </div>
                <div className="watch-video">
                  <button className="watch-video__btn">
                    Watch Video <i className="fa fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="media">
              <div className="img-container">
                <div className="media__img">
                  <img src={team} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-container">
          <div className="mission-container" id="mission-container">
            <div className="mission-left">
              <div className="heading">
                <h1>Our Mission</h1>
              </div>
            </div>
            <div className="mission-right" id="mission-right">
              <div className="mission-right-container">
                <div className="tagline-container">
                  <h1 className="tagline__text">
                    To upskill the <span>unskilled</span>
                  </h1>
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
                        <i class="fas fa-user fa-2x"></i>
                        <p className="">
                          <span>250+ </span> Labors
                        </p>
                      </li>
                      <li className="stats-list__item">
                        <i class="fas fa-user fa-2x"></i>
                        <p className="">
                          <span>250+ </span> Labors
                        </p>
                      </li>
                      <li className="stats-list__item">
                        <i class="fas fa-user fa-2x"></i>
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
