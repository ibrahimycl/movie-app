import React from "react";
import { Link, useParams } from "react-router-dom";


const Card = ({movie}) => {

    const {que} = useParams();
    
    return(
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
                {movie.map(movie => (    
                        
                        <div className="col">
                            <div className="card h-100">
                                <Link className="col text-decoration-none text-danger " to={que == "auth" ?`/auth/protected/movies/${movie.id}`:`/entry/movie/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">{movie.overview}</p>
                                    </div>
                                </Link> 
                                <div className="card-footer">
                                    <button type="button" >asas</button>
                                </div>
                            </div>
                        </div>    
                    ))      
                }
            </div>
        </>
    )
}

export default Card;