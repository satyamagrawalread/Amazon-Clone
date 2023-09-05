import React, { useEffect, useState } from 'react'
import '../styles/secondHeader.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BsChevronDown, BsChevronRight, BsChevronUp } from 'react-icons/bs'
// import { IoChevronForward } from 'react-icons/io'

function SecondHeader({ showHmenu, setShowHmenu }) {
    const [seeAllByCategory, setSeeAllByCategory] = useState(false)


    return (
        <>
            <div className={showHmenu ? 'menu-dark-bkg' : 'menu-dark-bkg-none'}></div>
            <div className={`hidden-menu-all ${showHmenu ? 'show-menu-all' : ''}`}>
                <div className="menu-all-top">
                    <CgProfile style={{ color: 'aliceblue', fontSize: '30px' }} />
                    <span>Hello satyamagrawalread</span>
                </div>
                <div className="hmenu-content">
                    <ul className='hmenu hmenu-visible'>
                        <li><a className='hmenu-item hmenu-title'>Trending</a></li>
                        <li>                        <a className='hmenu-item'>Best Sellers</a></li>
                        <li>
                            <a className='hmenu-item'>New Releases</a>
                        </li>
                        <li>                        <a className='hmenu-item'>Movers and Shakers</a></li>
                        <li className='hmenu-seperator'></li>
                        <li><a className='hmenu-item hmenu-title'>Digital Content And Devices</a></li>
                        <li><a href className='hmenu-item'>
                            <div>Echo & Alexa</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Fire TV</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Kindle E-Readers & eBooks</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Audible Audiobooks</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Amazon Prime Video</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Amazon Prime Music</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li className='hmenu-seperator'></li>
                        <li><a className='hmenu-item hmenu-title'>Shop By Category</a></li>

                        <li><a href className='hmenu-item'>
                            <div>Mobiles, Computers</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>TV, Appliances, Electronics</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Men's Fashion</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Women's Fashion</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        {<ul className={` hmenu-compress-section ${seeAllByCategory ? 'compressed' : ''}`}>{seeAllByCategory ? [
                            <li className="hmenu-mini-divider"></li>,
                            <li><a href className='hmenu-item'>
                                <div>Home, Kitchen, Pets</div>
                                <BsChevronRight className='hmenu-arrow' />

                            </a></li>,
                            <li><a href className='hmenu-item'>
                                <div>Beauty, Health, Grocery</div>
                                <BsChevronRight className='hmenu-arrow' />

                            </a></li>,
                            <li><a href className='hmenu-item'>
                                <div>Sports, Fitness, Bags, Luggage</div>
                                <BsChevronRight className='hmenu-arrow' />

                            </a></li>,
                            <li><a href className='hmenu-item'>
                                <div>Toys, Baby Products, Kids Fashion</div>
                                <BsChevronRight className='hmenu-arrow' />

                            </a></li>,
                            <li><a href className='hmenu-item'>
                                <div>Car, Motorbike, Industrial</div>
                                <BsChevronRight className='hmenu-arrow' />

                            </a></li>,
                            <li><a href className='hmenu-item'>
                                <div>Books</div>
                                <BsChevronRight className='hmenu-arrow' />

                            </a></li>,
                            <li><a href className='hmenu-item'>
                                <div>Movies, Music & Video Games</div>
                                <BsChevronRight className='hmenu-arrow' />

                            </a></li>,
                            <li onClick={() => setSeeAllByCategory(false)}>
                            <a className='hmenu-item hmenu-compressed-btn'>
                                <div>See Less</div>
                                <BsChevronUp className='hmenu-arrow' />
                            </a>
                        </li>
                        ] : [
                            <li onClick={() => setSeeAllByCategory(true)}>
                                <a className='hmenu-item hmenu-compressed-btn'>
                                    <div>See All</div>
                                    <BsChevronDown className='hmenu-arrow' />
                                </a>
                            </li>
                        ]}</ul>}
                        <li className='hmenu-seperator'></li>
                        <li><a className='hmenu-item hmenu-title'>Programs & Features</a></li>
                        <li><a href className='hmenu-item'>
                            <div>Gift Cards & Monile Recharges</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Amazon Launchpad</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Flight Tickets</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Buy more, Save more</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li className="hmenu-seperator"></li>
                        <li><a className='hmenu-item hmenu-title'>Help & Settings</a></li>
                        <li><a href className='hmenu-item'>
                            <div>Your Account</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Customer Service</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>
                        <li><a href className='hmenu-item'>
                            <div>Sign Out</div>
                            <BsChevronRight className='hmenu-arrow' />

                        </a></li>





                    </ul>
                </div>
            </div>
            {showHmenu && <MdClose style={{ color: 'aliceblue' }} className='menu-close-all' onClick={() => setShowHmenu(false)} />}

            <div className="nav-main">
                <div className="nav-left">
                    <a className='nav-hamburger-menu' href='#' onClick={() => setShowHmenu(true)}>
                        <GiHamburgerMenu className='hamburger-all' />
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
