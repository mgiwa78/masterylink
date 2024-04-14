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
          <div className="row">
            <div className="col-sm-12">
              <div className="tu-pricingtop">
                <h4>Expand your great experience</h4>
                <h2>Buy a best price package</h2>
                <p>
                  Accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecati cupiditate non
                  provident
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="tu-pricinglist">
                    <li>
                      <div className="tu-planlist">
                        <div className="tu-plandetail">
                          <h4>Basic plan</h4>
                          <h3>
                            ₦350.50 <span>/month</span>
                          </h3>
                          <span>including all taxes</span>
                          <p>
                            volupta etem accusantium doloreque laudantium totam
                            remeriam.
                          </p>
                        </div>
                        <ul className="tu-planperks">
                          <li>
                            <span>
                              Langugages:{" "}
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              Featured profile <em>30 days</em>
                            </span>
                          </li>
                          <li>
                            <span>
                              Gallery: <i className="fa fa-times"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              Education:
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              I can teach: <i className="fa fa-times"></i>
                            </span>
                          </li>
                        </ul>
                        <div className="tu-btnarea">
                          <a
                            href="package.html"
                            className="tu-primbtn tu-btnplain"
                          >
                            Buy now
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="tu-planlist">
                        <div className="tu-plandetail">
                          <h4>Professional plan</h4>
                          <h3>
                            ₦750.00 <span>/month</span>
                          </h3>
                          <span>including all taxes</span>
                          <p>
                            volupta etem accusantium doloreque laudantium totam
                            remeriam.
                          </p>
                        </div>
                        <ul className="tu-planperks">
                          <li>
                            <span>
                              Langugages:{" "}
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              Featured profile <em>180 days</em>
                            </span>
                          </li>
                          <li>
                            <span>
                              Gallery:{" "}
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              Education:
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              I can teach: <i className="fa fa-times"></i>
                            </span>
                          </li>
                        </ul>
                        <div className="tu-btnarea">
                          <a
                            href="package.html"
                            className="tu-primbtn tu-btnplain"
                          >
                            Buy now
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="tu-planlist">
                        <div className="tu-plandetail">
                          <h4>Premium plan</h4>
                          <h3>
                            ₦1199.00 <span>/month</span>
                          </h3>
                          <span>including all taxes</span>
                          <p>
                            volupta etem accusantium doloreque laudantium totam
                            remeriam.
                          </p>
                        </div>
                        <ul className="tu-planperks">
                          <li>
                            <span>
                              Langugages:{" "}
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              Featured profile <em>256 days</em>
                            </span>
                          </li>
                          <li>
                            <span>
                              Gallery:{" "}
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              Education:
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              I can teach:{" "}
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                        </ul>
                        <div className="tu-btnarea">
                          <a
                            href="package.html"
                            className="tu-primbtn tu-btnplain"
                          >
                            Buy now
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="tu-planlist">
                        <div className="tu-plandetail">
                          <h4>Diamond plan</h4>
                          <h3>
                            ₦1499.00 <span>/yearly</span>
                          </h3>
                          <span>including all taxes</span>
                          <p>
                            volupta etem accusantium doloreque laudantium totam
                            remeriam.
                          </p>
                        </div>
                        <ul className="tu-planperks">
                          <li>
                            <span>
                              Langugages:{" "}
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              Featured profile <em>256 days</em>
                            </span>
                          </li>
                          <li>
                            <span>
                              Gallery:{" "}
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              Education:
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                          <li>
                            <span>
                              I can teach:{" "}
                              <i className="fa fa-check tu-colorgreen"></i>
                            </span>
                          </li>
                        </ul>
                        <div className="tu-btnarea">
                          <a
                            href="package.html"
                            className="tu-primbtn tu-btnplain"
                          >
                            Buy now
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Listings;
