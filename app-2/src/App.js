import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      arr1: ["Hello", "Darkness", "My", "Old", "Friend"],
    }
  }

processList(){
  return this.state.arr1.map((e, i, arr) => <h2> {arr[i]} </h2>); 
}

  render() {
    return (
      <div className="App">
      <p>{this.processList()}</p>
      </div>
    );
  }
}

export default App;
