import React from 'react';
import './style.css';

import axios from 'axios';

class Home extends React.Component {
    constructor(){
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:9000/viewall`)
          .then(res => {
            const posts = res.data.posts;
            this.setState({ posts });
            console.log(posts)
          })
      }

    render(){
        return(
            <div >
            {
                this.state.posts.map((post)=>(
                    <div className="cards">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <p>Created by: {post.owner}</p><p>Date: {post.createdAt}</p>
                    </div>
                   
                ))
            }

            </div>
        )
    }
}

export default Home;