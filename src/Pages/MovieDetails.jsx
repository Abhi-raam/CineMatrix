import React, { useEffect, useState } from 'react'
import axios from '../Axios';
import { useParams } from 'react-router-dom'
import { apiKey, imageUrl } from '../Constants/Const';
import Details from '../Components/Details';

function MovieDetails() {
    const { type, id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [cast, setCast] = useState()
    const [video, setVideo] = useState()
    console.log(id);
    console.log(imageUrl);
    useEffect(() => {
        axios.get(`/${type}/${id}?api_key=${apiKey}`).then((response) => {
            console.log(response.data);
            setMovieDetails(response.data)
            console.log("this is the bck " + movieDetails.backdrop_path);
        })
    }, [])
    return (
        <div className='bg-black'>
            <div className="absolute w-full h-[100vh] bg-gradient-to-t from-black"></div>
            <img src={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`} alt="backdrop" className="w-[100%] h-[100vh] object-cover" />
            <div >
                <Details movieDetails = {movieDetails}/>
            </div>
        </div >
    )
}

export default MovieDetails