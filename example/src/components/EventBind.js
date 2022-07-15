import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Goodbye!!",
    });
    console.log(this);
  }

  // clickHandler = () => {
  //     this.setState ({
  //         message: "Goodbye!!"
  //     })
  //     console.log(this);
  // }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click 1</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click 1</button> */}
        <button onClick={this.clickHandler}>Click 1</button>
      </div>
    );
  }
}

export default EventBind;
