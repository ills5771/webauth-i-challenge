import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    newUser: ""
  };

  componentDidMount() {
    axios.get("http://localhost:5500/api/users").then(res => {
      this.setState({
        users: res.data
      });
    });
  }
  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  addUser = ev => {
    ev.preventDefault();
    axios
      .post("http://localhost:5500/api/register", this.state.newUser)
      .then(res => {
        console.log(res.data);
        this.setState({
          users: res.data,
          user: ""
        });
      });
  };

  render() {
    return (
      <div className="App">
        {this.state.users.map(user => (
          <p>{user.username}</p>
        ))}
        <form onSubmit={this.addUser}>
          <input
            placeholder="user name"
            value={this.state.newUser}
            type="text"
            onChange={this.handleChange}
            name="newUser"
          />
          <button type="submit">Add user </button>
        </form>
      </div>
    );
  }
}

export default App;
