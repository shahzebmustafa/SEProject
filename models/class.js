var mongoose=require('mongoose');

var classSchema=mongoose.Schema({
	grade:{
		type: String,
		require:true
	},
	classTeacher:{
		type: String,
		require:true
	},
	students:[
		String
	]
})

var Class = module.exports = mongoose.model('CLASS',classSchema);


module.exports.getClass = function(callback, limit){
	CLASS.find(callback).limit(limit);
}


module.exports.getClassByGrade = function(userN,callback){
	CLASS.find({'grade': `${userN}`},callback);
}


module.exports.addClass = function(id, callback){
	CLASS.create(id,callback);
}

module.exports.addStudent = function(grade,rollno,callback){
	CLASS.update({grade: `${grade}`},{$push:{students:rollno}},callback)
}

module.exports.getStudents = function(grade,callback){
	CLASS.find({'grade':`${grade}`},{'students':1,_id:0},callback)
}