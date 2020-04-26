import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BannerText from "../components/BannerText";
import Footer from "../components/Footer";
import Axios from "axios";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Category = () => {
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [pagdata, setPagdata] = useState([]);
  const [purl, setPurl] = useState([]);
  const [xurl, setXurl] = useState("http://192.168.43.34:8000/api/products/");
  const [imgurl, setImgurl] = useState([]);
  const [caturl, setCaturl] = useState(
    "http://192.168.43.34:8000/api/categories/"
  );
  const [category, setCategory] = useState([]);
  const [catsurl, setCatsurl] = useState([]);

  // Products
  useEffect(() => {
    Axios.get(xurl).then((response) => {
      console.log(response.data.previous + "from category");
      return [
        setPrev(response.data.previous),
        setNext(response.data.next),
        setPagdata(response.data.results),
        setPurl(response.data.results.url),
      ];
    });
    // Browse Categories List
    Axios.get(caturl).then((response) => {
      console.log(response.data.results.children);
      return [setCategory(response.data.results), console.log(category)];
    });
    // Sub Categories List
    Axios.get(caturl).then((response) => {
      console.log(response.data.results);
      return [setCategory(response.data.results), console.log(category)];
    });
  }, [xurl]);

  return (
    <div>
      <Header />
      <BannerText title="Product List" />

      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="sidebar-categories">
              <div className="head">Browse Categories</div>
              <ul className="main-categories">
                {category.map((item) => {
                  return (
                    <Link to="/">
                      <li className="main-nav-list">
                        <a
                          data-toggle="collapse"
                          href="#fruitsVegetable"
                          aria-expanded="false"
                          aria-controls="fruitsVegetable"
                        >
                          <span className="lnr lnr-arrow-right"></span>
                          {item.breadcrumbs}
                          <span className="number">(53)</span>
                        </a>
                        {/* <ul className="collapse" id="fruitsVegetable" data-toggle="collapse" aria-expanded="false" aria-controls="fruitsVegetable">
								   <li className="main-nav-list child"><a href="#/">Frozen Fish<span className="number">(13)</span></a></li>
								   <li className="main-nav-list child"><a href="#/">Dried Fish<span className="number">(09)</span></a></li>
								   <li className="main-nav-list child"><a href="#/">Fresh Fish<span className="number">(17)</span></a></li>
								   <li className="main-nav-list child"><a href="#/">Meat Alternatives<span className="number">(01)</span></a></li>
								   <li className="main-nav-list child"><a href="#/">Meat<span className="number">(11)</span></a></li>
							   </ul> */}
                      </li>
                    </Link>
                  );
                })}

                {/* <li className="main-nav-list"><a data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable"><span
								 className="lnr lnr-arrow-right"></span>Fruits and Vegetables<span className="number">(53)</span></a>
							<ul className="collapse" id="fruitsVegetable" data-toggle="collapse" aria-expanded="false" aria-controls="fruitsVegetable">
								<li className="main-nav-list child"><a href="#/">Frozen Fish<span className="number">(13)</span></a></li>
								<li className="main-nav-list child"><a href="#/">Dried Fish<span className="number">(09)</span></a></li>
								<li className="main-nav-list child"><a href="#/">Fresh Fish<span className="number">(17)</span></a></li>
								<li className="main-nav-list child"><a href="#/">Meat Alternatives<span className="number">(01)</span></a></li>
								<li className="main-nav-list child"><a href="#/">Meat<span className="number">(11)</span></a></li>
							</ul>
						</li> */}
              </ul>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7">
            {/* Start Filter Bar */}
            <div className="filter-bar d-flex flex-wrap align-items-center">
              <div className="sorting">
                {/* <select>
							<option value="1">Default sorting</option>
							<option value="1">Default sorting</option>
							<option value="1">Default sorting</option>
						</select> */}
              </div>
              <div className="sorting mr-auto">
                <div className="head has-text-white">Browse Categories</div>
                {/* <select>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
						</select> */}
              </div>
              <div className="pagination">
                <a
                  href="#/"
                  className="prev-arrow"
                  onClick={() => setXurl(prev)}
                >
                  <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                </a>
                {/* <a href="#/" className="prev-arrow" onClick={()=>{onClickLeft();}}><i className="fa fa-long-arrow-left" aria-hidden="true"></i></a> */}
                <a href="#/"></a>
                <a href="#/"></a>
                <a href="#/"></a>
                <a href="#/"></a>
                {/* <a href="#/" className="next-arrow" onClick={()=>setXurl(next)}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> */}
                <a
                  href="#/"
                  className="next-arrow"
                  onClick={() => setXurl(next)}
                >
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            {/* End Filter Bar */}
            {/* Start Best Seller */}

            {/* End Best Seller */}
            <section className="lattest-product-area pb-40 category-list">
              <div className="row">
                {pagdata.map((pagdata) => {
                  return (
                    <ProductCard
                      title={pagdata.title}
                      realurl={purl}
                      imageurl={pagdata.url}
                    />
                  );
                })}
              </div>
            </section>
            {/* Start Filter Bar */}
            <div className="filter-bar d-flex flex-wrap align-items-center">
              <div className="sorting mr-auto">
                {/* <select>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
						</select> */}
              </div>
              <div className="pagination">
                <a href="#/" className="prev-arrow">
                  <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                </a>
                <a href="#/"></a>
                <a href="#/"></a>
                <a href="#/"></a>
                <a href="#/"></a>
                <a href="#/" className="next-arrow">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* End Filter Bar */}
          </div>
        </div>
      </div>

      {/* <DealOf /> */}
      <Footer />
    </div>
  );
};

export default Category;
