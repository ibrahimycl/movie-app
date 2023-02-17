import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getsearchMovie } from "../../redux/features/movie/movieSearchSlice";
import Card from "../../compenents/header/card/Card";

const SearchFiltered = () => {

    const[filterMovie,setFilterMovie]=useState(null);
    const dispatch = useDispatch();
    const {searchMovie} = useSelector(state => state.searchMovie)
    const {name} = useParams();
    

    useEffect(()=>{
        dispatch(getsearchMovie(name))
    
    },[name])


    if(!searchMovie)
    {
        return null;
    }
    console.log(name);
    console.log(searchMovie);
    return(
        <>
            <>
                <h2 className="text-danger ms-4">Search : {name.toUpperCase()}</h2>
                <Card movie={searchMovie}/>
            </>
        </>
    )
}

export default SearchFiltered;