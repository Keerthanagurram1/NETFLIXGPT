
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcoming from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import Header from "./Header"
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./Secondarycontainer";


const Browse = ()=>{
    const showGptSearch = useSelector(store=> store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useUpcoming();
    useTopRatedMovies();
    return(
    <div>
        <Header/>
        {showGptSearch? (<GptSearch/>) : (
        <>
            <MainContainer/>
            <SecondaryContainer/>
        </> )
        }
    </div>
)
};
export default Browse;