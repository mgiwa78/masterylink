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
            <div className="col-lg-12">
              <div className="tu-listing-wrapper">
                <div className="tu-sort">
                  <h3>
                    132,576 Search result in<span>“Mathematic”</span>tutors
                  </h3>
                  <div className="tu-sort-right-area">
                    <div className="tu-sortby">
                      <span>Sort by: </span>
                      <div className="tu-select">
                        <select className="form-control tu-selectv">
                          <option>Price low to high </option>
                          <option>Price high to low</option>
                        </select>
                      </div>
                    </div>
                    <div className="tu-filter-btn">
                      <a
                        className="tu-listbtn active"
                        href="search-listing.html"
                      >
                        <i className="icon icon-list"></i>
                      </a>
                      <a className="tu-listbtn" href="search-listing-two.html">
                        <i className="icon icon-grid"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tu-searchbar-wrapper">
                  <div className="tu-appendinput">
                    <div className="tu-searcbar">
                      <div className="tu-inputicon">
                        <a href="javascript:void(0);">
                          <i className="icon icon-search"></i>
                        </a>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="What do you want to explore?"
                        />
                      </div>
                      <div className="tu-select">
                        <i className="icon icon-layers"></i>
                        <select
                          id="selectv8"
                          data-placeholderinput="Select list"
                          data-placeholder="Select category"
                          className="form-control"
                        >
                          <option label="Select category"></option>
                          <option>Automotive</option>
                          <option>Beauty &amp; Care</option>
                          <option>Marketing</option>
                          <option>Child Care</option>
                          <option>House Cleaning</option>
                        </select>
                      </div>
                      <a
                        href="search-listing.html"
                        className="tu-primbtn-lg tu-primbtn-orange"
                      >
                        Search now
                      </a>
                    </div>
                  </div>
                  <div className="tu-listing-search">
                    <figure>
                      <img src="images/listing/shape.png" alt="image" />
                    </figure>
                    <span>Start from here</span>
                  </div>
                </div>
                <ul className="tu-searchtags">
                  <li>
                    <span>
                      Pre-School{" "}
                      <a href="javascript:void(0)">
                        <i className="icon icon-x"></i>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      Middle (Class 6-8){" "}
                      <a href="javascript:void(0)">
                        <i className="icon icon-x"></i>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      Intermediate{" "}
                      <a href="javascript:void(0)">
                        <i className="icon icon-x"></i>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      5.0 Stars{" "}
                      <a href="javascript:void(0)">
                        <i className="icon icon-x"></i>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      Online bookings{" "}
                      <a href="javascript:void(0)">
                        <i className="icon icon-x"></i>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      Male only{" "}
                      <a href="javascript:void(0)">
                        <i className="icon icon-x"></i>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-xxl-3">
              <aside className="tu-asidewrapper">
                <a href="javascript:void(0)" className="tu-dbmenu">
                  <i className="icon icon-chevron-left"></i>
                </a>
                <div className="tu-aside-menu">
                  <div className="tu-aside-holder">
                    <div
                      className="tu-asidetitle"
                      data-bs-toggle="collapse"
                      data-bs-target="#side2"
                      role="button"
                      aria-expanded="true"
                    >
                      <h5>Education level</h5>
                    </div>
                    <div id="side2" className="collapse show">
                      <div className="tu-aside-content">
                        <div className="tu-filterselect">
                          <div className="tu-select">
                            <select
                              id="selectv7"
                              data-placeholder="Select education level"
                              data-placeholderinput="Select education level"
                              className="form-control tu-input-field"
                            >
                              <option label="Select category"></option>
                              <option value="selectparcat">
                                Primary (Class 1-5)
                              </option>
                              <option value="selectparcat">
                                Primary (Class 6-8)
                              </option>
                              <option value="selectparcat">
                                Primary (Class 9-10)
                              </option>
                              <option value="selectparcat">
                                Language courses
                              </option>
                              <option value="selectparcat">
                                Short courses
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="tu-filterselect">
                          <h6>Choose subjects</h6>
                          <ul className="tu-categoriesfilter">
                            <li>
                              <div className="tu-check tu-checksm">
                                <input
                                  type="checkbox"
                                  id="expcheck2"
                                  name="expcheck"
                                  checked={true}
                                />
                                <label htmlFor="expcheck2">
                                  Social studies
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="tu-check tu-checksm">
                                <input
                                  type="checkbox"
                                  id="expcheck2a"
                                  name="expcheck"
                                />
                                <label htmlFor="expcheck2a">Urdu</label>
                              </div>
                            </li>
                            <li>
                              <div className="tu-check tu-checksm">
                                <input
                                  type="checkbox"
                                  id="expcheck2a1"
                                  name="expcheck"
                                  checked={true}
                                />
                                <label htmlFor="expcheck2a1">Mathematic</label>
                              </div>
                            </li>
                            <li>
                              <div className="tu-check tu-checksm">
                                <input
                                  type="checkbox"
                                  id="expcheck2a2"
                                  name="expcheck"
                                />
                                <label htmlFor="expcheck2a2">English</label>
                              </div>
                            </li>
                            <li>
                              <div className="tu-check tu-checksm">
                                <input
                                  type="checkbox"
                                  id="expcheck2a3"
                                  name="expcheck"
                                />
                                <label htmlFor="expcheck2a3">Drawing</label>
                              </div>
                            </li>
                            <li>
                              <div className="tu-check tu-checksm">
                                <input
                                  type="checkbox"
                                  id="expcheck2a4"
                                  name="expcheck"
                                  checked={true}
                                />
                                <label htmlFor="expcheck2a4">
                                  Computer science
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="tu-check tu-checksm">
                                <input
                                  type="checkbox"
                                  id="expcheck2a21"
                                  name="expcheck"
                                />
                                <label htmlFor="expcheck2a21">physics</label>
                              </div>
                            </li>
                          </ul>
                          <div className="show-more">
                            <a
                              href="javascript:void(0);"
                              className="tu-readmorebtn tu-show_more"
                            >
                              Show all
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tu-aside-holder">
                    <div
                      className="tu-asidetitle"
                      data-bs-toggle="collapse"
                      data-bs-target="#side3"
                      role="button"
                      aria-expanded="true"
                    >
                      <h5>Price range</h5>
                    </div>
                    <div id="side3" className="collapse show">
                      <div className="tu-aside-content">
                        <div
                          className="tu-rangevalue"
                          data-bs-target="#tu-rangecollapse"
                          role="list"
                          aria-expanded="false"
                        >
                          <div className="tu-areasizebox">
                            <input
                              type="number"
                              className="form-control tu-input-field"
                              step="1"
                              placeholder="Min price"
                              id="tu-min-value"
                            />
                            <input
                              type="number"
                              className="form-control tu-input-field"
                              step="1"
                              placeholder="Max price"
                              id="tu-max-value"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="tu-distanceholder">
                        <div id="tu-rangecollapse" className="collapse">
                          <div className="tu-distance">
                            <div
                              id="tu-rangeslider"
                              className="tu-tooltiparrow tu-rangeslider"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tu-aside-holder">
                    <div
                      className="tu-asidetitle"
                      data-bs-toggle="collapse"
                      data-bs-target="#side1a"
                      role="button"
                      aria-expanded="true"
                    >
                      <h5>Rating</h5>
                    </div>
                    <div id="side1a" className="collapse show">
                      <div className="tu-aside-content">
                        <ul className="tu-categoriesfilter">
                          <li>
                            <div className="tu-check tu-checksm">
                              <input
                                type="checkbox"
                                id="rate"
                                name="rate"
                                checked={true}
                              />
                              <label htmlFor="rate">
                                <span className="tu-stars">
                                  <span></span>
                                </span>
                                <em className="tu-totalreview">
                                  <span>
                                    5.0/<em>5.0</em>
                                  </span>
                                </em>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="tu-check tu-checksm">
                              <input type="checkbox" id="rate4" name="rate4" />
                              <label htmlFor="rate4">
                                <span className="tu-stars tu-fourstar">
                                  <span></span>
                                </span>
                                <em className="tu-totalreview">
                                  <span>
                                    4.0/<em>5.0</em>
                                  </span>
                                </em>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="tu-check tu-checksm">
                              <input
                                type="checkbox"
                                id="rate3"
                                name="rate2"
                                checked={true}
                              />
                              <label htmlFor="rate3">
                                <span className="tu-stars tu-threestar">
                                  <span></span>
                                </span>
                                <em className="tu-totalreview">
                                  <span>
                                    3.0/<em>5.0</em>
                                  </span>
                                </em>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="tu-check tu-checksm">
                              <input
                                type="checkbox"
                                id="rate2a"
                                name="rate2a"
                              />
                              <label htmlFor="rate2a">
                                <span className="tu-stars tu-twostar">
                                  <span></span>
                                </span>
                                <em className="tu-totalreview">
                                  <span>
                                    2.0/<em>5.0</em>
                                  </span>
                                </em>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="tu-check tu-checksm">
                              <input
                                type="checkbox"
                                id="rate1a"
                                name="rate1a"
                              />
                              <label htmlFor="rate1a">
                                <span className="tu-stars tu-onestar">
                                  <span></span>
                                </span>
                                <em className="tu-totalreview">
                                  <span>
                                    1.0/<em>5.0</em>
                                  </span>
                                </em>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tu-aside-holder">
                    <div
                      className="tu-asidetitle"
                      data-bs-toggle="collapse"
                      data-bs-target="#Location"
                      role="button"
                      aria-expanded="true"
                    >
                      <h5>Location</h5>
                    </div>
                    <div id="Location" className="collapse show">
                      <div className="tu-aside-content">
                        <div className="tu-filterselect">
                          <div className="tu-placeholderholder">
                            <input
                              type="email"
                              className="form-control"
                              required={true}
                              placeholder="Full Name"
                            />
                            <div className="tu-placeholder">
                              <span>Enter Location</span>
                              <em>*</em>
                            </div>
                          </div>
                        </div>
                        <div className="tu-distanceholder">
                          <div className="tu-rangeslider tu-tooltiparrow">
                            <span>
                              Radius in miles <em>m</em>
                              <span className="example-val" id="slider1-span">
                                65
                              </span>
                            </span>
                            <div id="tu-rangeslidertwo"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tu-aside-holder">
                    <div
                      className="tu-asidetitle"
                      data-bs-toggle="collapse"
                      data-bs-target="#side1ab"
                      role="button"
                      aria-expanded="true"
                    >
                      <h5>Miscellaneous</h5>
                    </div>
                    <div id="side1ab" className="collapse show">
                      <div className="tu-aside-content">
                        <ul className="tu-categoriesfilter">
                          <li>
                            <div className="tu-check tu-checksm">
                              <input
                                type="checkbox"
                                id="nameaa"
                                name="expcheck"
                                checked={true}
                              />
                              <label htmlFor="nameaa">Online bookings</label>
                            </div>
                          </li>
                          <li>
                            <div className="tu-check tu-checksm">
                              <input
                                type="checkbox"
                                id="namea"
                                name="expcheck"
                              />
                              <label htmlFor="namea">Profile photos</label>
                            </div>
                          </li>
                          <li>
                            <div className="tu-check tu-checksm">
                              <input
                                type="checkbox"
                                id="namea1"
                                name="expcheck"
                                checked={true}
                              />
                              <label htmlFor="namea1">Male only</label>
                            </div>
                          </li>
                          <li>
                            <div className="tu-check tu-checksm">
                              <input
                                type="checkbox"
                                id="namea2"
                                name="expcheck"
                              />
                              <label htmlFor="namea2">Female only</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tu-filterbtns">
                    <a href="search-listing.html" className="tu-primbtn">
                      Apply filters
                    </a>
                    <a href="search-listing.html" className="tu-sb-sliver">
                      Clear all filters
                    </a>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-xl-8 col-xxl-9">
              <div className="tu-listinginfo-holder">
                <div className="tu-listinginfo">
                  <span className="tu-cardtag"></span>
                  <div className="tu-listinginfo_wrapper">
                    <div className="tu-listinginfo_title">
                      <div className="tu-listinginfo-img">
                        <figure>
                          <img src="images/listing/img-01.png" alt="imge" />
                        </figure>
                        <div className="tu-listing-heading">
                          <h5>
                            <Link href="tutors/detail">Mistie Monge</Link>
                            <i
                              className="icon icon-check-circle tu-greenclr"
                              data-tippy-trigger="mouseenter"
                              data-tippy-html="#tu-verifed"
                              data-tippy-interactive="true"
                              data-tippy-placement="top"
                            ></i>
                          </h5>
                          <div className="tu-listing-location">
                            <span>
                              5.0 <i className="fa-solid fa-star"></i>
                              <em>(4,448)</em>
                            </span>
                            <address>
                              <i className="icon icon-map-pin"></i> Phoenix, MN
                            </address>
                          </div>
                        </div>
                      </div>
                      <div className="tu-listinginfo_price">
                        <span>Starting from:</span>
                        <h4>₦712.93/hr</h4>
                      </div>
                    </div>
                    <div className="tu-listinginfo_description">
                      <p>
                        Hello there! My name is frederick and I'm currently a
                        pre-medical student. I have a deep passion for teaching
                        and I am looking for students, mainly primary, to help
                        them get ahead of school and ace their grades!
                      </p>
                    </div>
                    <div className="tu-listinginfo_service">
                      <h6>You can get teaching service direct at</h6>
                      <ul className="tu-service-list">
                        <li>
                          <span>
                            <i className="icon icon-home tu-greenclr"></i>
                            My home
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="icon icon-map-pin tu-blueclr"></i>
                            Student's home
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="icon icon-video tu-orangeclr"></i>
                            Online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tu-listinginfo_btn">
                    <div className="tu-iconheart">
                      <i className="icon icon-heart"></i>
                      <span>Add to save</span>
                    </div>
                    <div className="tu-btnarea">
                      <a href="login.html" className="tu-secbtn">
                        Let’s chat
                      </a>
                      <a href="tutor-detail.html" className="tu-primbtn">
                        View full profile
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tu-listinginfo">
                  <span className="tu-cardtag"></span>
                  <div className="tu-listinginfo_wrapper">
                    <div className="tu-listinginfo_title">
                      <div className="tu-listinginfo-img">
                        <figure>
                          <img src="images/listing/img-02.png" alt="imge" />
                        </figure>
                        <div className="tu-listing-heading">
                          <h5>
                            <Link href="tutors/detail">Jamie Armstrong</Link>
                            <i
                              className="icon icon-check-circle tu-greenclr"
                              data-tippy-trigger="mouseenter"
                              data-tippy-html="#tu-verifed"
                              data-tippy-interactive="true"
                              data-tippy-placement="top"
                            ></i>
                          </h5>
                          <div className="tu-listing-location">
                            <span>
                              5.0 <i className="fa-solid fa-star"></i>
                              <em>(4,448)</em>
                            </span>
                            <address>
                              <i className="icon icon-map-pin"></i> New Orleans,
                              OR
                            </address>
                          </div>
                        </div>
                      </div>
                      <div className="tu-listinginfo_price">
                        <span>Starting from:</span>
                        <h4>₦610.29/hr</h4>
                      </div>
                    </div>
                    <div className="tu-listinginfo_description">
                      <p>
                        Hello there! My name is frederick and I'm currently a
                        pre-medical student. I have a deep passion for teaching
                        and I am looking for students, mainly primary, to help
                        them get ahead of school and ace their grades!
                      </p>
                    </div>
                    <div className="tu-listinginfo_service">
                      <h6>You can get teaching service direct at</h6>
                      <ul className="tu-service-list">
                        <li>
                          <span>
                            <i className="icon icon-home tu-greenclr"></i>
                            My home
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="icon icon-map-pin tu-blueclr"></i>
                            Student's home
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="icon icon-video tu-orangeclr"></i>
                            Online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tu-listinginfo_btn">
                    <div className="tu-iconheart">
                      <i className="icon icon-heart"></i>
                      <span>Add to save</span>
                    </div>
                    <div className="tu-btnarea">
                      <a href="login.html" className="tu-secbtn">
                        Let’s chat
                      </a>
                      <a href="tutor-detail.html" className="tu-primbtn">
                        View full profile
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tu-listinginfo">
                  <span className="tu-cardtag"></span>
                  <div className="tu-listinginfo_wrapper">
                    <div className="tu-listinginfo_title">
                      <div className="tu-listinginfo-img">
                        <figure>
                          <img src="images/listing/img-03.png" alt="imge" />
                        </figure>
                        <div className="tu-listing-heading">
                          <h5>
                            <Link href="tutors/detail">Nathaniel Fischer</Link>
                            <i
                              className="icon icon-check-circle tu-greenclr"
                              data-tippy-trigger="mouseenter"
                              data-tippy-html="#tu-verifed"
                              data-tippy-interactive="true"
                              data-tippy-placement="top"
                            ></i>
                          </h5>
                          <div className="tu-listing-location">
                            <span>
                              5.0 <i className="fa-solid fa-star"></i>
                              <em>(4,448)</em>
                            </span>
                            <address>
                              <i className="icon icon-map-pin"></i> San
                              Francisco, ID
                            </address>
                          </div>
                        </div>
                      </div>
                      <div className="tu-listinginfo_price">
                        <span>Starting from:</span>
                        <h4>₦481.84/hr</h4>
                      </div>
                    </div>
                    <div className="tu-listinginfo_description">
                      <p>
                        Hello there! My name is frederick and I'm currently a
                        pre-medical student. I have a deep passion for teaching
                        and I am looking for students, mainly primary, to help
                        them get ahead of school and ace their grades!
                      </p>
                    </div>
                    <div className="tu-listinginfo_service">
                      <h6>You can get teaching service direct at</h6>
                      <ul className="tu-service-list">
                        <li>
                          <span>
                            <i className="icon icon-home tu-greenclr"></i>
                            My home
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="icon icon-map-pin tu-blueclr"></i>
                            Student's home
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="icon icon-video tu-orangeclr"></i>
                            Online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tu-listinginfo_btn">
                    <div className="tu-iconheart">
                      <i className="icon icon-heart"></i>
                      <span>Add to save</span>
                    </div>
                    <div className="tu-btnarea">
                      <a href="login.html" className="tu-secbtn">
                        Let’s chat
                      </a>
                      <a href="tutor-detail.html" className="tu-primbtn">
                        View full profile
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tu-listinginfo">
                  <span className="tu-cardtag"></span>
                  <div className="tu-listinginfo_wrapper">
                    <div className="tu-listinginfo_title">
                      <div className="tu-listinginfo-img">
                        <figure>
                          <img src="images/listing/img-04.png" alt="imge" />
                        </figure>
                        <div className="tu-listing-heading">
                          <h5>
                            <Link href="tutors/detail">Bernard Keller</Link>
                            <i
                              className="icon icon-check-circle tu-greenclr"
                              data-tippy-trigger="mouseenter"
                              data-tippy-html="#tu-verifed"
                              data-tippy-interactive="true"
                              data-tippy-placement="top"
                            ></i>
                          </h5>
                          <div className="tu-listing-location">
                            <span>
                              5.0 <i className="fa-solid fa-star"></i>
                              <em>(4,448)</em>
                            </span>
                            <address>
                              <i className="icon icon-map-pin"></i> Austin, AZ
                            </address>
                          </div>
                        </div>
                      </div>
                      <div className="tu-listinginfo_price">
                        <span>Starting from:</span>
                        <h4>₦505.81/hr</h4>
                      </div>
                    </div>
                    <div className="tu-listinginfo_description">
                      <p>
                        Hello there! My name is frederick and I'm currently a
                        pre-medical student. I have a deep passion for teaching
                        and I am looking for students, mainly primary, to help
                        them get ahead of school and ace their grades!
                      </p>
                    </div>
                    <div className="tu-listinginfo_service">
                      <h6>You can get teaching service direct at</h6>
                      <ul className="tu-service-list">
                        <li>
                          <span>
                            <i className="icon icon-home tu-greenclr"></i>
                            My home
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="icon icon-map-pin tu-blueclr"></i>
                            Student's home
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="icon icon-video tu-orangeclr"></i>
                            Online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tu-listinginfo_btn">
                    <div className="tu-iconheart">
                      <i className="icon icon-heart"></i>
                      <span>Add to save</span>
                    </div>
                    <div className="tu-btnarea">
                      <a href="login.html" className="tu-secbtn">
                        Let’s chat
                      </a>
                      <a href="tutor-detail.html" className="tu-primbtn">
                        View full profile
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tu-listinginfo">
                  <span className="tu-cardtag"></span>
                  <div className="tu-listinginfo_wrapper">
                    <div className="tu-listinginfo_title">
                      <div className="tu-listinginfo-img">
                        <figure>
                          <img src="images/listing/img-02.png" alt="imge" />
                        </figure>
                        <div className="tu-listing-heading">
                          <h5>
                            <Link href="tutors/detail">Elizabeth Leonard</Link>
                            <i
                              className="icon icon-check-circle tu-greenclr"
                              data-tippy-trigger="mouseenter"
                              data-tippy-html="#tu-verifed"
                              data-tippy-interactive="true"
                              data-tippy-placement="top"
                            ></i>
                          </h5>
                          <div className="tu-listing-location">
                            <span>
                              5.0 <i className="fa-solid fa-star"></i>
                              <em>(4,448)</em>
                            </span>
                            <address>
                              <i className="icon icon-map-pin"></i> Tampa, LA
                            </address>
                          </div>
                        </div>
                      </div>
                      <div className="tu-listinginfo_price">
                        <span>Starting from:</span>
                        <h4>₦475.66/hr</h4>
                      </div>
                    </div>
                    <div className="tu-listinginfo_description">
                      <p>
                        Hello there! My name is frederick and I'm currently a
                        pre-medical student. I have a deep passion for teaching
                        and I am looking for students, mainly primary, to help
                        them get ahead of school and ace their grades!
                      </p>
                    </div>
                    <div className="tu-listinginfo_service">
                      <h6>You can get teaching service direct at</h6>
                      <ul className="tu-service-list">
                        <li>
                          <span>
                            <i className="icon icon-home tu-greenclr"></i>
                            My home
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="icon icon-map-pin tu-blueclr"></i>
                            Student's home
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="icon icon-video tu-orangeclr"></i>
                            Online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tu-listinginfo_btn">
                    <div className="tu-iconheart">
                      <i className="icon icon-heart"></i>
                      <span>Add to save</span>
                    </div>
                    <div className="tu-btnarea">
                      <a href="login.html" className="tu-secbtn">
                        Let’s chat
                      </a>
                      <a href="tutor-detail.html" className="tu-primbtn">
                        View full profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="tu-pagination">
                <ul>
                  <li className="tu-pagination-prev">
                    <a href="#">
                      <i className="icon icon-chevron-left"></i>
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#">1</a>{" "}
                  </li>
                  <li>
                    <a href="#">2</a>{" "}
                  </li>
                  <li>
                    <a href="#">3</a>{" "}
                  </li>
                  <li className="active">
                    <a href="#">4</a>{" "}
                  </li>
                  <li>
                    <a href="#">...</a>{" "}
                  </li>
                  <li>
                    <a href="#">60</a>{" "}
                  </li>
                  <li className="tu-pagination-next">
                    <a href="#">
                      <i className="icon icon-chevron-right"></i>
                    </a>{" "}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Listings;
