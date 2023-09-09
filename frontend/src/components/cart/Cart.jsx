import React from 'react'
import './cart.css'

function Cart() {
    return (
        <div className='cart-section'>
            <div className="cart-container">
                <div className="left-cart">
                    <img src="https://m.media-amazon.com/images/I/51CS5pPGiCL._SX679_.jpg" alt="Blaze 5G Phone" />
                    <div className="cart-btn">
                        <button className="cart-btn1">Add to Cart</button>
                        <button className="cart-btn2">Buy Now</button>
                    </div>
                </div>
                <div className="right-cart">
                    <span className='description'>Lava Blaze 5G (Glass Green, 8GB RAM, UFS 2.2 128GB Storage) | 5G Ready | 50MP AI Triple Camera | Upto 16GB Expandable RAM | Charger Included | Clean Android (No Bloatware)</span>
                    <div className="divider"></div>
                    <div className='mrp'>M.R.P. : ₹1195</div>
                    <div className='deal-price'>Deal of the Day: <span>*625.00</span> </div>
                    <div className='saving'>You save: : <span>₹570 (47%)</span> </div>
                    <div className="discount-box">
                        <h5 className='discount'>Discount : <span>Extra 10% off</span></h5>
                        <h4 className='free-delivery-text'>Free Delivery : <span>Oct 8 - 21</span> Details</h4>
                        <div className="fastest-delivery-text">Fastest Delivery: <span>Tomorrow 11AM</span></div>
                    </div>
                    <div className="more-description">Camera: Sensor: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera (FOV: 120 degree) and Macro Lens; 16MP Front (Selfie) Camera with EIS support
Camera Modes: Nightscape, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama, Tilt-Shift mode, Long Exposure, Dual-View Video, Retouch, Movie Mode, Raw file, Filters, Super Stable, Video Nightscape, Video HDR, Video Portrait, Focus Tracking, Timelapse, Macro mode
Display: 6.7 Inches; 120 Hz Super Fluid AMOLED; Resolution: 2772 X 1240 pixels ,450 ppi, 20.1:9, 10-bit Color Depth, HDR10+
Operating System: OxygenOS based on Android 13
Processor: Snapdragon 8+ Gen 1 Mobile Platform
16GB LPDDR5X RAM, 256GB UFS3.1 STORAGE
Battery & Charging: 5000 mAh with 100W SUPERVOOC
In-Display Fingerprint Sensor</div>
                </div>
            </div>
            <div className="container-2">

            </div>
        </div>
    )
}

export default Cart
