import React from 'react'
import bck from '../assets/bck.jpg'
import { BsPlay } from 'react-icons/bs';
function Home() {
    const myStyle = {
        backgroundImage: `url(${bck})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '100vh'
    };

    // const centerContentStyle = {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     // alignItems: 'center',
    //     height: '100%'
    // };

    return (
        <div style={myStyle} className="w-[100vw] h-[100vh] relative text-white ">
            <div className="w-[100vw] h-full">
                <div className="absolute w-full h-[100vh] bg-gradient-to-r from-black"></div>
                {/* <img src={bck} className="w-[100vw] h-[100vh] object-cover object-top"/> */}
                <div className="absolute  top-[35%] text-4xl font-extrabold sm:ml-7 px-3 flex flex-col gap-4">
                    <div>
                        {/* <h1 className="font-bold text-6xl ">{movie?.title}</h1> */}
                        <h1>Movie name</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button className="text-black bg-teal-600 text-sm font-medium px-4 py-2 flex items-center gap-1">
                            <BsPlay size={18} />
                            Play
                        </button>
                        <button className=" border bg-transparent text-sm font-medium px-3 py-2">
                            Watch Later
                        </button>
                    </div>
                    <div>
                        {/* <p className="text-gray-500 text-xs font-medium mb-2">
                            {dayjs(movie?.release_date).format('MMM DD YYYY')}
                        </p> */}
                        <p className="text-gray-500 text-xs font-medium mb-2">Jan 30 2023</p>
                        <p className="text-sm max-w-4xl font-medium sm:w-[65%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
