import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      inputBox: '',
    }
  }
  changeHandler = (e) =>{
    this.setState({inputBox: e})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e)=>this.changeHandler(e.target.value)}/><p/>
        <span>{this.state.inputBox}</span>
      </div>
    );
  }
}


export default App;
