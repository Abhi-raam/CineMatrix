import React from 'react'
import { imageUrl } from '../Constants/Const';
import avatar from "../assets/avatar.jpg"
function Cast({ credits }) {
    // console.log(credits?.cast);
    return (
        <div className=''>
            <div>
                <h1 className='text-[#C3073F] text-2xl sm:text-3xl  sm:mt-2 sm:py-7 py-2 font-medium '>Cast</h1>
            </div>
            <div className='flex overflow-x-scroll  gap-4 text-center  pb-9'>
                {credits?.cast.map((cast, index) => (
                    <div key={index}>
                        <div className='rounded-full w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] object-cover overflow-hidden'>
                            {cast.profile_path ?
                                <img src={`${imageUrl + cast.profile_path}`} alt="Cast Image" /> : <img src={avatar} alt="Avatar" />
                            }
                        </div>
                        <h2 className="text-xs my-2 text-white">{cast?.name}</h2>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Cast