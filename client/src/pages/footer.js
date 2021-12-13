import React from 'react'



class Footer extends React.Component {

 render() {

  return (


   <footer>
   <div className="container">
     <div className="row footer-item-cover">
       <div className="footer-subscribe col-md-7 col-lg-8">
         <h6>subscribe</h6>
         <p>Subscribe us and you won't miss the new arrivals, as well as discounts and sales.</p>
         <form className="subscribe-form">
           <i className="fa fa-at" aria-hidden="true" />
           <input className="inp-form" type="email" name="subscribe" placeholder="E-mail" />
           <button type="submit" className="btn btn-form"><span>send</span></button>
         </form>
       </div>
       <div className="footer-item col-md-5 col-lg-4">
         <h6>info</h6>
         <ul className="footer-list">
           <li><a href="shop.html">FAQ</a></li>
           <li><a href="shop.html">Contacts</a></li>
           <li><a href="shop.html">Shipping + Heading</a></li>
           <li><a href="shop.html">Exchanges</a></li>
           <li><a href="shop.html">2019 Catalog</a></li>
           <li><a href="shop.html">Returns</a></li>
           <li><a href="shop.html">Search</a></li>
         </ul>
       </div>
     </div>
     <div className="row footer-item-cover">
       <div className="footer-touch col-md-7 col-lg-8">
         <h6>stay in touch</h6>
         <ul className="footer-soc social-list">
           <li><a target="_blank" href="https://www.facebook.com/rovadex"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
           <li><a target="_blank" href="https://twitter.com/RovadexStudio"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
           <li><a target="_blank" href="https://www.instagram.com/rovadex"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
           <li><a target="_blank" href="https://www.youtube.com"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
         </ul>
         <div className="footer-autor">Questions? Please write us at: <a href="mailto:easyrent@gmail.com">easyrent@gmail.com</a></div>
       </div>
       <div className="footer-item col-md-5 col-lg-4">
         <h6>shop</h6>
         <ul className="footer-list">
           <li><a href="shop.html">Road Bike</a></li>
           <li><a href="shop.html">City Bike</a></li>
           <li><a href="shop.html">Mountain Bike</a></li>
           <li><a href="shop.html">Kids Bike</a></li>
           <li><a href="shop.html">BMX Bike</a></li>
         </ul>
       </div>
     </div>
     <div className="footer-bottom">
       <div className="footer-copyright"><a target="_blank" href="https://easyrent.com">EasyRent</a> © 2021. All Rights Reserved.</div>
       <ul className="footer-pay">
         <li><a href="#"><img src="assets/img/footer-pay-1.png" alt="img" /></a></li>
         <li><a href="#"><img src="assets/img/footer-pay-2.png" alt="img" /></a></li>
         <li><a href="#"><img src="assets/img/footer-pay-3.png" alt="img" /></a></li>
         <li><a href="#"><img src="assets/img/footer-pay-4.png" alt="img" /></a></li>
       </ul>
     </div>
   </div>
 </footer>


  )


 }



}

export default Footer;