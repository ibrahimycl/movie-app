import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    movie : (null)
}
export const getMovie = createAsyncThunk('getMovie',async(type)=>{

    if(type==null)
    {
        const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=5a7a55293c782477997838f62c5e8814&language=en-US")
        return data.results;
    }
    
})

export const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
    },
    extraReducers: (builder)=> {
        builder.addCase(getMovie.fulfilled,(state,action)=>{
            state.movie = action.payload;
        })
    }
})

export default movieSlice.reducer;