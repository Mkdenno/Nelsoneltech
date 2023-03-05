import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";




const Navbar = () => {


  return (
    
    <nav className="navbar-container">
      <div className="">
        <div className="relative flex  justify-center items-center h-16"></div>
          <div className="w-full flex  justify-around  items-center">
            <div className=" text-3xl text-white  ">
                <h1><span className='headerpart1'>Nelsonel</span><span>Tech</span></h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>

                 <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/service"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>

                <Link
                  to="/service#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Portfolio
                </Link>

                <Link
                  to="/price"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Price
                </Link>

                <Link
                  to="/blog"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </Link>

                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link> 
              </div>
            </div>
            <div className="cursor-pointer pr-4  z-10 text-gray-500 md:hidden">
            <FaTimes size={30} /> : <FaBars size={30} />
           </div>
            </div>
            </div>
    </nav>
  )
}

export default Navbar