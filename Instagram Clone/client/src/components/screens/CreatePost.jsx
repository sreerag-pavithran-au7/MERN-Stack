import React from 'react';

const CreatePost = ()=>{
    return(
        <div className="card input-field auth-card">
        <h1 className="title-name">BeeGram</h1>
            <input type="text" placeholder="Post Title"/>
            <input type="text" placeholder="Post Body"/>
            <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Picture</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <br/>
            <button className="waves-effect waves-light btn blue">Publish</button>
        </div>
    )
}

export default CreatePost;