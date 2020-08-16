import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

import M from 'materialize-css';

const Signup = ()=>{
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const PostData = ()=>{
        axios.post('http://localhost:5000/signup', {
            name, password, email
        })
        .then(res=>{
            console.log(res)
            console.log(res.data)
            if(res.data.error){
                M.toast({html: res.data.error, classes: "#c62828 red darken-3"})
            }else{
                M.toast({html: res.data.message, classes: "#00c853 green accent-4"})
                history.push('/signin')
            }
        })
    }

    return(
        <div className="card auth-card">
            <div className="card-content">
                <h1 className="title-name">BeeGram</h1>
                <input type="text" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)} required/>
                <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/><br/><br/>
                <button className="waves-effect waves-light btn blue" onClick={()=> PostData()}>Signup</button>
                <br/><br/>
                <p>Already Have an Account? <Link to="/login" className="link">Login</Link> </p>
            </div>
        </div>
    )
}

export default Signup;