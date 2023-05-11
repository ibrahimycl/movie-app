import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Sign from "./pages/authentication/Sign"
import Movie from "./pages/movieDetails/Movie";
import SearchFiltered from "./pages/search/SearchFiltered";
import Login from "./pages/authentication/Login";
import Fav from "./pages/authentication/Fav";
import {Toaster} from 'react-hot-toast';

const App = () => {

    return(
        <div className="App">
            <Toaster position="top-right"/>
            <Router>
                <Routes>
                    <Route index element = {<Home/>}></Route>
                    <Route path="movie/:id" element = {<Movie/>}></Route>
                    <Route path="movies/:type" element = {<Home/>}></Route>
                    <Route path="movien/:name" element = {<SearchFiltered/>}></Route>
                    <Route path="/login" element = {<Login/>}></Route>
                    <Route path="/sign" element = {<Sign/>}></Route>
                    <Route path="/favorites" element = {<Fav/>}></Route>
                    <Route path="/*" element = {<h1>ERROR</h1>}></Route>
                </Routes> 
            </Router>
        </div>
    )
}

export default App;