import React from "react";
import logo from "../../../logo.jpg";
import App from "../App";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown,
} from "react-bootstrap";

import "./index.css";

function Header() {
  const [isCollapsed, setCollapse] = React.useState(false);
  const show = isCollapsed ? "show" : "";
  return (
    <>
      <nav className="top-nav">
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
            <li className="nav-menu__list-item">Home</li>
            <li className="nav-menu__list-item">About</li>
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
