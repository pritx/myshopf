import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import $ from "jquery";
// import jQuery from 'jquery';

const Header = () => {
  useEffect(() => {
    // Search Toggle
    $("#search_input_box").hide();
    $("#search").on("click", function () {
      $("#search_input_box").slideToggle();
      $("#search_input").focus();
    });
    $("#close_search").on("click", function () {
      $("#search_input_box").slideUp(500);
    });

    // Sticky Header
    window.$(".sticky-header").sticky();
  }, []);

  return (
    <>
      {/* happy */}
      {/* Start Header Area */}
      <header className="header_area sticky-header">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light main_box">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <a className="navbar-brand logo_h" href="index.html">
                <img src={require("../static/img/logo.png")} alt="" />
                {/* <img src="img/logo.png" alt="" /> */}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item active">
                    <NavLink to="/home" className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                          Shop Category
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/product" className="nav-link">
                          Product Details
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/checkout" className="nav-link">
                          Product Checkout
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/cart">
                          <a className="nav-link">Shopping Cart</a>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/confirm" className="nav-link">
                          Confirmation
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="/login">
                          <a className="nav-link">Login</a>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/register">
                          <a className="nav-link">Register</a>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/">
                          <a className="nav-link">Tracking</a>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/">
                          <a className="nav-link">Elements</a>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact">
                      <a className="nav-link">Contact</a>
                    </NavLink>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item">
                    <a className="cart">
                      <span className="ti-bag"></span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="search">
                      <span className="lnr lnr-magnifier" id="search"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="search_input" id="search_input_box">
          <div className="container">
            <form className="d-flex justify-content-between">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn"></button>
              <span
                className="lnr lnr-cross"
                id="close_search"
                title="Close Search"
              ></span>
            </form>
          </div>
        </div>
      </header>
      {/* End Header Area */}
    </>
  );
};

export default Header;
