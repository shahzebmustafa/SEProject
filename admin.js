
/*const socket = io()*/
let home="b"
let notifications="b"
let remarks="b"
let manage_acc="b"
let attendance = "b"
let chosen=""
let results = "b"

let firstName=""
let secondName=""
let email_u=""
let grade=""
let pass2=""
let userName=""
let sub=""
let attDate="01/01/2018"

let oldPass = ""
let newPass = ""
let rem_create="none"
accounts = ["Parent", "Teacher"]
dict_removeAcc = {'19100004': {'name': 'Shahzeb Mustafa', 'grade': '7', 'date': '01 October 2004'}}
let classes = ["Class One","Class Two","Class Three","Class Four","Class One","Class Two","Class Three","Class Four"]
removeThis = '19100004'
//let students = [{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'}]
let students = [{'name':'','rNumber':'','att':''}]
//let students=[]
const id_click=()=>{
	
	home="b"
	notifications="b"
	remarks="b"
	manage_acc="b"
	attendance = "b"
	results="b"
}
id_click()
home="c"
chosen="home"
let total_classes_arr=[1,2,3]
socket.on('totalClasses',data=>
{
	total_classes_arr=data
	admin_screen()	
})

socket.on("recieveClasses",data=>{
	classes=data
	admin_screen()
})
socket.on("stList",data=>{
	temp=[]
	for (var i=0;i<data.length;i++){
		temp.push({})
		temp[i]["name"]=data[i]["name"]
		temp[i]["rNumber"]=data[i]["rNumber"]
		temp[i]["att"]="A"
	}

	students=temp
	//console.log(temp,"temp")
	admin_screen()
})
const admin_screen = ()=>{

	var Admin = React.createClass({
	  displayName: "Admin",

	  render: function render() {
		return React.createElement("div",{ id: "admin" },
				React.createElement('div',{id:'home_back'}),
				React.createElement('div',{className:"striptop"},
					React.createElement('text',{className:'acc_set', onClick:ev=>{
						chosen = "accSet"
						admin_screen()
					}},'Account Settings'),
					React.createElement("img",{type:"image",className: "set_pic",src:"\\settings-cog.png"}),
					React.createElement("button",{className:"log_out",onClick:ev=>{
						home="b"
						notifications="b"
						remarks="b"
						manage_acc="b"
						attendance = "b"
						chosen=""
						results = "b"

						firstName=""
						secondName=""
						email_u=""
						grade=""
						pass2=""
						userName=""
						sub=""
						students = [{'name':'','rNumber':'','att':''}]
						rem_create="none"
						login()
					}},"Log out")),
				React.createElement("div",{ id: "sidenav" },
				React.createElement("button",{ className: home ,onClick:ev=>{
					id_click()
					home="c"
					chosen="home"
					admin_screen()
				}},"Home"),
				React.createElement("button",{ className: notifications,onClick:ev=>{
					id_click()
					notifications="c"
					chosen="notifications"
					socket.emit("getClasses")
					admin_screen()
				} },"Notifications"),
			  	React.createElement("button",{ className: remarks,onClick:ev=>{
					id_click()
					remarks="c"
					socket.emit("getClasses")
					chosen="remarks"
					admin_screen()

				} },"Remarks"),
			  	React.createElement("button",{ className: attendance,onClick:ev=>{
					id_click()
					attendance="c"
					socket.emit("getClasses")
					chosen="attendance"
					admin_screen()
				} },"Attendance"),
			  	React.createElement("button",{ className: manage_acc,onClick:ev=>{
					id_click()
					manage_acc="c"
					rem_create="none"
					chosen="manage_acc"
					admin_screen()
				} },"Manage Account")
			  	),choice()
			);
	}
});
	ReactDOM.render(React.createElement(Admin, null), document.getElementById("rahij"));
}



let curr_cl="SELECT CLASS"
let st=[]
let to =""
socket.on('class_students',data=>{
	st=data
	admin_screen()

})

const choice=()=>
{	
	let rem=""
	//console.log("HERE")
	if(chosen=="remarks")
	{
		return React.createElement('div',{className:'remark_body'},
			React.createElement('form',{},
				React.createElement('textarea',{className:"t_area",rows:"5",cols:"50",onChange:ev=>{
					rem=ev.target.value
				}},"Write remarks here..."),
				React.createElement("select",{className:"selectClass"
					,onChange:ev=>{
					
					//console.log(ev.target.value,"changed")
					socket.emit("giveStu",ev.target.value)
					curr_cl="Class "+ev.target.value
				}},
				React.createElement("option",{},curr_cl),
				React.createElement("optgroup",{label:"Classes"},
					classes.map((x,i)=>
						React.createElement("option",{value:x},"Class "+x)	
						)
					)),
				React.createElement("select",{className:"selectStudent",
					onChange:ev=>{
						to=ev.target.value
						//console.log(to,'tatatat')
					}},
					React.createElement("option",{},"SELECT STUDENT"),
					React.createElement("optgroup",{label:"STUDENTS"},
					students.map((x,i)=>
						React.createElement("option",{value:x.rNumber},x.rNumber)	
						)
					)),
				React.createElement("div",{},
					React.createElement("button",{className:"blue_button rem_button", type:"submit",onClick:ev=>{
					ev.preventDefault()

					socket.emit("submit_remarks",["Admin",to,rem,1])
				
					//console.log("RAHIJ",to,rem)//send remarks to server!!!!!!!!!!!!!!
				}},"Send Positive Remark")),
				React.createElement("div",{},
					React.createElement("button",{className:"blue_button rem_button", type:"submit",onClick:ev=>{
					ev.preventDefault()

					socket.emit("submit_remarks",["Admin",to,rem,0])
				
					//console.log("RAHIJ",to,rem)//send remarks to server!!!!!!!!!!!!!!
				}},"Send Negitive Remark"))
				))
	}
	else if(chosen == "home"){
		return React.createElement('div',{className:'admin_home_body'},
			React.createElement('h1',null,'Welcome to Student Progress Portal'),
			React.createElement('div',{className:'admin_profile'},
				React.createElement('h2',null,'Administrator Mode'),
				React.createElement('img',{type:'image',src:'\\css\\admin.jpeg',className:'round'})

			)
		)
	}
	else if(chosen=="notifications")
	{
		return React.createElement('div',{className:'remark_body'},
			React.createElement('form',{},
				React.createElement('textarea',{className:"t_area",rows:"5",cols:"50",onChange:ev=>{
					rem=ev.target.value
				}},"Write notifications here..."),
				React.createElement("select",{className:"selectStudent2"
					,onChange:ev=>{
					curr_cl=ev.target.value
					admin_screen()
				}},
				React.createElement("option",{},curr_cl),
				React.createElement("optgroup",{label:"Classes"},
					React.createElement("option",{value:"All Classes"},"All Classes"),
					classes.map((x,i)=>
						React.createElement("option",{value:"Class "+x},"Class "+x)	
						)
					)),
				React.createElement("div",{},
					React.createElement("button",{className:"blue_button rem_button",name:"send", type:"submit",onClick:ev=>{
					ev.preventDefault()



					socket.emit("submit_noti",[rem,curr_cl.substring(6)] )

					//console.log("here",rem,curr_cl.substring(6))//send remarks to server!!!!!!!!!!!!!!
				}},"Send"))))
	}
	else if(chosen=="attendance")
	{

		return React.createElement('div',{className:'displayPanel'},
			React.createElement('h1',{className:'hTextCenter'},'Attendance'),
			React.createElement('div',{className:'attendancePanel'},
				React.createElement('div',{className:'rno'},
					students.map(s=>{
						return React.createElement('div',{style:{className: 'blackBorder'}},
							React.createElement('text',null,s.rNumber)
						)
					})
				),
				React.createElement('div',{className:'name'},
					students.map(s=>{
						return React.createElement('div',{style:{className: 'blackBorder'}},
							React.createElement('text',{className:'textCenter'},s.name)
						)
					})
				),
				React.createElement('div',{className:'attendance'},
					students.map(s=>{
						return React.createElement('div',{style:{className: 'blackBorder'}},
/*							React.createElement('text',null,s.att),*/
							React.createElement("input",{radio_ch_un:0,id:s.rNumber,type:"radio",onClick:ev=>{
								if(ev.target.radio_ch_un==1){
									ev.target.radio_ch_un=0
									s.att='A'
									document.getElementById(ev.target.id).checked=false
								}
								else{
									ev.target.radio_ch_un=1
									s.att='P'
								}
								/*console.log(students,"hxwig")*/

								
							}})
						)
					})
				)
			),
			React.createElement('div',{className:'attendanceButtons'},
				React.createElement('div',{},
					React.createElement('text',{className:'date'},'Date'),
					React.createElement('br'),
					React.createElement('input',{type:'input',placeholder:'dd/mm/yyyy',className:'dateI',onChange:ev=>{
						attDate=ev.target.value
						//console.log(attDate)
					}})),	
				React.createElement("div",{ className: "dropdown"},
		  			React.createElement("button",{ className: "dropbtn" },"Select Class"),
		  			React.createElement("div",{ className: "dropdown-content" },
		    			classes.map(c =>{
		    				return React.createElement("a",{ href: "#",onClick:ev=>{
		    					socket.emit("giveStu",c)
		    				} },c)
		    			})
		  			)
				),
				React.createElement('br'),
				React.createElement('input',{type:'input',className:'dateI i',placeholder:'dd/mm/yyyy'}),
				React.createElement('br'),
				React.createElement('button',{className:'addHolidayButton'},"Add Holiday"),
				React.createElement('br'),
				React.createElement('button',{className:'addHolidayButton subatt',onClick:ev=>{
					socket.emit("submit_att",[students,attDate[0],attDate[1],attDate[3],attDate[4]])
				}},"Submit")
			)
		)
	}
	else if(chosen=="manage_acc")
	{
		if (rem_create=="none")
		{
		  	return React.createElement('div',{className:"displayBox"},
		  		React.createElement("h1",{className:"manage_acc_head"},"MANAGE ACCOUNTS"),
	  			React.createElement("input",{ type: "Username", className: "addUsername", placeholder: "Username" }),
	  			React.createElement("button", {className: 'removeUserButton', onClick:ev=>{
	              //removeAcc();
	              rem_create="r"
	              admin_screen()

	            }}, "Remove User"),
	  			React.createElement("button", {className: 'createUserButton', onClick:ev=>{
	              rem_create="c"
	              admin_screen()
	            }}, "Create New Student"),
	  			React.createElement("button", {className: 'createUserButton', onClick:ev=>{
	              rem_create="ct"
	              admin_screen()
	            }}, "Create New Teacher")

	  		);
		}
		else if (rem_create=="c"){
			//return create()
			return React.createElement('div',{className:"removeBox"},
					React.createElement('div', {className: "popUp"},
						React.createElement('div',{className:"smallpopUp"},
						React.createElement('text',{className: 'create_h'}, 'Create New Student'),
						React.createElement("img",{type:"image",className: "photo",src:"\\images.png"}),
						React.createElement("button", {className: 'generateButton_photo'}, "Browse"),
						React.createElement('br'),
						React.createElement('input',{ type: "text", className: "form", placeholder: "First Name",onChange:ev=>{
							firstName=ev.target.value
						} }),
						React.createElement('input',{ type: "text", className: "form2", placeholder: "Second Name",onChange:ev=>{
							secondName=ev.target.value
						} }),
						React.createElement('br'),
						React.createElement('input',{ type: "email", className: "form", placeholder: "Email Address",onChange:ev=>{
							email_u=ev.target.value
						} }),
						React.createElement('input',{ type: "text", className: "form2", placeholder: "Grade",onChange:ev=>{
							grade=ev.target.value
						} }),
						React.createElement('br'),
						React.createElement('input',{ type: "text", className: "form5", placeholder: "Username",onChange:ev=>{
							userName=ev.target.value
						} }),
						React.createElement("button", {className: 'generateButton_user'}, "Generate"),
						React.createElement('br'),
						React.createElement('input',{ type: "text", className: "form6", placeholder: "Password",onChange:ev=>{
							pass2=ev.target.value
						} }),
						React.createElement("button", {className: 'generateButton_pass'}, "Generate"),
						React.createElement('br'),
						React.createElement("button", {className: 'generateButton_cre',onClick:ev=>{
							socket.emit("createStu",[userName,pass2,firstName+" "+secondName,grade,email_u])
							id_click()
							manage_acc="c"
							rem_create="none"
							chosen="manage_acc"
							firstName=""
							secondName=""
							email_u=""
							grade=""
							userName=""
							pass2=""
							admin_screen()
						}}, "Create")

						))
					);
		  }
		else if (rem_create=="ct"){
			//return create()
			return React.createElement('div',{className:"removeBox"},
					React.createElement('div', {className: "popUp"},
						React.createElement('div',{className:"smallpopUp"},
						React.createElement('text',{className: 'create_h'}, 'Create New Teacher'),
						React.createElement("img",{type:"image",className: "photo",src:"\\images.png"}),
						React.createElement("button", {className: 'generateButton_photo'}, "Browse"),
						React.createElement('br'),
						React.createElement('input',{ type: "text", className: "form", placeholder: "First Name",onChange:ev=>{
							firstName=ev.target.value
						} }),
						React.createElement('input',{ type: "text", className: "form2", placeholder: "Second Name",onChange:ev=>{
							secondName=ev.target.value
						} }),
						React.createElement('br'),
						React.createElement('input',{ type: "email", className: "form", placeholder: "Email Address",onChange:ev=>{
							email_u=ev.target.value
						} }),
						React.createElement('input',{ type: "text", className: "form2", placeholder: "Grade",onChange:ev=>{
							grade=ev.target.value
						} }),
						React.createElement('br'),
						React.createElement('input',{ type: "text", className: "form", placeholder: "Subject",onChange:ev=>{
							sub=ev.target.value
						} }),
						React.createElement('br'),
						React.createElement('input',{ type: "text", className: "form5", placeholder: "Username",onChange:ev=>{
							userName=ev.target.value
						} }),
						React.createElement("button", {className: 'generateButton_user'}, "Generate"),
						React.createElement('br'),
						React.createElement('input',{ type: "text", className: "form6", placeholder: "Password",onChange:ev=>{
							pass2=ev.target.value
						} }),
						React.createElement("button", {className: 'generateButton_pass'}, "Generate"),
						React.createElement('br'),
						React.createElement("button", {className: 'generateButton_cre',onClick:ev=>{
							socket.emit("createTea",[userName,pass2,firstName+" "+secondName,grade,email_u])
							id_click()
							manage_acc="c"
							rem_create="none"
							chosen="manage_acc"
							firstName=""
							secondName=""
							email_u=""
							grade=""
							sub=""
							userName=""
							pass2=""
							admin_screen()
						}}, "Create")

						))
					);
		  }
		  else if (rem_create=="r"){
		  	return React.createElement('div',{className:"removeBox"},
					React.createElement('div', {className: "popUp"},
						React.createElement('div',{className:"smallpopUp"},
						React.createElement('div',{className:"borderBox"},
							React.createElement('h1', {className: 'borderBox_h'}, 'Student Profile'),
							React.createElement('h1', {className: 'borderBox_name'},  'Name: ' +dict_removeAcc[removeThis].name),
							React.createElement('h1', {className: 'borderBox_grade'},  'Grade: '+dict_removeAcc[removeThis].grade),
							React.createElement('h1', {className: 'borderBox_date'},  'Enrolled: '+dict_removeAcc[removeThis].date)),
						React.createElement('div', {className: 'whiteBox'},
							React.createElement('h1', {className: 'whiteBox_warn'}, 'Are you sure you want to remove this profile from the database?'),
							React.createElement('button',{className: 'removeConfirm', onClick:ev=>{
								chosen = "successR"
								admin_screen()
							}}, 'Continue Removing?'),
							React.createElement('button',{className: 'cancelButton', onClick:ev=>{
								chosen = "manage_acc"
								rem_create = "none"
								admin_screen()
							}}, 'Cancel'))

							)))


		  }
		}



	else if(chosen == "successR"){
		return React.createElement('div',{className:"removeBox"},
			React.createElement('div', {className: "popUp"},
				React.createElement('div',{className:"smallpopUp"},
					React.createElement('h1', {className: "sRemove"}, 'The user has been successfully removed.')
							)))
	}
	else if(chosen == "accSet"){
		return React.createElement('div',{className:"removeBox"},
			React.createElement('div', {className: "popUp"},
				React.createElement('div',{className:"smallpopUp"},
					React.createElement('text',{className: 'account_h'}, 'Change Password'),
					React.createElement('input',{type: 'text',className:'acc_form1',placeholder: 'Enter Old Password', onChange:ev=>{
						oldPass = ev.target.value
					}}),
					React.createElement('input',{type: 'text',className:'acc_form2',placeholder: 'Enter New Password', onChange:ev=>{
						newPass = ev.target.value
					}}),
					
					React.createElement('button',{className: 'submitButton'}, 'Submit')
					
					)
				))
	}
}

/*const get_class_students = num =>{
	return total_classes_arr.map((x,i1)=>
		React.createElement("option",{},i1)	
			)

}*/

//admin_screen();
