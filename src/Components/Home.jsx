import React, { useState, useEffect } from 'react'
import axios from '../Axios'
import { apiKey, imageUrl,title } from '../Constants/Const';
import { BsPlay } from 'react-icons/bs';
import dayjs from 'dayjs';
function Home() {
    const [movie, setMovie] = useState([])
    const trending = movie[Math.floor(Math.random() * movie.length)];

    useEffect(() => {
        axios.get(title.upcoming).then((response) => {
            setMovie(response.data.results)
        })
    }, [])

    return (
        <div className="w-[100vw] h-[100vh] relative text-white ">
            <div className="w-[100vw] h-full">
                <div className="absolute w-full h-[100vh] bg-gradient-to-r from-black"></div>
                <img src={`${trending ? imageUrl + trending.backdrop_path : null}`} className="w-full  h-[90vh] object-cover object-top mt-[4.5rem]" />
                <div className="absolute  top-[35%] text-4xl font-extrabold sm:ml-7 px-3 flex flex-col gap-4">
                    <div>
                        <h1 className="font-bold text-6xl ">{trending ? trending.title || trending.name : null}</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button className="text-black bg-[#c3073f] text-sm font-medium px-4 py-2 flex items-center gap-1">
                            <BsPlay size={18} />
                            Play
                        </button>
                        <button className=" border bg-transparent text-sm font-medium px-3 py-2">
                            Watch Later
                        </button>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs font-medium mb-2">{dayjs(trending ? trending.release_date || trending.first_air_date : null).format("MMM DD YYYY")}</p>
                        <p className="text-sm max-w-4xl font-medium sm:w-[65%]">{trending ? trending.overview : null}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
