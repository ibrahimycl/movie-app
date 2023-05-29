import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import Header from "../../compenents/header/Header";
import { Register } from "../../firebase";



const Sign = () => {
const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async(event) => {
        event.preventDefault();
        const user = await Register(email,password);
        if(user){
            navigate("/login");
        }
    };

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Sign Up</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>E-posta:</label>
                                        <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                    </div>                                    
                                    <Link to = "/login" className="text-decoration-none ">
                                        <div className="text-dark text-decoration-none mt-2 mb-2">
                                            "Already have an account? Log in."
                                        </div> 
                                    </Link>   
                                    <button type="submit" className="btn btn-danger btn-block" >Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sign;