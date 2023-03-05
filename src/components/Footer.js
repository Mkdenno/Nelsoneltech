import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='footer-container w-full  flex justify-center items-center flex-col' >
        <div className='flex justify-around flex-wrap w-full'>
        <div className="mt-6">
                <h1 className='text-3xl'><span className='headerpart1'>Nelsonel</span><span>Tech</span></h1>
                <p className='text-sm mt-5'>Your All times Information Technology provider</p>
                <div className=' flex justify-start items-center mt-5'>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><BsFacebook/></i>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><AiOutlineTwitter/></i>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><BsInstagram/></i>
                <i className='border-solid border-2 border-gray-700 rounded-full mr-2 p-2'><AiFillLinkedin/></i>
                </div>

        </div> 
        <div className="mt-6">
            <h1 className='text-lg'>INFORMATION</h1>
            <p className='text-sm mt-5'>Your All times Information Technology provider</p>

            <div className='mt-5'>
            <div className='flex justify-start items-center text-sm'>
            <label className='headerpart1'>Tel:</label><p>+245 798 616 085</p>
            </div>

            <div className='flex justify-start items-center mt-2 text-sm'>
            <label className='headerpart1'>Email:</label><p>admin@nelsoneltech.co.ke</p>
            </div>

            <div className='flex justify-start items-center mt-2 text-sm'>
            <label className='headerpart1'>Email: </label><p>admin@nelsoneltech.co.ke</p>
            </div>

            <div className='flex justify-start items-center mt-2 text-sm'>
            <label className='headerpart1'>Working Hours:</label><p>8.00am-5.00pm</p>
            </div>
            </div>

         </div>
         <div className="mt-6">
            <h1>QUICK LINKS</h1>
            <ul className='mt-5'>
            <Link to='/'><li className='headerpart1'>Home</li></Link>
            <Link to='/about'><li className='headerpart1'>About</li></Link>
            <Link to='/services'><li className='headerpart1'>Services</li></Link>
            <Link to='/contact'><li className='headerpart1'>Contact</li></Link>
            <Link to='/admin'><li className='headerpart1'>Admin</li></Link>
            </ul>
        </div>
        </div>

        <div className='footer-last mt-10 h-36'>
        <p>© Copyright 2023 NelsonelTech. All Rights Reserved</p>
        <p>Designed by <Link to='/' className='headerpart1'>NelsonelTech Solutions</Link></p>
        </div>




       
    </div>
  )
}

export default Footer