import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../redux/features/movie/movieSlice";
import Card from "../../compenents/card/Card";
import { useParams } from "react-router-dom";
import Header from "../../compenents/header/Header";
import { Display } from "../../firebase";


const Home = () => {

    const dispatch = useDispatch();

    const { movie } = useSelector(state => state.movie);
    const {user} = useSelector(state => state.auth)
    const {type} = useParams();

    useEffect(() => {
        dispatch(getMovie(type))
        console.log(user);
    }, [type])

    if (!movie) {
        return null;
    }

    return (
            <>
                <Header/>
                <h2 className="text-danger ms-4">{type=="top_rated"? "TOP RATED":type =="upcoming"?"UPCOMING":"HOME"}</h2>
                <Card movie={movie}/>
            </>
            )
}

export default Home;


/*return (
            <>
                {movie.map(movie =>  (
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.original_title}</h5>
                                        <p className="card-text">{movie.overview}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
            )*/