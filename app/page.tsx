import Image from "next/image";
import styles from "./page.module.css";
import Loader from "@/app/Loader";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="tu-banner">
        <div className="container">
          <div className="row align-items-center g-0 gy-5">
            <div className="col-lg-6">
              <div className="tu-banner_title">
                <h1>
                  A good <span>#education</span> is always a base of
                </h1>
                <span className="tu-bannerinfo type"></span>
                <p>
                  Consectur adipiscing elitsedo eiusmod tempor incididuntem
                  utaborate dolore magna aliqua ad minim veniamque.
                </p>
                <ul className="tu-banner_list">
                  <li>
                    <div className="tu-starthere">
                      <span>Start from here</span>
                      <img src="/images/knob_line.svg" alt="img" />
                    </div>
                    <a
                      href="signup.html"
                      className="tu-primbtn tu-primbtn-gradient"
                    >
                      <span>Start as student</span>
                      <i className="icon icon-chevron-right"></i>
                    </a>
                  </li>
                  <li>
                    <Link href={"/auth/signup"} className="tu-secbtn">
                      <span>Join as Instructor</span>
                      <em>It’s Free!</em>
                    </Link>
                  </li>
                </ul>
                <div className="tu-banner_explore">
                  <i className="icon icon-shield"></i>
                  <p>
                    You can also join as parent to explore
                    <Link href={"/auth/signup"}> Join today</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="tu-bannerv1_img">
                <img src="/images/index/banner/img-02.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="tu-main">
        <section>
          <div className="tu-brand">
            <div className="container">
              <ul className="tu-brand_list">
                <li>
                  <img src="/images/brand/img-01.png" alt="img" />
                </li>
                <li>
                  <img src="/images/brand/img-02.png" alt="img" />
                </li>
                <li>
                  <img src="/images/brand/img-03.png" alt="img" />
                </li>
                <li>
                  <img src="/images/brand/img-04.png" alt="img" />
                </li>
                <li>
                  <img src="/images/brand/img-05.png" alt="img" />
                </li>
                <li>
                  <img src="/images/brand/img-06.png" alt="img" />
                </li>
                <li>
                  <img src="/images/brand/img-07.png" alt="img" />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="tu-main-section">
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-md-12 col-lg-6">
                <div className="tu-maintitle p-0">
                  <img src="/images/zigzag-line.svg" alt="img" />
                  <h4>Better Learning. Better Results</h4>
                  <h2>Online education platform that fits for everyone</h2>
                  <p>
                    Accusamus et iusidio dignissimos ducimus blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores
                    etmquasa molestias epturi sint occaecati cupiditate non
                    providente mikume molareshe.
                  </p>
                  <a href="how-it-work.html" className="tu-primbtn-lg">
                    <span>Explore more about us</span>
                    <i className="icon icon-chevron-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="tu-betterresult">
                  <figure>
                    <img
                      src="/images/index/platform/img-01.png"
                      alt="image-description"
                    />
                  </figure>
                  <img
                    src="/images/index/platform/img-02.png"
                    alt="image-description"
                  />
                  <div className="tu-resultperson">
                    <h6>Founder & CEO</h6>
                    <h5>Allen wake</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="tu-statsholder">
            <div className="container">
              <ul id="tu-counter" className="tu-stats">
                <li>
                  <img src="/images/stats/img-01.png" alt="img" />
                  <div className="tu-stats_info">
                    <h4>
                      <span
                        data-from="0"
                        data-to="560616"
                        data-speed="8000"
                        data-refresh-interval="50"
                      >
                        560,616
                      </span>
                    </h4>
                    <p>Courses available for verified and top tutors</p>
                  </div>
                </li>
                <li>
                  <img src="/images/stats/img-02.png" alt="img" />
                  <div className="tu-stats_info">
                    <h4>
                      <span
                        data-from="0"
                        data-to="648482"
                        data-speed="8000"
                        data-refresh-interval="50"
                      >
                        648,482
                      </span>
                    </h4>
                    <p>Total tuition job posted on the platform till date</p>
                  </div>
                </li>
                <li>
                  <img src="/images/stats/img-03.png" alt="img" />
                  <div className="tu-stats_info">
                    <h4>
                      <span
                        data-from="0"
                        data-to="20"
                        data-speed="8000"
                        data-refresh-interval="50"
                      >
                        20
                      </span>
                      + Hours
                    </h4>
                    <p>User daily average time spent on the platform</p>
                  </div>
                </li>
                <li>
                  <img src="/images/stats/img-04.png" alt="img" />
                  <div className="tu-stats_info">
                    <h4>
                      <span
                        data-from="0"
                        data-to="7"
                        data-speed="8000"
                        data-refresh-interval="50"
                      >
                        7
                      </span>
                      + Million
                    </h4>
                    <p>
                      Active instructor and students available on the platform
                    </p>
                  </div>
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
                  <img src="/images/zigzag-line.svg" alt="img" />
                  <h4>Our featured instructors</h4>
                  <h2>Every instructor is professional and highly qualified</h2>
                  <p>
                    Accusamus et iusidio dignissimos ducimus blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores
                    etmquasa molestias epturi sint occaecati cupiditate non
                    providente mikume molareshe.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="tu-featurelist"
              className="splide tu-featurelist  tu-splidedots "
            >
              <div className="splide__track">
                <ul className="row ">
                  <li className="col-3 pb-4">
                    <div className="tu-featureitem">
                      <figure>
                        <a href="tutor-detail.html">
                          <img
                            src="/images/index/qualified/img-01.jpg"
                            alt="image-description"
                          />
                        </a>
                        <span className="tu-featuretag">FEATURED</span>
                      </figure>
                      <div className="tu-authorinfo">
                        <div className="tu-authordetail">
                          <figure>
                            <img
                              src="/images/index/professionol/img-01.jpg"
                              alt="image-description"
                            />
                          </figure>
                          <div className="tu-authorname">
                            <h5>
                              <a href="tutor-detail.html"> Dwayne Garrett</a>
                              <i
                                className="icon icon-check-circle tu-greenclr"
                                data-tippy-trigger="mouseenter"
                                data-tippy-html="#tu-verifed"
                                data-tippy-interactive="true"
                                data-tippy-placement="top"
                              ></i>
                            </h5>
                            <span>Arlington, TN</span>
                          </div>
                          <ul className="tu-authorlist">
                            <li>
                              <span>
                                Starting from:<em>₦893.30/hr</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Mobile:<em>xxx-xxxxx-33</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Whatsapp:<em>xxx-xxxxx-11</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Qualification:<em>B.Tech/B.E.</em>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="tu-instructors_footer">
                          <div className="tu-rating">
                            <i className="fas fa-star"></i>
                            <h6>5.0</h6>
                            <span>(66,951)</span>
                          </div>
                          <div className="tu-instructors_footer-right">
                            <a href="javascript:void(0);">
                              <i className="icon icon-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-3 pb-4">
                    <div className="tu-featureitem">
                      <figure>
                        <a href="tutor-detail.html">
                          <img
                            src="/images/index/qualified/img-02.jpg"
                            alt="image-description"
                          />
                        </a>
                        <span className="tu-featuretag">FEATURED</span>
                      </figure>
                      <div className="tu-authorinfo">
                        <div className="tu-authordetail">
                          <figure>
                            <img
                              src="/images/index/professionol/img-02.jpg"
                              alt="image-description"
                            />
                          </figure>
                          <div className="tu-authorname">
                            <h5>
                              <a href="tutor-detail.html">Gwendolyn Parker</a>{" "}
                              <i
                                className="icon icon-check-circle tu-greenclr"
                                data-tippy-trigger="mouseenter"
                                data-tippy-html="#tu-verifed"
                                data-tippy-interactive="true"
                                data-tippy-placement="top"
                              ></i>
                            </h5>
                            <span>Las Vegas, TN</span>
                          </div>
                          <ul className="tu-authorlist">
                            <li>
                              <span>
                                Starting from:<em>₦1,385.10/hr</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Mobile:<em>xxx-xxxxx-11</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Whatsapp:<em>xxx-xxxxx-80</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Qualification:<em>B.Tech/B.E.</em>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="tu-instructors_footer">
                          <div className="tu-rating">
                            <i className="fas fa-star"></i>
                            <h6>5.0</h6>
                            <span>(38,494)</span>
                          </div>
                          <div className="tu-instructors_footer-right">
                            <a href="javascript:void(0);">
                              <i className="icon icon-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-3 pb-4">
                    <div className="tu-featureitem">
                      <figure>
                        <a href="tutor-detail.html">
                          <img
                            src="/images/index/qualified/img-03.jpg"
                            alt="image-description"
                          />
                        </a>
                        <span className="tu-featuretag">FEATURED</span>
                      </figure>
                      <div className="tu-authorinfo">
                        <div className="tu-authordetail">
                          <figure>
                            <img
                              src="/images/index/professionol/img-03.jpg"
                              alt="image-description"
                            />
                          </figure>
                          <div className="tu-authorname">
                            <h5>
                              {" "}
                              <a href="tutor-detail.html"> Glen Burns</a>{" "}
                              <i
                                className="icon icon-check-circle tu-greenclr"
                                data-tippy-trigger="mouseenter"
                                data-tippy-html="#tu-verifed"
                                data-tippy-interactive="true"
                                data-tippy-placement="top"
                              ></i>
                            </h5>
                            <span>Chicago, OH</span>
                          </div>
                          <ul className="tu-authorlist">
                            <li>
                              <span>
                                Starting from:<em>₦1,336.83/hr</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Mobile:<em>xxx-xxxxx-11</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Whatsapp:<em>xxx-xxxxx-46</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Qualification:<em>B.Tech/B.E.</em>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="tu-instructors_footer">
                          <div className="tu-rating">
                            <i className="fas fa-star"></i>
                            <h6>5.0</h6>
                            <span>(47,044)</span>
                          </div>
                          <div className="tu-instructors_footer-right">
                            <a href="javascript:void(0);">
                              <i className="icon icon-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-3 pb-4">
                    <div className="tu-featureitem">
                      <figure>
                        <a href="tutor-detail.html">
                          <img
                            src="/images/index/qualified/img-04.jpg"
                            alt="image-description"
                          />
                        </a>
                        <span className="tu-featuretag">FEATURED</span>
                      </figure>
                      <div className="tu-authorinfo">
                        <div className="tu-authordetail">
                          <figure>
                            <img
                              src="/images/index/professionol/img-04.jpg"
                              alt="image-description"
                            />
                          </figure>
                          <div className="tu-authorname">
                            <h5>
                              <a href="tutor-detail.html"> William Williams</a>{" "}
                              <i
                                className="icon icon-check-circle tu-greenclr"
                                data-tippy-trigger="mouseenter"
                                data-tippy-html="#tu-verifed"
                                data-tippy-interactive="true"
                                data-tippy-placement="top"
                              ></i>
                            </h5>
                            <span>Nashville, IL</span>
                          </div>
                          <ul className="tu-authorlist">
                            <li>
                              <span>
                                Starting from:<em>₦1,198.12/hr</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Mobile:<em>xxx-xxxxx-54</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Whatsapp:<em>xxx-xxxxx-88</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Qualification:<em>B.Tech/B.E.</em>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="tu-instructors_footer">
                          <div className="tu-rating">
                            <i className="fas fa-star"></i>
                            <h6>5.0</h6>
                            <span>(57,282)</span>
                          </div>
                          <div className="tu-instructors_footer-right">
                            <a href="javascript:void(0);">
                              <i className="icon icon-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-3 pb-4">
                    <div className="tu-featureitem">
                      <figure>
                        <a href="tutor-detail.html">
                          <img
                            src="/images/index/qualified/img-01.jpg"
                            alt="image-description"
                          />
                        </a>
                        <span className="tu-featuretag">FEATURED</span>
                      </figure>
                      <div className="tu-authorinfo">
                        <div className="tu-authordetail">
                          <figure>
                            <img
                              src="/images/index/professionol/img-01.jpg"
                              alt="image-description"
                            />
                          </figure>
                          <div className="tu-authorname">
                            <h5>
                              <a href="tutor-detail.html"> Dwayne Garrett</a>{" "}
                              <i
                                className="icon icon-check-circle tu-greenclr"
                                data-tippy-trigger="mouseenter"
                                data-tippy-html="#tu-verifed"
                                data-tippy-interactive="true"
                                data-tippy-placement="top"
                              ></i>
                            </h5>
                            <span>Arlington, TN</span>
                          </div>
                          <ul className="tu-authorlist">
                            <li>
                              <span>
                                Starting from:<em>₦893.30/hr</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Mobile:<em>xxx-xxxxx-33</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Whatsapp:<em>xxx-xxxxx-11</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Qualification:<em>B.Tech/B.E.</em>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="tu-instructors_footer">
                          <div className="tu-rating">
                            <i className="fas fa-star"></i>
                            <h6>5.0</h6>
                            <span>(4,448)</span>
                          </div>
                          <div className="tu-instructors_footer-right">
                            <a href="javascript:void(0);">
                              <i className="icon icon-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col-3 pb-4">
                    <div className="tu-featureitem">
                      <figure>
                        <a href="tutor-detail.html">
                          <img
                            src="/images/index/qualified/img-02.jpg"
                            alt="image-description"
                          />
                        </a>
                        <span className="tu-featuretag">FEATURED</span>
                      </figure>
                      <div className="tu-authorinfo">
                        <div className="tu-authordetail">
                          <figure>
                            <img
                              src="/images/index/professionol/img-02.jpg"
                              alt="image-description"
                            />
                          </figure>
                          <div className="tu-authorname">
                            <h5>
                              <a href="tutor-detail.html"> Dwayne Garrett</a>{" "}
                              <i
                                className="icon icon-check-circle tu-greenclr"
                                data-tippy-trigger="mouseenter"
                                data-tippy-html="#tu-verifed"
                                data-tippy-interactive="true"
                                data-tippy-placement="top"
                              ></i>
                            </h5>
                            <span>Arlington, TN</span>
                          </div>
                          <ul className="tu-authorlist">
                            <li>
                              <span>
                                Starting from:<em>₦1,385.10/hr</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Mobile:<em>xxx-xxxxx-11</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Whatsapp:<em>xxx-xxxxx-80</em>
                              </span>
                            </li>
                            <li>
                              <span>
                                Qualification:<em>B.Tech/B.E.</em>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="tu-instructors_footer">
                          <div className="tu-rating">
                            <i className="fas fa-star"></i>
                            <h6>5.0</h6>
                            <span>(57,282)</span>
                          </div>
                          <div className="tu-instructors_footer-right">
                            <a href="javascript:void(0);">
                              <i className="icon icon-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tu-mainbtn">
              <a href="search-listing.html" className="tu-primbtn-lg">
                <span>Explore all instructors</span>
                <i className="icon icon-chevron-right"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="tu-sucesstorsection">
          <div className="tu-success-stories">
            <div className="container">
              <div className="tu-sucesstor_pattren">
                <img
                  src="/images/index/success_stories/pattren.svg"
                  alt="img"
                />
              </div>
              <div className="row tu-sucesstorslider_title">
                <div className="col-lg-8">
                  <div className="tu-maintitle">
                    <h2>
                      See how our visitors & members made their{" "}
                      <span>#Success Stories</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div
                id="tu-sucesstorslider"
                className="splide tu-sucesstorslider tu-splidearrow"
              >
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <div className="tu-sucesstor">
                        <div className="tu-sucesstor_img">
                          <figure>
                            <img
                              src="/images/index/success_stories/img-01.jpg"
                              alt="img"
                            />
                            <figcaption>
                              <img
                                src="/images/index/success_stories/comma.svg"
                                alt="img"
                              />
                            </figcaption>
                          </figure>
                        </div>
                        <div className="tu-sucesstor_title">
                          <h3>
                            I highly recommend this platform, amazing experience
                            with fast delivery
                          </h3>
                          <blockquote>
                            “ Their teaching method is conceptual, motivating
                            and friendly. I can clear my doubt any time. They
                            have very deep knowledge of subject and exam
                            pattern, with all the guidance of their tutos, I
                            scored 98% in Mathematics and 96% in Physics. And
                            yet qualified in IIT MAINS with 12th rank. ”
                          </blockquote>
                          <h4>
                            Leonard Sullivan
                            <span>2nd Standard, Manchester UK</span>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-sucesstor">
                        <div className="tu-sucesstor_img">
                          <figure>
                            <img
                              src="/images/index/success_stories/img-02.jpg"
                              alt="img"
                            />
                            <figcaption>
                              <img
                                src="/images/index/success_stories/comma.svg"
                                alt="img"
                              />
                            </figcaption>
                          </figure>
                        </div>
                        <div className="tu-sucesstor_title">
                          <h3>
                            I highly recommend this platform, amazing experience
                            with fast delivery
                          </h3>
                          <blockquote>
                            “ Their teaching method is conceptual, motivating
                            and friendly. I can clear my doubt any time. They
                            have very deep knowledge of subject and exam
                            pattern, with all the guidance of their tutos, I
                            scored 98% in Mathematics and 96% in Physics. And
                            yet qualified in IIT MAINS with 12th rank. ”
                          </blockquote>
                          <h4>
                            Deanna Griffin
                            <span>2nd Standard, Manchester UK</span>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-sucesstor">
                        <div className="tu-sucesstor_img">
                          <figure>
                            <img
                              src="/images/index/success_stories/img-03.jpg"
                              alt="img"
                            />
                            <figcaption>
                              <img
                                src="/images/index/success_stories/comma.svg"
                                alt="img"
                              />
                            </figcaption>
                          </figure>
                        </div>
                        <div className="tu-sucesstor_title">
                          <h3>
                            I highly recommend this platform, amazing experience
                            with fast delivery
                          </h3>
                          <blockquote>
                            “ Their teaching method is conceptual, motivating
                            and friendly. I can clear my doubt any time. They
                            have very deep knowledge of subject and exam
                            pattern, with all the guidance of their tutos, I
                            scored 98% in Mathematics and 96% in Physics. And
                            yet qualified in IIT MAINS with 12th rank. ”
                          </blockquote>
                          <h4>
                            Bruce Mccarthy
                            <span>2nd Standard, Manchester UK</span>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-sucesstor">
                        <div className="tu-sucesstor_img">
                          <figure>
                            <img
                              src="/images/index/success_stories/img-04.jpg"
                              alt="img"
                            />
                            <figcaption>
                              <img
                                src="/images/index/success_stories/comma.svg"
                                alt="img"
                              />
                            </figcaption>
                          </figure>
                        </div>
                        <div className="tu-sucesstor_title">
                          <h3>
                            I highly recommend this platform, amazing experience
                            with fast delivery
                          </h3>
                          <blockquote>
                            “ Their teaching method is conceptual, motivating
                            and friendly. I can clear my doubt any time. They
                            have very deep knowledge of subject and exam
                            pattern, with all the guidance of their tutos, I
                            scored 98% in Mathematics and 96% in Physics. And
                            yet qualified in IIT MAINS with 12th rank. ”
                          </blockquote>
                          <h4>
                            Evelyn Mccoy
                            <span>2nd Standard, Manchester UK</span>
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="tu-sucesstor">
                        <div className="tu-sucesstor_img">
                          <figure>
                            <img
                              src="/images/index/success_stories/img-05.jpg"
                              alt="img"
                            />
                            <figcaption>
                              <img
                                src="/images/index/success_stories/comma.svg"
                                alt="img"
                              />
                            </figcaption>
                          </figure>
                        </div>
                        <div className="tu-sucesstor_title">
                          <h3>
                            I highly recommend this platform, amazing experience
                            with fast delivery
                          </h3>
                          <blockquote>
                            “ Their teaching method is conceptual, motivating
                            and friendly. I can clear my doubt any time. They
                            have very deep knowledge of subject and exam
                            pattern, with all the guidance of their tutos, I
                            scored 98% in Mathematics and 96% in Physics. And
                            yet qualified in IIT MAINS with 12th rank. ”
                          </blockquote>
                          <h4>
                            Frederick Hicks
                            <span>2nd Standard, Manchester UK</span>
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tu-main-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="tu-maintitle text-center">
                  <img src="/images/zigzag-line.svg" alt="img" />
                  <h4>Let’s make a quick start today</h4>
                  <h2>Choose from the top visited categories you may like</h2>
                  <p>
                    Accusamus et iusidio dignissimos ducimus blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores
                    etmquasa molestias epturi sint occaecati cupiditate non
                    providente mikume molareshe.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="tu-categoriesslider"
              className="splide tu-categoriesslider tu-splidedots"
            >
              <div className="splide__track">
                <ul className="row">
                  <li className="col-3 pb-4">
                    <a
                      className="tu-categories_content"
                      href="search-listing-two.html"
                    >
                      <img
                        src="/images/index/categories/img-09.jpg"
                        alt="img"
                      />
                      <div className="tu-categories_title">
                        <h6>Music learning</h6>
                        <span>6,301 Listings</span>
                      </div>
                    </a>
                  </li>
                  <li className="col-3 pb-4">
                    <a
                      className="tu-categories_content"
                      href="search-listing-two.html"
                    >
                      <img
                        src="/images/index/categories/img-10.jpg"
                        alt="img"
                      />
                      <div className="tu-categories_title">
                        <h6>Computer &amp; hardware</h6>
                        <span>4,329 Listings</span>
                      </div>
                    </a>
                  </li>
                  <li className="col-3 pb-4">
                    <a
                      className="tu-categories_content"
                      href="search-listing-two.html"
                    >
                      <img
                        src="/images/index/categories/img-11.jpg"
                        alt="img"
                      />
                      <div className="tu-categories_title">
                        <h6>Beauty learning</h6>
                        <span>6,406 Listings</span>
                      </div>
                    </a>
                  </li>
                  <li className="col-3 pb-4">
                    <a
                      className="tu-categories_content"
                      href="search-listing-two.html"
                    >
                      <img
                        src="/images/index/categories/img-12.jpg"
                        alt="img"
                      />
                      <div className="tu-categories_title">
                        <h6>IT &amp; development</h6>
                        <span>5,925 Listings</span>
                      </div>
                    </a>
                  </li>
                  <li className="col-3 pb-4">
                    <a
                      className="tu-categories_content"
                      href="search-listing-two.html"
                    >
                      <img
                        src="/images/index/categories/img-13.jpg"
                        alt="img"
                      />
                      <div className="tu-categories_title">
                        <h6>Islamic education</h6>
                        <span>4,157 Listings</span>
                      </div>
                    </a>
                  </li>
                  <li className="col-3 pb-4">
                    <a
                      className="tu-categories_content"
                      href="search-listing-two.html"
                    >
                      <img
                        src="/images/index/categories/img-09.jpg"
                        alt="img"
                      />
                      <div className="tu-categories_title">
                        <h6>Music learning</h6>
                        <span>6,301 Listings</span>
                      </div>
                    </a>
                  </li>
                  <li className="col-3 pb-4">
                    <a
                      className="tu-categories_content"
                      href="search-listing-two.html"
                    >
                      <img
                        src="/images/index/categories/img-10.jpg"
                        alt="img"
                      />
                      <div className="tu-categories_title">
                        <h6>Computer &amp; hardware</h6>
                        <span>4,329 Listings</span>
                      </div>
                    </a>
                  </li>
                  <li className="col-3 pb-4">
                    <a
                      className="tu-categories_content"
                      href="search-listing-two.html"
                    >
                      <img
                        src="/images/index/categories/img-11.jpg"
                        alt="img"
                      />
                      <div className="tu-categories_title">
                        <h6>Beauty learning</h6>
                        <span>6,406 Listings</span>
                      </div>
                    </a>
                  </li>
                  <li className="col-3 pb-4">
                    <a
                      className="tu-categories_content"
                      href="search-listing-two.html"
                    >
                      <img
                        src="/images/index/categories/img-12.jpg"
                        alt="img"
                      />
                      <div className="tu-categories_title">
                        <h6>IT &amp; development</h6>
                        <span>5,925 Listings</span>
                      </div>
                    </a>
                  </li>
                  <li className="col-3 pb-4">
                    <a
                      className="tu-categories_content"
                      href="search-listing-two.html"
                    >
                      <img
                        src="/images/index/categories/img-13.jpg"
                        alt="img"
                      />
                      <div className="tu-categories_title">
                        <h6>Islamic education</h6>
                        <span>4,157 Listings</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tu-mainbtn">
              <a href="search-listing-two.html" className="tu-primbtn-lg">
                <span>Explore All categories</span>
                <i className="icon icon-chevron-right"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
