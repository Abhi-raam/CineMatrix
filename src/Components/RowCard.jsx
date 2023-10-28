import React, { useState, useEffect } from 'react'
import rowimg from '../assets/rowpost.jpg'
import axios from '../Axios';
import { imageUrl, title } from '../Constants/Const';
import CircleRating from './CircleRating';

function RowCard({ movie, type }) {
  const [genreData, setGenreData] = useState()
  useEffect(() => {
    axios.get(title.generlist).then((response) => {
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
  // console.log(movieGenreNames.slice(0, 2));
  const releaseDate = movie ? movie.release_date || movie.first_air_date : null;
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = new Date(releaseDate).toLocaleDateString(undefined, options);
  return (
    <div className='relative hover:scale-110 transition duration-300 ease-in-out '>

      <div className='max-w-max rounded-md w-40 md:w-60 lg:w-72 mx-auto p-3'>
        <img className='rounded-md w-full' src={imageUrl + `${movie.poster_path}`} alt="" />
      </div>

      <div className="absolute  bottom-14">
        <CircleRating rating={movie?.vote_average.toFixed(1)} />
      </div>
      <div className='hidden  md:flex justify-end mt-2 space-x-3 text-sm'>
        {movieGenreNames.slice(0,2).map((genreName, index) => (
          <h1 key={index} className='text-white  bg-[#c3073f] px-4 py-1 rounded-full'>{genreName}</h1>
        ))}
      </div>
      <div className=' text-white pt-4 text-start max-w-[15rem] '>
        <h1 className='uppercase font-semibold'>{movie.title || movie.original_name}</h1>
        <p className="text-gray-500 text-xs font-medium mb-2">{movie ? formattedDate : null}</p>
      </div>

    </div>
  )
}

export default RowCard
