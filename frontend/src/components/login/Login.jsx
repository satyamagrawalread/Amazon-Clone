import React, { useState } from 'react'
import AmazonLogo from '/amazon_logo.svg'
import './login.css'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const updateData = (e) => {
        setUserData(prevState => ({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    const sendData = async (e) => {
        e.preventDefault();
        var unfilledData = "";
        if (userData.email == "") {
            unfilledData = unfilledData + 'email' + ", ";
        }
        if (userData.password == "") {
            unfilledData = unfilledData + 'password' + ", ";
        }

        if (unfilledData) {
            unfilledData = unfilledData.slice(0, -2);
            enqueueSnackbar(`${unfilledData} not filled`, {
                autoHideDuration: 3000,
                variant: 'error',
            })
        }
        else {
            const res = await fetch('http://localhost:8001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await res.json();
            console.log(data);
            if(!data.error) {
                setUserData({
                    ...userData, 
                    email: "",
                    password: ""
                })
            }
            else {
                enqueueSnackbar(data.error, {
                    autoHideDuration: 3000,
                    variant: 'error',

                });
            }
        }
    }
    return (
        <SnackbarProvider>
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
                                    <form method='POST'>
                                        <label htmlFor='ap-email' className='a-form-label'>Email or mobile phone number</label>
                                        <input type="email" maxLength='128' id='ap-email' name='email' tabIndex='1' value={userData.email} onChange={updateData} />
                                        <label htmlFor='ap-password' className='a-form-label'>
                                            <div className="password-row">
                                                <span>Password</span>
                                                <a href="">Forgot Password</a>
                                            </div>
                                        </label>
                                        <input type="text" id='ap-password' name='password' tabIndex='1' value={userData.password} onChange={updateData} />
                                        <button className='signin-btn' onClick={sendData}>Sign In</button>
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
        </SnackbarProvider>
    )
}

export default Login
