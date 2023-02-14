import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "./redux/features/movie/movieSlice";
import Home from "./pages/home/Home";
import Header from "./compenents/header/Header";

const App = () => {

    const dispatch= useDispatch();

    const {movie} = useSelector(state => state.movie)

    console.log(movie);
    console.log("aas");

    useEffect(()=>{
        dispatch(getMovie())
    },[])

    

    return(
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route index element = {<Home/>}></Route>
                    <Route path="movie/:id" element = {<h1>Hello World id</h1>}></Route>
                    <Route path="movies/:type" element = {"1010"}></Route>
                    <Route path="/*" element = {<h1>ERROR</h1>}></Route>
                </Routes> 
            </Router>
        </div>
    )
}

export default App;