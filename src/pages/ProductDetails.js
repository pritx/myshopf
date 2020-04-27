import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import BannerText from "../components/BannerText";
import Footer from "../components/Footer";
import Loader from 'react-loader-spinner';
import DealOf from '../components/DealOf';
import Axios from 'axios';

const ProductDetails = (props) => {
	// const { data } = props.location;
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [imageu, setImageu] = useState([]);
	const [curr, setCurr] = useState('Price not available');
	const [upc, setUpc] = useState('');
	const [cat, setCat] = useState('');
	const [burger, setBurger] = useState([]);
	const [message, setMessage] = useState('')
	const [isloading, setIsloading] = useState(true);

	const [url, setUrl] = useState(props.location.url);
	// const [url, setUrl] = useState('http://192.168.43.34:8000/api/products/196/');
	// const [url, setUrl] = useState('https://iambook.herokuapp.com/api/products/5/');

	useEffect(() => {
		console.log(props.location.url);

		// let url= 'http://192.168.43.34:8000/api/products/107/';
		
		Axios.get(url).then(function(response) {
			console.log(response.data);
			console.log(response.data.categories);
			setTitle(response.data.title);
			setDesc(response.data.description);
			setImageu(response.data.images[0].original);
			setUpc(response.data.upc);
			setCat(response.data.product_class);
			setBurger(response.data.categories);

			setIsloading(false);
		})
		// Price
		Axios.get(url + 'price/').then(function(response){
			console.log(response.data);
			setCurr(response.data.incl_tax);
		})
		// Available
		Axios.get(url + 'availability/').then(function(response){
			console.log(response.data);
			setMessage(response.data.message);
		})
	}, [])

	

    return (
        <div>
			<Header />
			<BannerText title={"Product Details"} burger={burger} />
            {/*================Single Product Area =================*/}

		<div className="product_image_area">
			<div className="container">
				<div className="row s_product_inner">
					<div className="col-lg-6">
						<div className="s_Product_carousel">
							<div className="single-prd-item">
								{
									isloading === true ? (
									<div className="set-image centered">
										<Loader
										type="Puff"
										color="#00BFFF"
										height={100}
										width={100}
								
									 />
									</div>
									) : (<img className="set-image" src={imageu} alt=""/>)
								}

								{/* <img className="set-image" src={imageu} alt=""/> */}
								{/* <img className="img-fluid" src={require("./../static/img/category/s-p1.jpg")} alt="" /> */}
							</div>
							<div className="single-prd-item">
								{/* <img className="img-fluid" src={require("./../static/img/category/s-p1.jpg")} alt="" /> */}
							</div>
							<div className="single-prd-item">
								{/* <img className="img-fluid" src={require("./../static/img/category/s-p1.jpg")} alt="" /> */}
							</div>
						</div>
					</div>
					<div className="col-lg-5 offset-lg-1">
						<div className="s_product_text">
							<h3>{title}</h3>
							{
								curr ? (<h2> ₹ {curr}</h2>) : (<h2>Unavailable</h2>)
							}
							{/* <h2> ₹ {curr}</h2> */}
							<ul className="list">
								<li><a className="active first-char" href="#/"><span>Category</span> : {cat}</a></li>
								<li><a href="#/"><span>Availibility</span> : {message}</a></li>
								<li><a href="#/"><span>UPC</span> : {upc}</a></li>
							</ul>
							<p>{desc}</p>
							<div className="product_count">
								<label for="qty">Quantity:</label>
								<input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" className="input-text qty" />
								<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
								className="increase items-count" type="button"><i className="lnr lnr-chevron-up"></i></button>
								<button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
								className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"></i></button>
							</div>
							<div className="card_area d-flex align-items-center">
								<a className="primary-btn" href="#/">Add to Cart</a>
								<a className="icon_btn" href="#/"><i className="lnr lnr lnr-diamond"></i></a>
								<a className="icon_btn" href="#/"><i className="lnr lnr lnr-heart"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*================End Single Product Area =================*/}


		{/*================Product Description Area =================*/}
			
		<section className="product_description_area">
			<div className="container">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link" id="home-tab" data-toggle="tab" href="#/" role="tab" aria-controls="home" aria-selected="true">Description</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="profile-tab" data-toggle="tab" href="#/" role="tab" aria-controls="profile"
						aria-selected="false">Specification</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="contact-tab" data-toggle="tab" href="#/" role="tab" aria-controls="contact"
						aria-selected="false">Comments</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" id="review-tab" data-toggle="tab" href="#/" role="tab" aria-controls="review"
						aria-selected="false">Reviews</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						<div className="table-responsive">
							<table className="table">
								<tbody>
									<tr>
										<td>
											<h5>Width</h5>
										</td>
										<td>
											<h5>128mm</h5>
										</td>
									</tr>
									<tr>
										<td>
											<h5>Height</h5>
										</td>
										<td>
											<h5>508mm</h5>
										</td>
									</tr>
									<tr>
										<td>
											<h5>Depth</h5>
										</td>
										<td>
											<h5>85mm</h5>
										</td>
									</tr>
									<tr>
										<td>
											<h5>Weight</h5>
										</td>
										<td>
											<h5>52gm</h5>
										</td>
									</tr>
									<tr>
										<td>
											<h5>Quality checking</h5>
										</td>
										<td>
											<h5>yes</h5>
										</td>
									</tr>
									<tr>
										<td>
											<h5>Freshness Duration</h5>
										</td>
										<td>
											<h5>03days</h5>
										</td>
									</tr>
									<tr>
										<td>
											<h5>When packeting</h5>
										</td>
										<td>
											<h5>Without touch of hand</h5>
										</td>
									</tr>
									<tr>
										<td>
											<h5>Each Box contains</h5>
										</td>
										<td>
											<h5>60pcs</h5>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						<div className="row">
							<div className="col-lg-6">
								<div className="comment_list">
									<div className="review_item">
										<div className="media">
											<div className="d-flex">
												<img src={require("./../static/img/product/review-1.png")} alt="" />
											</div>
											<div className="media-body">
												<h4>Blake Ruiz</h4>
												<h5>12th Feb, 2018 at 05:56 pm</h5>
												<a className="reply_btn" href="#/">Reply</a>
											</div>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
											commodo</p>
									</div>
									<div className="review_item reply">
										<div className="media">
											<div className="d-flex">
												<img src={require("./../static/img/product/review-2.png")} alt="" />
											</div>
											<div className="media-body">
												<h4>Blake Ruiz</h4>
												<h5>12th Feb, 2018 at 05:56 pm</h5>
												<a className="reply_btn" href="#/">Reply</a>
											</div>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
											commodo</p>
									</div>
									<div className="review_item">
										<div className="media">
											<div className="d-flex">
												<img src={require("./../static/img/product/review-3.png")} alt="" />
											</div>
											<div className="media-body">
												<h4>Blake Ruiz</h4>
												<h5>12th Feb, 2018 at 05:56 pm</h5>
												<a className="reply_btn" href="#/">Reply</a>
											</div>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
											commodo</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="review_box">
									<h4>Post a comment</h4>
									<form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
										<div className="col-md-12">
											<div className="form-group">
												<input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<input type="email" className="form-control" id="email" name="email" placeholder="Email Address" />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<textarea className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
											</div>
										</div>
										<div className="col-md-12 text-right">
											<button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
						<div className="row">
							<div className="col-lg-6">
								<div className="row total_rate">
									<div className="col-6">
										<div className="box_total">
											<h5>Overall</h5>
											<h4>4.0</h4>
											<h6>(03 Reviews)</h6>
										</div>
									</div>
									<div className="col-6">
										<div className="rating_list">
											<h3>Based on 3 Reviews</h3>
											<ul className="list">
												<li><a href="#/">5 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
														className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
												<li><a href="#/">4 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
														className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
												<li><a href="#/">3 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
														className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
												<li><a href="#/">2 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
														className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
												<li><a href="#/">1 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
														className="fa fa-star"></i><i className="fa fa-star"></i> 01</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="review_list">
									<div className="review_item">
										<div className="media">
											<div className="d-flex">
												<img src={require("./../static/img/product/review-1.png")} alt="" />
											</div>
											<div className="media-body">
												<h4>Blake Ruiz</h4>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
											commodo</p>
									</div>
									<div className="review_item">
										<div className="media">
											<div className="d-flex">
												<img src={require("./../static/img/product/review-2.png")} alt="" />
											</div>
											<div className="media-body">
												<h4>Blake Ruiz</h4>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
											commodo</p>
									</div>
									<div className="review_item">
										<div className="media">
											<div className="d-flex">
												<img src={require("./../static/img/product/review-3.png")} alt="" />
											</div>
											<div className="media-body">
												<h4>Blake Ruiz</h4>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
											commodo</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="review_box">
									<h4>Add a Review</h4>
									<p>Your Rating:</p>
									<ul className="list">
										<li><a href="#/"><i className="fa fa-star"></i></a></li>
										<li><a href="#/"><i className="fa fa-star"></i></a></li>
										<li><a href="#/"><i className="fa fa-star"></i></a></li>
										<li><a href="#/"><i className="fa fa-star"></i></a></li>
										<li><a href="#/"><i className="fa fa-star"></i></a></li>
									</ul>
									<p>Outstanding</p>
									<form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
										<div className="col-md-12">
											<div className="form-group">
												<input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Full name'" />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<input type="email" className="form-control" id="email" name="email" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'" />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<textarea className="form-control" name="message" id="message" rows="1" placeholder="Review" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Review'"></textarea>
											</div>
										</div>
										<div className="col-md-12 text-right">
											<button type="submit" value="submit" className="primary-btn">Submit Now</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	{/*================End Product Description Area =================*/}
	<DealOf />
	<Footer />
    </div>
   
    )
}

export default ProductDetails;
