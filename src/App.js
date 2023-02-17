import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./compenents/header/Header";
import Movie from "./pages/home/movieDetails/Movie";
import SearchFiltered from "./pages/search/SearchFiltered";

const App = () => {

    return(
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route index element = {<Home/>}></Route>
                    <Route path="movie/:id" element = {<Movie/>}></Route>
                    <Route path="movies/:type" element = {<Home/>}></Route>
                    <Route path="movien/:name" element = {<SearchFiltered/>}></Route>
                    <Route path="/*" element = {<h1>ERROR</h1>}></Route>
                </Routes> 
            </Router>
        </div>
    )
}

export default App;