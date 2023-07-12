import React from "react";
import img from "../assets/img2.jpg";
import img1 from "../assets/blog-1.jpg";
import img2 from "../assets/blog-2.jpg";
import img3 from "../assets/blog-3.jpg";
import img4 from "../assets/people 1.jpg";
import img5 from "../assets/people-2.jpg";
import img6 from "../assets/people-3.jpg";
import img7 from "../assets/people-4.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <>
      <section className="home mt-3">
        <div className="container-xxl">
          <div className="row  d-flex flex-column justify-content-center align-items-center">
            <div className="home-wrapper "></div>
            <div className=" text-center home-details">
              <div className="mb-3">
                <h3 className="text-danger">
                  Transform Your IT Strategy Today!!
                </h3>
              </div>
              <div className="mb-5">
                <h2>
                  Revolutionize your business with{" "}
                  <span className="fs-1 text-danger">Techwave</span> expert IT
                  consulting services. Get a competitive edge.
                </h2>
              </div>

              <div className="signup d-flex justify-content-center">
                <Link to={'/contact'}>
                  <button className="btn btn-primary px-4 fs-4">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about p-5">
        <div className="container-xxl">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-6">
              <img src={img} alt="about" className="img-fluid p-5" />
            </div>

            <div className="col-6 p-3">
              <h1 className="mb-4">
                <b>About Us</b>
              </h1>
              <p className="fs-3">
                Techwave is an IT consulting firm located in Thika, Kiambu. We
                provide expert guidance and support to help businesses maximize
                their technology investments. Our team of experienced
                professionals offers a wide range of services, including IT
                strategy development, project management, and technical support.
                At eclar, we are committed to delivering innovative solutions
                that drive business growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services p-5">
        <div className="container-xxl">
          <div className="row">
            <h1>Our Services</h1>
            <div className="d-flex align-items-center justify-content-around">
              <div className="col-4 p-3">
                <div className="card">
                  <img src={img1} alt="" className="img-fluid p-3" />
                  <div className="card-details p-4">
                    <h2>IT System Audit</h2>
                    <p className="fs-4">
                      We analyze your IT systems to identify potential risks and
                      vulnerabilities, providing detailed recommendations to
                      optimize your security and performance.
                    </p>
                    <button className="btn btn-primary">More Info</button>
                  </div>
                </div>
              </div>

              <div className="col-4 p-3">
                <div className="card">
                  <img
                    src={img2}
                    alt=""
                    className="img-fluid card-img-top p-3"
                  />
                  <div className="card-details p-4">
                    <h2>Cloud Migration</h2>
                    <p className="fs-4">
                      We help your business migrate to the cloud, ensuring a
                      seamless transition and providing ongoing support to
                      optimize your cloud-based IT infrastructure.
                    </p>
                    <button className="btn btn-primary">More Info</button>
                  </div>
                </div>
              </div>

              <div className="col-4 p-3">
                <div className="card">
                  <img src={img3} alt="" className="img-fluid p-3" />
                  <div className="card-details p-4">
                    <h2>IT Strategy Consulting</h2>
                    <p className="fs-4">
                      We provide expert advice and guidance on aligning your IT
                      strategy with your business goals, optimizing your
                      technology investments and processes for productivity and
                      growth.
                    </p>
                    <button className="btn btn-primary">More Info</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="remarks p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex justify-content-around align-items-center">
              <Link className="col-3 p-2">
                <div className="card">
                  <div className="d-flex">
                    <div className="col-3">
                      <img
                        src={img4}
                        alt="service"
                        className="img-fluid card-img-top mx-auto p-3"
                      />
                    </div>
                    <div className="card-body">
                      <RiDoubleQuotesL className="icon fs-3" />
                      <p>
                        I had a fantastic experience with eclar! Their IT
                        consulting services were top-notch and helped my
                        business run smoothly.
                      </p>
                      <span>last updated: now</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link className="col-3 p-2">
                <div className="card">
                  <div className="d-flex">
                    <div className="col-3">
                      <img
                        src={img5}
                        alt="service"
                        className="img-fluid card-img-top mx-auto p-3"
                      />
                    </div>
                    <div className="card-body">
                      <RiDoubleQuotesL className="icon fs-3" />
                      <p>
                        I had a fantastic experience with eclar! Their IT
                        consulting services were top-notch and helped my
                        business run smoothly.
                      </p>
                      <span>last Updated: now</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link className="col-3 p-2">
                <div className="card">
                  <div className="d-flex">
                    <div className="col-3">
                      <img
                        src={img6}
                        alt="service"
                        className="img-fluid card-img-top mx-auto p-3"
                      />
                    </div>
                    <div className="card-body">
                      <RiDoubleQuotesL className="icon fs-3" />
                      <p>
                        I had a fantastic experience with eclar! Their IT
                        consulting services were top-notch and helped my
                        business run smoothly.
                      </p>
                      <span>last Updated: now</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link className="col-3 p-2">
                <div className="card">
                  <div className="d-flex">
                    <div className="col-3">
                      <img
                        src={img7}
                        alt="service"
                        className="img-fluid card-img-top mx-auto p-3"
                      />
                    </div>
                    <div className="card-body">
                      <RiDoubleQuotesL className="icon fs-3" />
                      <p>
                        I had a fantastic experience with eclar! Their IT
                        consulting services were top-notch and helped my
                        business run smoothly.
                      </p>
                      <span>last Updated: now</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="map p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 d-flex flex-column justify-content-center align-items-center">
              <div>
                <h1>Our Location.</h1>
              </div>
              <div>
                <p className="fs-3">We are open from 8am to 6pm</p>
              </div>
            </div>
            <div className="col-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d127642.59193203965!2d36.8377856!3d-1.2746752!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1687870032149!5m2!1sen!2ske"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="news-letter p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex flex-column align-items-center">
                <h2 className="mb-3">Sign Up for a newsletter</h2>
                <h5>
                  Get email updates on all our <Link>intakes</Link>
                </h5>
              </div>
            </div>
            <div className="col-md-6 details d-flex flex-column justify-content-center">
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="news-input"
                  className="form-control"
                  placeholder="@example.com"
                  aria-label="@example.com"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text" id="basic-addon2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default home;
