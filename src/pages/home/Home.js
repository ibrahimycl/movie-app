import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../redux/features/movie/movieSlice";
import Card from "../../compenents/card/Card";
import { useParams } from "react-router-dom";
import Header from "../../compenents/header/Header";

const Home = () => {

    const dispatch = useDispatch();

    const { movie } = useSelector(state => state.movie);
    const {type} = useParams();

    useEffect(() => {
        dispatch(getMovie(type))
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
