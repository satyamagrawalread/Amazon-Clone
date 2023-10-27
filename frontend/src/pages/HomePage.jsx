import React, { useEffect } from 'react'
import '../styles/homePage.css'
import Carousel from '../components/Carousel'
import { getProducts } from '../components/redux/actions/action.js'
import { useDispatch, useSelector } from 'react-redux'

function HomePage() {
    const {products} = useSelector(state => state.getProductsData);
    console.log('Products', products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return (
        <div className='home-page'>
            <Carousel />
        </div>
    )
}

export default HomePage
