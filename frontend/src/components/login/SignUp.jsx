import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SnackbarProvider, enqueueSnackbar, MaterialDesignContent } from 'notistack'
import AmazonLogo from '/amazon_logo.svg'
import './login.css'

function SignUp() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    })

    const updateData = (e) => {
        setUserData(prevState => ({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    const sendData = async (e) => {
        e.preventDefault();
        var unfilledData = '';
        if (userData.fname === "") {
            unfilledData = unfilledData + 'fname' + ', ';
        }
        if (userData.mobile === "") {
            unfilledData = unfilledData + 'mobile' + ', ';
        }
        if (userData.email === "") {
            unfilledData = unfilledData + 'email' + ', ';
        }
        if (userData.password === "") {
            unfilledData = unfilledData + 'password' + ', ';
        }
        if (userData.cpassword === "") {
            unfilledData = unfilledData + 'confirm password' + ', ';
        }
        if (unfilledData) {
            unfilledData = unfilledData.slice(0, -2);
            enqueueSnackbar(`Please provide ${unfilledData}`, {
                autoHideDuration: 3000,
                variant: 'error',
            });
        }
        else {
            const res = await fetch('http://localhost:8001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await res.json();
            if (!data.error) {
                navigate(`/signed/${userData.fname}`)
                setUserData({
                    ...userData, fname: "",
                    email: "",
                    mobile: "",
                    password: "",
                    cpassword: ""
                })
            }
            else {
                enqueueSnackbar(data.error, {
                    autoHideDuration: 3000,
                    variant: 'error',

                });
            }
            console.log(data);
        }
        // console.log(userData);

    }
    // const StyledMaterialDesignContent = (MaterialDesignContent)(() => ({
    //     '&.notistack-MuiContent-success': {
    //         backgroundColor: '#2D7738',
    //     },
    //     '&.notistack-MuiContent-error': {
    //         backgroundColor: '#970C0C',
    //     },
    // }));

    return (
        <SnackbarProvider>
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
                                    <form method='POST'>
                                        <label htmlFor="ap_name" className='a-form-label'>Your name</label>
                                        <input type="text" maxLength='50' id='ap_customer_name' autoComplete='name' placeholder='First and last name' name='fname' tabIndex='1' value={userData.fname} onChange={updateData} />
                                        <label htmlFor="ap_mobile" className='a-form-label'>Mobile number</label>
                                        <input type="tel" name="mobile" id="ap_mobile" maxLength='50' placeholder='Mobile number' value={userData.mobile} onChange={updateData} />
                                        <label htmlFor='ap_email' className='a-form-label'>Email (Optional)</label>
                                        <input type="email" maxLength='128' id='ap_email' name='email' tabIndex='1' value={userData.email} onChange={updateData} />
                                        <label htmlFor='ap-password' className='a-form-label'>
                                            <div className="password-row">
                                                <span>Password</span>
                                                {/* <a href="">Forgot Password</a> */}
                                            </div>
                                        </label>
                                        <input type="text" id='ap-password' name='password' tabIndex='1' placeholder='At least 6 characters' value={userData.password} onChange={updateData} />
                                        <label htmlFor='ap-password' className='a-form-label'>
                                            <div className="password-row">
                                                <span>Confirm Password</span>
                                                {/* <a href="">Forgot Password</a> */}
                                            </div>
                                        </label>
                                        <input type="text" id='ap-password' name='cpassword' tabIndex='1' placeholder='At least 6 characters' value={userData.cpassword} onChange={updateData} />
                                        <button className='signin-btn' onClick={sendData}>Sign Up</button>
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
        </SnackbarProvider>
    )
}

export default SignUp
