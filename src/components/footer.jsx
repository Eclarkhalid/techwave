import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/techwave.png";

const footer = () => {
  return (
    <>
      <footer className="footer p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center">
              <div className="col-3 d-flex justify-content-center">
                <Link className="fs-3">
                  <a href="tel:+254708118414">Contact Us</a>
                </Link>
              </div>

              <div className="col-6 d-flex justify-content-center">
                <h3>
                  Developed by <Link>Eclar Khalid</Link> &copy; 2023
                </h3>
              </div>

              <div className="col-3 d-flex justify-content-center">
                <Link to={"/"}>
                  <img src={logo} alt="logo" className="img-fluid logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
