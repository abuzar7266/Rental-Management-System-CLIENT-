import React from 'react';
import Header from './pages/header.js';
import LandingPage  from './pages/LandingPage.js';
import Preloader from './pages/preloader.js';
import Footer from './pages/footer.js';
import Feedback from './pages/feedback.js';
import Login from './pages/login.js';
import SignUp from './pages/signup.js';
import ForgotPassword from './pages/forgotpassword.js';


import {

  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect

} from 'react-router-dom';


class App extends React.Component  {

/*

     <Preloader />
     <Header / > 
     <LandingPage /> 
     <Feedback />
     <Footer />
     <AboutUs />

*/

render () {

  return (
    
    
   <ForgotPassword />





  )

  }


}

export default App;
