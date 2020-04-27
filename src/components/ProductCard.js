import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'

const ProductCard = (props) => {
  // const [xurl, setXurl] = useState(props.prourl);
  const [prourl, setProurl] = useState(props.prourl);
  const [imgurl, setImgurl] = useState(null);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("I am product card");
    Axios.get(prourl).then((response) => {
      setImgurl(null);
      setLoading(true);
      // console.log(response.data);
      setImgurl(response.data.images[0].original);
      setLoading(false);
    });

    Axios.get(prourl + "price/").then((response) => {
      // console.log("Price Section");
      // console.log(response.data);
      setPrice(null);
      return [setPrice(response.data.incl_tax)];
    });
  }, []);

  const addToCart = () =>{
    console.log(prourl);
    console.log('POST REQUEST');
    // const data = {
    //   "url": prourl,
    //   "quantity": 6,
    // }
    // Axios.post(('http://192.168.43.34:8000/api/basket/add-product/', data)).then((response) =>{
    //   console.log(response);
    // })
    Axios({
      method: 'post',
      url : 'http://192.168.43.34:8000/api/basket/add-product/',
      data: {
        "url": prourl,
        "quantity": 1,
      }
    }).then((response) =>{
      console.log(response);
    })
    
  }

  return (
    <>
      {/* single product */}
      <div className="col-lg-4 col-md-6">
        <div className="single-product">
        
            {
              loading === true ? (
              
              <div className="products-height">
                <Loader
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}
                // timeout={3000} //3 secs
                className="products-height"
             />
              </div>
              
              
              ) : (<Link
              to={{
                pathname: "/product",
                url:  prourl ,
              }}
            ><img
            className="products-height product-cursor"
            src={imgurl}
            // src={require("./../static/img/r2.jpg")}
            alt=""
          />
          </Link>)
            }
          
          <Link
            to={{
              pathname: "/product",
              url:  prourl ,
            }}
          >
            <div className="product-details">
              <h6>{props.title}</h6>
              <div className="price">
                <h6>₹ {price}</h6>
                <h6 className="through">{props.upc}</h6>
              </div>
              <div className="prd-bottom">


                <Link onClick={()=>{addToCart()}}>
                <a className="social-info  product-cursor">
                  <span className="ti-bag"></span>
                  <p className="hover-text">add to bag</p>
                </a>
                </Link>
                {/* <a className="social-info">
                <span className="lnr lnr-heart"></span>
                <p className="hover-text">Wishlist</p>
              </a> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
