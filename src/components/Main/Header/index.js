import React from "react";
import logo from "../../../logo.jpg";
import { useEffect } from "react";
import App from "../App";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  const [isSticky, setSticky] = React.useState("initial");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const sticky = window.scrollY < 160 ? "initial" : "sticky";

      setSticky(sticky);
    });
  });
  const [isCollapsed, setCollapse] = React.useState(false);
  const show = isCollapsed ? "show" : "";
  return (
    <>
      <nav className={`top-nav top-nav--${isSticky}`}>
        <div className="top-nav__navbar">
          <img src={logo} width="50px" height="50px"></img>
          <button
            className="nav-menu__toggle"
            onClick={() => setCollapse(!isCollapsed)}
          >
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <div className={`nav-menu ${show}`}>
          <ul className="nav-menu__list">
            <li className="nav-menu__list-item">
              {" "}
              <Link to="/">Home </Link>
            </li>

            <li className="nav-menu__list-item">
              {" "}
              <Link to="/about">About </Link>
            </li>

            <li className="nav-menu__list-item">Services</li>
            <li className="nav-menu__list-item">Contact</li>
          </ul>
        </div>
        <button className="get-started-btn">Get Started</button>
      </nav>
    </>
  );
}

export default Header;