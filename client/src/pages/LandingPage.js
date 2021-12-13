import React from 'react'



class LandingPage extends React.Component {

render () {

return (

<div>



  {/* =============== main-slider =============== */}
  <section className="s-main-slider">
    <div className="main-slide-navigation" />
    <ul className="main-soc-list">
      <li><a href="https://www.facebook.com/rovadex">facebook</a></li>
      <li><a href="https://twitter.com/RovadexStudio">twitter</a></li>
      <li><a href="https://www.instagram.com/rovadex/">instagram</a></li>
    </ul>
    <div className="main-slider">
      <div className="main-slide">
        <div className="main-slide-bg" style={{backgroundImage: 'url(assets/img/bg-slider.svg)'}} />
        <div className="container">
          <div className="main-slide-info">
            <h2 className="title">Rent any product</h2>
            <p>Enjoy the ease of renting your favourite products through our platform</p>
            <a href="single-shop.html" className="btn"><span>Rent now</span></a>
          </div>
          <div className="slide-img-cover">
            <a href="single-shop.html" className="lable-bike">
              <div className="lable-bike-img"><img src="assets/img/info_img_slider_1-01.png" alt="img" /></div>
              <div className="lable-bike-item">
                <div className="model">Tesla model S </div>
                <div className="price">$100/Day</div>
              </div>
            </a>
            <img src="assets/img/img-slider-01.png" alt="img" className="slide-img" />
          </div>
        </div>
      </div>
      <div className="main-slide">
        <div className="main-slide-bg" style={{backgroundImage: 'url(assets/img/bg-slider-2.svg)'}} />
        <div className="container">
          <div className="main-slide-info">
            <h2 className="title">best bikes for you</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore consectetur sint iure id expedita saepe.</p>
            <a href="single-shop.html" className="btn"><span>buy now</span></a>
          </div>
          <div className="slide-img-cover">
            <a href="single-shop.html" className="lable-bike">
              <div className="lable-bike-img"><img src="assets/img/bike-info-slide.jpg" alt="img" /></div>
              <div className="lable-bike-item">
                <div className="model">model M-300</div>
                <div className="price">$1199</div>
              </div>
            </a>
            <img src="assets/img/img-slider-2.png" alt="img" className="slide-img" />
          </div>
        </div>
      </div>
      <div className="main-slide">
        <div className="main-slide-bg" style={{backgroundImage: 'url(assets/img/bg-slider-3.svg)'}} />
        <div className="container">
          <div className="main-slide-info">
            <h2 className="title">best bikes for you</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio tenetur ab ut! Qui, facilis.</p>
            <a href="single-shop.html" className="btn"><span>buy now</span></a>
          </div>
          <div className="slide-img-cover">
            <a href="single-shop.html" className="lable-bike">
              <div className="lable-bike-img"><img src="assets/img/bike-info-slide.jpg" alt="img" /></div>
              <div className="lable-bike-item">
                <div className="model">model X-230</div>
                <div className="price">$1099</div>
              </div>
            </a>
            <img src="assets/img/img-slider-3.png" alt="img" className="slide-img" />
          </div>
        </div>
      </div>
      <div className="main-slide">
        <div className="main-slide-bg" style={{backgroundImage: 'url(assets/img/bg-slider.svg)'}} />
        <div className="container">
          <div className="main-slide-info">
            <h2 className="title">best bikes for you</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <a href="single-shop.html" className="btn"><span>buy now</span></a>
          </div>
          <div className="slide-img-cover">
            <a href="single-shop.html" className="lable-bike">
              <div className="lable-bike-img"><img src="assets/img/bike-info-slide.jpg" alt="img" /></div>
              <div className="lable-bike-item">
                <div className="model">model SX-200</div>
                <div className="price">$1399</div>
              </div>
            </a>
            <img src="assets/img/img-slider.png" alt="img" className="slide-img" />
          </div>
        </div>
      </div>
      <div className="main-slide">
        <div className="main-slide-bg" style={{backgroundImage: 'url(assets/img/bg-slider-2.svg)'}} />
        <div className="container">
          <div className="main-slide-info">
            <h2 className="title">best bikes for you</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore consectetur sint iure id expedita saepe.</p>
            <a href="single-shop.html" className="btn"><span>buy now</span></a>
          </div>
          <div className="slide-img-cover">
            <a href="single-shop.html" className="lable-bike">
              <div className="lable-bike-img"><img src="assets/img/bike-info-slide.jpg" alt="img" /></div>
              <div className="lable-bike-item">
                <div className="model">model M-300</div>
                <div className="price">$1199</div>
              </div>
            </a>
            <img src="assets/img/img-slider-2.png" alt="img" className="slide-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============= main-slider end ============= */}
  {/*================ S-FIND-BIKE ================*/}
  <section className="s-find-bike">
    <div className="container">
      <form className="find-bike-form">
        <h2 className="title">find your product </h2>
        <ul className="form-wrap">
          <li>
            <label>Type</label>
            <select className="nice-select">
              <option selected="selected">Mountain bike</option>
              <option>Hybrid/Comfort Bike</option>
              <option>Cyclocross Bike</option>
              <option>BMX/Trick Bike</option>
              <option>Road Bike</option>
              <option>Track Bike</option>
            </select>
          </li>
          <li>
            <label>Wheel Size</label>
            <select className="nice-select">
              <option selected="selected">20</option>
              <option>24</option>
              <option>26</option>
              <option>27</option>
              <option>27.5</option>
              <option>28</option>
            </select>
          </li>
          <li>
            <label>Brand</label>
            <select className="nice-select">
              <option selected="selected">Pinarello</option>
              <option>Eddy Merckx</option>
              <option>Specialized</option>
              <option>Giant</option>
              <option>Trek</option>
              <option>BMC</option>
            </select>
          </li>
          <li><a href="shop.html" className="btn"><span>search</span></a></li>
        </ul>
      </form>
    </div>
  </section>
  {/*============== S-FIND-BIKE END ==============*/}
  {/*============== S-CATEGORY-BICYKLE ==============*/}
  <section className="s-category-bicycle">
    <div className="container">
      <div className="slider-categ-bicycle">
        <div className="slide-categ-bicycle">
          <div className="categ-bicycle-item">
            <img src="assets/img/categ-2.png" alt="category" />
            <div className="categ-bicycle-info">
              <h4 className="title">mountain <br />&amp; road bikes</h4>
              <a href="shop.html" className="btn"><span>view more</span></a>
            </div>
          </div>
        </div>
        <div className="slide-categ-bicycle">
          <div className="categ-bicycle-item">
            <img src="assets/img/categ-3.png" alt="category" />
            <div className="categ-bicycle-info">
              <h4 className="title">bicycle <br />spare parts</h4>
              <a href="shop.html" className="btn"><span>view more</span></a>
            </div>
          </div>
        </div>
        <div className="slide-categ-bicycle">
          <div className="categ-bicycle-item">
            <img src="assets/img/categ-1.png" alt="category" />
            <div className="categ-bicycle-info">
              <h4 className="title">accessories <br />&amp; clothing</h4>
              <a href="shop.html" className="btn"><span>view more</span></a>
            </div>
          </div>
        </div>
        <div className="slide-categ-bicycle">
          <div className="categ-bicycle-item">
            <img src="assets/img/categ-3.png" alt="category" />
            <div className="categ-bicycle-info">
              <h4 className="title">bicycle <br />spare parts</h4>
              <a href="shop.html" className="btn"><span>view more</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============ S-CATEGORY-BICYKLE END ============*/}
  {/*=============== S-OUR-ADVANTAGES ===============*/}
  <section className="s-our-advantages" style={{backgroundImage: 'url(assets/img/bg-advantages.jpg)'}}>
    <span className="mask" />
    <div className="container">
      <h2 className="title">Our Advantages</h2>
      <div className="our-advantages-wrap">
        <div className="our-advantages-item">
          <img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/advantages-1.svg" alt="icon" />
          <h5>Free shipping <br />from $500</h5>
        </div>
        <div className="our-advantages-item">
          <img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/advantages-2.svg" alt="icon" />
          <h5>Warranty service <br />for 3 months</h5>
        </div>
        <div className="our-advantages-item">
          <img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/advantages-3.svg" alt="icon" />
          <h5>Exchange and return <br />within 14 days</h5>
        </div>
        <div className="our-advantages-item">
          <img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/advantages-4.svg" alt="icon" />
          <h5>Discounts for <br />customers</h5>
        </div>
      </div>
    </div>
  </section>
  {/*============= S-OUR-ADVANTAGES END =============*/}
  {/*================== S-PRODUCTS ==================*/}
  <section className="s-products">
    <div className="container">
      <div className="tab-wrap">
        <div className="products-title-cover">
          <h2 className="title">our products</h2>
          <ul className="tab-nav product-tabs">
            <li className="item" rel="tab1"><span>All</span></li>
            <li className="item" rel="tab2"><span>Road bike</span></li>
            <li className="item" rel="tab3"><span>City bike</span></li>
            <li className="item" rel="tab4"><span>BMX bike</span></li>
          </ul>
        </div>
        <div className="tabs-content">
          <div className="tab tab1">
            <div className="row product-cover">
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <span className="top-sale">top sale</span>
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-1.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                      <div className="old-price">$1.799</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-2.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Hyper E-Ride Bike 700C <br />20+ Mile Range</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <span className="sale">11%</span>
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-3.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                      <div className="old-price">$1.799</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Lightweight M370-27speed <br />Aluminum Alloy Mantis</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-4.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">New Spring Beach Cruiser <br />Bicycle Chrome</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-5.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-6.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Aluminum and Fork <br />Mountain Sr-26omg</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-7.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Steel Frame MTB Bike <br />with 21 Speed</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-8.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Leopard Rider No Chain <br />Mountain Bicycle</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab tab2">
            <div className="row product-cover">
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-5.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-6.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Aluminum and Fork <br />Mountain Sr-26omg</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <span className="top-sale">top sale</span>
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-1.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                      <div className="old-price">$1.799</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-2.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Hyper E-Ride Bike 700C <br />20+ Mile Range</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <span className="sale">11%</span>
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-3.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                      <div className="old-price">$1.799</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Lightweight M370-27speed <br />Aluminum Alloy Mantis</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-4.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">New Spring Beach Cruiser <br />Bicycle Chrome</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-7.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Steel Frame MTB Bike <br />with 21 Speed</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-8.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Leopard Rider No Chain <br />Mountain Bicycle</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab tab3">
            <div className="row product-cover">
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <span className="sale">11%</span>
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-3.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                      <div className="old-price">$1.799</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Lightweight M370-27speed <br />Aluminum Alloy Mantis</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-4.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">New Spring Beach Cruiser <br />Bicycle Chrome</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-5.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-6.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Aluminum and Fork <br />Mountain Sr-26omg</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <span className="top-sale">top sale</span>
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-1.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                      <div className="old-price">$1.799</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-2.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Hyper E-Ride Bike 700C <br />20+ Mile Range</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-7.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Steel Frame MTB Bike <br />with 21 Speed</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-8.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Leopard Rider No Chain <br />Mountain Bicycle</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab tab4">
            <div className="row product-cover">
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-5.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-6.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Aluminum and Fork <br />Mountain Sr-26omg</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <span className="top-sale">top sale</span>
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-1.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                      <div className="old-price">$1.799</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-2.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Hyper E-Ride Bike 700C <br />20+ Mile Range</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <span className="sale">11%</span>
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-3.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                      <div className="old-price">$1.799</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Lightweight M370-27speed <br />Aluminum Alloy Mantis</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-4.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">New Spring Beach Cruiser <br />Bicycle Chrome</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-7.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Steel Frame MTB Bike <br />with 21 Speed</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-8.png" alt="product" /></a>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">$1.699</div>
                    </div>
                    <h6 className="prod-title"><a href="single-shop.html">Leopard Rider No Chain <br />Mountain Bicycle</a></h6>
                    <a href="single-shop.html" className="btn"><span>buy now</span></a>
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Frame Size: <span>17</span></li>
                      <li>Class: <span>City</span></li>
                      <li>Number of speeds: <span>7</span></li>
                      <li>Type: <span>Rigid</span></li>
                      <li>Country registration: <span>USA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================ S-PRODUCTS END ================*/}
  {/*================== S-SUBSCRIBE ==================*/}
  <section className="s-subscribe" style={{backgroundImage: 'url(assets/img/bg-subscribe.jpg)'}}>
    <span className="mask" />
    <span className="subscribe-effect wow fadeIn" data-wow-duration="1s" style={{backgroundImage: 'url(assets/img/subscribe-effect.svg)'}} />
    <div className="container">
      <div className="subscribe-left">
        <h2 className="title"><span>Subscribe</span></h2>
        <p>Subscribe us and you won't miss the new arrivals, as well as discounts and sales.</p>
        <form className="subscribe-form">
          <i className="fa fa-at" aria-hidden="true" />
          <input className="inp-form" type="email" name="subscribe" placeholder="E-mail" />
          <button type="submit" className="btn btn-form btn-yellow"><span>send</span></button>
        </form>
      </div>
      <img className="wow fadeInRightBlur lazy" data-wow-duration=".8s" data-wow-delay=".3s" src="assets/img/placeholder-all.png" data-src="assets/img/subscribe-img.png" alt="img" />
    </div>
  </section>
  {/*================ S-SUBSCRIBE END ================*/}
  {/*================== S-TOP-SALE ==================*/}
  <section className="s-top-sale">
    <div className="container">
      <h2 className="title">Top sale</h2>
      <div className="row product-cover">
        <div className="col-sm-6 col-lg-3">
          <div className="product-item">
            <ul className="product-icon-top">
              <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
            </ul>
            <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-9.png" alt="product" /></a>
            <div className="product-item-cover">
              <div className="price-cover">
                <div className="new-price">$1.699</div>
                <div className="old-price">$1.799</div>
              </div>
              <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
              <a href="single-shop.html" className="btn"><span>buy now</span></a>
            </div>
            <div className="prod-info">
              <ul className="prod-list">
                <li>Frame Size: <span>17</span></li>
                <li>Class: <span>City</span></li>
                <li>Number of speeds: <span>7</span></li>
                <li>Type: <span>Rigid</span></li>
                <li>Country registration: <span>USA</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="product-item">
            <ul className="product-icon-top">
              <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
            </ul>
            <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-10.png" alt="product" /></a>
            <div className="product-item-cover">
              <div className="price-cover">
                <div className="new-price">$1.499</div>
                <div className="old-price">$1.799</div>
              </div>
              <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
              <a href="single-shop.html" className="btn"><span>buy now</span></a>
            </div>
            <div className="prod-info">
              <ul className="prod-list">
                <li>Frame Size: <span>17</span></li>
                <li>Class: <span>City</span></li>
                <li>Number of speeds: <span>7</span></li>
                <li>Type: <span>Rigid</span></li>
                <li>Country registration: <span>USA</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="product-item">
            <ul className="product-icon-top">
              <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
            </ul>
            <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-11.png" alt="product" /></a>
            <div className="product-item-cover">
              <div className="price-cover">
                <div className="new-price">$1.699</div>
                <div className="old-price">$1.799</div>
              </div>
              <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
              <a href="single-shop.html" className="btn"><span>buy now</span></a>
            </div>
            <div className="prod-info">
              <ul className="prod-list">
                <li>Frame Size: <span>17</span></li>
                <li>Class: <span>City</span></li>
                <li>Number of speeds: <span>7</span></li>
                <li>Type: <span>Rigid</span></li>
                <li>Country registration: <span>USA</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="product-item">
            <ul className="product-icon-top">
              <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
            </ul>
            <a href="single-shop.html" className="product-img"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/prod-12.png" alt="product" /></a>
            <div className="product-item-cover">
              <div className="price-cover">
                <div className="new-price">$1.499</div>
                <div className="old-price">$1.799</div>
              </div>
              <h6 className="prod-title"><a href="single-shop.html">Granite Peak 24" <br />Girls Mountain Bike</a></h6>
              <a href="single-shop.html" className="btn"><span>buy now</span></a>
            </div>
            <div className="prod-info">
              <ul className="prod-list">
                <li>Frame Size: <span>17</span></li>
                <li>Class: <span>City</span></li>
                <li>Number of speeds: <span>7</span></li>
                <li>Type: <span>Rigid</span></li>
                <li>Country registration: <span>USA</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================ S-TOP-SALE END ================*/}

  {/*================== S-OUR-NEWS ==================*/}
  <section className="s-our-news">
    <div className="container">
      <h2 className="title">Our News</h2>
      <div className="news-cover row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="news-item">
            <h6 className="title"><a href="news.html">doloremque laudantium, totam rem aperiam, eaque ipsa quae</a></h6>
            <div className="news-post-thumbnail">
              <a href="news.html"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/news-1.jpg" alt="news" /></a>
            </div>
            <div className="meta">
              <span className="date"><i className="fa fa-calendar" aria-hidden="true" /> Dec 26,2019</span>
              <span className="post-by"><i className="fa fa-user" aria-hidden="true" /> By <a href="#">Samson</a></span>
            </div>
            <div className="post-content">
              <p>Sed ut perspiciatis unde omnis iste natus  sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque.</p>
            </div>
            <a href="news.html" className="btn-news">read more</a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="news-item">
            <h6 className="title"><a href="news.html">At vero eos et accusamus et iusto odio dignissimos ducim</a></h6>
            <div className="news-post-thumbnail">
              <a href="single-news.html"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/news-2.jpg" alt="news" /></a>
            </div>
            <div className="meta">
              <span className="date"><i className="fa fa-calendar" aria-hidden="true" /> Dec 26,2019</span>
              <span className="post-by"><i className="fa fa-user" aria-hidden="true" /> By <a href="#">Samson</a></span>
            </div>
            <div className="post-content">
              <p>Corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.</p>
            </div>
            <a href="single-news.html" className="btn-news">read more</a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="news-item">
            <h6 className="title"><a href="news.html">On the other hand, we denounce with righteous indignation a</a></h6>
            <div className="news-post-thumbnail">
              <a href="news.html"><img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/news-3.jpg" alt="news" /></a>
            </div>
            <div className="meta">
              <span className="date"><i className="fa fa-calendar" aria-hidden="true" /> Dec 26,2019</span>
              <span className="post-by"><i className="fa fa-user" aria-hidden="true" /> By <a href="#">Samson</a></span>
            </div>
            <div className="post-content">
              <p>Blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those.</p>
            </div>
            <a href="single-news.html" className="btn-news">read more</a>
          </div>
        </div>
      </div>
      <div className="btn-cover"><a className="btn" href="news.html"><span>view more</span></a></div>
    </div>
  </section>
  {/*================ S-OUR-NEWS END ================*/}
  {/*=================== S-CLIENTS ===================*/}
  <section className="s-clients">
    <div className="container">
      <div className="clients-cover">
        <div className="client-slide">
          <div className="client-slide-cover">
            <img src="assets/img/client-1.svg" alt="img" />
          </div>
        </div>
        <div className="client-slide">
          <div className="client-slide-cover">
            <img src="assets/img/client-2.svg" alt="img" />
          </div>
        </div>
        <div className="client-slide">
          <div className="client-slide-cover">
            <img src="assets/img/client-4.svg" alt="img" />
          </div>
        </div>
        <div className="client-slide">
          <div className="client-slide-cover">
            <img src="assets/img/client-5.svg" alt="img" />
          </div>
        </div>
        <div className="client-slide">
          <div className="client-slide-cover">
            <img src="assets/img/client-6.svg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================= S-CLIENTS END =================*/}
  {/*=================== S-BANNER ===================*/}
  <section className="s-banner" style={{backgroundImage: 'url(assets/img/bg-section-banner.jpg)'}}>
    <span className="mask" />
    <div className="banner-img">
      <div className="banner-img-bg wow fadeIn" data-wow-duration=".6s" style={{backgroundImage: 'url(assets/img/effect-section-banner.svg)'}} />
      <img className="lazy wow fadeInLeftBlur" data-wow-duration=".8s" data-wow-delay=".3s" src="assets/img/placeholder-all.png" data-src="assets/img/bike-banner.png" alt="img" />
    </div>
    <div className="container">
      <h2 className="title">Hyper E-Ride Bike 700C</h2>
      <p className="slogan">Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem.</p>
      <div className="banner-price">
        <div className="new-price">$1.699</div>
        <div className="old-price">$1.799</div>
      </div>
      <div id="clockdiv">
        <div>
          <span className="days" />
          <div className="smalltext">Days</div>
        </div>
        <div>
          <span className="hours" />
          <div className="smalltext">Hours</div>
        </div>
        <div>
          <span className="minutes" />
          <div className="smalltext">Minutes</div>
        </div>
        <div>
          <span className="seconds" />
          <div className="smalltext">Seconds</div>
        </div>
      </div>
    </div>
  </section>
  {/*================= S-BANNER END =================*/}
  {/*================== S-INSTAGRAM ==================*/}
  <section className="s-instagram">
    <div className="instagram-cover">
      <a href="#" className="instagram-item">
        <ul>
          <li className="comments">234 <i className="fa fa-comment-o" aria-hidden="true" /></li>
          <li className="like">134 <i className="fa fa-heart-o" aria-hidden="true" /></li>
        </ul>
        <img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/instagram-1.jpg" alt="img" />
      </a>
      <a href="#" className="instagram-item">
        <ul>
          <li className="comments">222 <i className="fa fa-comment-o" aria-hidden="true" /></li>
          <li className="like">118 <i className="fa fa-heart-o" aria-hidden="true" /></li>
        </ul>
        <img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/instagram-2.jpg" alt="img" />
      </a>
      <a href="#" className="instagram-item">
        <ul>
          <li className="comments">224 <i className="fa fa-comment-o" aria-hidden="true" /></li>
          <li className="like">124 <i className="fa fa-heart-o" aria-hidden="true" /></li>
        </ul>
        <img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/instagram-3.jpg" alt="img" />
      </a>
      <a href="#" className="instagram-item">
        <ul>
          <li className="comments">155 <i className="fa fa-comment-o" aria-hidden="true" /></li>
          <li className="like">107 <i className="fa fa-heart-o" aria-hidden="true" /></li>
        </ul>
        <img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/instagram-4.jpg" alt="img" />
      </a>
      <a href="#" className="instagram-item">
        <ul>
          <li className="comments">350 <i className="fa fa-comment-o" aria-hidden="true" /></li>
          <li className="like">140 <i className="fa fa-heart-o" aria-hidden="true" /></li>
        </ul>
        <img className="lazy" src="assets/img/placeholder-all.png" data-src="assets/img/instagram-5.jpg" alt="img" />
      </a>
    </div>
  </section>
  {/*================ S-INSTAGRAM END ================*/}

  {/*===================== TO TOP =====================*/}
  <a className="to-top" href="#home">
    <i className="fa fa-angle-double-up" aria-hidden="true" />
  </a>
  {/*=================== TO TOP END ===================*/}
  {/*==================== SCRIPT	====================*/}
</div>


    
)


}


}



export default LandingPage;