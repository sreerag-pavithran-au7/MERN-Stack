const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const requireLogin = require('../middlewares/require');
const Post = require('../models/posts');

let secret = '5a4sd54d1sd@4d23s4d%/6s4';

router.get('/protected', requireLogin, (req, res, next)=>{
    res.send('Hello Protected USER')
})

router.get('/', (req, res, next)=>{
    res.send('Hello')
});

router.post('/signup', (req, res, next)=>{
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.json({
            error: 'Please add all fields'
        })
    }
    User.findOne({email: email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error: 'User already Exists with this Email'})
        }
        bcrypt.hash(password, 12)
        .then(hashedpassword=>{
            const user = new User({
                email, password:hashedpassword, name
            })
            user.save()
            .then(user=>{
                res.json({message: 'Saved Sucessfully'})
            })
            .catch(error=>{
                console.log('Error Adding User', error)
            })
        })
    })
    .catch(err=>{
        console.log(err)
    })
});

router.post('/signin', (req, res, next)=>{
    const { email, password } = req.body;
    if(!email || !password ){
        res.status(422).json({
            error: 'Please add all fields'
        })
    }
    User.findOne({email: email})
    .then(savedUser=>{
        if(!savedUser){
            res.json({message: 'Invalid Email or Password'})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message: 'Successfully Signed in'})
                const token = jwt.sign({
                    _id: savedUser._id
                }, secret)
                res.json({ token: token})

            }else{
                res.json({message: 'Invalid Email or Password'})
            }
        })
        .catch(err=> console.log(err))
    })
})

router.post('/createpost', requireLogin, (req, res, next)=>{
    const { title, body } = req.body;
    if(!title || !body){
        return res.status(422).json({error: 'Please Add all Fields'})
    }

    console.log(req.user)

    req.user.password = undefined;
    
    const post = new Post({
        title,
        body,
        postedBy: req.user
    })
    post.save()
    .then(result =>{
        res.json({post: result })
    })
    .catch(err=>{
        console.log(err)
    })
});

router.get('/allposts', (req, res, next)=>{
    Post.find()
    .populate("postedBy", "_id name")
    .then(posts=>{
        res.json({post: posts})
    })
    .catch(err=> console.log(err))
});

router.get('/myposts', require, (req, res, next)=>{
    Post.find({ postedBy: req.user._id})
    .populate("postedBy", "_id name")
    .then(mypost=>{
        res.json({ mypost })
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router;