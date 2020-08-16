import React, {useState} from 'react';
import './style.css';
import axios from 'axios';

// import {Link} from 'react-router-dom';

const Post  = ()=>{
    const [title, titleState] = useState();
    const [body, bodyState] = useState();
    let owner = "Sreerag"
    const postData = () =>{
        axios.post('http://localhost:9000/add', {title, body, owner})
        .then((res)=>{
            console.log(res)
        })
    }

    
    return(
        <div className="card">
            <input type="text" className="inputt" value={title} placeholder="Title of Post" onChange={(e)=>titleState(e.target.value)}/><br/>
            <textarea cols="30" rows="10" className="inputt" value={body} placeholder="Post Content" onChange={(e)=>bodyState(e.target.value)}></textarea><br/>
            <button onClick={()=> postData()}>Post</button>
        </div>
    )
}

export default Post;