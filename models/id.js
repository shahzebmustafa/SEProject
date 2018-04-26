var mongoose=require('mongoose');

var idSchema=mongoose.Schema({
	username:{
		type: String,
		require:true
	},
	password:{
		type: String,
		require:true
	}
})

var ID = module.exports = mongoose.model('ID',idSchema);


module.exports.getID = function(callback, limit){
	ID.find(callback).limit(limit);
}


module.exports.getUserByUsername = function(userN,callback){
	ID.find({'username': `${userN}`},callback);
}


module.exports.addID = function(id, callback){
	ID.create(id,callback);
}