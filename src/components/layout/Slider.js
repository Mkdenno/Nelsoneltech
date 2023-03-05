import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  'https://images.pexels.com/photos/4448861/pexels-photo-4448861.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/464327/pexels-photo-464327.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/335966/pexels-photo-335966.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600',
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