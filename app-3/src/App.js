import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state={
      userInput: '',
      arr: ["Hello", "Darkness", "My", "Old", "Friend"]
    }
  }

inputHere = (val) =>{
 this.setState({userInput: val})
}

    render(){
  let wordsToDisplay = this.state.arr.filter((el, i)=>{return el.includes(this.state.userInput);}).map( (el, i)=> {return <h2 key={i}>{el}</h2>})
      console.log(this.state)
      return(
        <div>
        <input type="text" onChange={(e) => this.inputHere(e.target.value)} />
        <span>{wordsToDisplay}</span>
        </div>
    );
  }
}

export default App;
