const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema ({
	name : {
		type : String,
		required : true
	},
	imageUri : {
		type : String,
		default : 'https://2.bp.blogspot.com/--0g-z78nUEk/Ws2ME7fuZfI/AAAAAAAAB-w/SvUgTcfHtqEnUNGNIdHLr2cuADvDc7f5ACLcBGAs/s320/jasa%2Bdesain%2Blogo%2B%25282%2529.png'
	},
	contacts : [{
		type: Schema.ObjectId,
		ref: 'Contact'
	}]
});

const Groups = mongoose.model('Group', GroupSchema);

module.exports = Groups;