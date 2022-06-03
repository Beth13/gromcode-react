import React, { Component } from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

// algo
// 1. render list, input and counter +++
// 2. handleChange() +++
// 3. find users with filter() +++
// 4. rerender new array of filtered users +++
// 5. if(value === '') rerender the default array +++

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

  findUsers = (nameStr) =>
    this.props.users.filter((user) =>
      user.name.toLowerCase().includes(nameStr.toLowerCase())
    );

  changeList = (event) => {
    this.setState({
      count: this.findUsers(event.target.value).length,
      users: this.findUsers(event.target.value),
    });
  };

  render() {
    return (
      <div>
        <Filter
          onChange={(event) => {
            this.handleChange(event);
            this.changeList(event);
          }}
          count={this.state.count}
          filterText={this.state.text}
        />
        <ul className="users">
          {this.state.users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
