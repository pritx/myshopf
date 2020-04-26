import React from "react";

const Banner = () => {
  return (
    <div>
      {/* Start Banner Area */}
      <section className="banner-area b-custom">
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-start">
            <div className="col-lg-12">
              <div className="active-banner-slider owl-carousel">
                {/* single-slide */}
                <div className="row single-slide align-items-center d-flex">
                  <div className="col-lg-5 col-md-6">
                    <div className="banner-content">
                      <h1>
                        Nike New <br />
                        Collection!
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.
                      </p>
                      <div className="add-bag d-flex align-items-center">
                        <a href="#/" className="add-btn"  >
                          <span className="lnr lnr-cross"></span>
                        </a>
                        <span className="add-text text-uppercase">Add to Bag</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="banner-img">
                      <img
                        className="img-fluid"
                        src={require("./../static/img/banner/banner-img.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* single-slide */}
                <div className="row single-slide">
                  <div className="col-lg-5">
                    <div className="banner-content">
                      <h1>
                        Nike New <br />
                        Collection!
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.
                      </p>
                      <div className="add-bag d-flex align-items-center">
                        <a href="#/" className="add-btn"  >
                          <span className="lnr lnr-cross"></span>
                        </a>
                        <span className="add-text text-uppercase">Add to Bag</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="banner-img">
                      <img
                        className="img-fluid"
                        src={require("./../static/img/banner/banner-img.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Area */}
    </div>
  );
};

export default Banner;
