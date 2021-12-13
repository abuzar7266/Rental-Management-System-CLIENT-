import React from 'react'



class Feedback extends React.Component 
{

 render () {

  return (

  
   <section className="s-feedback" style={{backgroundImage: 'url(assets/img/bg-feedback.jpg)'}}>
   <span className="effwct-bg-feedback" style={{backgroundImage: 'url(assets/img/effect-bg-feedback.svg)'}} />
   <span className="mask" />
   <div className="container">
     <h2 className="title">feedback</h2>
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
 

     </div>
   </div>
 </section>


  )


 }
 


}

export default Feedback;