// here we will get movie data from the tmdb and update the store
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
const useNowPlayingMovies =()=>{
    const dispatch = useDispatch()
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?page=1',API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));

    };
    useEffect(() => {
        getNowPlayingMovies();
      }, []);
}
export default useNowPlayingMovies;