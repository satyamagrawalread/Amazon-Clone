import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './item.css'

function Item() {
    const {id} = useParams();
    const [productData, setProductData] = useState(null);
    console.log(productData);

    useEffect(() => {
        getProductData();
    },[id])

    const getProductData = async() => {
        try {
            const res = await fetch(`http://localhost:8001/getProductData/${id}`,{
                method: "GET",
                headers: {
                    "content-Type": "application/json"
                }
            });
            const data = await res.json();
            // console.log(res);
            if(res.status!==201) {
                console.log('No Data Available');
            }
            else {
                console.log("Data Available");
                setProductData(data);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        productData && <div className='item-section'>
            <div className="item-container">
                <div className="left-item">
                    <img src={productData.detailUrl} alt={`${productData.shortTitle} image`} />
                    <div className="item-btn">
                        <button className="item-btn1">Add to Cart</button>
                        <button className="item-btn2">Buy Now</button>
                    </div>
                </div>
                <div className="right-item">
                <span className='description'>{productData.title.shortTitle}</span>
                    <span className='description'>{productData.title.longTitle}</span>
                    <div className="divider"></div>
                    <div className='mrp'>{`M.R.P. : ₹${productData.price.mrp}`}</div>
                    <div className='deal-price'>Deal of the Day: <span>*{productData.price.cost}</span> </div>
                    <div className='saving'>You save: : <span>₹{productData.price.mrp - productData.price.cost} ({productData.price.discount})</span> </div>
                    <div className="discount-box">
                        <h5 className='discount'>Discount : <span>{productData.discount}</span></h5>
                        <h4 className='free-delivery-text'>Free Delivery : <span>Oct 8 - 21</span> Details</h4>
                        <div className="fastest-delivery-text">Fastest Delivery: <span>Tomorrow 11AM</span></div>
                    </div>
                    <div className="more-description">About the Item : <span>{productData.description}</span></div>
                </div>
            </div>
            {/* <div className="container-2">

            </div> */}
        </div>
    )
}

export default Item
