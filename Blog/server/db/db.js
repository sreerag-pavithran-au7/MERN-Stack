const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/reactblog', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log('MongoDB connected'))
    .catch(err=> console.log('Error in DB', err))