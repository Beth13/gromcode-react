import React, { Component } from "react";
import Greeting from "./Greeting.jsx";
import IsLogin from "./Login.jsx";
import IsLogout from "./Logout.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <>
        <div className="panel">
          <Greeting isLoggedIn={this.state.isLoggedIn} />

          {this.state.isLoggedIn ? (
            <IsLogout onLogout={this.handleLogout} />
          ) : (
            <IsLogin onLogin={this.handleLogin} />
          )}
        </div>
      </>
    );
  }
}

export default Auth;
