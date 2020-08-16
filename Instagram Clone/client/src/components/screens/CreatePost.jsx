import React, {useState} from 'react';
import axios from 'axios';
import M from 'materialize-css';
import {useHistory} from 'react-router-dom';
const CreatePost = ()=>{
    const history = useHistory();
    const [title, titleState] = useState("");
    const [body, bodyState] = useState("");
    const [file, fileState] = useState("");
    const [url, setUrl] = useState("");

    

    const PostDetails = async()=>{
        let picUrl ;
        const data = new FormData();
        data.append("file", file)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "sreerag")
        axios.post('https://api.cloudinary.com/v1_1/sreerag/image/upload', data)
        .then(response=>{
            const data = response.data;
            setUrl(data.secure_url);
            picUrl = data.secure_url 
            console.log(data);
        })

        await axios.post('/http://localhost:5000/createpost', {
            title, body, pic:picUrl
        })
        .then(res=>{
            if(res.data.error){
                M.toast({html: res.data.error, classes: "#c62828 red darken-3"})
            }else{
                M.toast({html: "Logged in Successfully",  classes: "#00c853 green accent-4"})
                history.push('/');
            }
        })
    }


    return(
        <div className="card input-field auth-card">
        <h1 className="title-name">BeeGram</h1>
            <input type="text" placeholder="Post Title" value={title} onChange={(e)=> titleState(e.target.value)}/>
            <input type="text" placeholder="Post Body" value={body} onChange={(e)=> bodyState(e.target.value)}/>
            <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Picture</span>
                    <input type="file" onChange={(e)=> fileState(e.target.files[0]) }/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <br/>
            <button className="waves-effect waves-light btn blue" onClick={()=> PostDetails()}>Publish</button>
        </div>
    )
}

export default CreatePost;