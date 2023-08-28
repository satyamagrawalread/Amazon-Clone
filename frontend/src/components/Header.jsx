import React, { useState } from 'react'
import AmazonLogo from '/amazon_logo_white.svg'
import '../styles/header.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsMinecartLoaded, BsFillCartFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
function Header() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className="header">
                <div className="left">
                    <img className='logo' src={AmazonLogo} alt="Amazon Logo" />
                    <div className="search-container">
                        <form action="">
                            <input type="text" placeholder='Search' name='search' />
                            <button className='search-btn' type='submit'>{<AiOutlineSearch style={{ color: 'black', fontSize: '20px' }} />}</button>
                        </form>
                    </div>
                </div>
                <div className="hamburger">
                        <GiHamburgerMenu style={{ color: 'aliceblue', fontSize: '30px' }} onClick={() => setShowMenu(!showMenu)} />
                </div>
                <div className={`right ${showMenu ? 'show-right' : ''}`}>
                    
                    <div className="login-router">
                        <span>Hello satyamagrawalread@gmail.com</span>
                        <a className='sign-in' href='#'>Sign In</a>
                    </div>
                    <div className="orders-router">
                        <a href='#'>
                            <span>Return</span>
                            <span style={{ fontWeight: 'bold' }}>& Orders</span>
                        </a>
                    </div>
                    <div className="cart">
                        <BsFillCartFill style={{ color: 'aliceblue', fontSize: '30px' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
