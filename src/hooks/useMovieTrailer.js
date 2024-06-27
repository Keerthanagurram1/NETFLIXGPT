import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addVideoTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieid)=>{
    const dispatch= useDispatch()
    //fetch trailer video from tmdb && updating the store eith trailer video
    const getMovieVideos = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US",API_OPTIONS);
        const json = await data.json()
        //console.log(json)

        const filterData = json.results.filter((video)=>video.type==="Trailer");
        const filter = filterData.length ? filterData[0] : json.results[0];
        console.log(filter);
        dispatch(addVideoTrailer(filter));


    };
    useEffect(()=>{
        getMovieVideos()

    },[])


};
export default useMovieTrailer;