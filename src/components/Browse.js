
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcoming from "../hooks/useUpcoming";
import Header from "./Header"
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./Secondarycontainer";


const Browse = ()=>{
    useNowPlayingMovies();
    usePopularMovies();
    useUpcoming();
    useTopRatedMovies();
    return(
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>

        
    </div>
)
};
export default Browse;