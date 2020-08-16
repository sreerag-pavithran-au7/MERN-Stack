import React from 'react';
import './style.css';

import {Link} from 'react-router-dom';

const NavBar = ()=>{
    return(
        <div className="navbar">
            <Link to="" className="link">Home</Link>
            <Link to="/post" className="nolink">Post</Link>
        </div>
    )
}

export default NavBar