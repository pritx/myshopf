import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BannerText from "../components/BannerText";
import Footer from "../components/Footer";
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Login = () => {
  const [xurl, setXurl] = useState('http://192.168.43.34:8000/api/login/');
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  // Products
  useEffect(() => {
    Axios.get(xurl).then((response)=>{
      console.log(response.data);	
      return [];	
    })
}, [xurl]);	

  const changeUsername = (event) => {
    return Promise.all[setUsername(event.target.value),console.log(username)];
  }
  

  const changePassword = (event) => {
    return Promise.all[setPassword(event.target.value),console.log(password)];    
  }


  return (
    <div>
      <Header />
      <BannerText title={"Login"} />
      {/*================Login Box Area =================*/}
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
                  <h4>New to our website?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <Link to="/register">
                  <a className="primary-btn" href="#/">
                    Create an Account
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>Log in to enter</h3>
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
                      type = "text"
                      onChange={(e)=>changeUsername(e)}
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
                      type = "text"
                      onChange={(e)=>changePassword(e)}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      <input type="checkbox" id="f-option2" name="selector" />
                      <label for="f-option2">Keep me logged in</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <button type="submit" value="submit" className="primary-btn">
                      Log In
                    </button>
                    <a href="#/">Forgot Password?</a>
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

export default Login;
