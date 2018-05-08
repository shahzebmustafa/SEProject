const fs = require('fs')
const http = require('http')
const socketio = require('socket.io')
var mongoose= require('mongoose')

//mongoose.connect('mongodb://localhost/usernames')

//Teacher=require('./models/teacher')

//mongoose.connect('mongodb://localhost/students')


ID=require('./models/id2')
CLASS=require('./models/class')


mongoose.connect('mongodb://localhost/usernames')


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


const remarks = (toUsername,remark,from,good)=>{
	ID.sendRemarks(toUsername,remark,from,good,()=>{
		console.log("remark sent")
	})
} 

const createNewUser = (username,password,mode,name,age,classEnrolled,classTeaching,email)=>{
	ID.addID({'username':`${username}`,'password':`${password}`,'mode':`${mode}`,'name':`${name}`,'age':`${age}`,'classEnrolled':`${classEnrolled}`,'classTeaching':`${classTeaching}`,'email':`${email}`},()=>{
		console.log("user added")
	})
}
//createNewUser("shahzeb","shahzeb","teacher","shahzeb","22"," "," ","shahzeb@gmail.com")
//remarks("19100136","good remark","teacher",1)

const createClass=(grade,classTeacher,rollnoArray)=>{
	CLASS.addClass({'grade':grade,'classTeacher':classTeacher,'students':rollnoArray},()=>{
 		console.log('class added')
	})

}

const addStudentToClass=(className,rollno)=>{
	CLASS.addStudent(className,rollno,()=>{
		console.log('student added')
	})
}
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

const getStudentsbyClass = (grade)=>{
	CLASS.getStudents(grade,function(err,rollnoArray){
		if (err){
			console.log('Error')
		}
		else{
			rollnoArray=rollnoArray[0]
			rollnoArray=rollnoArray['students']
			console.log(rollnoArray)
		}
	})
}
//addStudentToClass('11C','1910004')
//getStudentsbyClass('11C')

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
	socket.on("submit_remarks",data=>{
		console.log("recived remarks for")
		console.log(data[1])
		remarks(data[1],data[2],data[0])
		
	})
	socket.on("get_remarks",data=>{
		console.log("request for remarks sent ",data)
		getRemarks(data,socket.id)
		
	})
	socket.on("get_notifications",data=>{
		console.log("request for Notifications sent ",data)
		getNotification(data,socket.id)
		
	})
})
server.listen(8000,()=> console.log('Started...'))

