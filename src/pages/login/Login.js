import React from 'react'
import './login.scss';

function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"/>
                </div> 
            </div> 
          <div className="container">
              <form>
                  <h1>Sign In</h1>
                  <input type="email" placeholder="Email or Phone Number"/>
                  <input type="password" placeholder="Password"/>
                  <button className="login-btn">Sign In</button>
                  <span>
                      New to Netflix? <b>Sign up now.</b>
                  </span>
                  <small>
                      This page is protected by Google reCAPTCHA to ensure your're not a bot. <b>Learn more</b>
                  </small>
              </form>
          </div>
    </div>            
    )
}

export default Login
