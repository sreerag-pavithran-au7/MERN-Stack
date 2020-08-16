import React, {useState} from 'react';
import './style.css';
import axios from 'axios';
import M from 'materialize-css';
import {useHistory} from 'react-router-dom';

// import {Link} from 'react-router-dom';

const Login  = ()=>{
    const history = useHistory();
    const [email, emailState] = useState();
    const [password, passwordState] = useState();
    const loginData = () =>{
        axios.post('http://localhost:9000/signin', {email, password})
        .then((res)=>{
            console.log(res)
            let data = res.data;
            let userData = res.data.user;
            localStorage.setItem('user', userData);
            if(data.message){
                M.toast({html: data.message})
            }else{
                localStorage.setItem('user', userData);
                M.toast({html: data.message})
                history.push('/')
            }
        })
    }

    
    return(
        <div className="cards">
            <input type="text" className="inputt" value={email} placeholder="Email" onChange={(e)=>emailState(e.target.value)}/><br/>
            <input type="password" className="inputt" value={password} placeholder="Password" onChange={(e)=>passwordState(e.target.value)}/><br/>
            <button onClick={()=> loginData()}>Login</button>
        </div>
    )
}

export default Login;