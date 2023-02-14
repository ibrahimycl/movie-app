import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="nav-item text-decoration-none">
                    <a className="navbar-brand text-danger" href="/">TMDB</a>
                </Link>    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/" className="nav-item text-decoration-none">
                            <a className="nav-link  text-danger" href="#">HOME</a>
                        </Link>
                        <Link to="/movies/popular" className="nav-item text-decoration-none">
                            <a className="nav-link  text-danger" href="#">NOW PLAYING</a>
                        </Link>
                        <Link to="/movies/top_rated" className="nav-item text-decoration-none">
                            <a className="nav-link  text-danger" href="#">TOP RATED</a>
                        </Link>
                    </ul>
                    <form className="d-flex pe-4">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-danger " type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;

/*<li class="nav-item ml-3">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </li>

<nav className="navbar navbar-expand-lg ">
<div className="container-fluid">
    <a className="navbar-brand text-decoration-none text-danger" href="#">TMDB</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <Link to="/" className="nav-item text-decoration-none">
                <a className="nav-link  text-danger" href="#">HOME</a>
            </Link>
            <Link to="/movies/popular" className="nav-item text-decoration-none">
                <a className="nav-link  text-danger" href="#">POPULAR</a>
            </Link>
            <Link to="/movies/top_rated" className="nav-item text-decoration-none">
                <a className="nav-link  text-danger" href="#">TOP RATED</a>
            </Link>   
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-danger" type="submit">Search</button>
        </form>
    </div>
</div>
</nav>*/