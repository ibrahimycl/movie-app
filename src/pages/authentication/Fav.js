import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../compenents/card/Card";
import Header from "../../compenents/header/Header";

const Fav = () =>{

    const[movie,setMovie] = useState([]);
    const[isTrue,setIsTrue] = useState(true);    

    const {id} = useSelector(state => state.movid);
    
    
    useEffect(() =>{
        getData();
    },[])
    const getData = () => {
        id.map(i =>fetch(`https://api.themoviedb.org/3/movie/${i.id}?api_key=5a7a55293c782477997838f62c5e8814&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(prevMovie => [...prevMovie,data])) )
    }

    console.log(id,movie);
    return(
        <>
            <Header/>
            <Card 
            movie={movie}
            isTrue={isTrue}
            />
        </>
    )
}

export default Fav;