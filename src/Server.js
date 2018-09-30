const express = require('express'); //import package express
const bodyParser = require('body-parser');
const app = express();
const user = require('./routers/user');
const contactRouter = require('./routers/contactRouter');
const groupRouter = require('./routers/groupRouter'); //import routers
const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/db_Contact');
mongoose.Promise = global.Promise;

//inisialisasi bodyParser
app.use(bodyParser.json());

app.use('/api',contactRouter); // use routers
app.use('/api',groupRouter);
app.use('/api',user);

//error
app.use(function(err, req, res, next){
	res.send({err: err.message})
})

app.listen(process.env.port || 5000, function(){
	console.log('Express app now');
})