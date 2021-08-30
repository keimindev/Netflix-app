import React, {useState, useRef} from 'react'
import "./register.scss";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
       setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

    return (
        <>
          <div className="register">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"/>
                <button className="login-btn">Sign In</button>
                </div> 
            </div> 
          <div className="container">
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime</h2>
              <p>
                  Ready to watch? Enter your email to create or restart your membership.
              </p>{
                  !email ? (
                    <div className="input">
                    <input type="email" placeholder="email address" ref={emailRef} />
                    <button className="register-btn" onClick={handleStart}>Get Start</button>
                    </div>
                  ) : (
                    <form className="input">
                    <input type="password" placeholder="password" ref={passwordRef} />
                    <button className="register-btn" onClick={handleFinish}>Start</button>
                    </form>     
                  )
              }

          </div>
          </div>
        </>
    )
}

export default Register
