const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/instaclone', {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(()=> console.log('MongoDB Connected'))
    .catch((err)=> console.log('Error occured connecting MongoDB', err))