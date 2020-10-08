import React from "react";
import logo from "../../../logo.jpg";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import GetStarted from "../../Reusable/Btns/GetStarted";
function Header(props) {
  const history = useHistory();
  const [isSticky, setSticky] = React.useState("initial");
  const [isHome, setHome] = React.useState("home");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const sticky = window.scrollY < 10 ? "initial" : "sticky";

      setSticky(sticky);
    });
  });
  const [isCollapsed, setCollapse] = React.useState(false);
  const show = isCollapsed ? "show" : "";
  return (
    <>
      <nav className={`top-nav top-nav--${isSticky} top-nav--${isHome}`}>
        <div className="top-nav__navbar">
          <img src={logo} width="50px" height="50px"></img>
          <button
            className={`nav-menu__toggle nav-menu__toggle--${isSticky}`}
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
        <GetStarted area="nav" />
      </nav>
    </>
  );
}

export default Header;
