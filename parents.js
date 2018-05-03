todaysDate = {'date':29,'day':"Monday",'month':"NOVEMBER",'year':2017}

let remarks_temp = [{'from':'Admin','subject':'SE','date':'4th May 2018','type':'bad','remark':'Testing Remarks!'},{'from':'Rahij','subject':'CS','date':'4th May 2018','type':'good','remark':'Testing Remarks!'},{'from':'Shahzeb','subject':'Chem','date':'4th May 2018','type':'bad','remark':'kill me!'}]
let noti_temp = [{'date':'4th May 2018','noti':'Testing Remarks!'},{'date':'4th May 2018','noti':'HELLO!'}]


const parent_screen = ()=>{

	var Parent = React.createClass({
	  displayName: "Parent",

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
					parent_screen()
				}},"Home"),
				React.createElement("button",{ className: notifications,onClick:ev=>{
					id_click()
					notifications="c"
					chosen="notifications"
					parent_screen()
				} },"Notifications"),
			  	React.createElement("button",{ className: remarks,onClick:ev=>{
					id_click()
					remarks="c"
					chosen="remarks"
					parent_screen()

				} },"Remarks"),
			  	React.createElement("button",{ className: attendance,onClick:ev=>{
					id_click()
					attendance="c"
					chosen="attendance"
					parent_screen()
				} },"Attendance"),
			  	React.createElement("button",{ className: results,onClick:ev=>{
					id_click()
					results="c"
					chosen="results"
					parent_screen()
				} },"Results")
			  	),choice_p()
			);
	}
});
	ReactDOM.render(React.createElement(Parent, null), document.getElementById("rahij"));
}

const rem_type=data=>{
	if (data=="good")
	{
		return React.createElement("img",{type:"image",className: "thumb",src:"\\thumb.png"})
	}
	else
	{
		return React.createElement("img",{type:"image",className: "warn",src:"\\warn.png"})
	}
}
const choice_p=()=>
{	
	let rem=""
	console.log("HERE")
	if(chosen=="remarks")
	{
		return React.createElement('div',{className:'remark_body_p t_area'},
			remarks_temp.map(s=>{
				return React.createElement('div',{className:'rem_help'},
					React.createElement('div',{className:'img_rem_div'},
					rem_type(s.type)),
					React.createElement('text',{className:'remarksBody'},"From: "+s.from),
					React.createElement('br'),
					React.createElement('text',{className:'remarksBody'},"Date: "+s.date),
					React.createElement('br'),
					React.createElement('text',{className:'remarksBody'},s.subject+": "+s.remark))

			})
			)
	}

	else if(chosen=="notifications")
	{
		return React.createElement('div',{className:'remark_body_p'},
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
	else if(chosen == "attendance")
	{
		return React.createElement('div',{className : 'attendance_body_p'},
			
			React.createElement('div',{className : 'calenderLeft'},
				React.createElement('h1',{className: 'attendance_date'},todaysDate.date),
				React.createElement('h1',{className:'attendance_month'},todaysDate.month)
			),
			React.createElement('div',{className : 'calenderRight'},
				React.createElement('div',{className:'attendance_triangle-left'}),
				React.createElement('h1',{className:'attendance_year'},todaysDate.year),
				React.createElement('div',{className:'attendance_triangle-right'}),
			)

		)
		return React.createElement('div',{className:'remark_body_p t_area'},
			noti_temp.map(s=>{
				return React.createElement('div',{className:'rem_help'},
					React.createElement('div',{className:'img_rem_div'},
					React.createElement("img",{type:"image",className: "warn",src:"\\bell.png"})),
					React.createElement('text',{className:'remarksBody'},"Date: "+s.date),
					React.createElement('br'),
					React.createElement('text',{className:'remarksBody'},s.noti))

			})
			)
	}
}

//admin_screen();
