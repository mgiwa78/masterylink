import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="tu-login-right">
      <div className="tu-login-right_title">
        <h2>Welcome!</h2>
        <h3>We know you'll come back</h3>
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
                    value="user@amentotech.com"
                  />
                  <div className="tu-placeholder">
                    <span>Username/email</span>
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
                    placeholder="Email address"
                    value="user@amentotech.com"
                  />
                  <div className="tu-placeholder">
                    <span>Your password</span>
                    <em>*</em>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <a href="profile-setting-a.html" className="tu-primbtn-lg">
                  <span>Login now</span>
                  <i className="icon icon-arrow-right"></i>
                </a>
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
                <Link href={"/auth/signup"}>Join us today</Link>
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

export default Login;
