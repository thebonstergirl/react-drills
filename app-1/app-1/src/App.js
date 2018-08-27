import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import Image from './components/image'
import ToDoList from './components/ToDo'
class App extends Component {
 
  render(){
    return(
      <div>
        <Login/>
      <Image link={"http://writingexercises.co.uk/images2/randomimage/graf.jpg"}/>
      <ToDoList/>
      </div>
    );
  }
}


export default App;
