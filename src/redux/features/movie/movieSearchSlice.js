import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    searchMovie : (null)
}
export const getsearchMovie = createAsyncThunk('getsearchMovie',async(query)=>{

    console.log(query);
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5a7a55293c782477997838f62c5e8814&query=${query}`)
    const movi = data.results;
    const new_mov = movi.filter(mov => mov.backdrop_path)
    console.log(new_mov);
    return new_mov;

})

export const movieSearchSlice = createSlice({
    name:"searchMovie",
    initialState,
    reducers:{
    },
    extraReducers: (builder)=> {
        builder.addCase(getsearchMovie.fulfilled,(state,action)=>{
            state.searchMovie = action.payload;
        })
    }
})

export default movieSearchSlice.reducer;