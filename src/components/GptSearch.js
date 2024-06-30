import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = ()=>{
    return(
        <>
            <div className="absolute -z-10">
                <img className="h-screen w-screen object-cover" src={BG_URL} alt="bg-image"/>
            </div>
            <div className="pt-[20%] md:p-0">
            
                <GptSearchBar/>
                <GptMovieSuggestion/>
            </div>
        </>
        
    )
};
export default GptSearch;