import React from "react";
import { Link } from "react-router-dom";

const Card = ({movie}) => {

    return(
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
                {movie.map(movie => (    
                        <Link className="col text-decoration-none text-danger " to={`/movie/${movie.id}`}>
                            <div className="card h-100">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.original_title}</h5>
                                    <p className="card-text">{movie.overview}</p>
                                </div>
                            </div>
                        </Link>     
                    ))      
                }
            </div>
        </>
    )
}

export default Card;