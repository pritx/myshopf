import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BannerText from "../components/BannerText";
import Footer from "../components/Footer";
import Axios from 'axios';

const Cart = () => {
  const [xurl, setXurl] = useState('http://192.168.43.34:8000/api/basket/');



  // Products
  useEffect(() => {
    Axios.get(xurl).then((response)=>{
      console.log(response.data);	
      return [];	
    })
}, [xurl]);	

  return (
    <div>
      <Header/>
      <BannerText title={"Shopping Cart"}/>
      {/*================Cart Area =================   */}
      <section className="cart_area">
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src={require("./../static/img/cart.jpg")}
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div className="product_count">
                        <input
                          type="text"
                          name="qty"
                          id="sst"
                          maxlength="12"
                          value="1"
                          title="Quantity:"
                          className="input-text qty"
                        />
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                          className="increase items-count"
                          type="button"
                        >
                          <i className="lnr lnr-chevron-up"></i>
                        </button>
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                          className="reduced items-count"
                          type="button"
                        >
                          <i className="lnr lnr-chevron-down"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src={require("./../static/img/cart.jpg")}
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div className="product_count">
                        <input
                          type="text"
                          name="qty"
                          id="sst"
                          maxlength="12"
                          value="1"
                          title="Quantity:"
                          className="input-text qty"
                        />
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                          className="increase items-count"
                          type="button"
                        >
                          <i className="lnr lnr-chevron-up"></i>
                        </button>
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                          className="reduced items-count"
                          type="button"
                        >
                          <i className="lnr lnr-chevron-down"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src={require("./../static/img/cart.jpg")}
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div className="product_count">
                        <input
                          type="text"
                          name="qty"
                          id="sst"
                          maxlength="12"
                          value="1"
                          title="Quantity:"
                          className="input-text qty"
                        />
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                          className="increase items-count"
                          type="button"
                        >
                          <i className="lnr lnr-chevron-up"></i>
                        </button>
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                          className="reduced items-count"
                          type="button"
                        >
                          <i className="lnr lnr-chevron-down"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                  </tr>
                  <tr className="bottom_button">
                    {/* <td>
                      <a className="gray_btn" href="#/">
                        Update Cart
                      </a>
                    </td> */}
                    <td></td>
                    <td></td>
                    <td>
                      {/* <div className="cupon_text d-flex align-items-center">
                        <input type="text" placeholder="Coupon Code" />
                        <a className="primary-btn" href="#/">
                          Apply
                        </a>
                        <a className="gray_btn" href="#/">
                          Close Coupon
                        </a>
                      </div> */}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>$2160.00</h5>
                    </td>
                  </tr>
                  <tr className="shipping_area">
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Shipping</h5>
                    </td>
                    <td>
                      <div className="shipping_box">
                        <ul className="list">
                          <li>
                            <a href="#/">Flat Rate: $5.00</a>
                          </li>
                          <li>
                            <a href="#/">Free Shipping</a>
                          </li>
                          <li>
                            <a href="#/">Flat Rate: $10.00</a>
                          </li>
                          <li className="active">
                            <a href="#/">Local Delivery: $2.00</a>
                          </li>
                        </ul>
                        <h6>
                          Calculate Shipping{" "}
                          <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </h6>
                        <select className="shipping_select">
                          <option value="1">Bangladesh</option>
                          <option value="2">India</option>
                          <option value="4">Pakistan</option>
                        </select>
                        <select className="shipping_select">
                          <option value="1">Select a State</option>
                          <option value="2">Select a State</option>
                          <option value="4">Select a State</option>
                        </select>
                        <input type="text" placeholder="Postcode/Zipcode" />
                        <a className="gray_btn" href="#/">
                          Update Details
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="out_button_area">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="checkout_btn_inner d-flex align-items-center">
                        <a className="gray_btn" href="#/">
                          Continue Shopping
                        </a>
                        <a className="primary-btn" href="#/">
                          Proceed to checkout
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/*================End Cart Area =================*/}
      <Footer />
    </div>
  );
};

export default Cart;
