todaysDate = {'date':29,'day':"Monday",'month':"NOVEMBER",'year':2017}
var dateNow=new Date();
var month = dateNow.getMonth();
var nextMonth = month+1;
var prevMonth = month-1;
var day = dateNow.getDate();
var year = dateNow.getFullYear();

 //Determing if February (28,or 29)
/* if (month == 1){
    if ( (year%100!=0) && (year%4==0) || (year%400==0)){
      FebNumberOfDays = 29;
    }else{
      FebNumberOfDays = 28;
    }
 }*/

var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
month_name=monthNames[month]
/*
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]
 var nextDate = new Date(nextMonth +' 1 ,'+year);
 var weekdays= nextDate.getDay();
 var weekdays2 = weekdays
 var numOfDays = dayPerMonth[month];*/





let remarks_temp = [{'from':'Admin','subject':'SE','date':'4th May 2018','type':'bad','remark':'Testing Remarks!'},{'from':'Rahij','subject':'CS','date':'4th May 2018','type':'good','remark':'Testing Remarks!'},{'from':'Shahzeb','subject':'Chem','date':'4th May 2018','type':'bad','remark':'kill me!'}]
let noti_temp = [{'date':'4th May 2018','noti':'Testing Remarks!'},{'date':'4th May 2018','notification':'HELLO!'}]

socket.on('recieve_remarks',data=>{
	remarks_temp=data;
	console.log(data,"helloooo")
})
socket.on('recieve_notifications',data=>{

	noti_temp=data;
	console.log(data,"helloooo")
})
const parent_screen = userN =>{

	console.log(userN,"userr")
	socket.emit('get_remarks',userN)
	socket.emit('get_notifications',userN)
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
					parent_screen(userN)
				}},"Home"),
				React.createElement("button",{ className: notifications,onClick:ev=>{
					id_click()
					notifications="c"
					chosen="notifications"
					parent_screen(userN)
				} },"Notifications"),
			  	React.createElement("button",{ className: remarks,onClick:ev=>{
					id_click()
					remarks="c"
					chosen="remarks"
					parent_screen(userN)

				} },"Remarks"),
			  	React.createElement("button",{ className: attendance,onClick:ev=>{
					id_click()
					attendance="c"
					chosen="attendance"
					parent_screen(userN)
				} },"Attendance"),
			  	React.createElement("button",{ className: results,onClick:ev=>{
					id_click()
					results="c"
					chosen="results"
					parent_screen(userN)
				} },"Results")
			  	),choice_p()
			);
	}
});
	ReactDOM.render(React.createElement(Parent, null), document.getElementById("rahij"));
}

const rem_type=data=>{
	if (data==1)
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
					rem_type(s.good)),
					React.createElement('text',{className:'remarksBody'},"From: "+s.from),
					React.createElement('br'),
					React.createElement('text',{className:'remarksBody'},"Date: "+s.date),
					React.createElement('br'),
					React.createElement('text',{className:'remarksBody'},/*s.subject+*/": "+s.remark))

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
					React.createElement('text',{className:'remarksBody'},s.notification))

			})
			)

	}
	else if(chosen == "attendance")
	{
		return React.createElement('div',{className : 'attendance_body_p'},			
			React.createElement('div',{className : 'calenderLeft'},
				React.createElement('h1',{className: 'attendance_date'},day),
				React.createElement('h1',{className:'attendance_month'},month_name)
			),
			React.createElement('div',{className : 'calenderRight'},
React.createElement(
	"div",
	{ id: "cal" },
	React.createElement(
		"div",
		{ className: "header" },
		React.createElement(
			"span",
			{ className: "left button", id: "prev" },
			" \u2329 "
		),
		React.createElement("span", { className: "left hook" }),
		React.createElement(
			"span",
			{ className: "month-year", id: "label" },
			year
		),
		React.createElement("span", { className: "right hook" }),
		React.createElement(
			"span",
			{ className: "right button", id: "next" },
			" \u232A "
		)
	),
	React.createElement(
		"table",
		{ id: "days" },
		React.createElement(
			"tr",
			null,
			React.createElement(
				"td",
				null,
				"sun"
			),
			React.createElement(
				"td",
				null,
				"mon"
			),
			React.createElement(
				"td",
				null,
				"tue"
			),
			React.createElement(
				"td",
				null,
				"wed"
			),
			React.createElement(
				"td",
				null,
				"thu"
			),
			React.createElement(
				"td",
				null,
				"fri"
			),
			React.createElement(
				"td",
				null,
				"sat"
			)
		)
	),
	React.createElement(
		"div",
		{ id: "cal-frame" },
		React.createElement(
			"table",
			{ className: "curr" },
			React.createElement(
				"tbody",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement("td", { className: "nil" }),
					React.createElement("td", { className: "nil" }),
					React.createElement(
						"td",
						null,
						"1"
					),
					React.createElement(
						"td",
						null,
						"2"
					),
					React.createElement(
						"td",
						null,
						"3"
					),
					React.createElement(
						"td",
						null,
						"4"
					),
					React.createElement(
						"td",
						null,
						"5"
					)
				),
				React.createElement(
					"tr",
					null,
					React.createElement(
						"td",
						null,
						"6"
					),
					React.createElement(
						"td",
						null,
						"7"
					),
					React.createElement(
						"td",
						null,
						"8"
					),
					React.createElement(
						"td",
						null,
						"9"
					),
					React.createElement(
						"td",
						null,
						"10"
					),
					React.createElement(
						"td",
						{ className: "today" },
						"11"
					),
					React.createElement(
						"td",
						null,
						"12"
					)
				),
				React.createElement(
					"tr",
					null,
					React.createElement(
						"td",
						null,
						"13"
					),
					React.createElement(
						"td",
						null,
						"14"
					),
					React.createElement(
						"td",
						null,
						"15"
					),
					React.createElement(
						"td",
						null,
						"16"
					),
					React.createElement(
						"td",
						null,
						"17"
					),
					React.createElement(
						"td",
						null,
						"18"
					),
					React.createElement(
						"td",
						null,
						"19"
					)
				),
				React.createElement(
					"tr",
					null,
					React.createElement(
						"td",
						null,
						"20"
					),
					React.createElement(
						"td",
						null,
						"21"
					),
					React.createElement(
						"td",
						null,
						"22"
					),
					React.createElement(
						"td",
						null,
						"23"
					),
					React.createElement(
						"td",
						null,
						"24"
					),
					React.createElement(
						"td",
						null,
						"25"
					),
					React.createElement(
						"td",
						null,
						"26"
					)
				),
				React.createElement(
					"tr",
					null,
					React.createElement(
						"td",
						null,
						"27"
					),
					React.createElement(
						"td",
						null,
						"28"
					),
					React.createElement(
						"td",
						null,
						"29"
					),
					React.createElement(
						"td",
						null,
						"30"
					),
					React.createElement("td", { className: "nil" }),
					React.createElement("td", { className: "nil" }),
					React.createElement("td", { className: "nil" })
				)
			)
		)
	),
	React.createElement("script", { src: "checking.js" }),
	React.createElement(
		"script",
		null,
		"window.$ = window.jQuery = require('./js/libs/jquery-2.2.0.min.js');"
	)
),
				React.createElement('div',{className:'attendance_triangle-left'}),
				React.createElement('h1',{className:'attendance_year'},todaysDate.year),
				React.createElement('div',{className:'attendance_triangle-right'}),
			)
		)
	}
}

//admin_screen();
