import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };
  }

  handleClick = (event) => {
    if (event.target.textContent === "Off") {
      this.setState({
        text: "On",
      });
    } else {
      this.setState({
        text: "Off",
      });
    }

    return this.state.text;
  };

  render() {
    return (
      <div className="toggler" onClick={this.handleClick}>
        {this.state.text}
      </div>
    );
  }
}

export default Toggler;
