const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    status:{
        type:String, 
        required:true,
    }
});


const Userdb = mongoose.model('userdb',schema);   //defined a user data base
exports.module = Userdb;  //exported user database will be used in controller.js

//Userdb is a class representing blue print of every document
//to be stored in the mongodb database
