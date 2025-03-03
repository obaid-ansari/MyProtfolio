import React from "react";
import Profile from "./assets/profile.webp";
import Onleed from "./assets/onleed.webp";
import "./style.css";

const App = () => {
  return (
    <>
      <div className="main bg-success-subtle p-md-5">
        <div className="container bg-white rounded-5 p-5 shadow">
          {/* First Row */}
          <div className="row d-flex justify-content-center">
            <div className="col-xs col-sm col-md-12 col-lg-3 col-xl-3 col-xxl-3 p-0 m-2">
              <img
                src={Profile}
                loading="lazy"
                className="profile rounded-5 w-100 shadow"
                alt="Profile Picture"
              />
              <a
                className="btn fw-bold fs-3 3 py-3 btn-success rounded-5 w-100 mt-3 border border-none shadow"
                href=""
                download
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #156fff, #93c5fd)",
                  color: "white",
                }}>
                Resume
              </a>
            </div>
            <div
              className="col-xs-6 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8  p-4 fs-4 d-flex flex-column justify-content-center rounded-5 bg-success m-2 shadow"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #10b981, #97ffbf)",
                color: "white",
              }}>
              <h1 className="fw-bold text-uppercase">Obaid Ansari</h1>
              <h3 className="fw-semibold">Web Developer</h3>
              <p>
                BSc IT student at Mumbai University specializing in web
                development. Skilled in HTML, CSS, JavaScript, React.js, and
                Bootstrap, I build responsive, functional websites optimized for
                user and business needs.
              </p>
            </div>
          </div>
          {/* Second Row */}
          <div className="row d-flex justify-content-center 3">
            <div
              className="col-xs-5 col-sm-9 col-md-9 col-lg-5 col-xl-5 col-xxl-5  bg-success rounded-5 m-2 p-4 shadow"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #8812fc, #c0a5ff)",
                color: "white",
              }}>
              <h3 className="fw-bold">Education</h3>
              <ul className="fw-semibold fs-4">
                <li>SSC : Patel High School Mumbra</li>
                <li>HSC : Ramanand Arya D.A.V College (Autonomous) Bhandup</li>
                <li>
                  Graduation : BSc.IT at Ramanand Arya D.A.V College
                  (Autonomous) Bhandup
                </li>
              </ul>
            </div>
            <div
              className="col-2 col-xs-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1 bg-success rounded-5 d-flex justify-content-center flex-column align-items-center m-2 px-2 shadow"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right ,#e4e4e4, #fdfd)",
                color: "white",
              }}>
              <a
                href="https://www.linkedin.com/in/obaid-ansari-a37b60278/"
                target="_blank"
                class="linkedin text-decoration-none">
                <i
                  class="fa-brands fa-linkedin"
                  style={{ color: " #0a63bc" }}></i>
              </a>
              <a
                href="https://github.com/obaid-ansari"
                target="_blank"
                class="github text-decoration-none">
                <i
                  class="fa-brands fa-github"
                  style={{ color: " #0e1017" }}></i>
              </a>
              <a
                href="https://wa.me/+919987575016"
                target="_blank"
                class="whatsapp text-decoration-none">
                <i
                  class="fa-brands fa-square-whatsapp"
                  style={{ color: " #20e244" }}></i>
              </a>
              <a
                href="https://www.instagram.com/_ansari_obaid_?igsh=MTdoNWt2dTg5MGx4bg=="
                target="_blank"
                class="instagram text-decoration-none">
                <i
                  class="fa-brands fa-square-instagram"
                  style={{ color: " #f84c02" }}></i>
              </a>
            </div>
            <div
              className="col-8 col-xs-8 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 m-2  bg-success rounded-5 p-4 shadow"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #000000, #b8b8b8)",
                color: "white",
              }}>
              <h3 className="fw-bold">Skills</h3>
              <i class="fa-brands fa-html5" style={{ color: "#DD4B24" }}></i>
              <i class="fa-brands fa-css" style={{ color: "#66309A" }}></i>
              <i class="fa-brands fa-js" style={{ color: "#ECDA1D" }}></i>
              <i
                class="fa-brands fa-bootstrap"
                style={{ color: "#8812FC" }}></i>
              <i class="fa-brands fa-react" style={{ color: "#5ED3F3" }}></i>
              <i class="fa-brands fa-github" style={{ color: "#000" }}></i>
            </div>
          </div>
          {/* Third Row */}
          <div className="row d-flex justify-content-center">
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  bg-success rounded-5 m-2 p-4 shadow"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #ff0e32, #fd7f92)",
                color: "white",
              }}>
              <h3 className="fw-bold">Projects</h3>
              <ul className="fs-5">
                <li>
                  <p className="fw-bold m-0 fs-4">Safa Tours And Travels</p>
                  <p className="my-1">
                    <a href="#" className="text-white fw-semibold">
                      Safa Tours And Travels
                    </a>{" "}
                    is your go-to platform for booking flights, hotels, visas,
                    and religious pilgrimages. Our contact form ensures quick
                    communication with inquiries sent directly to the admin's
                    Gmail.
                  </p>
                  <p className="my-1">
                    <b>Frontend:</b> React js with Bootstrap
                  </p>
                  <p>
                    <b>Backend:</b> Node.js (with Nodemailer for form
                    submissions)
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 rounded-5 p-4 bg-success m-2 shadow"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #00ffff, #b6ffff)",
                color: "black",
              }}>
              <h3 className="fw-bold">Experience</h3>
              <div className="company">
                <img src={Onleed} className="1 me-2" alt="Onleeds Media Logo" />
                <div className="text">
                  <h5 className="fw-semibold">Web Development</h5>
                  <p>
                    <b>Onleed Media</b> · Internship <br />
                    Jan 2025 - Present · 1 month <br />
                    Thane, Maharashtra, India · Remote
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xs-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 col-xxl-2 rounded-5 bg-success fs-5 p-4 m-2 shadow"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #ffd700, #fff3b1)",
                color: "black",
              }}>
              <h3 className="fw-bold">Services</h3>
              <ul className="fw-semibold">
                <li>Front-end Development</li>
                <li>Web Development</li>
                <li>Web Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
