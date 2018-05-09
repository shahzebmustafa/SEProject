/*var Parent = React.createClass({
  displayName: "Parent",

  getInitialState: function getInitialState() {
    return { signup: false, login: true };
  },
  switch: function _switch(word) {
    var signup, login;
    return this.setState({ login: true, signup: false });
  },
  render: function render() {

    var self = this;
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { id: "buttons" },
        React.createElement(
          "p",
          { id: "loginButton", onClick: self.switch.bind(null, "login"), className: self.state.login ? "yellow" : "blue" },
          " Login"
        )
      ),
      React.createElement(Login, null)
    );
  }
});*/

/*var Signup = React.createClass({
  displayName: "Signup",


  render: function render() {

    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { id: "signup" },
        React.createElement("input", { type: "text", id: "first", placeholder: "First Name" }),
        React.createElement("input", { type: "text", id: "last", placeholder: "Last Name" }),
        React.createElement("input", { type: "email", id: "email", placeholder: "Email" }),
        React.createElement("input", { type: "password", id: "password", placeholder: "Password" }),
        React.createElement("input", { type: "password", id: "confirm", placeholder: "Confirm Password" }),
        React.createElement(
          "button",
          { id: "send" },
          "Send"
        )
      )
    );
  }
});
*/
/*const login = ()=>{

  var Login = React.createClass({
    displayName: "Login",

    render: function render() {

      return React.createElement(
        "div",
        {id:'log_screen',width:"100%",height:"100%"},
        React.createElement('div',{id:'log_screen_back'}),
        React.createElement("img",{type:"image",id:"logo",src:"\\un.png"}),
        React.createElement("div",
          { id: "login" },
          React.createElement("h1",{type:"heading",id:"heading",style:{color:"white"}},'Welcome to Student Progress Portal'),
          React.createElement("input", { type: "email", id: "email", placeholder: "Username" }),
          React.createElement("input", { type: "password", id: "password", placeholder: "Password" }),
          React.createElement('br'),
          React.createElement("button",
            { className: "blue_button log_button",onClick:ev=>{
              admin_screen();
            } },
            "Log In"
          ),
          React.createElement( 'text',{
            style:{color:"white"},
            id: "forgot_pass",
            onClick:ev=>{
          console.log("raju")
        }},"Forgot Password?")),
        React.createElement('div',{id:'strip'},
          React.createElement('text',{id:'bott_left',style:{color:"white"}},"Student Progress Portal. All rights reserved. Unique Group of Colleges"),
          React.createElement('text',{id:'textt',style:{color:"white"}},"Contact Us"),
          React.createElement('text',{id:'textt',style:{color:"white"}},"About Us"),
          React.createElement('text',{id:'textt',style:{color:"white"}},"Support"))
        );
    }
  });
  ReactDOM.render(React.createElement(Login, null), document.getElementById("rahij"));
}
login()
*/
let userN=""
let pass=""
const socket = io()
/*socket.on("auth_admin",data=>
{
  console.log("admin logged in")
  admin_screen()

})

socket.on("auth_parent",data=>
{
  console.log(data," logged in")
  parent_screen(data)
})*/

// socket.on("auth_teacher",data=>
// {
//   _screen()
// })

socket.on("auth_failed",data=>
{
  login()
})
const login = ()=>{

  var Login = React.createClass({
    displayName: "Login",

    render: function render() {

      return React.createElement("div",
        {
          id:'log_screen',
          width:"100%",
          height:"100%"
        },
        React.createElement('div',{className:'loginBackground'}),
        React.createElement("img",{type:"image",id:"logo",src:"\\un.png"}),
        React.createElement("div",{ id: "login",style:{width:'40%'},className:'hCenter' },
          React.createElement("h1",
            {
              className: 'heading hTextCenter',
              style:{color:"white"}
            },'Welcome to Student Progress Portal'),
          React.createElement("input", { type: "email", id: "email", placeholder: "Username",className:'hCenter',onChange:ev=>{
            userN=ev.target.value
            console.log(userN)
          } }),
          React.createElement("input", { type: "password", id: "password", placeholder: "Password",className:'hCenter',onChange:ev=>{
            pass=ev.target.value
            console.log(pass)
          } }),
          React.createElement('br'),
          React.createElement("button",
            { className: "blue_button log_button hCenter",
            onClick:ev=>{
              admin_screen(userN)
              //parent_screen("19100136")
              // console.log("ENYERE")
              socket.emit('authenticate',[userN,pass])
              
              } 
            },"Log In"
          ),
          React.createElement( 'text',{
            style:{color:"white"},
            id: "forgot_pass",
            onClick:ev=>{
              console.log("raju")
            }
          },"Forgot Password?")),
          React.createElement('div',{id:'strip'},
          React.createElement('div',{id:'copyRights'},
            React.createElement('text',{style:{color:"white"}},"Student Progress Portal. All rights reserved. Unique Group of Colleges")),
          React.createElement('div',{id:'supportButtons'},
          React.createElement('text',{id:'textt',style:{color:"white"}},"Contact Us"),
          React.createElement('text',{id:'textt',style:{color:"white"}},"About Us"),
          React.createElement('text',{id:'textt',style:{color:"white"}},"Support")))
    )}
  });
  ReactDOM.render(React.createElement(Login, null), document.getElementById("rahij"));
}
login()


