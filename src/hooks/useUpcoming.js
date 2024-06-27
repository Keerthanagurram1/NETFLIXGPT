// here we will get movie data from the tmdb and update the store
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcoming =()=>{
    const dispatch = useDispatch()
    const getUpcoming = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addUpcomingMovies(json.results));

    };
    useEffect(() => {
        getUpcoming();
      }, []);
}
export default useUpcoming;