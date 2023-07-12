import React from "react";
import logo from "../assets/techwave.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsFacebook, BsSnapchat, BsInstagram , BsTiktok} from "react-icons/bs";

const header = () => {
  const location = useLocation();
  return (
    <>
      <header className="header p-2 shadow-sm sticky-top">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <div className="col-2 d-flex justify-content-center">
                <Link to={"/"}>
                  <img src={logo} alt="logo" className="img-fluid logo" />
                </Link>
              </div>

              <div className="col-6">
                <nav className="nav d-flex justify-content-center">
                  <Link className="mx-4 fs-4">
                    <NavLink to={"/"} className={location.pathname === '/' ? 'active' : 'inactive'}>
                      Home
                    </NavLink>
                  </Link>
                  <Link className="mx-4 fs-4">
                    <NavLink to={"/about"} className={location.pathname === 'about' ? 'active' : 'inactive'}>
                      About
                    </NavLink>
                  </Link>
                  <Link className="mx-4 fs-4">
                    <NavLink to={"/services"} className={location.pathname === 'services' ? 'active' : 'inactive'}>
                      Our Services
                    </NavLink>
                  </Link>
                  <Link className="mx-4 fs-4">
                    <NavLink to={"/contact"} className={location.pathname === 'contact' ? 'active' : 'inactive'} >
                      Contact
                    </NavLink>
                  </Link>
                </nav>
              </div>

              <div className="col-2">
                <div className="social-links d-flex justify-content-center">
                  <Link className="mx-3">
                    <FiTwitter className="fs-4" />
                  </Link>
                  <Link className="mx-3">
                    <BsFacebook className="fs-4" />
                  </Link>

                  <Link className="mx-3">
                    <BsSnapchat className="fs-4" />
                  </Link>

                  <Link className="mx-3">
                    <BsInstagram className="fs-4" />
                  </Link>
                  <Link className="mx-3">
                    <BsTiktok className="fs-4" />
                  </Link>
                </div>
              </div>

              <div className="col-2">
                <div className="signup d-flex justify-content-center">
                  <button className="btn btn-primary px-4 fs-4">Join Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
