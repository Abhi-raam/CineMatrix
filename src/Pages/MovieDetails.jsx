import React, { useEffect, useState } from 'react'
import axios from '../Axios';
import { useLocation, useParams } from 'react-router-dom'
import { apiKey, imageUrl } from '../Constants/Const';
import Details from '../Components/Details';
import Cast from '../Components/Cast';
import Backdrops from '../Components/Backdrops';
import Trailer from '../Components/Trailer';
import Similar from '../Components/Similar';
import Recommendation from '../Components/Recommendation';

function MovieDetails() {
    const { type, id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const { pathname } = useLocation();
    useEffect(() => {
        axios.get(`/${type}/${id}?append_to_response=credits,images,videos,similar,recommendations&api_key=${apiKey}`).then((response) => {
            setMovieDetails(response.data);
        })
            .catch((error) => {
                console.error(error); // Log any errors
            });
            window.scrollTo({ top: 0, behavior: "smooth" });

    }, [pathname])
    return (
        <div className='bg-black'>
            <div className="absolute w-full h-[100vh] bg-gradient-to-t from-black"></div>
            <img src={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`} alt="backdrop" className="w-[100%] h-[100vh] object-cover mt-[4.5rem]" />
            <div >
                <Details movieDetails={movieDetails} />
            </div>
            <div className=' px-6 md:px-10 lg:px-32'>
                <Cast movieDetails={movieDetails} />
                <Backdrops movieDetails={movieDetails} />
                <Trailer movieDetails={movieDetails} />
                <Similar movieDetails={movieDetails} type={type} id={id}/>
                <Recommendation movieDetails={movieDetails} type={type} id={id}/>
            </div>

        </div >
    )
}

export default MovieDetails