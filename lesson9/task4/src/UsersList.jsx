import React, { Component } from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends Component {
  state = {
    text: "",
    count: this.props.users.length,
    users: this.props.users,
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  findUsers = (name) => {
    return this.props.users.filter(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
  };

  changeList = (event) => {
    this.setState({
      count: this.findUsers(event.target.value).length,
      users: this.findUsers(event.target.value),
    });
  };

  search = (event) => {
    this.handleChange(event);
    this.changeList(event);
  };

  render() {
    return (
      <div>
        <div className="filter">
          <span className="filter__count">{this.state.count}</span>
          <input
            type="text"
            className="filter__input"
            value={this.state.text}
            onChange={this.search}
          />
        </div>
        {/* <Filter
          onChange={this.search}
          count={this.state.count}
          filterText={this.state.text}
        /> */}
        <ul className="users">
          {this.state.value === ""
            ? this.props.users.map((user) => <User key={user.id} {...user} />)
            : this.state.users.map((user) => <User key={user.id} {...user} />)}
        </ul>
      </div>
    );
  }
}

export default UsersList;
