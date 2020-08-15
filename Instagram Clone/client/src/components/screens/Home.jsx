import React from 'react';

const Home = ()=>{
    return(
        <div className="home">
            <div className="card home-card">
                <h5>Sandra</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Post"/>
                </div>
                <div className="card-content">
                <span class="material-icons" style={{color:"red"}}>favorite</span>
                    <h5>Title</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, earum.</p>
                    <input type="text" placeholder="Add a comment"/>
                </div>
            </div>

            <div className="card home-card">
                <h5>Sandra</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Post"/>
                </div>
                <div className="card-content">
                <span class="material-icons" style={{color:"red"}}>favorite</span>
                    <h5>Title</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, earum.</p>
                    <input type="text" placeholder="Add a comment"/>
                </div>
            </div>
        </div>

        
    )
}

export default Home;