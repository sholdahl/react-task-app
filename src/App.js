// App.js

import React, { Component } from "react";
import Overview from "./components/Overview"

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, {task: this.state.task, number: this.state.tasks.length}],
      task: "",
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input type="text" id="taskInput" onChange={this.handleChange} value={task} />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
