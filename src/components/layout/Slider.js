import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  'https://nelsoneltech.s3.amazonaws.com/static/img/hero-carousel/1.jpg',
  'https://nelsoneltech.s3.amazonaws.com/static/img/hero-carousel/2.jpg',
  'https://nelsoneltech.s3.amazonaws.com/static/img/hero-carousel/3.jpg',
  'https://nelsoneltech.s3.amazonaws.com/static/img/hero-carousel/1.jpg',
  'https://nelsoneltech.s3.amazonaws.com/static/img/hero-carousel/2.jpg',
  'https://nelsoneltech.s3.amazonaws.com/static/img/hero-carousel/3.jpg',
];


const Slider = () => {
    
  return (
    <div>
    <div className="bg-cover h-50 sm:bg-cover">
    <Zoom scale={0.3}>
          {
            images.map((each, index) => <img key={index} className="sliderImg" style={{width:"100%", height:"100%"}}   src={each} />)
          }
        </Zoom>
    </div>
    </div>
  )
}

export default Slider