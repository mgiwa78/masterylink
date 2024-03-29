import Link from "next/link";
import React from "react";

const ForgotPassword = () => {
  return (
    <div className="tu-login-right">
      <div className="tu-login-right_title">
        <h2>Dont worry!</h2>
        <h3>We’ll send you the reset link</h3>
      </div>
      <form className="tu-themeform tu-login-form">
        <fieldset>
          <div className="tu-themeform__wrap">
            <div className="form-group-wrap">
              <div className="form-group">
                <div className="tu-placeholderholder">
                  <input
                    type="email"
                    className="form-control"
                    required={true}
                    placeholder="Enter email address"
                  />
                  <div className="tu-placeholder">
                    <span>Enter email address</span>
                    <em>*</em>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <a href="login.html" className="tu-primbtn-lg">
                  <span>Send reset link</span>
                  <i className="icon icon-arrow-right"></i>
                </a>
              </div>
              <div className="tu-lost-password form-group">
                <Link href={"/auth/login"}>Login now</Link>
                <Link href={"/auth/signup"}>Join us today</Link>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ForgotPassword;
