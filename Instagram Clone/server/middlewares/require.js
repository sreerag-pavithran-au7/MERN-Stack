const jwt = require('jsonwebtoken');
let secret = '5a4sd54d1sd@4d23s4d%/6s4';
const User = require('../models/user');

module.exports = (req, res, next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({ error: 'You must be logged in' })
    }
    let token = authorization.replace('Bearer ', '')
    jwt.verify(token, secret, (err, payload)=>{
        if(err){
            return res.status(401).json({error: 'You must me logged in'})
        }
        const { _id } = payload
        User.findById(_id).then(userData =>{
            req.user = userData
            next()
        })
    })
}