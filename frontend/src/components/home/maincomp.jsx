import React, { useEffect } from 'react'
import Carousel from './Carousel'
import './home.css'
import Slide from './slide'
import Footer from '../footer/Footer'
import { getProducts } from '../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux'

function Maincomp() {

    const {products} = useSelector(state => state.getProductsData);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className='home-section'>
            <div className="banner-part">
                <Carousel />
            </div>
            <div className="slide-part">
                <div className="left-slide">
                    <Slide title="Deal of the Day" products={products} />
                </div>
                <div className="right-slide">
                    <h4>Festive Latest Launches</h4>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Scroll/Camera/Topdeal/n/Desktop_CC._SY304_CB575822413_.jpg" alt="Festive image" />
                    <div className='see-more'>
                        <a href="#">See more</a>
                    </div>
                </div>
            </div>
            <Slide title="Today's Deal" products={products} />
            <Slide title="Best Seller" products={products} />
            <Slide title="Upto 80% off" products={products} />
            <Footer />
        </div>
    )
}

export default Maincomp
