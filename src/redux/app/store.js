import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movie/movieSlice";
import movieSearchSlice from "../features/movie/movieSearchSlice";

export const store = configureStore({                                         
    reducer : {
        movie : movieSlice,
        searchMovie : movieSearchSlice
    }
})