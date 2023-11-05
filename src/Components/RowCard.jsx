import React, { useState, useEffect } from 'react'
import axios from '../Axios';
import noPoster from '../assets/noPoster.jpeg'
import { imageUrl, title } from '../Constants/Const';
import CircleRating from './CircleRating';
import { apiKey } from '../Constants/Const';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

function RowCard({ movie, type, fromSearch,discover }) {
  const [genreData, setGenreData] = useState()
  useEffect(() => {
    axios.get(`/genre/${type}/list?api_key=${apiKey}`).then((response)=>{
      setGenreData(response.data)
    })
  }, [title.generlist])
  const getGenreNames = (genreIds) => {
    if (!genreData) return [];
    return genreIds.map(genreId => {
      const genre = genreData.genres.find(genre => genre.id === genreId);
      return genre ? genre.name : 'Unknown Genre';
    });
  };
  const movieGenreNames = getGenreNames(movie.genre_ids);
  return (
    <div className=" px-0 md:px-5 lg:px-5 hover:scale-110 transition duration-300 ease-in-out">
      <div className="w-full relative ">
        <div className="max-w-max rounded-md w-40 md:w-60 lg:w-64 mx-auto  pt-7">
          <Link to={`/details/${type || movie?.media_type}/${movie?.id}`}>
            <img className='rounded-md w-full object-cover' src={movie.poster_path ? imageUrl + `${movie.poster_path}` : noPoster} alt="" />
          </Link>
        </div>
        {!fromSearch && (
          <div className=''>
            {/* <div className="absolute bottom-2 md:bottom-[0rem] left-5 md:left-3"> */}
            <div className={discover? "absolute bottom-1 md:bottom-[0rem] left-7 md:left-3" : "absolute bottom-1 md:bottom-[0rem] left-1 md:left-2"}>
              <CircleRating rating={movie?.vote_average.toFixed(1)} />
            </div>
            <div className="absolute bottom-2 right-1 hidden sm:flex w-[75%] text-center text-xs gap-3 justify-end">
              {movieGenreNames.slice(0, 2).map((genreName, index) => (
                <h1 key={index} className='text-white  bg-[#c3073f] p-1 px-3 rounded-full'>{genreName}</h1>
              ))}
            </div>
          </div>
        )}
        
      </div>

      <Link to={`/details/${type || movie?.media_type}/${movie?.id}`} className="w-full " >
        <h2 className='uppercase font-semibold text-slate-200 text-xs pt-3'>{movie.title || movie.original_name}</h2>
        <p className="text-gray-500 text-xs font-medium mb-2">
          {dayjs(movie?.release_date || movie?.first_air_date).format("MMM DD YYYY" )}</p>
      </Link>
    </div>
  )
}

export default RowCard
