
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header"
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./Secondarycontainer";


const Browse = ()=>{
    useNowPlayingMovies();
    return(
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>

        
    </div>
)
};
export default Browse;