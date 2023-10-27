import React from 'react'
import rowimg from '../assets/rowpost.jpg'

function RowCard() {
  return (
    <div className='relative hover:scale-110 transition duration-300 ease-in-out pt-16'>
      <div className='max-w-max rounded-md w-40 md:w-60 lg:w-72 mx-auto'> {/* Center the image */}
        <img className='rounded-md w-full' src={rowimg} alt="" />
      </div>

      <div className='hidden md:flex justify-end mt-2 space-x-3 text-sm'> {/* Move genre labels to bottom right */}
        <h1 className='text-white  bg-[#c3073f] px-4 py-1 rounded-full'>Horror</h1>
        <h1 className='text-white bg-[#c3073f] px-4 py-1 rounded-full'>Comedy</h1>
      </div>

      <div className='text-white pt-4 text-start max-w-[15rem] '> {/* Center the text */}
        <h1 className=''>UNCHARTED</h1>
      </div>
    </div>
  )
}

export default RowCard
