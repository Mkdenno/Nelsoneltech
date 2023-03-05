import React from 'react'
import Slider from '../layout/Slider'

const Home = () => {
  return (
    <div>
      <section className='first-home-slider'>
        <div className='home-slider'>

        <Slider/>
        <div className='home-center  lg:text-3xl lg:mt-20 lg:left-64'>
          <div className='home-center-desc'>
          <h1 className=" lg:mt-10 lg:text-3xl">NelsonelTech Solutions</h1>
           
           <p className='lg:text-lg'>Your All times Information Technology provider</p>
           <button className=''>Get Started</button>
          </div>

          </div>

        </div>


      </section>

      <section>
        <div className='lg:flex lg:justify-center lg:items-center sm:flex sm:justify-center'>
        <h1 className='home-about-tect'>About NelsonelTech Solutions</h1>
          </div>
                  <div className='lg:flex lg:justify-around flex-wrap'>
                  <div className="lg:w-2/5 lg:ml-10 lg:h-full mb-5">
                    <img src='https://nelsoneltech.s3.amazonaws.com/static/img/about/1.jpg' alt='AboutNelsonTech'/>
                  </div>
                  <div className='lg:w-2/5 lg:mr-10'>
                    <h1>NELSONELTECH SOLUTIONS</h1>
                    <p>We are an Information Technology Company that provides wide 
                      range of solutions to help your business grow and be gain 
                      competitive edge in the market. We provide 
                      the folloving service among many others:</p>
                      <ul>
                        <li>Website design and development</li>
                        <li>Graphic design</li>
                        <li> Web Hosting</li>
                        <li>Data science consultancy</li>
                        <li>Information system consultancy</li>
                      </ul>
                  </div>
                  </div>
      </section>
    </div>
  )
}

export default Home