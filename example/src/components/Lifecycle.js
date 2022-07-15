import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    console.log("construction: default state time!!");
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>

        <button onClick={this.clickHandler}>Click 2</button>
      </div>
    );
  }
}

export default Lifecycle;
