// import { useSelector } from "react-redux";
// import MovieList from "./MovieList";

// const SecondaryContainer = ()=>{
//     const Movies= useSelector((store)=>store.movies);
    
//     return(
//         <div className="bg-black">
//             <div className="-mt-56 pl-12 relative z-20">
//                 <MovieList title={"Now Playing"} movies={Movies.nowPlayingMovies}/>
//                 <MovieList title={"Trending"} movies={Movies.nowPlayingMovies}/>
//                 <MovieList title={"Popular"} movies={Movies.nowPlayingMovies}/>
//                 <MovieList title={"Up Coming"} movies={Movies.nowPlayingMovies}/>
//                 <MovieList title={"Horror"} movies={Movies.nowPlayingMovies}/>
//             </div>
//         </div>
//     )

// };
// export default SecondaryContainer;

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const Movies = useSelector((store) => store.movies);

    return (
        <div className="bg-black">
            <div className="-mt-56 pl-12 relative z-20">
                <MovieList title={"Now Playing"} movies={Movies.nowPlayingMovies}/>
                <MovieList title={"Top Rated"} movies={Movies.toprated}/>
                <MovieList title={"Popular"} movies={Movies.popularMovies}/>
                <MovieList title={"Up Coming"} movies={Movies.upcoming}/>
        
            </div>
        </div>
    );
};

export default SecondaryContainer;
