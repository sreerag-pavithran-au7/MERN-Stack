import React from 'react';
// import {Link} from 'react-router-dom';

const Login = ()=>{
    return(
        <div className="card auth-card">
            <div className="card-content">
                <h1 className="title-name">BeeGram</h1>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <button className="waves-effect waves-light btn blue">Login</button>
            </div>
        </div>
    )
}

export default Login;