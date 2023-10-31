import React from 'react'

function Trailer({ movieDetails }) {
    const trailer = movieDetails.videos?.results.filter((videoType) => videoType.type === "Trailer").map((trailer) => trailer?.key)
    return (
        <div className='pb-9'>
            <div>
                <h1 className='text-[#C3073F] text-2xl sm:text-3xl  sm:mt-2 sm:py-7 py-2 font-medium '>Trailer</h1>
            </div>
            <div>
                <div className='flex justify-center'>
                    {trailer ?
                        <iframe className='w-full h-[50vw] md:w-[80%] lg:w-[80%] lg:h-[40vw]' src={`https://www.youtube.com/embed/${trailer[0]}`} title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        : <p>no video found</p>}
                </div>
            </div>
        </div>
    )
}

export default Trailer