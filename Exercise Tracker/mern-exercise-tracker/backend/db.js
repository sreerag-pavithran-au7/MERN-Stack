const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/merndb', {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(()=> console.log('MongoDB Connected'))
    .catch((err)=> console.log('Error Occured'))