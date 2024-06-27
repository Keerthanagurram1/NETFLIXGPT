import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        videoTrailer:null,
        popularMovies:[],
        upcoming:[],
        toprated:[],
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;

        },
        addVideoTrailer:(state,action)=>{
            state.videoTrailer=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcoming=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.toprated=action.payload;
        },
    
    
    },
});
export const{addNowPlayingMovies, addVideoTrailer, addPopularMovies,addUpcomingMovies, addTopRatedMovies}=movieSlice.actions;
export default movieSlice.reducer;  