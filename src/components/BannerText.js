import React from "react";

const BannerText = (props) => {
  return (
    <>
    <div>
      {/* Start Banner Area */}
      <section className="banner-area organic-breadcrumb b-custom">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end some-bg">
            <div className="col-first">
              <h1>{props.title}</h1>
              <nav className="d-flex align-items-center">

                <a href="#/" className="word-spacing">{props.burger}</a>
                {/* <a href="#/">
                  Home<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="#/">
                  Shop<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="#/">Fashon Category</a> */}
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Area */}
    </div>
    </>
  );
};

export default BannerText;
