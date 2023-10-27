import React, { useState } from 'react'
import './carousel.css'
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/Aug/GW/24/24th_Fresh_GW_Hero_PC1x_NC._CB597161158_.jpg",
        "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ];
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1 === images.length ? 0 : prevIndex + 1);
      }

      const handlePrevious = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? images.length - 1 : prevIndex -1); 
      }

      const handleDotClick = (index) => {
        setCurrentIndex(index);
      }

    return (
        <div className="carousel">
          <img
          key={currentIndex}
          src={images[currentIndex]}
        />
        <div className="slide-direction">
        <a className="left" onClick={handlePrevious}>
          <BsChevronLeft className='prev-btn' />
        </a>
        <a className="right" onClick={handleNext}>
          <BsChevronRight className='next-btn' />
        </a>
        </div>
        <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
        </div>
    )
}

export default Carousel;
