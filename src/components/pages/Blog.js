import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Blog = () => {
  return (
    <div className=' '>
      <div className=' myblog flex justify-center items-center flex-col mb-12 '>
        <h1 className='text-4xl text-white mt-36'>My Blog</h1>
        <h2 className='text-3xl text-white'>Profesional Blog Page</h2>
      </div>
      <div className="  ml-5  mr-5 lg:flex lg:justify-center flex-wrap">

      <div className='mb-6 lg:w-1/4 max-w-full lg:mr-6'>
        <div className='searchInput flex justify-start items-center'>
          <input className='bloginput' placeholder='search...' type='text'  />
          <div className=''>
            <AiOutlineSearch/>
          </div>
        </div>
        <div>
          <h1>CATEGORIES</h1>
          <ul>
          <li className='bloglist'>All</li>
            <li className='bloglist'>Data Science</li>
            <li className='bloglist'>Web Development</li>
            <li className='bloglist'>Software Engineering</li>
            <li className='bloglist'>Search Engine Optimization</li>
          </ul>
        </div>
      </div>


      <div className=' lg:w-1/2 mr-6'>
        <div>
          <div>
            <img src='https://nelsoneltech.s3.amazonaws.com/static/static/image/5.jpg' alt='Blog' />
            <div>
            <p></p>
            <p></p>
            <p></p>
            </div>
          </div>
          <div>
            <h1>Best Practice for Data Science</h1>
            <p>Data science and machine learning provides the basis for business growth, cost and risk reduction and even new business model creation. Implementing predictive analytics does present some challenges, however. The process can be complex, and ....</p>
            <button className='border border-gray-500 p-2 rounded-full mt-4'>READ MORE</button>
          </div>
        </div>

      </div>


      </div>
      </div>
  )
}

export default Blog