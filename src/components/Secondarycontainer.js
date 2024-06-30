
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const Movies = useSelector((store) => store.movies);

    return (
        <div className="bg-black">
            <div className=" mt-0 sm:mt-0 md:-mt-56 pl-3 md:pl-12 relative z-20">
                <MovieList title={"Now Playing"} movies={Movies.nowPlayingMovies}/>
                <MovieList title={"Top Rated"} movies={Movies.toprated}/>
                <MovieList title={"Popular"} movies={Movies.popularMovies}/>
                <MovieList title={"Up Coming"} movies={Movies.upcoming}/>
        
            </div>
        </div>
    );
};

export default SecondaryContainer;
