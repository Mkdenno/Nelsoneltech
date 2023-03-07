import React from "react";
import { AiOutlineMail } from 'react-icons/ai';
import { ImStatsBars2 } from 'react-icons/im';
import { BsSun } from 'react-icons/bs';
import { FaIoxhost } from 'react-icons/fa';
import { GoNote } from 'react-icons/go';
import { BsCalendarWeek } from 'react-icons/bs';


const About = () => {
  return (
    <div>
        <section className="home-section2">
          <div className="ml-5 mr-5 text-lg lg:flex lg:justify-center lg:items-center sm:flex sm:justify-center">
            <h1 className="home-about-tect">About NelsonelTech Solutions</h1>
          </div>
          <div className=" ml-5 mr-5 lg:flex lg:justify-center flex-wrap">
            <div className="lg:w-2/5 lg:mr-3 lg:h-full mb-5">
              <img
                src="https://nelsoneltech.s3.amazonaws.com/static/img/about/1.jpg"
                alt="AboutNelsonTech"
              />
            </div>
            <div className="lg:w-2/5 lg:ml-2">
              <h1 className="home-about-techh1">NELSONELTECH SOLUTIONS</h1>
              <p>
                We are an Information Technology Company that provides wide
                range of solutions to help your business grow and be gain
                competitive edge in the market. We provide the folloving service
                among many others:
              </p>
              <ul className="text-sm">
                <li>Website design and development</li>
                <li>Graphic design</li>
                <li> Web Hosting</li>
                <li>Data science consultancy</li>
                <li>Information system consultancy</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
          <p className=" m-6 lg:mr-24 lg:ml-24 "><strong>NelsonelTech Solutions</strong> is a leading software company that provides a wide range of innovative and customized solutions to businesses and organizations. Our team of experienced and skilled software developers uses the latest technologies and tools to create high-quality software that meets the unique needs and requirements of our clients.
We offer a wide range of software development services, including custom software development, 
enterprise software solutions, web and mobile app development, and software integration. Our developers are proficient in various programming languages and have expertise in various domains such as healthcare, finance, education, and e-commerce.
We follow a comprehensive and agile software development process that ensures timely and 
cost-effective delivery of high-quality software. Our process starts with a thorough 
understanding of the client's business objectives and their target audience. 
We then proceed to conceptualize and design the software, ensuring a seamless user experience and easy navigation.
 Our developers then use their expertise in various programming languages to build the software, rigorously testing it for functionality and performance.
In addition to creating functional and user-friendly software, we also focus on making it visually appealing and engaging. Our designers have extensive experience in creating attractive and intuitive user interfaces that enhance the overall user experience. We also provide ongoing support and maintenance services to ensure that the software remains up-to-date and performs optimally at all times.
Our software development services are not limited to a particular industry or domain. We have worked with clients from various industries and have successfully delivered software solutions that have helped them achieve their business objectives and drive growth.
In conclusion, NelsonelTech Solutions is a leading software company that provides innovative and customized software solutions to businesses and organizations. Our team of experienced and skilled developers uses the latest technologies and tools to create high-quality software that meets the unique needs and requirements of our clients.</p>
</div>
        </section>



        <section className=' m-10'>
        <div className='ml-5 mr-5 text-lg lg:flex lg:justify-center lg:items-center sm:flex sm:justify-center'>
        <h1 className='home-about-tect'>Our Services</h1>
        </div>
        <div className='flex justify-around flex-wrap'>
        <div className='eachdivourservices'>
          <p className="text-4xl flex justify-center m-4"><AiOutlineMail/></p>
          <h1 className="text-sm flex justify-center ">Website development</h1>
          <p className='servicesparagrap'>We provide full stalk web development from designing front end to backend of the system to ensure your busines id online.</p>

        </div>
        <div className='eachdivourservices'>
        <p className="text-4xl flex justify-center m-4"><GoNote/></p>
          <h1 className="text-sm flex justify-center ">Graphic Designer</h1>
          <p className='servicesparagrap'>will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.</p>

        </div>
        <div className='eachdivourservices'>
        <p className="text-4xl flex justify-center m-4"><ImStatsBars2/></p>
          <h1 className="text-sm flex justify-center ">Data Science consaltancy</h1>
          <p className='servicesparagrap'>With the growing influence of data in making informed decision, we provide data processing, analysing and implement machine learning models to make data driven decision to help your business gain competitive advantage in the market.</p>

        </div>

        <div className='eachdivourservices'>
        <p className="text-4xl flex justify-center m-4"><FaIoxhost/></p>
          <h1 className="text-sm flex justify-center ">Web Hosting</h1>
          <p className='servicesparagrap'>We offer web hosting service at an affordable price to make sure you are availlable online.</p>

        </div>

        <div className='eachdivourservices'>
        <p className="text-4xl flex justify-center m-4"><BsSun/></p>
          <h1 className="text-sm flex justify-center ">Seo Expart</h1>
          <p className='servicesparagrap'>We provide search engine optimazation to ensure you are visible in the online platform.</p>

        </div>

        <div className='eachdivourservices'>
        <p className="text-4xl flex justify-center m-4"><BsCalendarWeek/></p>
          <h1 className="text-sm flex justify-center ">24/7 Support</h1>
          <p className='servicesparagrap'>We provide 24/7 support to our clients to ensure we address all their consern.</p>

        </div>
        </div>

      </section>
      </div>
  );
};

export default About;
