import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../compenents/card/Card";
import Header from "../../compenents/header/Header";
import { setLoading } from "../../redux/features/movid/movidSlice";

const Fav = () =>{

    const[movie,setMovie] = useState([]);
    const[isTrue,setIsTrue] = useState(true);    

    const {ids , loading} = useSelector(state => state.movid);
    const dispatch = useDispatch();

    useEffect(() =>{
        if (!ids.length) {
            dispatch(setLoading(false));
        }else{
            getData();
        }
    },[ids])

    const getData = () => {
        dispatch(setLoading(true));
        ids.map(id =>fetch(`https://api.themoviedb.org/3/movie/${id.id}?api_key=5a7a55293c782477997838f62c5e8814&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(prevMovie => [...prevMovie,data])) 
        .then(() => dispatch(setLoading(false)))) 
    }

    console.log(ids,movie,loading);
    return(
        <>
            <Header />
            {loading ? (
            <div>Loading...</div> 
            ) : (
            <>
            {!ids.length ? (
              <div className="text-danger  text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
                <div className="tittle">You haven't added any favorite movies yet.</div>
              </div> 
            ) : (
              <Card movie={movie} isTrue={isTrue} />
            )}
            </>
            )}
        </>
    )
}

export default Fav;