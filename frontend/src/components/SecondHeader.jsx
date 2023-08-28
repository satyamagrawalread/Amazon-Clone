import React, { useEffect, useState } from 'react'
import '../styles/secondHeader.css'
import { GiHamburgerMenu } from 'react-icons/gi'

function SecondHeader() {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if(showMenu) {
            
        }
    },[showMenu])
    return (
        <>
            <div className={showMenu ? 'menu-dark-bkg' : 'menu-dark-bkg-none'}>
                <div className={`hidden-menu-all ${showMenu ? 'show-menu-all' : ''}`}></div>
                <span>cut</span>
            </div>
            
            <div className="nav-main">
                <div className="nav-left">
                    <a className='nav-hamburger-menu' href='#'>
                        <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} className='hamburger-all' />
                        <span>All</span>
                    </a>
                </div>
                <div className="nav-fill">
                    <a href="#" className="nav-a">Fresh</a>
                    <a href="#" className="nav-a">Amazon Pay</a>
                    <a href="#" className="nav-a">Amazon MiniTV</a>
                    <a href="#" className="nav-a">Sell</a>
                    <a href="#" className="nav-a">Gift Cards</a>
                    <a href="#" className="nav-a">Buy Again</a>
                    <a href="#" className="nav-a">Gift Ideas</a>
                    <a href="#" className="nav-a">Health, Household & Personal Care</a>
                    <a href="#" className="nav-a">Coupons</a>
                    <a href="#" className="nav-a">AmazonBasics</a>
                    <a href="#" className="nav-a">Home Inprovement</a>
                    <a href="#" className="nav-a">Today's Deals</a>
                    <a href="#" className="nav-a">Pet Supplies</a>
                    <a href="#" className="nav-a">Books</a>


                </div>
                <div className="nav-right"></div>
            </div>
        </>
    )
}

export default SecondHeader
