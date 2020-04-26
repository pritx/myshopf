import React from "react";
import Header from "../components/Header";
import BannerText from "../components/BannerText";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Register = () => {  
  return (
    <div>
      <Header />
      <BannerText title={"Register"} />
      {/*================Register Box Area =================*/}
      <section className="login_box_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img">
                <img
                  className="img-fluid"
                  src={require("./../static/img/login.jpg")}
                  alt=""
                />
                <div className="hover">
                  <h4>Returning Customer?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <Link to="/login">
                  <a className="primary-btn" href="#/">
                    Log In
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>Sign up to enter</h3>
                <form
                  className="row login_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Username"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Username'"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Password"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Password'"
                    />
                  </div>
                  {/* Confirm Password */}
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Confirm Password"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Confirm Password'"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      <input type="checkbox" id="f-option2" name="selector" />
                      <label for="f-option2">I agree with the terms and conditions.</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <button type="submit" value="submit" className="primary-btn">
                      Sign Up
                    </button>
                    <a href="#/">Policies and Agreement</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Login Box Area =================*/}
      <Footer />
    </div>
  );
};

export default Register;
