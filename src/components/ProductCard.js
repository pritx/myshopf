import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const [xurl, setXurl] = useState(props.imageurl);
  const [price, setPrice] = useState('');

  // useEffect(async() => {
  //   console.log(props.purl);
    
  //   // let url = props.imageurl;
  //   await Axios.get(xurl+'price/').then((response)=>{
  //     console.log(response.data.incl_tax);
  //     setPrice(response.data.incl_tax);
  //   })
  //   console.log(xurl);
  //   await Axios.get(xurl).then((response) => {
  //     return Promise.all[console.log(response.data.images[0].original), setXurl(response.data.images[0].original)];
  //   })
    
  // }, [])
  useEffect(() => {
    console.log('Effect')
    
  }, [])

  return (
    <>
    
      {/* single product */}
      <div className="col-lg-4 col-md-6">
        <div className="single-product">
          <img
            className="products-height"
            src={xurl}
            // src={require('./../static/img/r2.jpg')}
            alt=""
          />
          {/* <Link to={{
										pathname: '/product',
										data: [{url: props.purl}]
									}} > */}
          <div className="product-details">
              <h6>{props.title}</h6>
            <div className="price">
              <h6>₹ {price}</h6>
              <h6 className="l-through">$210.00</h6>
            </div>
            <div className="prd-bottom">
              <a className="social-info">
                <span className="ti-bag"></span>
                <p className="hover-text">add to bag</p>
              </a>
              {/* <a className="social-info">
                <span className="lnr lnr-heart"></span>
                <p className="hover-text">Wishlist</p>
              </a> */}
            </div>
          </div>
              
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
