import React, {useState} from 'react';
import './style.css';
import axios from 'axios';

import M from 'materialize-css';
import {useHistory} from 'react-router-dom';

const Post  = ()=>{
    const history = useHistory();
    const [title, titleState] = useState();
    const [body, bodyState] = useState();
    let owner = localStorage.getItem('user');
    const postData = () =>{
        axios.post('http://localhost:9000/add', {title, body, owner})
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
            <input type="text" className="inputt" value={title} placeholder="Title of Post" onChange={(e)=>titleState(e.target.value)}/><br/>
            <input type="text"  className="inputt" value={body} placeholder="Post Content" onChange={(e)=>bodyState(e.target.value)}></input><br/>
            <button onClick={()=> postData()}>Post</button>
        </div>
    )
}

export default Post;