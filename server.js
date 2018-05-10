const fs = require('fs')
const http = require('http')
const socketio = require('socket.io')
var mongoose= require('mongoose')

//mongoose.connect('mongodb://localhost/usernames')

//Teacher=require('./models/teacher')

//mongoose.connect('mongodb://localhost/students')


ID=require('./models/id2')
CLASS=require('./models/class')

const url="mongodb+srv://moeed:group_22@cluster0-c6wha.mongodb.net/group_22"
mongoose.connect(url)


let check=0
let dict={}
let clients=[]
let spec=[]
let result=""
let games=[]


// ID.addID({username:"19100136",password:"lahore",mode:"student",name:"Zeeshan Sadiq Khan",age:"22",classEnrolled:"10C",email:"sadiq_zeeshan@hotmail.com"},()=>{
// 	console.log("added.")
// })

//ID.sendRemarks("19100136","Performing very well!2","Teacher1",()=>{
//	console.log("added remark.")
//})


// ID.addAbsence("200112","May-2018",36,()=>{
// 	console.log("absence added")
// })

// ID.getAtt("2001123",(err,id)=>{
// 	if (err) {
// 		console.log("error")
// 	}
// 	else {
// 		console.log("att",id[0]["attendance"])

// 		id=id[0]["attendance"]
// 		//console.log(id)
// 		var check=0
// 		for (var i=0;i<id.length;i++){
// 			if(id[i]["month"]=="May-2018"){
// 				id[i]["absences"].push(27)
// 				check=1
// 				break
// 			}
// 		}
// 		id.push({})
// 		if (check==0) {
// 			id[id.length-1]["month"]="May-2018"
// 			id[id.length-1]["absences"]=[]
// 			id[id.length-1]["absences"].push(29)
// 		}
// 		ID.addAbsence("2001123",id,()=>{
// 			console.log("doneeee")
// 		})
// 		//console.log(id)
// 	}
// })
//module.exports.addAbsence = function(username,month1,date,callback){

//ID.addAbsence("2001123","May-2018",24,()=>{
//	console.log("donee")
//})

const addAbsenceToUser = (username,month,date)=>{
	ID.addAbsence(username,month,date,()=>{
		console.log("absence added")
	})
}


const getAttendance = (username,month,id2)=>{
	ID.getAtt(username,(err,id)=>{
		if (err) {
			console.log("Error")
		}
		else {
			id=id[0]["attendance"]
			temp=[]
			for (var i=0;i<id.length;i++){
				if (id[i]["month"]==month) {
					temp.push(`${id[i]["absences"][0]}`)
				}
			}
			console.log(temp) /// temp has absences
			io.to(id2).emit("takeAtt",temp)
		}
	})
}
//getAttendance("2001123","May-2018")

const remarks = (toUsername,remark,from,good)=>{
	ID.sendRemarks(toUsername,remark,from,good,()=>{
		console.log("remark sent")
	})
} 

const createNewTeacher = (username,password,name,classTeaching,email)=>{
	ID.addID({'username':`${username}`,'password':`${password}`,'mode':'teacher','name':`${name}`,'classTeaching':`${classTeaching}`,'email':`${email}`},()=>{
		console.log("user added")
	})
}

const addStudentToClass=(className,name,rollno)=>{
	CLASS.addStudent(className,name,rollno,()=>{
		console.log('student added')
	})
}

const createNewParent = (username,password,name,classEnrolled,email)=>{
	addStudentToClass(classEnrolled,name,username)
	ID.addID({'username':`${username}`,'password':`${password}`,'mode':'student','name':`${name}`,'classEnrolled':`${classEnrolled}`,'email':`${email}`},()=>{
		console.log("user added")
	})
}

const createNewAdmin = (username,password,name)=>{
	//addStudentToClass(classEnrolled,name,username)
	ID.addID({'username':`${username}`,'password':`${password}`,'mode':'admin','name':`${name}`},()=>{
		console.log("user added")
	})
}
// createNewAdmin("rahij","rahij","rahij")
//ID.addID({'username':'rahij','password':'rahij','mode':'admin'}()=>{})
//createNewParent("2001123","123","xyz","1","dda@hotmail.com")

//createNewParent("sample","sample","xyz","1","dda@hotmail.com")

//createNewTeacher("200001","teacher","teacher","Ali","11C","teacher@gmail.com")
//createNewUser("shahzeb","shahzeb","teacher","shahzeb","22"," "," ","shahzeb@gmail.com")
//remarks("19100136","good remark","teacher",1)

const createClass=(grade,classTeacher,rollnoArray)=>{
	CLASS.addClass({'grade':grade,'classTeacher':classTeacher,'students':rollnoArray},()=>{
 		console.log('class added')
	})

}



//addStudentToClass("11C","Rahij Gillani","19100078")
//addStudentToClass("11C","Shazeb Mustafa","19100004")


const notifications = (toUsername,remark)=>{
	ID.sendNotification(toUsername,remark,()=>{
		console.log("notification sent")
	})	
}
//notifications("19100136","fee challan due")

const sendUsernamePassword = (u,p,callback)=>{
	var check=0
	ID.getUserByUsername(u,function(err,id){
		if(err){
			console.log('NOT FOUND')
			//throw err;
		}
		//console.log('here2')
		if(id.length==1){
			//console.log(id)
			if (id[0].password==p){
				//console.log('in')
				check=1
				if(id[0].mode=="student"){
					callback(1,id[0].username)
				}
				else if (id[0].mode=="admin"){
					callback(2,id[0].username)
				}
				else if(id[0].mode=="teacher"){
					callback(3,id[0].username)
				}
			}
			else
				callback(0,0)
		}
		else
			callback(0,0)
	})
}

const getStudentsbyClass = (id,grade)=>{
	CLASS.getStudents(grade,function(err,rollnoArray){
		if (err){
			console.log('Error')
		}
		else{
			rollnoArray=rollnoArray[0]
			rollnoArray=rollnoArray['students']
			//console.log(rollnoArray)

			io.to(id).emit("stList",rollnoArray)
		}
	})
}
//tempList=[]
const broadcastNotification = (grade,notification)=>{
	CLASS.getStudents(grade,function(err,rollnoArray){
		if (err){
			console.log('Error')
		}
		else{
			//tempList=[]
			rollnoArray=rollnoArray[0]
			rollnoArray=rollnoArray['students']
			console.log(rollnoArray)
			for(var i=0;i<rollnoArray.length;i++){
				notifications(rollnoArray[i]["rNumber"],notification)
			}

			//io.to(id).emit("stList",rollnoArray)
		}
	})
}
//addStudentToClass('11C','1910004')
//getStudentsbyClass('11C')


const getAllClasses = id=>{
	CLASS.getClass(function(err,classes){
		if(err){
			console.log("ERROR")
		}
		else{
			temp=[]
			for (var i=0;i<classes.length;i++){
				temp.push(classes[i]['grade'])
			}
			io.to(id).emit("recieveClasses",temp)

		}
	})
}
//getAllClasses()

const getRemarks = (username,id)=>{
	ID.getRemarks(username,function(err,remarksArray){

		if (err){
			console.log('NOT FOUND')
		}
		else{
			//remarksArray.map(i=>console.log(i))
			remarksArray=remarksArray[0]
			remarksArray=remarksArray['remarks']
			newArr=[]
			for (var i=0;i<remarksArray.length;i++){
				newArr.push({})
				newArr[i]["date"]=remarksArray[i]["create_date"].toDateString().substring(4)
				newArr[i]["remark"]=remarksArray[i]["remark"]
				newArr[i]["good"]=remarksArray[i]["good"]
				newArr[i]["read"]=remarksArray[i]["read"]
				newArr[i]["from"]=remarksArray[i]["from"]				
			}
			io.to(id).emit("recieve_remarks",newArr)
		}
	})
}
//getRemarks("19100136")
const getNotification = (username,id)=>{
	ID.getNotifications(username,function(err,notificationsArray){

		if (err){
			console.log('NOT FOUND')
		}
		else{
			//notificationsArray.map(i=>console.log(i))
			notificationsArray=notificationsArray[0]
			notificationsArray=notificationsArray['notifications']
			newArr=[]
			for (var i=0;i<notificationsArray.length;i++){
				newArr.push({})
				newArr[i]["date"]=notificationsArray[i]["create_date"].toDateString().substring(4)
				newArr[i]["notification"]=notificationsArray[i]["notification"]
				newArr[i]["read"]=notificationsArray[i]["read"]

			}
			io.to(id).emit("recieve_notifications",newArr)


			//console.log(notificationsArray) //////////////////////////// this is the remarks array of the user
			//id.map(i=>console.log(i))
		}
	})
}

//getNotification('19100136')



const readfile = f => new Promise((resolve,reject)=>
	fs.readFile(f,(e,d)=>e?reject(e):resolve(d)))

const server = http.createServer(async (req,resp)=>{
	//console.log(req.url)
	try
	{
	resp.end(await readfile(req.url.substr(1)))
	console.log(req.url)
	}
	catch(e)
	{
		console.log("err ",req.url)
	}
	})
const io= socketio(server)
io.sockets.on('connection',socket=>{ 

	socket.on('authenticate',data =>{
		sendUsernamePassword(data[0],data[1],function(i,j){
			if(i==1){			// match
				io.to(socket.id).emit("auth_parent",j)
			}
			else if(i==2){				// mismatch
				io.to(socket.id).emit("auth_admin")
			}
			else if(i==3){
				io.to(socket.id).emit("auth_teacher",j)
			}
			else {
				io.to(socket.id).emit("auth_failed")
			}
		})
	})
	socket.on("submit_noti",data=>{
		console.log("recived notifications for",data[1])
		//console.log(data[1])
		//notifications(data[0],data[1])
		//rem,curr_cl.substring(6)
		broadcastNotification(data[1],data[0])
	})
	socket.on("submit_remarks",data=>{
		console.log("recived remarks for")
		console.log(data[1])
		remarks(data[1],data[2],data[0],data[3])
		
	})
	socket.on("get_remarks",data=>{
		console.log("request for remarks sent ",data)
		getRemarks(data,socket.id)
		
	})
	socket.on("get_notifications",data=>{
		console.log("request for Notifications sent ",data)
		getNotification(data,socket.id)
		
	})
	socket.on("submit_att",data=>{
		//socket.emit("submit_att",[students,attDate])
		console.log("rcvd",data[0])
		//////////////////////////////////////////////////////////////////////////////// 
	})

	socket.on("getClasses",()=>{
		getAllClasses(socket.id)
		
	})
	socket.on("giveStu",data=>{
		getStudentsbyClass(socket.id,data)
			
	})
	socket.on("createStu",data=>{
		createNewParent(data[0],data[1],data[2],data[3],data[4])
		
	})
	socket.on("createTea",data=>{
		createNewTeacher(data[0],data[1],data[2],data[3],data[4])
		
	})
	socket.on("getAtt",data=>{
		getAttendance(data[2],data[0]+"-"+data[1],socket.id)
	//socket.emit("getAtt",[month_name,year,userN])
		
	})
})
server.listen(8000,()=> console.log('Started...'))

