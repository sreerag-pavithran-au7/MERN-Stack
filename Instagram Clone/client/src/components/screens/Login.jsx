import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import M from 'materialize-css';

const Login = ()=>{
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginData = ()=>{
        axios.post('/signin', {email, password})
        .then(res=>{
            console.log(res)
            console.log(res.data)
            if(res.data.error){
                M.toast({html: res.data.error, classes: "#c62828 red darken-3"})
            }else{
                M.toast({html: "Logged in Successfully",  classes: "#00c853 green accent-4"})
                history.push('/');
            }
        })
    }

    return(
        <div className="card auth-card">
            <div className="card-content">
                <h1 className="title-name">BeeGram</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                <button className="waves-effect waves-light btn blue" onClick={()=> LoginData()}>Login</button>
            </div>
        </div>
    )
}

export default Login;