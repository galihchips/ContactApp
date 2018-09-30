const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema ({

	name : {
		type : String,
		required: true
	},
	phonenumber : {
		type : String,
		required: true
	},
	imageUri : {
		type :String,
		default : 'https://thumbs.dreamstime.com/b/ic-ne-de-signe-d-utilisateur-symbole-de-personne-avatar-humain-84519083.jpg'
	},
	status : {
		type : String,
		default : 'Ada'
	},
	groups : [{
		type: Schema.Types.ObjectId,
		ref: 'Group',

	}]
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;