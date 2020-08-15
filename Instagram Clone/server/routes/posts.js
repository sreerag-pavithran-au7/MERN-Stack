const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const Post = require('../models/posts');
const requireLogin = require('../middlewares/require');



router.post('/', requireLogin, (req, res, next)=>{
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
})

module.exports = router;