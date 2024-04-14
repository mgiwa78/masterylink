import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

type Props = {};

const Listings = (props: Props) => {
  return (
    <>
      <Header />
      <section className="tu-main-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="tu-maintitle text-center">
                <h4>Making ease for everyone</h4>
                <h2>We made it in easy way</h2>
                <p>
                  accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecati cupiditate non
                  provident
                </p>
              </div>
            </div>
          </div>
          <div className="row tu-howit-steps gy-4">
            <div className="col-12 col-md-6 col-xl-4">
              <div className="tu-howit-steps_content">
                <figure>
                  <img src="images/how-it-work/img-01.jpg" alt="images" />
                </figure>
                <div className="tu-howit-steps_info">
                  <span className="tu-step-tag tu-orange-bgclr">STEP 01</span>
                  <h5>Post a tuition job</h5>
                  <p>
                    Aeccusamus et iusto odiomae dignissimos ducimus quistames
                    blanditiis praesentium voluptatum loramkes anuten.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="tu-howit-steps_content">
                <figure>
                  <img src="images/how-it-work/img-02.jpg" alt="images" />
                </figure>
                <div className="tu-howit-steps_info">
                  <span className="tu-step-tag tu-purple-bgclr">STEP 02</span>
                  <h5>Hire your best match</h5>
                  <p>
                    Aeccusamus et iusto odiomae dignissimos ducimus quistames
                    blanditiis praesentium voluptatum loramkes anuten.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="tu-howit-steps_content">
                <figure>
                  <img src="images/how-it-work/img-03.jpg" alt="images" />
                </figure>
                <div className="tu-howit-steps_info">
                  <span className="tu-step-tag tu-green-bgclr">STEP 03</span>
                  <h5>Get it done on time</h5>
                  <p>
                    Aeccusamus et iusto odiomae dignissimos ducimus quistames
                    blanditiis praesentium voluptatum loramkes anuten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="tu-processing-holder">
          <div className="tu-processing-img">
            <figure>
              <img src="images/how-it-work/img-04.jpg" alt="image" />
            </figure>
          </div>
          <div className="tu-betterresult tu-processing-content">
            <div className="tu-maintitle">
              <img src="images/zigzag-line.svg" alt="img" />
              <h4>Why our working is so unique</h4>
              <h2>See how our working process easily adapt your need</h2>
            </div>
            <ul className="tu-processing-list">
              <li>
                <div className="tu-processinglist-info">
                  <i className="icon icon-smile tu-iconpurple_bgclr"></i>
                  <h4>User friendly hiring process</h4>
                </div>
                <p>
                  Aeccusamus etmaes iusto odiomae dignissimos ducimus quistames
                  blanditiis praesentium voluptatum loramkes anuten.
                </p>
              </li>
              <li>
                <div className="tu-processinglist-info">
                  <i className="icon icon-umbrella tu-icongreen_bgclr"></i>
                  <h4>Verified process with ease</h4>
                </div>
                <p>
                  Aeccusamus etmaes iusto odiomae dignissimos ducimus quistames
                  blanditiis praesentium voluptatum loramkes anuten.
                </p>
              </li>
              <li>
                <div className="tu-processinglist-info">
                  <i className="icon icon-shield tu-iconorange_bgclr"></i>
                  <h4>Secure payment gateway integrated</h4>
                </div>
                <p>
                  Aeccusamus etmaes iusto odiomae dignissimos ducimus quistames
                  blanditiis praesentium voluptatum loramkes anuten.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="tu-main-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="tu-maintitle text-center">
                <h4>We guarantee quality process</h4>
                <h2>Let’s join our community today</h2>
                <p>
                  accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecati cupiditate non
                  provident
                </p>
              </div>
              <ul className="tu-banner_list tu-banner_list-two">
                <li>
                  <a
                    href="signup.html"
                    className="tu-primbtn tu-primbtn-gradient"
                  >
                    <span>Start as student</span>
                    <i className="icon icon-chevron-right"></i>
                  </a>
                </li>
                <li>
                  <a href="signup.html" className="tu-secbtn">
                    <span>Join as Instructor</span>
                    <em>It’s Free!</em>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Listings;
