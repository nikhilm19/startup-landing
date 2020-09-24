import React, { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "./index.css";
import logo from "../../../logo.svg";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+No"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="caption__heading">
            Welcome to <span className="caption__keyword">LabourNation</span>
          </h3>
          <button className="caption__cta">Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+No"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="caption__heading">
            One stop shop for{" "}
            <span className="caption__keyword">Skilled Labors</span>
          </h3>
          <button className="caption__cta">Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+No"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
