import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './login.css';

function SignedUp() {
    const {name} = useParams();
    return (
        <div className='signedup-section'>
            <div className='signedup-main1' style={{alignItems: 'center'}}><h3>{name}</h3>&nbsp;Signed Up Successfully</div>
            <Link to="/login">Login Page</Link>
        </div>
    )
}

export default SignedUp;
