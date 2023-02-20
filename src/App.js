import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Sign from ".pages/authentication/Sign"
import Movie from "./pages/movieDetails/Movie";
import SearchFiltered from "./pages/search/SearchFiltered";
import Login from "./pages/authentication/Login";
import Protected from "./pages/authentication/Protected";

const App = () => {

    return(
        <div className="App">
            <Router>
                <Routes>
                    <Route index element = {<Home/>}></Route>
                    <Route path=":que/movie/:id" element = {<Movie/>}></Route>
                    <Route path=":que/movies/:type" element = {<Home/>}></Route>
                    <Route path=":que/movien/:name" element = {<SearchFiltered/>}></Route>
                    <Route path="/login" element = {<Login/>}></Route>
                    <Route path="/sign" element = {<Sign/>}></Route>
                    <Route path=":que/protected" element = {<Protected/>}></Route>
                    <Route path=":que/protected/movie/:type" element = {<Protected/>}></Route>
                    <Route path=":que/protected/movies/:id" element = {<Movie/>}></Route>
                    <Route path=":que/protected/movien/:name" element = {<SearchFiltered/>}></Route>
                    <Route path="/*" element = {<h1>ERROR</h1>}></Route>
                </Routes> 
            </Router>
        </div>
    )
}

export default App;