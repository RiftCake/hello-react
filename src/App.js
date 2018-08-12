import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  render(){
    return <h1 style={{color:this.props.color}}>Hello, {this.props.value}, {this.props.value2}</h1>;
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         <Text color="blue" color2="blue" value="Triston" value2="Mr.law" />
        </p>
        

      </div>
    );
  }
}

export default App;
