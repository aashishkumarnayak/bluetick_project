import React from "react";
import "./Footer.css"; // Uncomment if using CSS file
import bluetickConsultants from "../images/bluetick-consultants.png";
import glassdoorRating from "../images/glassdoor-rating.webp";
import bluetickIso from "../images/bluetick-iso.webp";
import instagram from "../images/social/instagram.png";
import facebook from "../images/social/facebook.png";
import linkedin from "../images/social/linkedin.png";
import twitter from "../images/social/twitter.png";
import thread from "../images/social/thread.jpg";
import quora from "../images/social/quora.png";

const Footer = () => {
  return (
    <footer>
      <div
        className="container-fluid pl-0 pr-0 product-footer-bg footer-container"
        width="100%"
      >
        <div className="container pt-5 pb-5 pl-3 pr-3">
          <hr style={{ background: "rgba(255, 255, 255, 0.5)" }} />
          <div className="row" id="footerrow1">
            {/* Left Column */}
            <div className="col-12 col-md-5 col-lg-3">
              <a href="/" className="navbar-brand mb-2">
                <img
                  src={bluetickConsultants}
                  width="170"
                  alt="Bluetick Consultants"
                />
              </a>
              <h5 className="mb-4 no-border">Bluetick Consultants LLP</h5>
              <p>
                <a
                  href="mailto:contact@bluetickconsultants.com"
                  title="contact@bluetickconsultants.com"
                >
                  contact@bluetickconsultants.com
                </a>
                <br />
              </p>
              <div className="glassdoor-iso-wrap">
                <a
                  href="https://www.glassdoor.co.in/Overview/Working-at-Bluetick-Consultants-EI_IE3180317.11,31.htm"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src={glassdoorRating}
                    width="125"
                    alt="Glassdoor Review"
                  />
                </a>
                <img
                  src={bluetickIso}
                  width="100"
                  alt="Bluetick Consultants ISO Certified"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-7 col-lg-9">
              <div className="row mb-4">
                <div className="col-12 col-md-3">
                  <h5>RESOURCES</h5>
                  <ul className="list-unstyled list-style-none">
                    <li className="w-100 mb-3">
                      <a
                        href="https://www.bluetickconsultants.com/blogs.html"
                        title="Blogs"
                      >
                        <i
                          className="fa fa-chevron-circle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Blogs
                      </a>
                    </li>
                    {/* Add more resources links here */}
                  </ul>
                </div>
                <div className="col-12 col-md-9">
                  <h5>PRODUCTS</h5>
                  <ul className="list-unstyled list-style-none">
                    <li>
                      <a
                        href="https://talktocode.bluetickconsultants.com/"
                        title="Talk To Code"
                      >
                        <i
                          className="fa fa-chevron-circle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Talk To Code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <hr
                className="w-100 float-left mt-3 mb-4"
                style={{ background: "rgba(255, 525, 525, 0.5)" }}
              />

              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="text-left" id="footersocial">
                    <a href="">
                      <img className="img" src={instagram} />
                    </a>
                    <a href="">
                      <img className="img" src={linkedin} />
                    </a>
                    <a href="">
                      <img className="img" src={facebook} />
                    </a>
                    <a href="">
                      <img className="img" src={thread} />
                    </a>
                    <a href="">
                      <img className="img" src={twitter} />
                    </a>
                    <a href="">
                      <img className="img" src={quora} />
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div
                    className="w-100 float-left text-right mt-3"
                    id="footersocial"
                  >
                    &copy; All rights reserved by Bluetick Consultants LLP
                    <script>
                      document.getElementById("copyright").appendChild(document.createTextNode(new
                      Date().getFullYear()));
                    </script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
