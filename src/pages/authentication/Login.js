import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../compenents/header/Header";
import {login,selectToken} from "../../redux/features/auth/authSlice";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const authStatus = useSelector((state) => state.auth.status);
    const authError = useSelector((state) => state.auth.error);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login({email,password}));
        console.log(token);
        console.log(authStatus);
        if(token){
            console.log("basarili");
            console.log(token);
        }
        else{
            console.log("hataa");
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
                                    <button type="submit" className="btn btn-danger btn-block" disabled={authStatus === 'loading'}>
                                        {authStatus=="loading"? 'Loading...' : 'Login'}
                                    </button>
                                    {authStatus === 'failed' && <div>{authError}</div>}
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