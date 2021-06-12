const fs = require('fs')
const http = require('http')
const socketio = require('socket.io')
var mongoose= require('mongoose')

//mongoose.connect('mongodb://localhost/usernames')

//Teacher=require('./models/teacher')

//mongoose.connect('mongodb://localhost/students')


ID=require('./models/id2')
CLASS=require('./models/class')

const url=""
mongoose.connect(url)


//mongoose.connect('mongodb://localhost/usernames')

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

const getMarksByUsernamme = (username,id1)=>{
	ID.getMarks(username,(err,id)=>{
		if (err) {
			console.log("Error")
		}
		else{
			//console.log(username)
			//console.log(id[0]['Marks'])
			id=id[0]['Marks']
			temp={}
			for (var i=0;i<id.length;i++){
				if (!(id[i]['subject'] in temp)){
					temp[id[i]['subject']]={}
				}
				if (!(id[i]['month'] in temp[id[i]['subject']])){
					temp[id[i]['subject']][id[i]['month']]={}
				}
				temp[id[i]['subject']][id[i]['month']][id[i]['name']]={'name':id[i]['name'],'total':id[i]['total'],'recieved':id[i]['obt'],'mean':id[i]['mean'],'remarks':'Good'}
			}
			//console.log(temp)
			io.to(id1).emit("marksHere",temp)
		}
	})
}
const enterMarks = (username,marks,total1,mean1,compName,month1,subject1)=>{
	ID.addMarks(username,{'subject':subject1,'month':month1,'name':compName,'obt':marks,'total':total1,'mean':mean1},()=>{
		console.log("marks added")
	})
}
//enterMarks("19100136","16","25","12","Quiz2","January 2018","Physics")
//getMarksByUsernamme("19100136",34343)

// enterMarks("19100136","18","20","15","Quiz","January 2018","Biology")
// enterMarks("19100136","19","20","10","Quiz","January 2018","Art")



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

// createNewParent("19100136","19100136","Zeeshan Sadiq","3","dda@hotmail.com")
// createNewParent("19100078","19100078","Shahzeb Mustafa","3","dda@hotmail.com")
// createNewParent("19100100","19100100","Zainab Agha","3","dda@hotmail.com")


//createNewTeacher("200001","teacher","teacher","Ali","11C","teacher@gmail.com")
//createNewUser("shahzeb","shahzeb","teacher","shahzeb","22"," "," ","shahzeb@gmail.com")
//remarks("19100136","good remark","teacher",1)

const createClass=(grade,classTeacher,rollnoArray)=>{
	CLASS.addClass({'grade':grade,'classTeacher':classTeacher,'students':rollnoArray},()=>{
 		console.log('class added')
	})

}

// createClass("1","Zainab",[])
// createClass("2","Amber",[])
// createClass("3","Sana",[])
// createClass("4","Rashna",[])
// createClass("5","Bizzah",[])


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
const getStudentsbyClassT = (id,grade)=>{
	CLASS.getStudents(grade,function(err,rollnoArray){
		if (err){
			console.log('Error')
		}
		else{
			rollnoArray=rollnoArray[0]
			rollnoArray=rollnoArray['students']
			//console.log(rollnoArray)

			io.to(id).emit("stListTeacher",rollnoArray)
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
const getAllClassesT = id=>{
	CLASS.getClass(function(err,classes){
		if(err){
			console.log("ERROR")
		}
		else{
			temp=[]
			for (var i=0;i<classes.length;i++){
				temp.push(classes[i]['grade'])
			}
			io.to(id).emit("recieveClassesTeacher",temp)

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
		for (var i=0;i<data[0].length;i++){
			if (data[0][i]['att']=='A'){
				months=['January','February','March','April','May','June','July','August','September','October','November','December']
				//console.log(Number(data[1].substring(3,2)))
				addAbsenceToUser(data[0][i]['rNumber'],months[Number(data[3]+data[4])-1]+"-2018",Number(data[1]+data[2]))
				//console.log(data[0][i]['rNumber'],months[Number(data[3]+data[4])]+"-2018",Number(data[0]+data[1]))
			}
		}
		//console.log(data[0][0]['rNumber'],months[Number(data[3]+data[4])]+"-2018",Number(data[1]+data[2]))
		//console.log(Number(data[1]+data[2]))
		//console.log("done")
		//console.log(Number(data[1].substring(3,2)))

		//console.log("rcvd",data)
		//////////////////////////////////////////////////////////////////////////////// 
	})

	socket.on("getClasses",()=>{
		getAllClasses(socket.id)
		
	})

	socket.on("getClassesTeacher",()=>{
		getAllClassesT(socket.id)
		
	})
	socket.on("giveStu",data=>{
		getStudentsbyClass(socket.id,data)
			
	})
	socket.on("giveStuTeacher",data=>{
		getStudentsbyClassT(socket.id,data)
			
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
	socket.on("getMarks",userN=>{
		getMarksByUsernamme(userN,socket.id)
	})

})
server.listen(8000,()=> console.log('Started...'))

