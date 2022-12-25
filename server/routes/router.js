const express = require('express')
const route = express.Router()
const services = require('../services/render')   //imported RENDER.JS file as services
const controller = require('../controller/controller');

route.get('/', services.homeRoute);

route.get('/add_user',services.add_user);

route.get('/update-user',services.update_user);



//api routes 
route.post('/api/users',controller.create); //working data creation 
route.get('/api/users',controller.find);  //working fetch all users data
route.put('/api/users/:id',controller.update);  //
route.delete('/api/users/:id',controller.delete);

//ager api route pe delete req aayi to contro.delete fn ko run  karo

exports.module = route //exporting route as module & getting in server.js as app.use('/',require('./ser/routes/routee).module)



/*


exports.homeRoute = (req,res) => {
    res.render('index');
}


exports.add_user = (req,res)=>{  //add user page
    res.render('add_user')
}



exports.update_user = (req,res)=>{
    res.render('update_user')
}

*/