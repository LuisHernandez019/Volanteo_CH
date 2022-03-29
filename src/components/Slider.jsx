import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../assets/img/slider/slide1.png';
import slide2 from '../assets/img/slider/slide2.png';
import slide3 from '../assets/img/slider/slide3.png';

const Slider = () => {
  return (     
     <Carousel>
        <Carousel.Item>
           <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
           />
        </Carousel.Item>
        <Carousel.Item>
           <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
           />
        </Carousel.Item>
        <Carousel.Item>
           <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
           />
        </Carousel.Item>
     </Carousel>
  )
}

export default Slider;