export const baseUrl = 'https://api.themoviedb.org/3/'
export const apiKey = import.meta.env.VITE_API_KEY
export const imageUrl = 'https://image.tmdb.org/t/p/original/'
const cast = 'https://api.themoviedb.org/3/movie/507089/credits?api_key=072c08b07f1cd6da85737296d996dc17'
const movieDetails = "https://api.themoviedb.org/3/movie/movieId?api_key=072c08b07f1cd6da85737296d996dc17"
export const title = {
    generlist :`/genre/movie/list?api_key=${apiKey}`,
    trending :`/trending/movie/day?api_key=${apiKey}`,
    upcoming :`/movie/upcoming?api_key=${apiKey}`,
    popular :`/movie/popular?api_key=${apiKey}`,
    toprated :`/movie/top_rated?api_key=${apiKey}`,
    nowplaying :`/movie/now_playing?api_key=${apiKey}`,
}