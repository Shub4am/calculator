import React, { Component } from 'react';
import './App.css';
import {Button, ClearButton, PlusMinus, BackSpace } from "./components/Button";
import { Input } from "./components/Input";
import * as math from "mathjs";
import ReactDOM from 'react-dom'

window.render = () => { // calling window.render() anywhere in your components will redraw the UI w/new or updated state
  ReactDOM.render(<App/>, document.getElementById('root'));
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  

  addToInput = val => {
    this.setState({input: this.state.input + val });
  };

  handleClear =() => {
    this.setState({input: ""});
  };

  handlePosNeg = () => {
    this.setState({input: math.evaluate(this.state.input * (-1) )});
  };

  handleBackSpace = () => {
    this.setState({input: this.state.input.slice(0, -1)});
  };

  handleEqual = (e) => {
    this.setState({ input: math.evaluate(this.state.input) + 0 });
  };

  handleDecimal = () => {
    if(!(/\./).test(this.state.input)) {
      this.setState({input: this.state.input + '.'});
    }
  };
  
  handleSum = () => {
    if(!(/\+/).test(this.state.input)) {
      this.setState({input: this.state.input + '+'});
    }
  };
  
  handleSubstract = () => {
    if(!(/-/).test(this.state.input)) {
      this.setState({input: this.state.input + '-'});
    }
  };
  
  handleMultiply = () => {
    if(!(/\*/).test(this.state.input)) {
      this.setState({input: this.state.input + '*'});
    }
  };

  handleDivision = () => {
    if(!(/\//).test(this.state.input)) {
      this.setState({input: this.state.input + '/'});
    }
  };
  

  handlePercentage = () => {
    this.setState({input: math.evaluate(this.state.input/ 100)});
  };


  render () {
      return (
      <div className="app">
          <div className="row">
            <Input input={this.state.input || "0"}/>
            <ClearButton handleClear={this.handleClear}>C</ClearButton>
            <PlusMinus handlePosNeg={this.handlePosNeg}>+/-</PlusMinus>
            <BackSpace handleBackSpace={this.handleBackSpace}>⌫</BackSpace>
            <Button handleClick={this.handleDivision}>/</Button>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.handleMultiply}>*</Button>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.handleSubstract}>-</Button>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.handleSum}>+</Button>
            <Button handleClick={this.handlePercentage}>%</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleDecimal}>.</Button>
            <Button handleClick={this.handleEqual}>=</Button>
          </div>
      </div>);
  }
}

export default App;
