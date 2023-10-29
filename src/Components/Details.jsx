import React from 'react'
import { imageUrl } from '../Constants/Const'
function Details({movieDetails}) {
    return (
        <div>
            <div>
                <div className='bottom-1 absolute text-white w-full  flex justify-center space-x-4 '>
                    <img src={`${imageUrl + movieDetails.poster_path}`} alt="poster" className='hidden ml-9 md:block w-60 rounded-xl' />
                    <div className='space-y-5 pl-4'>
                        <div className='space-y-3'>
                            <h1 className='text-6xl font-semibold'>Movie name</h1>
                            <h1 className='text-gray-200 font-semibold text-sm'>Fight for the light. Silence the darkness.</h1>
                        </div>
                        <div className='flex  space-x-9 '>
                            <h1 className='border-2 rounded-full px-3'>Action</h1>
                            <h1 className='border-2 rounded-full px-3'>Action</h1>
                        </div>
                        <div>
                            <p className=" text-sm font-bold  text-gray-200 ">The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.</p>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5  '>
                            <h1 className="text-gray-300 font-medium"><span className='font-bold text-md'>Status</span>: Released</h1>
                            <h1 className="text-gray-300 font-medium"><span className='font-bold text-md'>Release Date </span>: Jul 03 2023</h1>
                            <h1 className="text-gray-300 font-medium"><span className='font-bold text-md'>Runtime</span>: 2h 11m</h1>
                        </div>
                        <div className='grid grid-cols-1 space-y-3 md:space-y-0 md:grid-cols-2'>
                            <h1 className="text-gray-300 font-medium"><span className='font-bold text-md'>Director:</span> Alejandro Gómez Monteverde</h1>
                            <h1 className="text-gray-300 font-medium"><span className='font-bold text-md'>Writer:</span> Alejandro Gómez Monteverde</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details