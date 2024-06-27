const VideoTitle=({title,overview})=>{
    return(
    <div className=" w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>

        <div>
            <button className="bg-white text-black px-8 py-2 rounded-lg hover:bg-opacity-90">▶ Play</button>
            <button className="bg-black text-white mx-2 px-8 py-2 opacity-50 rounded-lg">More Info</button>
        </div>
        
    </div>
    )
    
}
export default VideoTitle;