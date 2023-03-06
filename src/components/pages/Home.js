import React from 'react'
import Slider from '../layout/Slider'

const Home = () => {
  return (
    <div>
      <section className='first-home-slider'>
        <div className='home-slider'>

        <Slider/>
        <div className='home-center  lg:text-3xl top-3 lg:left-72 xl:left-72 xl:mt-30 2xl:mt-36 2xl:left-84'>
          <div className='home-center-desc'>
          <h1 className=" lg:mt-14 lg:text-4xl ">NelsonelTech Solutions</h1>
           
           <p className='text-bold sm:text-small lg:left-4 lg:text-lg'>Your All times Information Technology provider</p>
           <button className='button text-white lg:mt-4'>Get Started</button>
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
          <p className='servicesparagrap'>At <strong>NelsonelTech Solutions</strong>, we offer custom software solutions 
            as a service to help businesses streamline their operations and improve productivity. 
            Our team of experienced developers will work closely with you to understand your unique needs …</p>

            <button className='servicesbutton'>Read More</button>
        </div>
        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/maintenance.png' alt="Support and maintenance"/>
          <h1>Support and maintenance</h1>
          <p className='servicesparagrap'>At <strong>NelsonelTech Solutions</strong>, we offer comprehensive support and maintenance 
            services to ensure that your technology systems are running smoothly and efficiently.
             Our team of experienced and certified technicians will provide timely and effective support for …</p>

            <button className='servicesbutton'>Read More</button>
        </div>
        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/download.png' alt="Website Development"/>
          <h1>Website Development</h1>
          <p className='servicesparagrap'><strong>NelsonelTech Solutions</strong> offers professional website design and development services for
             businesses and organizations looking to establish a strong online presence.
             Our team of expert designers and developers are
              dedicated to creating unique and user-friendly websites …</p>

            <button className='servicesbutton'>Read More</button>
        </div>

        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/graphic.png' alt="Graphic Design"/>
          <h1>Graphic Design</h1>
          <p className='servicesparagrap'>At <strong>NelsonelTech Solutions</strong>, we offer professional graphical design 
          services to help businesses and individuals 
          create visually stunning and effective designs. 
          Our team of experienced and talented designers are skilled in using the latest software and …</p>

            <button className='servicesbutton'>Read More</button>
        </div>

        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/hosting.png' alt="Web Hosting"/>
          <h1>Web Hosting</h1>
          <p className='servicesparagrap'>Web hosting is a service provided by companies 
          like <strong>NelsonelTech Solutions</strong> that allows individuals and organizations to make their websites 
          accessible to the public via the World Wide Web. Essentially, web hosting companies provide the …</p>

            <button className='servicesbutton'>Read More</button>
        </div>

        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/seomain.png' alt="Search Engine Optimization"/>
          <h1>Search Engine Optimization</h1>
          <p className='servicesparagrap'><strong>NelsonelTech Solutions</strong> offers SEO, or Search Engine Optimization, 
          as a valuable service to help businesses improve their online presence and visibility. 
          Our team of experienced professionals is dedicated to helping clients achieve higher search engine …</p>

            <button className='servicesbutton'>Read More</button>
        </div>

        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/mobile.png' alt="Website Development"/>
          <h1>Website Development</h1>
          <p className='servicesparagrap'><strong>NelsonelTech Solutions</strong> app development services 
          to help businesses and organizations enhance 
          their digital presence and reach their 
          target audience effectively. Our team of experienced and skilled app developers uses the latest tools …</p>

            <button className='servicesbutton'>Read More</button>
        </div>

        <div className='eachdivourservices'>
        <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/ds.png' alt="Data Science Consultancy"/>
          <h1>Data Science Consultancy</h1>
          <p className='servicesparagrap'><strong>NelsonelTech Solutions</strong> is a leading provider 
          of data science consultancy services, helping businesses and organizations of 
          all sizes harness the power of
           data to drive better decision-making and improved outcomes. Our team of experienced data …</p>

            <button className='servicesbutton'>Read More</button>
        </div>
        </div>

      </section>

      <section className=''>
        <div className=' lg:flex lg:justify-center'>
          <div className='section4Img'>
            <img src='https://nelsoneltech.s3.amazonaws.com/static/img/about/2.jpg' alt='homeIMG'/>
          </div>
          <div className='section4div2   bg-black text-white flex justify-start  flex-col '>
            <div className='flex items-start flex-col ml-6 m-auto'>
            <h1 className='text-3xl mb-1'>WORKING WITH US</h1>
              <h5 className='working-withus-header mb-6'>WEB DESIGN, WEB HOSTING. YOUR ALL TIMES INFORMATION TECHNOLOGY SOLUTION PROVIDER.</h5>
              <button className='button'>Contact Us</button>
            </div>

          </div>
        </div>

      </section>

    </div>
  )
}

export default Home