import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
            navigate("/auth/protected");
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
                                <h2 className="card-title text-center mb-4">Giriş Yap</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>E-posta:</label>
                                        <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Parola:</label>
                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-danger btn-block" >Login</button>
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