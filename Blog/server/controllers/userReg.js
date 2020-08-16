const User = require('../models/user.model');
const Post = require('../models/posts.model');

let register = (req, res, next)=>{
    const {email, name, password} = req.body;

    if(!email || !name || !password){
        return res.json({message: 'Please fill all fields'})
    }

    User.findOne({email: email})
    .then((checkUser)=>{
        if(checkUser){
            return res.json({message: 'User already exists'})
        }
        let user = new User({
            email, name, password
        })
        user.save()
        .then(()=>{
            res.json({message: 'User Added Successfully'})
        })
        .catch((err)=> console.log(err))
    })
}

let login = (req, res, next)=>{
    const {email, password} = req.body;

    if(!email || !password){
        return res.json({message: 'Please fill all fields'})
    }

    User.findOne({email:email})
    .then((user)=>{
        if(user.password == password){
            let userData = user.name;
            res.cookie('User', userData)
            res.json({message: 'Logged in successfully', user: userData})
        }else{
            res.json({message: 'Please check login credentials'})
        }
    })
}

let createPost = (req, res, next)=>{
    const {title, body} = req.body;
    if(!title || !body){
        return res.json({message: 'Please fill all fields'})
    }

    let user = req.body.owner;
    let post = new Post({
        title: req.body.title,
        body: req.body.body,
        owner: user,
        createdAt: new Date().toLocaleString()
    })
    post.save()
    .then((response)=>{
        res.json({message: 'Post Added'})
    })
    .catch(err=> console.log(err));
    
}

let viewAll = (req, res, next)=>{
    Post.find()
    .then((posts)=>{
        res.json({posts: posts})
    })
}

module.exports = {
    register, login, createPost, viewAll
}