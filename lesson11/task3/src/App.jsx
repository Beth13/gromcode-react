import React, { Component } from "react";
import Expand from "./Expand.jsx";

class App extends Component {
  state = {
    isOpen: false,
  };

  hideOptions = () => {
    this.setState({
      isOpen: false,
    });
  };

  showOptions = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <Expand
          title="Some title"
          isOpen={this.state.isOpen}
          onOpen={this.showOptions}
          onClose={this.hideOptions}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
