import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
    };
  }

  colorBtnOn = (event) => {
    const colorBtn = event.target.dataset.color;
    // console.log(colorBtn);

    this.setState({
      color: colorBtn,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            data-color="Coral"
            onMouseEnter={this.colorBtnOn}
            onMouseLeave={() => {
              this.setState({
                color: "",
              });
            }}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            data-color="Aqua"
            onMouseEnter={this.colorBtnOn}
            onMouseLeave={() => {
              this.setState({
                color: "",
              });
            }}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            data-color="Biqsue"
            onMouseEnter={this.colorBtnOn}
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
