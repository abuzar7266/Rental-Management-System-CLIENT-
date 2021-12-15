import React from 'react';


const Login = () => {



return (

<div className="form-body">
  <div className="row">
    <div className="form-holder">
      <div className="form-content">
        <div className="form-items">
          <div className="website-logo-inside">
            <a href="index.html">
              <div className="logo">
                <img className="logo-size" src="images/logo-light.svg" alt="" />
              </div>
            </a>
          </div>
          <h3>Get more things done with Loggin platform.</h3>
          <p>Access to the most powerfull tool in the entire design and web industry.</p>
          <div className="page-links">
            <a href="login10.html" className="active">Login</a><a href="register10.html">Register</a>
          </div>
          <form>
            <input className="form-control" type="text" name="username" placeholder="E-mail Address" required />
            <input className="form-control" type="password" name="password" placeholder="Password" required />
            <div className="form-button">
              <button id="submit" type="submit" className="ibtn">Login</button> <a href="forget10.html">Forget password?</a>
            </div>
          </form>
          <div className="other-links">
            <span>Or login with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    );


}

export default Login;