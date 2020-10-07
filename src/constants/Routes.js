import AboutUs from "../components/Main/About-us";

import Landing from "../components/Main/Landing";
import Layout from "../components/Main/Layout";
import Login from "../components/Main/Login";

export const pages = [
  { path: "/", component: Landing },
  { path: "/about", component: AboutUs },
  { path: "/login", component: Login },
];

export const LANDING = "/";
export const ABOUT = "/about";
export const SIGN_IN = "/login";
export const SIGN_UP = "/sign-up";
