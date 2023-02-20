import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Header from "../../compenents/header/Header";
import "./Movie.css";

const Movie = () =>{

    const[movie,setMovie]=useState(null) 
    const[video,setVideo]=useState(null);
    const {id} = useParams();

    useEffect(() => {
        getData()
        getVideo()
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5a7a55293c782477997838f62c5e8814&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }
    const getVideo = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5a7a55293c782477997838f62c5e8814&language=en-US`)
        .then(res => res.json())
        .then(data =>  {if(data.results){
            console.log("asas");
            const trailer = data.results.find(vid => vid.name === "Official Trailer")
            setVideo(trailer?trailer:data.results[0])
        }})

        
    }
    if (!movie) {
        return null;
    }
    if (!video) {
        return null;
    }
    console.log(movie,id);
    console.log(video);

    const renderTrailer = () =>{

        return(
            <YouTube
                videoId={video.key}
            />
        )

    }

    return(
        <>
            <Header/>
            <h1 className="text-danger ms-4 text-center tittle"  >{movie.original_title} </h1>
            <img className="poster" src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} />
            <div className="video">{renderTrailer()}</div>
        </>
    )

}

export default Movie;