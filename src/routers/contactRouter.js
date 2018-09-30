const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const Groups = require('../models/groups')

//GET TO LOCALHOST SERVER

router.get('/contacts', function(req, res){
	Contact.find()
	.populate('groups', 'name')
	.then(function(result){
		res.send(result);
	})
});

router.get('/contacts/:id', function(req, res){
	Contact.findOne({_id :req.params.id}).then(function(result){
		res.send(result);
	})
})

router.post('/contacts', function(req, res, next){
	const {name, phonenumber, groupName,Imageuri, status, gender} = req.body;
	
	Contact.create(req.body)
	.then(function(contactSaved){ //CREATE CONTACT DAN DAPAT ID DARI CONTACT NYA
		res.send(contactSaved);

		// Groups.findOne({name: groupName}).then(function(founded){ ////CARI DATA SESUAI NAMA DARI GRUP DAN DAPAT DATANYA
		// 	Groups.update({_id: founded._id}, {$push : {contacts : contactSaved._id}}) //
		// 	.then(function(result){
		// 		Contact.update({_id:contactSaved._id}, {$push : {groups : founded._id}})
		// 		.then(function(result){
		// 			res.send(result)
		// 		})
		// 	})
		// })
		// .catch(function(createNew){
		// 	Groups.create({name : groupName, contacts : contactSaved._id}).then(function(created){
		// 		Contact.update({_id:contactSaved._id}, {$push : {groups : created._id}}).then(function(updated){
		// 			res.send(updated)
		// 		})
		// 	})
		// })
	})
});


router.put('/contacts/:id', function(req, res){
		Contact.findOneAndUpdate({_id: req.params.id}, {$set:req.body}, {new: true}, function(err, result){
		    if(err){
		        console.log(result);
		    }

		    res.send(result)
		});
	// 	Contact.findOneAndUpdate({_id: req.params.id}, req.body).then(function(result){
	// 		Contact.findOne({_id: req.params.id}).then(function(hasil){
	// 			res.send(hasil)
	// 		})
	// });
});

router.delete('/contacts/:id', function(req, res){
	Contact.findOneAndRemove({_id: req.params.id}).then(function(removed){
		res.send(removed)
		Groups.update({_id: removed.groups[0]}, {$pull: {contacts : removed._id}}).then(function(result){
			res.send(result)
		})
		
	});
});


module.exports = router;