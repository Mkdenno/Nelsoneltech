import React from "react";
import GoogleMapReact from "google-map-react";
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';


const Contact = () => {
  return (
    <div>
      <section className="mt-36 home-section2">
        <div className="mt-12 text-lg lg:flex lg:justify-center lg:items-center sm:flex sm:justify-center">
          <h1 className="home-about-tect ">Contact Us</h1>
        </div>
        <div className="flex justify-around items-center flex-wrap mb-12">
          <div className="flex justify-center items-center text-sm flex-col ml-12">
            <BsPhone className="contact-icon text-2xl"/>
            <div  >
            <div className="flex ">
              <label>Call:</label><p>+245 798 616 085</p>
            </div>
            <div className="flex text-sm">
            <label className="flex">Sunday-</label><p>Friday (8am-5pm)</p>
            </div>
            </div>
            
          </div>
          <div className="flex justify-center items-center flex-col text-sm">
            <AiOutlineMail className=" contact-icon text-2xl"/>
            <div>
            <div className="flex">
              <label>Email:</label><p>admin@nelsoneltech.co.ke</p>
            </div>
            <div className="flex">
            <label>Web-</label><p className="weblink"><a href="https://nelsoneltech.vercel.app/">NelsonelTech</a></p>
            </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-sm flex-col mr-12">
            <CiLocationOn className="contact-icon text-2xl"/>

            <div>
            <div className="flex">
              <label>Location:</label><p>Nairobi</p>
            </div>
            <p>Nairobi, Kenya</p>

            </div>
          </div>
          
        </div>

        <div className=" mt-5 mb-12 lg:flex lg:justify-center  flex-wrap">
          <div className=" ">
            <div className="google-map-code sm:w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4m8!4m7!1m0!1m5!1m1!1s0x182780d08350900f:0x403b0eb0a1976dd9!2m2!1d37.906193!2d-0.023559f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                width="400"
                height="350"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
          <div className="">
                <form className=" contact-form flex ml-8 flex-col w-96 ">
                  <input type="text" className="border-solid border-2 border-gray-400 rounded-lg"  name="name" placeholder="Your name" />
                  <input type="text"className="mt-3 border-solid border-2 border-gray-400 rounded-lg" name="email" placeholder="Your email" />
                  <input type="text" className="mt-3 border-solid border-2 border-gray-400 rounded-lg" name="Subject" placeholder="Subject" />
                  <textarea
                    type="text"
                    className="mt-3 border-solid border-2 border-gray-400 rounded-lg"
                    name="message"
                    placeholder="Message"
                    rows="5"
                  />
                  <button className="mt-3">Send Message</button>
                </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
