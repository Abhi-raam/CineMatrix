import React, { useState, useEffect } from 'react'
import axios from '../Axios'
import RowCard from './RowCard'

function Row({ name, movieurl }) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(movieurl).then((response) => {
            setMovie(response.data.results)
        })
    }, [movieurl])
    return (
        <div className=' pt-5'>
            <div>
                <h1 className='text-3xl p-4 font-semibold text-[#c3073f]'>{name}</h1>
            </div>
            <div className='flex overflow-x-scroll overflow-y-hidden space-x-6 p-4 pb-10 pt-5'>
                {movie.map((movie, index) => (
                    <div key={index}>
                        <RowCard movie={movie} type="movie" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Row
