import React, { Component } from 'react';

class Login extends Component {
 constructor(){
   super();
   this.state={
     user: '',
     pw: ''
   }
 }

 changeHandler = (e) =>{
   this.setState({user: e})
 }
 
 changeHandler2 =(e) =>{
   this.setState({pw: e})
 }
clickHandler = () => {
  let {user, pw} = this.state
  alert(`Username: ${user} Password: ${pw} `)
}
  render(){
    return(
      <div>
      <h2>Username:</h2><input onChange={(e)=>this.changeHandler(e.target.value)}/>
      <h2>Password:</h2><input onChange={(e)=>this.changeHandler2(e.target.value)}/>
      <button onClick={this.clickHandler}>submit</button>
      </div>
    );
  }
}


export default Login;