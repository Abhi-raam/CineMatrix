import React from 'react'
import { imageUrl } from '../Constants/Const';
function Backdrops({ movieDetails }) {
    return (
        <div>
            <div>
                <h1 className='text-[#C3073F] text-2xl sm:text-3xl  sm:mt-2 sm:py-7 py-2 font-medium '>Backdrops</h1>
            </div>
            <div className='flex overflow-x-scroll  gap-4 text-center  pb-9'>
                {movieDetails.images?.backdrops.map((backImage, index) => (
                    <div key={index} >
                        <div className=' w-[20rem] md:w-[28rem] h-[15rem]  '>
                            <img src={`${imageUrl + backImage.file_path}`} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Backdrops