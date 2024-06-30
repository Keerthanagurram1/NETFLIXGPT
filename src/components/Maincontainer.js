import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const Movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!Movies) {
        return <div>Loading...</div>; // Show loading state if Movies is not available
    }

    if (Movies.length === 0) {
        return <div>No movies available</div>; // Show message if Movies array is empty
    }

    const mainMovie = Movies[0];

    if (!mainMovie) {
        return <div>Loading...</div>; // Show loading state if mainMovie is not available
    }

    const { original_title, overview, id } = mainMovie;

    return (
        <div className=" pt-[20%] bg-black md:pt-0">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieid={id} />
        </div>
    );
};

export default MainContainer;
