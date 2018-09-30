const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

//GET TO LOCALHOST SERVER
router.post('/users', verifyToken, (req, res) => {
	jwt.verify(req.token, 'secretkey', (err, authData) =>{
		if(err) {
			res.sendStatus(403);
		} else {
			res.send(authData)
		}
	} )
});
router.get('/users', function(req, res){
	User.find()
	.then(function(result){
		res.send(result);
	})
});

router.post('/login', function(req, res){
	const user = {		
		username : req.body.username,
		password : req.body.password
	}

	jwt.sign({user: user}, 'secretkey', (err, token) => {
		res.json({
			token
		})
	})
}); 



function verifyToken(req, res, next) {
	const bearerHeader = req.headers.authorization

	if(typeof bearerHeader !== 'undefined') {
		const bearer = bearerHeader.split (' ');

		const bearerToken = bearer[1];
		req.token = bearerToken;
		next()
	} else {
		res.sendStatus(403);
	}
}
module.exports = router;