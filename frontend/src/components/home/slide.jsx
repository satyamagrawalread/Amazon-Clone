import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './slide.css'
// import { products } from './productsdata';
import { NavLink } from "react-router-dom"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

function Slide({ title, products }) {
  return (
    <div className='products-section'>
      <div className="products-deal">
        <h3>{title}</h3>
        <button className='view-btn'>View All</button>
      </div>
      <div className="divider_horizontal"></div>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={false}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        containerClass='carousel-container'
      >
        {products.map((item, index) => {
          return (
            <NavLink key={index} to={`/item/${item.id}`}>
              <div key={index} className="product-items">
                <div className="product-img">
                  <img src={item.url} alt="Item image" />
                </div>
                <div className="product-title">{item.title.shortTitle}</div>
                <div className="product-offer">{item.discount}</div>
                <div className="product-explore">{item.tagline}</div>
              </div>
            </NavLink>
          );
        })}
      </Carousel>
    </div>
  )
}

export default Slide
