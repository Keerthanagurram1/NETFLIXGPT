const VideoTitle=({title,overview})=>{
    return(
    <div className=" w-screen aspect-video pt-[12%] px-5 md:px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-sm md:text-6xl md:font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>

        <div className="my-2">
            <button className="bg-white text-black px-3 md:px-8 py-0 md:py-2 rounded-lg hover:bg-opacity-90">▶ Play</button>
            <button className="bg-black text-white mx-2 px-8 py-2 opacity-50 rounded-lg hidden md:inline-block">More Info</button>
        </div>
        
    </div>
    )
    
}
export default VideoTitle;