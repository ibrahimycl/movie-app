import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../redux/features/movie/movieSlice";


const Home = () => {

    const dispatch = useDispatch();

    const {movie} = useSelector(state => state.movie )

    useEffect(()=>{
        dispatch(getMovie())
    },[])

    if(!movie)
    {
        return null;
    }
    console.log(movie);

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={`https://image.tmdb.org/t/p/original${movie[7].backdrop_path}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={`https://image.tmdb.org/t/p/original${movie[8].backdrop_path}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={`https://image.tmdb.org/t/p/original${movie[3].backdrop_path}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;