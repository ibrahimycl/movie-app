import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import Header from "../../compenents/header/Header";
import { Login as LoginHandle } from "../../firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const user = await LoginHandle(email,password);
        if(user)
        {
            navigate("/");
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
                                <h2 className="card-title text-center mb-4">Login</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>E-posta:</label>
                                        <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <Link to = "/sign" className="text-decoration-none ">
                                        <div className="text-dark text-decoration-none mt-2 mb-2">
                                            "Don't have an account? Sign up."
                                        </div> 
                                    </Link>   
                                    <button type="submit" className="btn btn-danger btn-block mt-2" >Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;