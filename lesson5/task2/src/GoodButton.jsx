import React from "react";

class GoodButton extends React.Component {
  handleClick(event) {
    const text = event.target.textContent;
    alert(text);
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
