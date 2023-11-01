import React from 'react'
import { imageUrl } from '../Constants/Const';
import avatar from "../assets/avatar.jpg"
function Cast({ movieDetails }) {
    return (
        <div className=''>
            <div>
                <h1 className='text-[#C3073F] text-2xl sm:text-3xl  sm:mt-2 sm:py-7 py-2 font-medium '>Cast</h1>
            </div>
            <div className='flex overflow-x-scroll  gap-4 text-center  pb-9'>
                {movieDetails.credits?.cast.map((cast, index) => (
                    <div key={index}>
                        <div className='rounded-full w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] object-cover overflow-hidden'>
                            <img src={cast.profile_path ?`${imageUrl + cast.profile_path}` :avatar} alt="" />
                        </div>
                        <h2 className="text-xs my-2 text-white">{cast?.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cast