require('dotenv').config();
require('./strategies/discord')
const express = require('express');
const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 3002;
const routes = require('./routes');
const mongoose = require('mongoose');
const session = require('express-session');
const Store = require('connect-mongo');
const cors = require('cors');

mongoose.connect('mongodb://localhost/dashy',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials:true
}))

app.use(session({
    secret: 'secret',
    cookie:{
        maxAge: 60000*60*24
    },
    resave: false,
    saveUninitialized:false,
    store: new Store({mongoUrl:'mongodb://localhost/dashy'})
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', routes);

app.listen(PORT, ()=> console.log(`Running on port ${PORT}`));