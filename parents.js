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
	else if(chosen == "attendance")
	{
		return React.createElement('div',{className : 'attendance_body_p'},
			
			React.createElement('div',{className : 'calenderLeft'},
				React.createElement('h1',{className: 'attendance_date'},todaysDate.date),
				React.createElement('h1',{className:'attendance_month'},todaysDate.month)
			),
			React.createElement('div',{className : 'calenderRight'},
				React.createElement('div',{className:'attendance_triangle-right'}),
				React.createElement('text',{className:'attendance_year'},todaysDate.year),
				React.createElement('div',{className:'attendance_triangle-left'}),
			)
		)
	}
	else if(chosen == "results")
	{
		return React.createElement('div',{className : 'results_body_p'},
			React.createElement('h1',{className:'subjects hTextCenter'},"Subjects"),
			React.createElement('div',{className: 'subject'},
				React.createElement("img",{
					type:'image',
					className:'round onhover fitH',
					src:"\\css\\phy.png",
					id: "phy"
				}),
				React.createElement('br'),
				React.createElement('h2',{className : 'hTextCenter'},'Physics')
			),
			React.createElement('div',{className: 'subject'},
				React.createElement("img",{type:'image',className: 'round onhover fitH',src:"\\css\\chem.png"}),
				React.createElement('br'),
				React.createElement('h2',{className : 'hTextCenter'},'Chemistry')
			),
			React.createElement('div',{className: 'subject'},
				React.createElement("img",{type:'image',className: 'round onhover fitH',src:"\\css\\bio.png"}),
				React.createElement('br'),
				React.createElement('h2',{className : 'hTextCenter'},'Biology')
			),
			React.createElement('div',{className: 'subject'},
				React.createElement("img",{type:'image',className: 'round onhover fitH',src:"\\css\\math.png"}),
				React.createElement('br'),
				React.createElement('h2',{className : 'hTextCenter'},'Maths')
			),
			React.createElement('div',{className: 'subject '},
				React.createElement("img",{type:'image',className: 'round onhover fitH',src:"\\css\\art.png"}),
				React.createElement('br'),
				React.createElement('h2',{className : 'hTextCenter'},'Art')
			),
			React.createElement('div',{className: 'subject'},
				React.createElement("img",{type:'image',className: 'round onhover fitH',src:"\\css\\eng.png"}),
				React.createElement('br'),
				React.createElement('h2',{className : 'hTextCenter'},'English')
			)
		)
	}
}

//admin_screen();
