import React from 'react'

class AboutUs extends React.Component {


 render () {

  return (

    <div>
    {/* ============== ABOUT-ADVANTAGES ============== */}
    <section className="s-about-advantages">
      <div className="container">
        <h2 className="title"><span>Our advantages</span></h2>
        <div className="row about-adv-cover">
          <div className="cil-12 col-md-6 about-adv-item">
            <img src="assets/img/about-1.jpg" alt="img" />
            <h5 className="title">Doloremque laudantium, totam rem aperiam</h5>
            <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque lauda ntium, <a href="#">totam rem</a> aperiam, eaque.</p>
          </div>
          <div className="cil-12 col-md-6 about-adv-item">
            <img src="assets/img/about-2.jpg" alt="img" />
            <h5 className="title">At vero eos et accusamus et iusto odio</h5>
            <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque lauda ntium, <a href="#">totam rem</a> aperiam, eaque.</p>
          </div>
        </div>
        <div className="our-advantages-wrap advantages-wrap-about">
          <div className="our-advantages-item">
            <img src="assets/img/advantages-about-1.svg" alt="icon" />
            <h5>Free shipping <br />from $500</h5>
          </div>
          <div className="our-advantages-item wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".25s">
            <img src="assets/img/advantages-about-2.svg" alt="icon" />
            <h5>Warranty service <br />for 3 months</h5>
          </div>
          <div className="our-advantages-item wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".35s">
            <img src="assets/img/advantages-about-3.svg" alt="icon" />
            <h5>Exchange and return <br />within 14 days</h5>
          </div>
          <div className="our-advantages-item wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".45s">
            <img src="assets/img/advantages-about-4.svg" alt="icon" />
            <h5>Discounts for <br />customers</h5>
          </div>
        </div>
      </div>
    </section>
    {/* ============ ABOUT-ADVANTAGES END ============ */}
    {/*================= S-ABOUT-COUNT =================*/}
    <section className="s-about-count counter-animate counter-active" style={{backgroundImage: 'url(assets/img/bg-about-count.jpg)'}}>
      <span className="mask" />
      <span className="effwct-bg-about" style={{backgroundImage: 'url(assets/img/effect-bg-about.svg)'}} />
      <div className="container">
        <div className="row about-count-cover">
          <div className="col-sm-6 col-md-3 about-count-item">
            <div className="number"><span data-number={2200}>0</span></div>
            <h5>Satisfied customers</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
          </div>
          <div className="col-sm-6 col-md-3 about-count-item">
            <div className="number"><span data-number={1650}>0</span></div>
            <h5>Various Products</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
          </div>
          <div className="col-sm-6 col-md-3 about-count-item">
            <div className="number"><span data-number={125}>0</span></div>
            <h5>Famous brand</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
          </div>
          <div className="col-sm-6 col-md-3 about-count-item">
            <div className="number"><span data-number={1988}>0</span></div>
            <h5>Orders per year</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
          </div>
        </div>
      </div>
    </section>
    {/*=============== S-ABOUT-COUNT END ===============*/}
    {/*================== S-OUR-TEAM ==================*/}
    <section className="s-our-team">
      <div className="container">
        <h2 className="title"><span>our teem</span></h2>
        <div className="row team-cover">
          <div className="col-sm-6 col-md-3 team-item">
            <img src="assets/img/about-team-1.jpg" alt="img" />
            <h5 className="title">Melissa Small</h5>
            <div className="prof">Director</div>
            <ul className="social-list">
              <li><a target="_blank" href="https://www.facebook.com/rovadex"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://twitter.com/RovadexStudio"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://www.instagram.com/rovadex"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://www.youtube.com"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 team-item">
            <img src="assets/img/about-team-2.jpg" alt="img" />
            <h5 className="title">Peregrine Harris</h5>
            <div className="prof">Sales Manager</div>
            <ul className="social-list">
              <li><a target="_blank" href="https://www.facebook.com/rovadex"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://twitter.com/RovadexStudio"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://www.instagram.com/rovadex"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://www.youtube.com"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 team-item">
            <img src="assets/img/about-team-3.jpg" alt="img" />
            <h5 className="title">Agatha Allison</h5>
            <div className="prof">Sanager</div>
            <ul className="social-list">
              <li><a target="_blank" href="https://www.facebook.com/rovadex"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://twitter.com/RovadexStudio"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://www.instagram.com/rovadex"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://www.youtube.com"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 team-item">
            <img src="assets/img/about-team-4.jpg" alt="img" />
            <h5 className="title">Mark Simpson</h5>
            <div className="prof">Seller</div>
            <ul className="social-list">
              <li><a target="_blank" href="https://www.facebook.com/rovadex"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://twitter.com/RovadexStudio"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://www.instagram.com/rovadex"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
              <li><a target="_blank" href="https://www.youtube.com"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/*================ S-OUR-TEAM END ================*/}
    {/*================== S-FEEDBACK ==================*/}
    <section className="s-feedback page-serv-feedback" style={{backgroundImage: 'url(assets/img/bg-feedback.jpg)'}}>
      <span className="effwct-bg-feedback" style={{backgroundImage: 'url(assets/img/effect-bg-feedback.svg)'}} />
      <span className="mask" />
      <div className="container">
        <h2 className="title"><span>feedback</span></h2>
        <div className="feedback-slider">
          <div className="feedback-slide">
            <div className="feedback-item">
              <div className="feedback-content">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoinc ididunt ut magna aliqua dolor sit amet, consectetur adipiscing elit magna”</p>
              </div>
              <div className="feedback-item-top">
                <img src="assets/img/feedback-photo-1.png" alt="photo" />
                <div className="feedback-title">
                  <h5 className="title"><span>Li piters</span></h5>
                  <ul className="rating">
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-not-bg"><i className="fa fa-star-o" aria-hidden="true" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-slide">
            <div className="feedback-item">
              <div className="feedback-content">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoinc ididunt ut magna aliqua dolor sit amet, consectetur adipiscing elit magna”</p>
              </div>
              <div className="feedback-item-top">
                <img src="assets/img/feedback-photo-2.png" alt="photo" />
                <div className="feedback-title">
                  <h5 className="title"><span>Sam Barton</span></h5>
                  <ul className="rating">
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-not-bg"><i className="fa fa-star-o" aria-hidden="true" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-slide">
            <div className="feedback-item">
              <div className="feedback-content">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoinc ididunt ut magna aliqua dolor sit amet, consectetur adipiscing elit magna”</p>
              </div>
              <div className="feedback-item-top">
                <img src="assets/img/feedback-photo-3.png" alt="photo" />
                <div className="feedback-title">
                  <h5 className="title"><span>Zoe Tyler</span></h5>
                  <ul className="rating">
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-not-bg"><i className="fa fa-star-o" aria-hidden="true" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-slide">
            <div className="feedback-item">
              <div className="feedback-content">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoinc ididunt ut magna aliqua dolor sit amet, consectetur adipiscing elit magna”</p>
              </div>
              <div className="feedback-item-top">
                <img src="assets/img/feedback-photo-2.png" alt="photo" />
                <div className="feedback-title">
                  <h5 className="title"><span>Sam Barton</span></h5>
                  <ul className="rating">
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-bg"><i className="fa fa-star" aria-hidden="true" /></li>
                    <li className="star-not-bg"><i className="fa fa-star-o" aria-hidden="true" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*================ S-FEEDBACK END ================*/}
    {/*=================== S-CLIENTS ===================*/}
    <section className="s-clients about-clients">
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
  </div>
  


  )


 }



}



export default AboutUs;