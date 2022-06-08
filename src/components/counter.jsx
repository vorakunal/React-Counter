import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     tags: [],
  //   };

  // styles = {
  //     fontSize: 50,
  //     fontWeight: 'bold'
  // };  // style={{fontSize: 50,}} ??

  //   constructor() {
  //       super();
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   handleIncrement = () => {
  //     // console.log("Increent clicked", this);
  //     this.setState({ value: this.state.value + 1})
  //   }

  componenetDidUpdate(prevProps, prevState)
  {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if(prevProps.counter.value !== this.props.counter.value){
      // Ajax call and get new data from the server
    }
  }

  render() {
    // let classes = this.getBadgeClasses();
    console.log(this.props);

    return (
      <React.Fragment>
        {/* {this.props.children} */}
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-md m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
            {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
