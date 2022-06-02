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
    value: "",
    count: this.props.users.length,
    users: this.props.users,
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  findUsers = (name) =>
    this.props.users.filter(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );

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
    const newUsersArray = this.findUsers(this.state.value);

    return (
      <div>
        <Filter
          onChange={(event) => {
            this.search(event);
          }}
          count={this.state.count}
          filterText={this.state.value}
        />
        <ul className="users">
          {this.state.value === ""
            ? this.props.users.map((user) => <User key={user.id} {...user} />)
            : newUsersArray.map((user) => <User key={user.id} {...user} />)}
        </ul>
      </div>
    );
  }
}

export default UsersList;
