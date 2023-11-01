import React from 'react'
import RowCard from './RowCard'
function Similar({movieDetails ,type ,id}) {
    return (
        <div>
            <div>
                <h1 className='text-[#C3073F] text-2xl sm:text-3xl  sm:mt-2 sm:py-7 py-2 font-medium '>Similar {type=== "movie"? "Movie" : "TV Shows"}</h1>
            </div>
            {movieDetails.similar?.results.length>0?(
                <div className='flex overflow-x-scroll overflow-y-hidden space-x-6 p-4 pb-10 pt-5'>
                {movieDetails.similar?.results.map((movie, index) => (
                    <div key={index}>
                        <RowCard movie={movie} type="movie" id={id}  />
                    </div>
                 ))}
            </div>
                 ):(<p className='text-center font-bold'>No data found!</p>)}
        </div>
    )
}

export default Similar