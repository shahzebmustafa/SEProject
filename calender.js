const displayCalendar=()=>{
 
 var htmlContent ="";
 var FebNumberOfDays ="";
 var counter = 1;
 
 
 var dateNow = new Date();
 var month = dateNow.getMonth();

 var nextMonth = month+1; //+1; //Used to match up the current month with the correct start date.
 var prevMonth = month -1;
 var day = dateNow.getDate();
 var year = dateNow.getFullYear();
 
 
 //Determing if February (28,or 29)  
 if (month == 1){
    if ( (year%100!=0) && (year%4==0) || (year%400==0)){
      FebNumberOfDays = 29;
    }else{
      FebNumberOfDays = 28;
    }
 }
 
 
 // names of months and week days.
 var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
 var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
 var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]
 
 
 // days in previous month and next one , and day of week.
 var nextDate = new Date(nextMonth +' 1 ,'+year);
 var weekdays= nextDate.getDay();
 var weekdays2 = weekdays
 var numOfDays = dayPerMonth[month];
     
 
 
 
 // this leave a white space for days of pervious month.
 while (weekdays>0){
    htmlContent += "<td class='monthPre'></td>";
 
 // used in next loop.
     weekdays--;
 }
 
 // loop to build the calander body.
 while (counter <= numOfDays){
 
     // When to start new line.
    if (weekdays2 > 6){
        weekdays2 = 0;
        htmlContent += "</tr><tr>";
    }
 
 
 
    // if counter is current day.
    // highlight current day using the CSS defined in header.
    if (counter == day){
        htmlContent +="<td class='dayNow'  onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' "+
        "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>"+counter+"</td>";
    }else{
        htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"#FF0000\"'"+
        " onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>";    
 
    }
    
    weekdays2++;
    counter++;
 }
 
 
 
 // building the calendar html body.
/* return React.createElement('table',{className:"calender"},
  React.createElement('tr',{className:"monthNow"},
    React.createElement('th',{colspan:'7'},monthNames[month]+" "+year)),
  React.createElement('tr',{className:"dayNames"},
    React.createElement('td',{},"Sun"),
    React.createElement('td',{},"Mon"),
    React.createElement('td',{},"Tue"),
    React.createElement('td',{},"Wed"),
    React.createElement('td',{},"Thurs"),
    React.createElement('td',{},"Fri"),
    React.createElement('td',{},"Sat")))*/
 var calendarBody = "<table class='calendar'> <tr class='monthNow'><th colspan='7'>"
 +monthNames[month]+" "+ year +"</th></tr>";

 calendarBody +="<tr class='dayNames'>  <td>Sun</td>  <td>Mon</td> <td>Tues</td>"+
 "<td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr>";
 calendarBody += "<tr>";
 calendarBody += htmlContent;
 calendarBody += "</tr></table>";
 // set the content of div .
 document.getElementById("rahij").innerHTML=calendarBody;
 return calendarBody
/* var NewComponent = React.createClass({
  render: function() {
    return (

      <table className="calendar"> <tbody><tr className="monthNow"><th colSpan={7}>May 2018</th></tr><tr className="dayNames">  <td>Sun</td>  <td>Mon</td> <td>Tues</td><td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr><tr><td className="monthPre" /><td className="monthPre" /><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">1</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">2</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">3</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">4</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">5</td></tr><tr><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">6</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">7</td><td className="dayNow" onmouseover="this.style.background=&quot;#FF0000&quot;; this.style.color=&quot;#FFFFFF&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;; this.style.color=&quot;#00FF00&quot;">8</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">9</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">10</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">11</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">12</td></tr><tr><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">13</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">14</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">15</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">16</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">17</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">18</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">19</td></tr><tr><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">20</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">21</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">22</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">23</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">24</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">25</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">26</td></tr><tr><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">27</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">28</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">29</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">30</td><td className="monthNow" onmouseover="this.style.background=&quot;#FF0000&quot;" onmouseout="this.style.background=&quot;#FFFFFF&quot;">31</td></tr></tbody></table>
    );
  }
});*/


 
}