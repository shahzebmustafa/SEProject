var mongoose=require('mongoose');

var idSchema=mongoose.Schema({
	
	username:{
		type: String,
		require:true
	},
	
	password:{
		type: String,
		require:true
	},
	
	mode:{
		type: String,
		require:true
	},
	
	name:{
		type: String,
		require:true
	},
	
	age:{
		type: String
	},
	
	classEnrolled:{
		type: String
	},
	
	classTeaching:[{
		type: String
	}],
	
	email:{
		type: String,
		require:true
	},
	
	remarks: [{
		remark: String,
		read: Number,
		from: String
	}],
	
	notifications:[{
		notification: String,
		read:Number
	}],

	result: {{}}
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


module.exports.sendRemarks = function(username,remark,from,callback){
	ID.update({username: `${username}`},{$push:{remarks:{remark:`${remark}`,read:0,from:`${from}`}}},callback)
}

module.exports.getRemarks = function(username,callback){
	ID.find({'username':`${username}`},{'remarks':1,_id:0},callback)
}


module.exports.sendNotification = function(username,remark,callback){
	ID.update({username: `${username}`},{$push:{notifications:{notification:`${remark}`,read:0}}},callback)
}

module.exports.getNotifications = function(username,callback){
	ID.find({'username':`${username}`},{'notifications':1,_id:0},callback)
}