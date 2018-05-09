
/*const socket = io()*/
/*let home="b"
let notifications="b"
let remarks="b"
let manage_acc="b"
let attendance = "b"
let chosen=""
let results = "b"
*/
//let rem_create="none"
accounts = ["Parent", "Teacher"]
accountDetails = {'name':"Zeeshan Sadiq Khan",'class':'Department of Computer Science','awards':['Teacher of the Month'],'classes':['Class One','Class Two','Class Four']}

//let classes = ["Class One","Class Two","Class Three","Class Four","Class One","Class Two","Class Three","Class Four"]
//let students = [{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'}]

/*const id_click=()=>{
	
	home="b"
	notifications="b"
	remarks="b"
	manage_acc="b"
	attendance = "b"
	results="b"
}
*/
id_click()
home="c"
let total_classes_arrT=[1,2,3]

socket.on('totalClassesTeacher',data=>
{
	total_classes_arrT=data
	teacher_screen()	
})

const teacher_screen = ()=>{

	var Admin = React.createClass({
	  displayName: "Admin",

	  render: function render() {
		return React.createElement("div",{ id: "admin" },
				React.createElement('div',{id:'home_back'}),
				React.createElement('div',{className:"striptop"},
					React.createElement('text',{className:'acc_set'},'Account Settings'),
					React.createElement("img",{type:"image",className: "set_pic",src:"\\settings-cog.png"}),
					React.createElement("button",{className:"log_out",onClick:ev=>{
						login()
					}},"Log out")),
				React.createElement("div",{ id: "sidenav" },
				React.createElement("button",{ className: home ,onClick:ev=>{
					id_click()
					home="c"
					chosen="home"
					teacher_screen()
				}},"Home"),
				React.createElement("button",{ className: notifications,onClick:ev=>{
					id_click()
					notifications="c"
					chosen="notifications"
					teacher_screen()
				} },"Notifications"),
			  	React.createElement("button",{ className: remarks,onClick:ev=>{
					id_click()
					remarks="c"
					chosen="remarks"
					teacher_screen()

				} },"Remarks"),
			  	React.createElement("button",{ className: attendance,onClick:ev=>{
					id_click()
					attendance="c"
					chosen="attendance"
					teacher_screen()
				} },"Attendance"),
			  	React.createElement("button",{ className: manage_acc,onClick:ev=>{
					id_click()
					manage_acc="c"
					rem_create="none"
					chosen="results"
					teacher_screen()
				} },"Results")
			  	),choiceT()
			);
	}
});
	ReactDOM.render(React.createElement(Admin, null), document.getElementById("rahij"));
}



let curr_clT="SELECT CLASS"
let stT=[]
let toT =""
socket.on('class_studentsT',data=>{
	stT=data
	teacher_screen()

})

const choiceT=()=>
{	
	let rem=""
	console.log("HERE")
	if(chosen=="remarks")
	{
		console.log('remarks')
		return React.createElement('div',{className:'remark_body'},
			React.createElement('form',{},
				React.createElement('textarea',{className:"t_area",rows:"5",cols:"50",onChange:ev=>{
					rem=ev.target.value
				}},"Write remarks here..."),
				React.createElement("select",{className:"selectClass"
					,onChange:ev=>{
					socket.emit('get_class_students',ev.target.value)
					stT=["19100136"]//CHANGE AFTER DATABASE LINk
					console.log("changed")
					curr_clT="Class "+ev.target.value
					teacher_screen()
				}},
				React.createElement("option",{},curr_clT),
				React.createElement("optgroup",{label:"Classes"},
					total_classes_arr.map((x,i)=>
						React.createElement("option",{value:x},"Class "+x)	
						)
					)),
				React.createElement("select",{className:"selectStudent",
					onChange:ev=>{
						toT=ev.target.value
					}},
					React.createElement("option",{},"SELECT STUDENT"),
					React.createElement("optgroup",{label:"STUDENTS"},
					stT.map((x,i)=>
						React.createElement("option",{value:x},x)	
						)
					)),
				React.createElement("div",{},
					React.createElement("button",{className:"blue_button rem_button", type:"submit",onClick:ev=>{
					ev.preventDefault()

					socket.emit("submit_remarks",["Admin",toT,rem])
				
					console.log("RAHIJ")//send remarks to server!!!!!!!!!!!!!!
				}},"Send"))))
	}

	else if(chosen=="notifications")
	{
		console.log('noti')
		return React.createElement('div',{className:'remark_body'},
			React.createElement('form',{},
				React.createElement('textarea',{className:"t_area",rows:"5",cols:"50",onChange:ev=>{
					rem=ev.target.value
				}},"Write notifications here..."),
				React.createElement("select",{className:"selectStudent2"
					,onChange:ev=>{
					curr_clT=ev.target.value
					teacher_screen()
				}},
				React.createElement("option",{},curr_clT),
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
		console.log('attendancePanel')
		return React.createElement('div',{className:'displayPanel'},
			React.createElement('h1',{className:'head_att'},'Attendance'),
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
							React.createElement("input",{radio_ch_un:0,id:s.rNumber,type:"radio",onClick:ev=>{
								if(ev.target.radio_ch_un==1){
									ev.target.radio_ch_un=0
									document.getElementById(ev.target.id).checked=false
								}
								else{
									ev.target.radio_ch_un=1
								}
								
							}})
						)
					})
				)
			),
			React.createElement('div',{className:'attendanceButtons'},
				React.createElement('div',{},
					React.createElement('text',{className:'date'},'Date'),
					React.createElement('br'),
					React.createElement('input',{type:'input',placeholder:'dd/mm/yyyy',className:'dateI'})),	
				React.createElement("div",{ className: "dropdown"},
		  			React.createElement("button",{ className: "dropbtn" },"Select Class"),
		  			React.createElement("div",{ className: "dropdown-content" },
		    			classes.map(c =>{
		    				return React.createElement("a",{ href: "#" },c)
		    			})
		  			)
				),
				React.createElement('br'),
				React.createElement('input',{type:'input',className:'dateI i',placeholder:'dd/mm/yyyy'}),
				React.createElement('br'),
				React.createElement('button',{className:'addHolidayButton'},"Add Holiday")
			)
		)
	}
	else if(chosen=="manage_acc")
	{
		console.log('manage')
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
	              teacher_screen()
	            }}, "Create New User")

	  		);
		 
		}
		else if (rem_create=="c"){
			//return create()
			return React.createElement('div',{className:"removeBox"},
					React.createElement('div', {className: "popUp"},
						React.createElement('div',{className:"smallpopUp"},
						React.createElement('text',{className: 'create_h'}, 'Create New Account'),
						React.createElement("img",{type:"image",className: "photo",src:"\\images.png"}),
						React.createElement("button", {className: 'generateButton_photo'}, "Browse"),
						React.createElement('br'),
						React.createElement('input',{ type: "text", className: "form", placeholder: "First Name" }),
						React.createElement('input',{ type: "text", className: "form2", placeholder: "Second Name" }),
						React.createElement('br'),
						React.createElement('input',{ type: "email", className: "form", placeholder: "Email Address" }),
						React.createElement('input',{ type: "text", className: "form2", placeholder: "Grade" }),
						React.createElement('br'),
						React.createElement('input',{ type: "text", className: "form5", placeholder: "Username" }),
						React.createElement("button", {className: 'generateButton_user'}, "Generate"),
						React.createElement('br'),
						React.createElement('input',{ type: "text", className: "form6", placeholder: "Password" }),
						React.createElement("button", {className: 'generateButton_pass'}, "Generate"),
						React.createElement('br'),
						React.createElement("button", {className: 'generateButton_cre'}, "Create")

						))
					);
		  }


	}
	else if(chosen == 'home'){
		console.log('hello')
		return React.createElement('div',{className:'parent_home'},
			React.createElement('h1',null,'Welcome to Student Progress Portal'),
			React.createElement('div',{className:'student_profile'},
				React.createElement('h2',null,'Teacher Profile'),
				React.createElement('img',{type:'image',src:'\\css\\zeeshan.jpg',className:'imageFitStudent'}),
				React.createElement('br'),
				React.createElement('h2',null,accountDetails.name),
				React.createElement('h3',null,accountDetails.class)

			),
			React.createElement('div',{className:'student_awards'},
				React.createElement('h2',null,'Awards and honors'),
				accountDetails.awards.map(a=>{
					return React.createElement('h3',null,a)
				})
			)
		)
	}
	else if(chosen == 'results'){
		return React.createElement('div',{className:'results_body_t'},
			React.createElement('select',{
					display:'Select Class',
					onChange: ev => {
						resultUpdateClass = ev.target.value
						if(resultUpdateClass == 'Select Class'){

						}
						else{
	    					socket.emit("giveStu",c)
						}
					}
				},
				React.createElement('option',{},'Select Class'),
				accountDetails['classes'].map(c=>{
					return React.createElement('option',{},c)
				})
			)
			React.createElement('submit'{type:'submit'})
		)
	}
}

/*const get_class_students = num =>{
	return total_classes_arr.map((x,i1)=>
		React.createElement("option",{},i1)	
			)

}*/

//admin_screen();
