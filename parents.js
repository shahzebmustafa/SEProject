let results = "b"

const parent_screen = ()=>{

	var Parent = React.createClass({
	  displayName: "Parent",

	  render: function render() {
		return React.createElement("div",{ id: "parent" },
				React.createElement('div',{id:'home_back'}),
				React.createElement('div',{className:"striptop"},
					React.createElement('text',{className:'acc_set'},'Account Settings'),
					React.createElement("button",{className:"blue_button"},"Log out")),
				React.createElement("div",{ id: "sidenav" },
				React.createElement("button",{ className: home ,onClick:ev=>{
					id_click()
					home="c"
					admin_screen()
				}},"Home"),
				React.createElement("button",{ className: notifications,onClick:ev=>{
					id_click()
					notifications="c"
					admin_screen()
				} },"Notifications"),
			  	React.createElement("button",{ className: attendance,onClick:ev=>{
					id_click()
					attendance="c"
					admin_screen()
				} },"Attendance"),
				React.createElement("button",{ className: remarks,onClick:ev=>{
					id_click()
					remarks="c"
					admin_screen()
				} },"Remarks"),
			  	React.createElement("button",{ className: results,onClick:ev=>{
					id_click()
					results="c"
					admin_screen()
				} },"Results")
			  	)
			);
	}
});
	ReactDOM.render(React.createElement(Parent, null), document.getElementById("rahij"));
}

//admin_screen();
