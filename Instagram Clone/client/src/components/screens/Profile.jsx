import React from 'react';

const Profile = ()=>{
    return(
        <div style={{maxWidth: "550px", margin: "10px auto"}}>
            <div style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "18px 0px",
            borderBottom: "1px solid #adadad"
        }}>
                <div>
                    <img src="https://images.unsplash.com/photo-1578635374554-b07c9b1619b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Profile" style={{width:"160px", height:"160px", borderRadius: "100px"}}/>
                </div>
                <div>
                    <h4>Sandra</h4>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "108%"
                    }}>
                        <h6>30 Posts</h6>
                        <h6>30 Followers</h6>
                        <h6>30 Following</h6>
                    </div>
                </div>
            </div>

            <div className="gallery">
                    <img className="item" src="https://images.unsplash.com/photo-1554652297-6e7a24cf8fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Post"/>
                    <img className="item" src="https://images.unsplash.com/photo-1554652297-6e7a24cf8fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Post"/>
                    <img className="item" src="https://images.unsplash.com/photo-1554652297-6e7a24cf8fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Post"/>
                    <img className="item" src="https://images.unsplash.com/photo-1554652297-6e7a24cf8fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Post"/>
                    <img className="item" src="https://images.unsplash.com/photo-1554652297-6e7a24cf8fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Post"/>
                    <img className="item" src="https://images.unsplash.com/photo-1554652297-6e7a24cf8fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Post"/>

            </div>
        </div>
    )
}

export default Profile;