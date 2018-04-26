const fs = require('fs')
const http = require('http')
const socketio = require('socket.io')
var mongoose= require('mongoose')

//mongoose.connect('mongodb://localhost/usernames')

//Teacher=require('./models/teacher')

//mongoose.connect('mongodb://localhost/students')


ID=require('./models/id2')

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

const remarks = (toUsername,remark,from)=>{
	ID.sendRemarks(toUsername,remark,from,()=>{
		console.log("remark sent")
	})
} 

const sendUsernamePassword = (u,p,callback)=>{
	var check=0
	ID.getUserByUsername(u,function(err,id){
		if(err){
			console.log('NOT FOUND')
			//throw err;
		}
		//console.log('here2')
		if(id.length==1){
			if (id[0].password==p){
				console.log('in')
				check=1
				callback(1)

			}
			else
				callback(0)
		}
		else
			callback(0)
	})
}

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
		sendUsernamePassword(data[0],data[1],function(i){
			if(i==1){			// match
				io.to(socket.id).emit("auth_passed")
			}
			else{				// mismatch
				io.to(socket.id).emit("auth_failed")
			}
		})
	})
	socket.on("submit_remarks",data=>{
		console.log("recived remarks for")
		console.log(data[1])
		remarks(data[1],data[2],data[0])
		
	})
})
server.listen(8000,()=> console.log('Started...'))

