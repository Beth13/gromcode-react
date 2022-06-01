import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    isOnline: true,
  };

  componentDidMount() {
    window.addEventListener("offline", this.setOfflineStatus);
    window.addEventListener("online", this.setOnlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener("offline", this.setOfflineStatus);
    window.removeEventListener("online", this.setOnlineStatus);
  }

  setOnlineStatus = () => {
    this.setState({
      isOnline: true,
    });
  };

  setOfflineStatus = () => {
    this.setState({
      isOnline: false,
    });
  };

  render() {
    return !this.state.isOnline ? (
      <div className="status status_offline">{this.state.isOnline}</div>
    ) : (
      <div className="status">{this.state.isOnline}</div>
    );
  }
}

export default ConnectionStatus;
