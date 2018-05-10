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

})

})*/

/*socket.on("auth_teacher",data=>
{
  parent_screen()
})

socket.on("auth_failed",data=>
{
  login()
})
socket.on("auth_teacher",data=>
{
  admin_screen()
})*/
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
               admin_screen()
              //teacher_screen()
              // parent_screen("19100136")
              console.log("ENYERE")

              //admin_screen(userN)
              // parent_screen("19100136")
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
          React.createElement('text',{id:'textt',style:{color:"white"},onClick:ev=>{
            contactUs()
          }},"Contact Us"),
          React.createElement('text',{id:'textt',style:{color:"white"},onClick:ev=>{
            aboutUs()
          }},"About Us"),
          React.createElement('text',{id:'textt',style:{color:"white"},onClick:ev=>{
            support()
          }},"Support")))
    )}
  });
  ReactDOM.render(React.createElement(Login, null), document.getElementById("rahij"));
}

const contactUs = ()=>{

  var Contact = React.createClass({
    displayName: "Contact",

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
          React.createElement('br'),
          React.createElement('text',{className: "contact_t"},"Contact us: unique@hec.edu.pk"),
          React.createElement('text',{className: "contact_t"},"Call us: 0300 6543281"),
          React.createElement('text',{className: "contact_t"},"Visit us: . Address: 6/7-C, Guldasht Town, Zarrar Shaheed Road, Saddar, Lahore Cantt"),
          React.createElement('text',{className: "contact_t"},"Website:  http://www.uniqueschool.edu.pk"),

          React.createElement("button",
            { className: "blue_button log_button hCenter",
            onClick:ev=>{
              login()
              console.log("ENYERE")
              } 
            },"Go Back"
          )),
    )}
  });
  ReactDOM.render(React.createElement(Contact, null), document.getElementById("rahij"));
}

const aboutUs = ()=>{

  var About = React.createClass({
    displayName: "About",

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
          React.createElement('br'),
          React.createElement('text',{className: "contact_t"},"About Us"),
          React.createElement('text',{className: "about_t"},"An educational system isn’t worth a great deal if it teaches young people how to make a living but doesn’t teach them how to make a life.” Unique Group of Educational Institutions is as unique as its name – situated in the heart of Lahore. The mission of its pioneers is to educate and train the students of today for an enlightened tomorrow so that they can act as the saviours posted on the boundary walls of their beloved land. We emphasise on latest technology as computer science affects every aspect of our lives. It will continue to place increasing demands on education, business and industry so that the workforce of the future is equipped with the necessary skills to thrive in the digital age."),

          React.createElement("button",
            { className: "blue_button log_button hCenter",
            onClick:ev=>{
              login()
              console.log("ENYERE")
              } 
            },"Go Back"
          )),
    )}
  });
  ReactDOM.render(React.createElement(About, null), document.getElementById("rahij"));
}

const support = ()=>{

  var Support = React.createClass({
    displayName: "Support",

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
          React.createElement('br'),
          React.createElement('text',{className: "contact_t"},"Support"),
          React.createElement('text',{className: "contact_t"},"Helpline: 111-532-532"),

          React.createElement("button",
            { className: "blue_button log_button hCenter",
            onClick:ev=>{
              login()
              console.log("ENYERE")
              } 
            },"Go Back"
          )),
    )}
  });
  ReactDOM.render(React.createElement(Support, null), document.getElementById("rahij"));
}

login()
