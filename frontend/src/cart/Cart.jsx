import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import './cart.css'
import { BsChevronDown } from 'react-icons/bs'


function Cart() {
    const [quantity, setQuantity] = useState(1);
    const [isQtyOpen, setIsQtyOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Add event listener to the document to handle clicks
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsQtyOpen(false); // Clicked outside of the dropdown, close it
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Clean up the event listener when the component unmounts
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className="cart-section">
            <div className="cart-container">
                <div className="left-cart">
                    <div className="top-text">Shopping Cart</div>
                    <div className="select-all-items">Select all items</div>
                    <div className="price">Price</div>
                    <div className="divider"></div>
                    <div className="center-fill">
                        <div className="left-fill">
                            <img src="https://m.media-amazon.com/images/I/51CS5pPGiCL._SX679_.jpg" alt="Blaze 5G Phone" />
                        </div>
                        <div className="middle-fill">
                            <div className="middle-fill-top">
                                <div className="description">Molife Sense 500 Smartwatch (Black Strap, Free Size)</div>
                                <div className="product-type">Smart Watches</div>
                                <div className="expected-time">Usually dispatched in 8 days</div>
                                <div className="eligible-text">Eligible for Free Shipping</div>
                                <img src="https://m.media-amazon.com/images/G/01/support_images/GUID-7254C67F-EA22-4E64-BB79-6F45644F83BF=2=en-IN=Normal.jpg" alt="Amazon Fulfilled logo" />
                            </div>
                            <div className="middle-fill-bottom">
                                <div className="dropdown" ref={dropdownRef}>
                                    <button className="dropbtn" onClick={() => setIsQtyOpen(true)}>{quantity} <BsChevronDown /></button>
                                    {isQtyOpen && <div className="dropdown-content">
                                        {[1, 2, 3, 4].map((item, index) => {
                                            return (
                                                <div key={index} className={`dropdown-item ${quantity == item && 'highlight'}`} onClick={() => {
                                                    setQuantity(item)
                                                    setIsQtyOpen(false);
                                                }}>{item}</div>
                                            );
                                        })}

                                    </div>}
                                </div>
                                <div className="middle-fill-bottom-right">
                                    <div className="delete">delete</div>
                                    <div className="vertical-divider"></div>
                                    <div className="save-or-later">Save Or Later</div>
                                    <div className="vertical-divider"></div>
                                    <div className="see-more">See More like this</div>
                                </div>
                            </div>

                        </div>
                        <div className="right-fill">
                            <span>₹4049.00</span>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="subtotal">Subtotal(1 items): &nbsp;<span>₹4049.00</span></div>
                </div>
                <div className="right-cart">
                    <div className="proceed-section">
                        <div className="top-text">Your order is eligible for Free Delivery.</div>
                        <div className="second-text">Select this option at checkout. Details</div>
                        <div className="subtotal">Subtotal(1 items): &nbsp;<span>₹4049.00</span></div>
                        <div className="proceed-btn">Proceed to Buy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
