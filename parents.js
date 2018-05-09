todaysDate = {'date':29,'day':"Monday",'month':"NOVEMBER",'year':2017}
accountName = "Muhammad Abdul Moeed"
accountDetails = {'name':"Muhammad Abdul Moeed",'class':'Class 3','awards':['Student of the month','Football Team Captain 2018']}
chosenSubject = ""
subjects = [['Physics','phy.png'],['Chemistry','chem.png'],['Biology','bio.png'],['Mathematics','math.png'],['Art','art.png'],['English','eng.png']]
selectedResultMonth = 'January 2018'
selectedResultMonthNum = 0
months = ['January','February','March','April','May','June','July','August','September','October','November','December']

resultsTableHeadings = ['Name ','Conducted','Total','Marks','Class Average','Remarks']
studentResults = {'English':{'January 2018':{'Quiz 1':{'name':'Quiz 1','conducted':'13 Jan 2018','total':'10','recieved':'7','mean':'6.5','remarks':'Good'},'Quiz 2':{'name':'Quiz 2','conducted':'18 Jan 2018','total':'10','recieved':'2','mean':'7.5','reamrks':'Poor'}},'February 2018':{'Quiz 3':{'name':'Quiz 3','conducted':'9 Feb 2018','total':'10','recieved':'5','mean':'5.5','reamrks':'Good'}}},'Art':{' ':' '},'Mathematics':{' ':' '},'Physics':{' ':' '},'Chemistry':{' ':' '},'Biology':{' ':' '}}
var dateNow=new Date();
// console.log(dateNow," dateNow")
var month = dateNow.getMonth();

var nextMonth = 0;
var prevMonth = 0;
var day = dateNow.getDate();
var year = dateNow.getFullYear();

chosen="home"
home = 'c'
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
month_name=monthNames[month]
FebNumberOfDays = 28;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"];
var nextDate = new Date(nextMonth +' 1 ,'+year);
var weekdays= nextDate.getDay();
var weekdays2 = weekdays;
var numOfDays = dayPerMonth[month];
var cal1=[]



const cal_calender=dateNow=>{


	// console.log("GAGAG",dateNow)
	var month = dateNow.getMonth();
	month_name=monthNames[month]
	nextMonth = month+1;
	prevMonth = month-1;
	day = dateNow.getDate();
	year = dateNow.getFullYear();

	FebNumberOfDays = 28;
	 //Determing if February (28,or 29)
	 if (month == 1){
	    if ( (year%100!=0) && (year%4==0) || (year%400==0)){
	      FebNumberOfDays = 29;
	    }else{
	      FebNumberOfDays = 28;
	    }
	 }

	nextDate = new Date(nextMonth +' 1 ,'+year);
	weekdays= nextDate.getDay();
	weekdays2 = weekdays;
	numOfDays = dayPerMonth[month];

	cal1=[]
	for (var i=0;i<6;i++){
		var temp=[" "," "," "," "," "," "," "]
		cal1.push(temp)
	}

	/* while (weekdays>0){

	    weekdays--;
	    cal1[0][weekdays]="0"
	 }*/
	 var counter=0
	 var col=weekdays2
	 var row=0
	while (counter<numOfDays && row<6)
	{
		if(col==7){
			col=0
			row++
		}
		// console.log(counter)
		// console.log(numOfDays)
		// console.log(row," ",col)
		counter++
		cal1[row][col]=`${counter}`
		col++
	}
	// console.log(cal1)
}
cal_calender(dateNow)
 // console.log(cal1)
//console.log(nextDate.getDay(),"test")


let remarks_temp = [{'from':'Admin','subject':'SE','date':'4th May 2018','type':'bad','remark':'Testing Remarks!'},{'from':'Rahij','subject':'CS','date':'4th May 2018','type':'good','remark':'Testing Remarks!'},{'from':'Shahzeb','subject':'Chem','date':'4th May 2018','type':'bad','remark':'kill me!'}]
let noti_temp = [{'date':'4th May 2018','noti':'Testing Remarks!'},{'date':'4th May 2018','notification':'HELLO!'}]

socket.on('recieve_remarks',data=>{
	remarks_temp=data;
	// console.log(data,"helloooo")
})
socket.on('recieve_notifications',data=>{

	noti_temp=data;
	// console.log(data,"helloooo")
})
const parent_screen = userN =>{

	// console.log(cal1,"userr")
/*	socket.emit('get_remarks',userN)
	socket.emit('get_notifications',userN)*/
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
const choice_p=()=>{	
	let rem=""
	// console.log("HERE")
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
			{ className: "left1 button", id: "prev",onClick:ev=>{
				month--
				// console.log(month," mon")
				if(month==-1){
					month=11
					year--
				}
				cal_calender(new Date(year,month))
				parent_screen("19100136")

			} },
			" \u2329 "
		),
		React.createElement("span", { className: "left1 hook" }),
		React.createElement(
			"span",
			{ className: "month-year", id: "label" },
			month_name+"-"+year
		),
		React.createElement("span", { className: "right1 hook" }),
		React.createElement(
			"span",
			{ className: "right1 button", id: "next",onClick:ev=>{
				month++
				// console.log(month," mon")

				if(month==12){
					month=0
					year++
				}
				cal_calender(new Date(year,month))
				parent_screen("19100136")

			} },
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
				cal1.map(s=>
					React.createElement("tr",null,
						s.map(t=>
							React.createElement("td",null,t)
						))
				)
				
			)
		)
	),
/*	React.createElement("script", { src: "checking.js" }),*/
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
	else if(chosen == "results")
	{
		// console.log(subjects)
		return React.createElement('div',{className : 'subjects_body_p'},
			React.createElement('h1',{className:'subjects hTextCenter'},"Subjects"),
			
			subjects.map(s=>{
				return React.createElement('div',{className:'subject'},
					React.createElement("img",{
						type:'image',
						className:'round onhover fitH',
						src:"\\css\\"+s[1],
						id: s[0],
						onClick : ev=>{
							// console.log(ev.target.src)
							chosen = "subjectSelection"
							if(studentResults[ev.target.id][selectedResultMonth]){
							}
							else{
								studentResults[ev.target.id][selectedResultMonth]={}
							}
							chosenSubject = ev.target.id
							parent_screen()
						}
						}),
					React.createElement('br'),
					React.createElement('text',{className : 'hTextCenter'},s[0])
				)
			})
		)
	}
	else if(chosen == "subjectSelection"){
		// console.log("Shahzeb",studentResults)
		return React.createElement('div',{className:'results_body_p'},
			React.createElement('h1',{className: 'hTextCenter'},chosenSubject),
			React.createElement('div',{className: 'resultsMonthArea'},
				React.createElement('div',{
					className: 'arrow left',
					onClick: ev=>{
						s = selectedResultMonth.split(' ')
						if(s[0]=='January'){
							selectedResultMonthNum = 11
							selectedResultMonth = "December"+ " " + (s[1]-1)
						}
						else{
							selectedResultMonthNum--
							selectedResultMonth = months[selectedResultMonthNum]+" "+s[1]
						}
						// console.log(selectedResultMonth)
						// console.log(chosenSubject)
						if(studentResults[chosenSubject][selectedResultMonth]){
						}
						else{
							studentResults[chosenSubject][selectedResultMonth]={}
						}
						parent_screen()
					}
				}),
				React.createElement('h2',{className:'results_month'},selectedResultMonth),
				React.createElement('div',{
					className: 'arrow right',
					onClick: ev=>{
						s = selectedResultMonth.split(' ')
						console.log(s)
						if(s[0]=='December'){
							selectedResultMonthNum = 0
							selectedResultMonth = "January" +" " + (s[1]-(-1))
						}
						else{
							selectedResultMonthNum++
							selectedResultMonth = months[selectedResultMonthNum]+" "+s[1]
						}
						if(studentResults[chosenSubject][selectedResultMonth]){
						}
						else{
							studentResults[chosenSubject][selectedResultMonth]={}
						}
						parent_screen()
					}
				})
			),
			React.createElement('div',{className : 'results_table_p'},
				resultsTableHeadings.map(h=>{
					return React.createElement('td',{className:'results_table_heading'},h)
				}),
				Object.keys(studentResults[chosenSubject][selectedResultMonth]).map(c=>{
					return React.createElement('tr',null,
						Object.keys(studentResults[chosenSubject][selectedResultMonth][c]).map(p=>{
							return React.createElement('td',null,studentResults[chosenSubject][selectedResultMonth][c][p])
						})
					)
				})	

			)
		)

	}
	else if(chosen == 'home'){
		return React.createElement('div',{className:'parent_home'},
			React.createElement('h1',null,'Welcome to Student Progress Portal'),
			React.createElement('div',{className:'student_profile'},
				React.createElement('h2',null,'Student Profile'),
				React.createElement('img',{type:'image',src:'\\css\\moeed.jpg',className:'imageFitStudent'}),
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
}

//admin_screen();
