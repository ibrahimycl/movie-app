import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logout } from "../../firebase";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {

    const [searchValue, setSearchValue] = useState("");
    const {user} = useSelector(state => state.auth);

    console.log(user);
    
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="nav-item text-decoration-none">
                    <p className="navbar-brand text-danger">TMDB</p>
                </Link>    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/" className="nav-item text-decoration-none">
                            <p className="nav-link  text-danger" >HOME</p>
                        </Link>
                        <Link to="/movies/upcoming"  className="nav-item text-decoration-none">
                            <p className="nav-link  text-danger" >UPCOMING</p>
                        </Link>
                        <Link to="/movies/top_rated" className="nav-item text-decoration-none">
                            <p className="nav-link  text-danger" >TOP RATED</p>
                        </Link>
                    </ul>
                    {
                        user? 
                        <div className="d-flex pe-4 text-danger mt-3">
                            <Link to="/favorites" className="nav-item text-decoration-none">
                                <p className="nav-link  text-danger" >Favorites</p>
                            </Link>
                            <Link to="/" className="nav-item text-decoration-none">
                                <p className="nav-link  text-danger" onClick={Logout} >Log Out</p>
                            </Link>
                        </div>:
                        <div className="d-flex pe-4 text-danger mt-3">
                            <Link to="/sign" className="nav-item text-decoration-none">
                                <p className="nav-link  text-danger" >Sign In</p>
                            </Link>
                            <Link to="/login" className="nav-item text-decoration-none">
                                <p className="nav-link  text-danger" >Log In</p>
                            </Link>
                        </div>
                    }
                   
                    <form className="d-flex ">
                        <input className="form-control me-2" type="text" id="search"  onChange={(e)=> {setSearchValue(e.target.value);}} placeholder="Search" aria-label="Search" />
                        <Link to={`/movien/${searchValue}`}>
                            <button className="btn btn-outline-danger " type="submit">Search</button>
                        </Link>
                    </form>                   
                </div>
            </div>
        </nav>
    )
}

export default Header;


