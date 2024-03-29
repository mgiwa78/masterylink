import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="tu-login-right">
      <div className="tu-login-right_title">
        <h2>Welcome!</h2>
        <h3>It’s really nice to see you</h3>
      </div>
      <form className="tu-themeform tu-login-form">
        <fieldset>
          <div className="tu-themeform__wrap">
            <div className="form-group-wrap">
              <div className="form-group">
                <div className="tu-placeholderholder">
                  <input
                    type="text"
                    className="form-control"
                    required={true}
                    placeholder="Full Name"
                  />
                  <div className="tu-placeholder">
                    <span>First name</span>
                    <em>*</em>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="tu-placeholderholder">
                  <input
                    type="text"
                    className="form-control"
                    required={true}
                    placeholder="Last name"
                  />
                  <div className="tu-placeholder">
                    <span>Last name</span>
                    <em>*</em>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="tu-placeholderholder">
                  <input
                    type="email"
                    className="form-control"
                    required={true}
                    placeholder="Email address"
                  />
                  <div className="tu-placeholder">
                    <span>Your email address</span>
                    <em>*</em>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="tu-placeholderholder">
                  <input
                    type="password"
                    className="form-control"
                    required={true}
                    placeholder="password"
                  />
                  <div className="tu-placeholder">
                    <span>Enter password</span>
                    <em>*</em>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <a href="profile-setting-a.html" className="tu-primbtn-lg">
                  <span>Join now</span>
                  <i className="icon icon-arrow-right"></i>
                </a>
              </div>
              <div className="form-group">
                <div className="tu-check tu-signup-check">
                  <input type="checkbox" id="expcheck2" name="expcheck" />
                  <label htmlFor="expcheck2">
                    <span>
                      I have read and agree to all{" "}
                      <a href="javascript:void(0);">Terms &amp; conditions</a>
                    </span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <div className="tu-optioanl-or">
                  <span>OR</span>
                </div>
              </div>
              <div className="form-group">
                <a
                  href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin"
                  target="_blank"
                  className="tu-btn-signup"
                >
                  <img src="/images/google.png" alt="images" />
                  Sign in with Google
                </a>
              </div>
              <div className="tu-lost-password form-group">
                <Link href={"/auth/login"}>Login now</Link>
                <Link
                  href={"/auth/forgot-password"}
                  className="tu-password-clr_light"
                >
                  Lost password?
                </Link>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
