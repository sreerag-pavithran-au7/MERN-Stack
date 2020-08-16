import React, {useState} from 'react';
import './style.css';
import axios from 'axios';
import M from 'materialize-css';
import {useHistory} from 'react-router-dom';

// import {Link} from 'react-router-dom';

const Signup  = ()=>{
    const history = useHistory();
    const [email, emailState] = useState();
    const [name, nameState] = useState();
    const [password, passwordState] = useState();
    const signUp = () =>{
        axios.post('http://localhost:9000/signup', {email, name, password})
        .then((res)=>{
            console.log(res)
            let data = res.data;
            if(data.message){
                M.toast({html: data.message})
            }else{
                M.toast({html: data.message})
                history.push('/')
            }
        })
    }

    
    return(
        <div className="cards">
            <input type="text" className="inputt" value={email} placeholder="Email" onChange={(e)=>emailState(e.target.value)}/><br/>
            <input type="text" className="inputt" value={name} placeholder="Username" onChange={(e)=>nameState(e.target.value)}/><br/>
            <input type="password" className="inputt" value={password} placeholder="Password" onChange={(e)=>passwordState(e.target.value)}/><br/>
            <button onClick={()=> signUp()}>Signup</button>
        </div>
    )
}

export default Signup;