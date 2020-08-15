import React,{useState,useContext,} from 'react'
import {useHistory as history} from 'react-router-dom';
// import {UserContext} from '../../App'

import M from 'materialize-css';

const Login = ()=>{
    // const {state,dispatch} = useContext(UserContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginData = ()=>{
        fetch('http://localhost:5000/signin', {
            method: "post",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(email, password)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.error){
                M.toast({html: data.error, classes: "#c62828 red darken-3"})
            }else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                // dispatch({type:"USER",payload:data.user})
                M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
                history.push('/')
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