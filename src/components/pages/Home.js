import React from 'react'
import Slider from '../layout/Slider'

const Home = () => {
  return (
    <div>
      <section className='first-home-slider'>
        <div className='home-slider'>

        <Slider/>
        <div className='home-center  lg:text-3xl lg:mt-20 lg:left-64 xl:left-72 xl:mt-30 2xl:mt-36 2xl:left-84'>
          <div className='home-center-desc'>
          <h1 className=" lg:mt-10 lg:text-3xl">NelsonelTech Solutions</h1>
           
           <p className='lg:text-lg'>Your All times Information Technology provider</p>
           <button className=''>Get Started</button>
          </div>

          </div>

        </div>


      </section>

      <section className='home-section2'>
        <div className='ml-5 mr-5 text-lg lg:flex lg:justify-center lg:items-center sm:flex sm:justify-center'>
        <h1 className='home-about-tect'>About NelsonelTech Solutions</h1>
          </div>
                  <div className=' ml-5 mr-5 lg:flex lg:justify-around flex-wrap'>
                  <div className="lg:w-2/5 lg:ml-20 lg:h-full mb-5">
                    <img src='https://nelsoneltech.s3.amazonaws.com/static/img/about/1.jpg' alt='AboutNelsonTech'/>
                  </div>
                  <div className='lg:w-2/5 lg:mr-20'>
                    <h1 className='home-about-techh1'>NELSONELTECH SOLUTIONS</h1>
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


      {/* our services */}

      <section className=' m-10'>
        <div className='ml-5 mr-5 text-lg lg:flex lg:justify-center lg:items-center sm:flex sm:justify-center'>
        <h1 className='home-about-tect'>Our Services</h1>
        </div>
        <div className='flex justify-around flex-wrap'>
        <div className='eachdivourservices'>
          <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/custom.png' alt="Custom software solutions"/>
          <h1>Custom software solutions</h1>
          <p className='servicesparagrap'>At NelsonelTech Solutions, we offer custom software solutions 
            as a service to help businesses streamline their operations and improve productivity. 
            Our team of experienced developers will work closely with you to understand your unique needs …</p>

            <button>Read More</button>
        </div>
        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/maintenance.png' alt="Support and maintenance"/>
          <h1>Support and maintenance</h1>
          <p className='servicesparagrap'>At NelsonelTech Solutions, we offer comprehensive support and maintenance 
            services to ensure that your technology systems are running smoothly and efficiently.
             Our team of experienced and certified technicians will provide timely and effective support for …</p>

            <button>Read More</button>
        </div>
        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/download.png' alt="Website Development"/>
          <h1>Website Development</h1>
          <p className='servicesparagrap'>NelsonelTech Solutions offers professional website design and development services for
             businesses and organizations looking to establish a strong online presence.
             Our team of expert designers and developers are
              dedicated to creating unique and user-friendly websites …</p>

            <button>Read More</button>
        </div>

        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/download.png' alt="Website Development"/>
          <h1>Website Development</h1>
          <p className='servicesparagrap'>NelsonelTech Solutions offers professional website design and development services for
             businesses and organizations looking to establish a strong online presence.
             Our team of expert designers and developers are
              dedicated to creating unique and user-friendly websites …</p>

            <button>Read More</button>
        </div>

        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/download.png' alt="Website Development"/>
          <h1>Website Development</h1>
          <p className='servicesparagrap'>NelsonelTech Solutions offers professional website design and development services for
             businesses and organizations looking to establish a strong online presence.
             Our team of expert designers and developers are
              dedicated to creating unique and user-friendly websites …</p>

            <button>Read More</button>
        </div>

        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/download.png' alt="Website Development"/>
          <h1>Website Development</h1>
          <p className='servicesparagrap'>NelsonelTech Solutions offers professional website design and development services for
             businesses and organizations looking to establish a strong online presence.
             Our team of expert designers and developers are
              dedicated to creating unique and user-friendly websites …</p>

            <button>Read More</button>
        </div>

        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/download.png' alt="Website Development"/>
          <h1>Website Development</h1>
          <p className='servicesparagrap'>NelsonelTech Solutions offers professional website design and development services for
             businesses and organizations looking to establish a strong online presence.
             Our team of expert designers and developers are
              dedicated to creating unique and user-friendly websites …</p>

            <button>Read More</button>
        </div>

        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/download.png' alt="Website Development"/>
          <h1>Website Development</h1>
          <p className='servicesparagrap'>NelsonelTech Solutions offers professional website design and development services for
             businesses and organizations looking to establish a strong online presence.
             Our team of expert designers and developers are
              dedicated to creating unique and user-friendly websites …</p>

            <button>Read More</button>
        </div>
        </div>

      </section>
    </div>
  )
}

export default Home