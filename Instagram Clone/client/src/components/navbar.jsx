import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = ()=>{
    return(
        <nav>
            <div className="nav-wrapper blue">
                <Link to="/" className="brand-logo left">BeeGram</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/signin">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/create">Create Post</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
