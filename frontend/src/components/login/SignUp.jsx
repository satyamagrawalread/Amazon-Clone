import React from 'react'
import AmazonLogo from '/amazon_logo.svg'
import './login.css'

function SignUp() {
    return (
        <div className='sign-up'>
            <div className="logo-section">
                <img className='logo' src={AmazonLogo} alt="Amazon Logo" />
                <span>.in</span>
            </div>
            <div className="outer-box">
                <div className="inner-box">
                    <div className="a-section">
                        <div className="a-box">
                            <div className="a-box-inner">
                                <div className="sign-in-text">Create Account</div>
                                <form action="">
                                    <label htmlFor="ap_name" className='a-form-label'>Your name</label>
                                    <input type="text" maxLength='50' id='ap_customer_name' autoComplete='name' placeholder='First and last name' name='customerName' tabIndex='1' />
                                    <label htmlFor="ap_mobile" className='a-form-label'>Mobile number</label>
                                    <input type="tel" name="mobile" id="ap_mobile" maxLength='50' placeholder='Mobile number' />
                                    <label htmlFor='ap_email' className='a-form-label'>Email (Optional)</label>
                                    <input type="email" maxLength='128' id='ap_email' name='email' tabIndex='1' />
                                    <label htmlFor='ap-password' className='a-form-label'>
                                        <div className="password-row">
                                            <span>Password</span>
                                            {/* <a href="">Forgot Password</a> */}
                                        </div>
                                    </label>
                                    <input type="text" id='ap-password' name='password' tabIndex='1' placeholder='At least 6 characters' />
                                    <button className='signin-btn'>Sign Up</button>
                                    <label className='rememberMe-label'>
                                        {/* <input type="checkbox" name="rememberMe" value='true' tabIndex='4' /> */}
                                        <span>Already have an account?&nbsp;</span>
                                        <a href="">Sign in</a>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div className="a-divider">
                        <h5 className='a-divider-text'>New to Amazon?</h5>
                    </div>
                    <button className='create-account-btn'>Create your Amazon account</button> */}
                </div>
            </div>
        </div>
    )
}

export default SignUp
