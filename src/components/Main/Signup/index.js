import React from "react";
import logo from "../../../logo.jpg";
import { ReactComponent as Fb } from "../../../assets/social-media/facebook.svg";

import { ReactComponent as Google } from "../../../assets/social-media/google.svg";
class Signup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login-form">
        <div className="form-left-container">
          <div className="form-heading-container">
            <div className="form-heading-content">
              <div className="form-heading__icon">
                <i className="fa fa-lock"></i>
              </div>
              <div className="form-heading__text">
                <h2>Sign in</h2>
              </div>
            </div>
          </div>
          <div className="form-main-container">
            <div className="form-main-content">
              <div className="input-fields-container">
                <div className="input-fields-content">
                  <div className="email-field-container">
                    <label for="login-email">Email</label>
                    <input
                      className="email-field__content"
                      type="email"
                      required
                      placeholder="Email Id"
                      name="login-email"
                      id="email"
                    />
                  </div>
                  <div className="pwd-field-container">
                    <label for="login-pwd">Password</label>
                    <input
                      className="pwd-field__content"
                      placeholder="Password"
                      name="login-pwd"
                      id="pwd"
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <div className="extra-actions">
                <div className="remember-me-container">
                  <div className="remember-me-content">
                    <input type="checkbox" />
                    <label for="remember-me">Remember me</label>
                  </div>
                </div>
                <div className="forgot-pwd-container">
                  <div className="forgot-pwd-content">
                    <a href="/forgot-pwd">Forgot Password?</a>
                  </div>
                </div>
              </div>

              <div className="login-btn-container">
                <button className="login-btn__content">Sign in</button>
              </div>
              <div className="social-sign-in-container">
                <div className="social-sign-in-content">
                  <div className="social-sign-in-heading-container">
                    <p className="social-sign-in-heading__content">
                      or Sign in with
                    </p>
                  </div>
                  <div className="social-sign-in-actions-container">
                    <div className="social-sign-in-btns">
                      <div className="fb-container">
                        <button className="sign-in-with-fb">
                          Facebook
                          <Fb />
                        </button>
                      </div>
                      <div className="google-container">
                        <button className="sign-in-with-google">
                          Google
                          <Google />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="new-signup-container">
                    <a>Not a member? Sign up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-right-container">
          <div className="brand-details-container">
            <img
              className="brand-details__img"
              src={logo}
              width="50px"
              height="50px"
            />
            <h1 className="brand-details__name"> Xyz</h1>
          </div>
          <div className="form-media-container">
            <div className="form-media__content"></div>
          </div>
          <div className="form-caption-container">
            <p className="form-caption__content">Take the first step today.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
