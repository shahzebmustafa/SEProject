
/*const socket = io()*/
let home="b"
let notifications="b"
let remarks="b"
let manage_acc="b"
let attendance = "b"
let chosen=""

let rem_create="none"
accounts = ["Parent", "Teacher"]

let classes = ["Class One","Class Two","Class Three","Class Four","Class One","Class Two","Class Three","Class Four"]
let students = [{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'}]

const id_click=()=>{
	
	home="b"
	notifications="b"
	remarks="b"
	manage_acc="b"
	attendance = "b"
}

let total_classes_arr=[1,2,3]

socket.on('totalClasses',data=>
{
	total_classes_arr=data
	admin_screen()	
})

const admin_screen = ()=>{

	var Admin = React.createClass({
	  displayName: "Admin",

	  render: function render() {
		return React.createElement("div",{ id: "admin" },
				React.createElement('div',{id:'home_back'}),
				React.createElement('div',{className:"striptop"},
					React.createElement('text',{className:'acc_set'},'Account Settings'),
					React.createElement("button",{className:"log_out",onClick:ev=>{
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
					admin_screen()
				} },"Notifications"),
			  	React.createElement("button",{ className: remarks,onClick:ev=>{
					id_click()
					remarks="c"
					chosen="remarks"
					admin_screen()

				} },"Remarks"),
			  	React.createElement("button",{ className: attendance,onClick:ev=>{
					id_click()
					attendance="c"
					chosen="attendance"
					admin_screen()
				} },"Attendance"),
			  	React.createElement("button",{ className: manage_acc,onClick:ev=>{
					id_click()
					manage_acc="c"
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
	console.log("HERE")
	if(chosen=="remarks")
	{
		return React.createElement('div',{className:'remark_body'},
			React.createElement('form',{},
				React.createElement('textarea',{className:"t_area",rows:"5",cols:"50",onChange:ev=>{
					rem=ev.target.value
				}},"Write remarks here..."),
				React.createElement("select",{className:"selectClass"
					,onChange:ev=>{
					socket.emit('get_class_students',ev.target.value)
					st=["19100136"]//CHANGE AFTER DATABASE LINk
					console.log("changed")
					curr_cl="Class "+ev.target.value
					admin_screen()
				}},
				React.createElement("option",{},curr_cl),
				React.createElement("optgroup",{label:"Classes"},
					total_classes_arr.map((x,i)=>
						React.createElement("option",{value:x},"Class "+x)	
						)
					)),
				React.createElement("select",{className:"selectStudent",
					onChange:ev=>{
						to=ev.target.value
					}},
					React.createElement("option",{},"SELECT STUDENT"),
					React.createElement("optgroup",{label:"STUDENTS"},
					st.map((x,i)=>
						React.createElement("option",{value:x},x)	
						)
					)),
				React.createElement("div",{},
					React.createElement("button",{className:"blue_button rem_button", type:"submit",onClick:ev=>{
					ev.preventDefault()

					socket.emit("submit_remarks",["Admin",to,rem])
				
					console.log("RAHIJ")//send remarks to server!!!!!!!!!!!!!!
				}},"Send"))))
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
					total_classes_arr.map((x,i)=>
						React.createElement("option",{value:"Class "+x},"Class "+x)	
						)
					)),
				React.createElement("div",{},
					React.createElement("button",{className:"blue_button rem_button",name:"send", type:"submit",onClick:ev=>{
					ev.preventDefault()
					console.log(rem)//send remarks to server!!!!!!!!!!!!!!
				}},"Send"))))
	}
	else if(chosen=="attendance")
	{
		return React.createElement('div',{className:'displayPanel'},
			React.createElement('text',{className:'hTextCenter largeFont heading'},'Attendance'),
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
							React.createElement('text',null,s.att),
							React.createElement("input",{type:"radio"})
						)
					})
				)
			),
			React.createElement('div',{className:'attendanceButtons'},
				React.createElement('div',{className:"dateI"},
					React.createElement('text',{className:'date'},'Date'),
					React.createElement('br'),
					React.createElement('input',{type:'input',placeholder:'dd/mm/yyyy',className:'dateInput'})),	
				React.createElement("div",{ className: "dropdown"},
		  			React.createElement("button",{ className: "dropbtn" },"Select Class"),
		  			React.createElement("div",{ className: "dropdown-content" },
		    			classes.map(c =>{
		    				return React.createElement("a",{ href: "#" },c)
		    			})
		  			)
				),
				React.createElement('br'),
				React.createElement('input',{type:'input',className:'addHolidayInput',placeholder:'dd/mm/yyyy'}),
				React.createElement('br'),
				React.createElement('input',{type:'submit',value: 'Add Holiday',className:'blue_button'})
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
	            }}, "Remove User"),
	  			React.createElement("button", {className: 'createUserButton', onClick:ev=>{
	              rem_create="c"
	              admin_screen()
	            }}, "Create New User")

	  		);
		 
		}
		else if (rem_create=="c"){
			//return create()
			return React.createElement('div',{className:"removeBox"},
							React.createElement('div', {className: "popUp"},
								React.createElement('text',{className: 'create_h'}, 'Create New Account'),
								React.createElement('div',{className:"smallpopUp"},

									React.createElement('input',{ type: "text", className: "form", placeholder: "First Name" }),
									React.createElement('input',{ type: "text", className: "form2", placeholder: "Second Name" }),
									React.createElement('input',{ type: "email", className: "form3", placeholder: "Email Address" }),
									React.createElement('input',{ type: "text", className: "form4", placeholder: "Grade" }),
									React.createElement('input',{ type: "text", className: "form5", placeholder: "Username" }),
									React.createElement('input',{ type: "password", className: "form6", placeholder: "Password" }),
									React.createElement("button", {className: 'generate_button generateButton'}, "Generate"),
									React.createElement("button", {className: 'generate_button2 generateButton2'}, "Generate"),
									React.createElement("button", {className: 'generate_button3 generateButton3'}, "Create"),
									React.createElement("img",{type:"image",className: "photo",src:"\\images.png"}),
									React.createElement("button", {className: 'generate_button4 generateButton4'}, "Browse"),

									))
							);
		  }


	}
}

/*const get_class_students = num =>{
	return total_classes_arr.map((x,i1)=>
		React.createElement("option",{},i1)	
			)

}*/

//admin_screen();
