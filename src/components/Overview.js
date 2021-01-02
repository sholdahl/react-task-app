// Overview.js

import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((taskData) => {
        return <li key={uniqid()}><strong>Task number: {taskData.number}.</strong> {taskData.task}</li>;
      })}
    </ul>
  );
};

export default Overview;