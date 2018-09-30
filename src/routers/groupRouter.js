const express = require('express');
const router = express.Router();
const Groups = require('../models/groups');
const Contact = require('../models/contact');

router.get('/groups', function(req, res){
	Groups.find()
	.populate('contacts', 'name')
	.then(function(result){
		res.send(result);
	})
});

router.get('/groups/:id', function(req, res){

	Groups.findOne({_id :req.params.id}).then(function(result){
		res.send(result);
	})
})

router.post('/groups', function(req, res, next){
	const {name} = req.body;
	Groups.create(req.body)
		.then(function(result){
			res.send(result);
		})
		.catch(next);
});

router.put('/groups/:id', function(req, res){
	// {contacts: [ghghg,hj]}
	Groups.findOneAndUpdate({_id: req.params.id}, {$push : {contacts : req.body.contacts}}).then(function(result){
		req.body.contacts.forEach(contactId => {
			Contact.update({_id: contactId}, {$push: {groups : [req.params.id]}}).then(function(result){
				res.send(result)
			})	
		})
		
	});
});

router.delete('/groups/:id', function(req, res){
	Groups.findOneAndRemove({_id: req.params.id}).then(function(result){
		res.send(result);
	});
});

module.exports = router;