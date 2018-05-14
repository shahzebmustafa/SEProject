
/*const socket = io()*/
accounts = ["Parent", "Teacher"]
accountDetailS = {'name':"Zeeshan Sadiq Khan",'class':'Department of Computer Science','awards':['Teacher of the Month'],'classes':['Class One','Class Two','Class Four']}

dict_removeAcc = {'19100004': {'name': 'Shahzeb Mustafa', 'grade': '7', 'date': '01 October 2004'}}
//let classes = ["Class One","Class Two","Class Three","Class Four","Class One","Class Two","Class Three","Class Four"]
removeThis = '19100004'
//let students = [{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'},{'name':'Shahzeb Mustafa','rNumber':'19100004','att':'P'},{'name':'Zeeshan Khan','rNumber':'19100136','att':'P'},{'name':'Zainab Agha','rNumber':'19100062','att':'P'}]
//let students = [{'name':'','rNumber':'','att':''}]
//let students=[]
var userNt2=""
students2=[]
id_click()
home="c"
chosen="home"
let total_classes_arrT=[1,2,3]
socket.on("stList",rollnoArray=>{
	for (var i=0;i<rollnoArray.length;i++){
		students2.push({})
		students2[i]["name"]=rollnoArray[i]["name"]
		students2[i]["rNumber"]=rollnoArray[i]["rNumber"]
	}
})
socket.on('totalClassesTeacher',data=>
{
	total_classes_arr=data
	teacher_screen(userNt2)	
})

socket.on("recieveClassesTeacher",data=>{
	classes=data
	teacher_screen(userNt2)
})
socket.on("stListTeacher",data=>{
	temp=[]
	for (var i=0;i<data.length;i++){
		temp.push({})
		temp[i]["name"]=data[i]["name"]
		temp[i]["rNumber"]=data[i]["rNumber"]
		temp[i]["att"]="A"
	}

	students=temp
	//console.log(temp,"temp")
	teacher_screen(userNt2)
})
const teacher_screen = userNt=>{
	userNt2=userNt
	console.log("techer")
	var Admin = React.createClass({
	  displayName: "Admin",

	  render: function render() {
		return React.createElement("div",{ id: "admin" },
				React.createElement('div',{id:'home_back'}),
				React.createElement('div',{className:"striptop"},
					React.createElement('text',{className:'acc_set', onClick:ev=>{
						chosen = "accSet"
						teacher_screen(userNt2)
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

						rem_create="none"
						login()
					}},"Log out")),
				React.createElement("div",{ id: "sidenav" },
				React.createElement("button",{ className: home ,onClick:ev=>{
					id_click()
					home="c"
					chosen="home"
					teacher_screen(userNt2)
				}},"Home"),
				React.createElement("button",{ className: notifications,onClick:ev=>{
					id_click()
					notifications="c"
					chosen="notifications"
					socket.emit("getClassesTeacher")
					teacher_screen(userNt2)
				} },"Notifications"),
			  	React.createElement("button",{ className: remarks,onClick:ev=>{
					id_click()
					remarks="c"
					socket.emit("getClassesTeacher")
					chosen="remarks"
					teacher_screen(userNt2)

				} },"Remarks"),
			  	React.createElement("button",{ className: attendance,onClick:ev=>{
					id_click()
					attendance="c"
					socket.emit("getClassesTeacher")
					chosen="attendance"
					teacher_screen(userNt2)
				} },"Attendance"),
			  	React.createElement("button",{ className: manage_acc,onClick:ev=>{
					id_click()
					results="c"
					chosen="results"
					teacher_screen(userNt2)
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
socket.on('class_students',data=>{
	stT=data
	teacher_screen(userNt2)

})

const choiceT=()=>
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
					socket.emit("giveStuTeacher",ev.target.value)
					curr_clT="Class "+ev.target.value
				}},
				React.createElement("option",{},curr_clT),
				React.createElement("optgroup",{label:"Classes"},
					classes.map((x,i)=>
						React.createElement("option",{value:x},"Class "+x)	
						)
					)),
				React.createElement("select",{className:"selectStudent",
					onChange:ev=>{
						toT=ev.target.value
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

					socket.emit("submit_remarks",["Admin",toT,rem,1])
				
					//console.log("RAHIJ",to,rem)//send remarks to server!!!!!!!!!!!!!!
				}},"Send Positive Remark")),
				React.createElement("div",{},
					React.createElement("button",{className:"blue_button rem_button", type:"submit",onClick:ev=>{
					ev.preventDefault()

					socket.emit("submit_remarks",["Admin",toT,rem,0])
				
					//console.log("RAHIJ",to,rem)//send remarks to server!!!!!!!!!!!!!!
				}},"Send Negitive Remark"))
				))
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
					curr_clT=ev.target.value
					teacher_screen(userNt2)
				}},
				React.createElement("option",{},curr_clT),
				React.createElement("optgroup",{label:"Classes"},
					React.createElement("option",{value:"All Classes"},"All Classes"),
					classes.map((x,i)=>
						React.createElement("option",{value:"Class "+x},"Class "+x)	
						)
					)),
				React.createElement("div",{},
					React.createElement("button",{className:"blue_button rem_button",name:"send", type:"submit",onClick:ev=>{
					ev.preventDefault()



					socket.emit("submit_noti",[rem,curr_clT.substring(6)] )

					//console.log("here",rem,curr_clT.substring(6))//send remarks to server!!!!!!!!!!!!!!
				}},"Send"))))
	}
	else if(chosen=="attendance")
	{

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
		    					socket.emit("giveStuTeacher",c)
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
					socket.emit("submit_att",[students,attDate])
				}},"Submit")
			)
		)
	}
	else if(chosen == 'home'){
		console.log('hello')
		return React.createElement('div',{className:'parent_home'},
			React.createElement('h1',null,'Welcome to Student Progress Portal'),
			React.createElement('div',{className:'student_profile'},
				React.createElement('h2',null,'Teacher Profile'),
				React.createElement('img',{type:'image',src:'\\css\\zeeshan.jpg',className:'imageFitStudent'}),
				React.createElement('br'),
				React.createElement('h2',null,accountDetailS.name),
				React.createElement('h3',null,accountDetailS.class)

			),
			React.createElement('div',{className:'student_awards'},
				React.createElement('h2',null,'Awards and honors'),
				accountDetailS.awards.map(a=>{
					return React.createElement('h3',null,a)
				})
			)
		)
	}
	else if(chosen == 'results'){
		return React.createElement('div',{className:'results_body_t'},
				React.createElement('select',{
						value:'Select Class',
						className:'dropDown_result_t',
						onChange: ev => {
							resultUpdateClass = ev.target.value
							if(resultUpdateClass == 'Select Class'){

							}
							else{
								console.log("stuteacher ",resultUpdateClass)
		    					socket.emit("giveStuTeacher",resultUpdateClass)
							}
						}
					},
					React.createElement('option',{},'Select Class'),
					accountDetails['classes'].map(c=>{
						return React.createElement('option',{},c)
					})
				),
				React.createElement('input',{type:'input',className:'input_compname',placeholder:'Component'}),
				React.createElement('input',{type:'input',className:'input_totMarks',placeholder:'Total'}),
				React.createElement('br'),
				React.createElement('table',{className:"resultsUpload_t"},					
					React.createElement('tr',null,
						React.createElement('td',{className:'teacher_res_elem BOLD'},'Name'),
						React.createElement('td',{className:'teacher_res_elem BOLD'},'Roll Number'),
						React.createElement('td',{className:'teacher_res_elem BOLD'},'Marks')
					),
					students2.map(s=>{
						return React.createElement('tr',null,
							React.createElement('td',{className:'teacher_res_elem'},s['name']),
							React.createElement('td',{className:'teacher_res_elem'},s['rNumber']),
							React.createElement('input',{type:'input',className:'input_marks'})
						)
					})
				),
			React.createElement('br'),
			React.createElement('button',{className:'submit_res_t'},"Submit")
		)
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

//teacher_screen();
