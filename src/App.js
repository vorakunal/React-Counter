import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component, useState } from "react";
// const redis = require("redis");

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
      { id: 5, value: 56 },
    ],
    visits: 0,
  };

  componentDidMount = () => {
    // const response = null;
    // fetch("http://localhost:8083")
    //   .then(response => this.setState({ visits: response.json().vis }) );
    // await console.log(this.state.visits);
    // console.log("data");

    this.visitCount();
  }


  handleIncrement = (counter) => {
      // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // console.log(this.state.counters[0]);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    //   console.log("Event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} visits={this.state.visits}></NavBar>
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          ></Counters>
        </main>
      </React.Fragment>
    );
    
  }

  async visitCount() {
    console.log("inside ")
    const response = await fetch("http://localhost:8083");
    const data = await response.json();
    this.setState({visits:data});
    console.log(data);

    return data;
  }
}

export default App;
