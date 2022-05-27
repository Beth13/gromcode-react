import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
    };
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() =>
              this.setState({
                color: "Coral",
              })
            }
            onMouseLeave={() => {
              this.setState({
                color: "",
              });
            }}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() =>
              this.setState({
                color: "Aqua",
              })
            }
            onMouseLeave={() => {
              this.setState({
                color: "",
              });
            }}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() =>
              this.setState({
                color: "Bisque",
              })
            }
            onMouseLeave={() => {
              this.setState({
                color: "",
              });
            }}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
