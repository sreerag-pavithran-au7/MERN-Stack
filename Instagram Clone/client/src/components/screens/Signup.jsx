import React from 'react';
import {Link} from 'react-router-dom';

const Signup = ()=>{
    return(
        <div className="card auth-card">
            <div className="card-content">
                <h1 className="title-name">BeeGram</h1>
                <input type="text" placeholder="Username" required/>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/><br/><br/>
                <button className="waves-effect waves-light btn blue">Signup</button>
                <br/><br/>
                <p>Already Have an Account? <Link to="/login" className="link">Login</Link> </p>
            </div>
        </div>
    )
}

export default Signup;