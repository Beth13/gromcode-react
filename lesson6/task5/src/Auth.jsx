import React, { Component } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isSpin: false,
    };
  }

  handleLogin = () => {
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isSpin: false,
      });
    }, 2000);

    this.setState({
      isLoggedIn: false,
      isSpin: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      isSpin: false,
    });
  };

  render() {
    return (
      <>
        <div className="panel">
          {this.state.isSpin && <Spinner size={"25px"} />}
          {this.state.isLoggedIn ? (
            <Logout onLogout={this.handleLogout} />
          ) : (
            <Login onLogin={this.handleLogin} />
          )}
        </div>
      </>
    );
  }
}

export default Auth;
