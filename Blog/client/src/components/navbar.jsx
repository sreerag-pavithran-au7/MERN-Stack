import React from 'react';
import './style.css';

import {Link} from 'react-router-dom';

const NavBar = ()=>{
    return(
        <div className="navbars">
            <Link to="" className="link">Home</Link>
            <Link to="/post" className="nolinks">Post</Link>
            <Link to="/signup" className="nolinks">Signup</Link>
            <Link to="/login" className="nolinks">Login</Link>
        </div>
    )
}

export default NavBar