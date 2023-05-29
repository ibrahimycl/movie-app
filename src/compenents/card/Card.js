import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addData } from "../../firebase";
import { deleteMoviesById } from "../../firebase";
import { toast } from "react-hot-toast";


const Card = ({movie,isTrue}) => {

    const[id,setId] = useState(null); 
    const[deletedId,setDeletedId] = useState(null)

    const {ids} = useSelector(state => state.movid);
    const {user} = useSelector(state => state.auth);
    
    useEffect(()=>{
        const addMovie = async() =>{
            await addData({
                id,
                uid:user.uid
            })
        }
        const deletedMovie = async() =>{
            await deleteMoviesById(deletedId);
        }
        if(id != null){ 
            if(ids.find(i => i.id === id))
            {
                toast.error("Already Added");
            }
            else{
                addMovie();
            }
            
        }
        if(deletedId != null){ 
            deletedMovie();
        }
    },[id,deletedId])
    return(
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
                {movie.map((movie) =>   
                        movie.id &&

                         (<div className="col">
                            <div className="card h-100">
                                <Link className="col text-decoration-none text-danger " to={`/movie/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">{movie.overview}</p>
                                    </div>
                                </Link> 
                                <div className="card-footer">    
                                    {
                                        isTrue ?
                                        (
                                            <button type="button" className="btn-danger "onClick={handleClickk=>{setDeletedId(movie.id);}}>Remove</button>
                                        ):
                                        (
                                            <button type="button" className="btn-danger" onClick={handleClick=>{setId(movie.id)} }>Add</button>
                                        )
                                    }
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