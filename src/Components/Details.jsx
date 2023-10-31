import React from 'react'
import { imageUrl } from '../Constants/Const'
import dayjs from 'dayjs';
function Details({ movieDetails }) {
    // console.log(movieDetails.credits?movieDetails.credits.crew :"no data found");
    let director = movieDetails.credits ?movieDetails.credits.crew.filter((crew) => crew.job === "Director").map((director) => director ? director.name : null) : null
    let writer = movieDetails.credits?.crew.filter((crew)=>crew.job ===  "Story" ).map((writer)=>writer?.name)
    function mintohrs(min) {
        let totalhrs = Math.floor(min / 60)
        let remmin = Math.floor(min % 60)
        return (totalhrs + "h " + remmin + "min")
    }
    return (
        <div>
            <div>
                <div className='bottom-1 absolute text-white w-full  flex justify-center space-x-4 '>
                    <img src={`${imageUrl + movieDetails.poster_path}`} alt="poster" className='hidden ml-9 md:block w-60 rounded-xl' />
                    <div className='space-y-5 pl-4'>
                        <div className='space-y-3'>
                            <h1 className='text-6xl font-semibold max-w-3xl'>{movieDetails ? movieDetails.title || movieDetails.name : null}</h1>
                            <h1 className='text-gray-200 font-semibold text-sm'>"{movieDetails ? movieDetails.tagline : null}"</h1>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {movieDetails.genres ? movieDetails.genres.map((genre, index) => (
                                <h1 className='border-2 rounded-full px-3 ' key={index}>{genre.name}</h1>
                            )) : null}
                        </div>
                        <div>
                            <p className=" text-sm font-bold max-w-xs md:max-w-md  text-gray-200 ">{movieDetails ? movieDetails.overview : null}</p>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5  '>
                            <h1 className="text-gray-300 font-medium"><span className='font-bold text-md'>Status</span> : {movieDetails ? movieDetails.status : null}</h1>
                            <h1 className="text-gray-300 font-medium"><span className='font-bold text-md'>Release Date </span> : {dayjs(movieDetails ? movieDetails.release_date : null).format("MMM DD YYYY")}</h1>
                            <h1 className="text-gray-300 font-medium"><span className='font-bold text-md'>Runtime</span> : {mintohrs(movieDetails ? movieDetails.runtime : null)}</h1>
                        </div>
                        <div className='flex flex-wrap gap-6 items-center'>
                            <h3>Director :
                                {director?.map((director, index) => (
                                    <span key={index}> {director}
                                        {director.length > 1 ? "," : " "}
                                    </span>
                                ))}
                            </h3>
                            <h3>Writer :
                                {writer?.map((writer,index)=>(
                                    <span key={index}> {writer}
                                    {writer.length > 1? "," : " "}
                                    </span>
                                ))}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details