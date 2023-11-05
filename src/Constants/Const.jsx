export const baseUrl = 'https://api.themoviedb.org/3/'
export const apiKey = import.meta.env.VITE_API_KEY
export const imageUrl = 'https://image.tmdb.org/t/p/original/'
const cast = 'https://api.themoviedb.org/3/movie/507089/credits?api_key='

export const title = {
    trending :`/trending/movie/day?api_key=${apiKey}`,
    upcoming :`/movie/upcoming?api_key=${apiKey}`,
    popular :`/movie/popular?api_key=${apiKey}`,
    toprated :`/movie/top_rated?api_key=${apiKey}`,
    nowplaying :`/movie/now_playing?api_key=${apiKey}`,
}