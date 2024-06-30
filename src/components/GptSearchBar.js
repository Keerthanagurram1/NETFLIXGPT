
import { useRef } from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";


const GptSearchBar =()=>{
    const langKey = useSelector(store=> store.config.lang)
    const searchText = useRef(null);

    const handleGptSearch = async () => {
        console.log(searchText.current.value);

        try {
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: searchText.current.value }],
                model: 'gpt-3.5-turbo',
            });

            console.log(chatCompletion);
        } catch (error) {
            console.error('Error with OpenAI API:', error);
        }
    };

    // const handleGptSearch =async ()=>{
    //     console.log(searchText.current.value);
    //     const gptResults = async function main() {
    //         const chatCompletion = await openai.chat.completions.create({
    //           messages: [{ role: 'user', content: 'Say this is a test' }],
    //           model: 'gpt-3.5-turbo',
    //         });
    //       }
          
    //       main();

    // }
    return(
        <div className=" pt-[20%] md:pt-[10%] flex justify-center">
            
            <form className=" w-full md:w-1/2 bg-black grid grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} type="text" placeholder={lang[langKey].gptSearchPlaceholder} className=" text-xs md:text-lg p-2 m-2 col-span-9"/>
                <button 
                className="text-xs md:text-lg m-2 py-2 px-1 md:px-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGptSearch}>{lang[langKey].search}</button>
            </form>
        </div>
    );
};
export default GptSearchBar;