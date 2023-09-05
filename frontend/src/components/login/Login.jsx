import React from 'react'
import AmazonLogo from '/amazon_logo.svg'
import './login.css'

function Login() {
    return (
        <div className='login'>
            <div className="logo-section">
                <img className='logo' src={AmazonLogo} alt="Amazon Logo" />
                <span>.in</span>
            </div>
            <div className="outer-box">
                <div className="inner-box">
                    <div className="a-section">
                        <div className="a-box">
                            <div className="a-box-inner">
                                <div className="sign-in-text">Sign in</div>
                                <form action="">
                                    <label htmlFor='ap-email' className='a-form-label'>Email or mobile phone number</label>
                                    <input type="email" maxLength='128' id='ap-email' name='email' tabIndex='1' />
                                    <label htmlFor='ap-password' className='a-form-label'>
                                        <div className="password-row">
                                            <span>Password</span>
                                            <a href="">Forgot Password</a>
                                        </div>
                                    </label>
                                    <input type="text" id='ap-password' name='password' tabIndex='1' />
                                    <button className='signin-btn'>Sign In</button>
                                    <label className='rememberMe-label'>
                                        <input type="checkbox" name="rememberMe" value='true' tabIndex='4' />
                                        <span>Keep me signed in.</span>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="a-divider">
                        <h5 className='a-divider-text'>New to Amazon?</h5>
                    </div>
                    <button className='create-account-btn'>Create your Amazon account</button>
                </div>
            </div>
        </div>
    )
}

export default Login
