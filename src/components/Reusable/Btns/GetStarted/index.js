import React from "react";
import { Link, useHistory } from "react-router-dom";

const GetStarted = (props) => {
  const history = useHistory();
  return (
    <button
      className={`get-started-btn get-started-btn--${props.area}`}
      onClick={() => history.push("/login")}
    >
      Get Started
    </button>
  );
};

export default GetStarted;
