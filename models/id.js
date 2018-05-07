var mongoose=require('mongoose');

var classes=mongoose.Schema({
	grade:{
		type: String,
		require:true
	},
	classTeacher:{
		type: String,
		require:true
	},
	students:[{
		rollnumber: String
	}]
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