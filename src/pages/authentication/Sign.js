import React, { useState } from "react";
import Header from "../../compenents/header/Header";

const Sign = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        
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
                                    <button type="submit" className="btn btn-danger btn-block" >Sign In</button>
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