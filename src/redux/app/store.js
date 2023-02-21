import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movie/movieSlice";
import movieSearchSlice from "../features/movie/movieSearchSlice";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({                                         
    reducer : {
        movie : movieSlice,
        searchMovie : movieSearchSlice,
        auth : authSlice
    }
})

