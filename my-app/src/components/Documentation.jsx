
import React from 'react';

const Documentation = () => {
  return (
    <div className="documentation">
      <h2>Project Documentation</h2>
      <p>
        Welcome to the Project Management Tool! This application allows you to manage your tasks efficiently. Below are the features and usage instructions:
      </p>
      <h3>Features</h3>
      <ul>
        <li>Add new tasks.</li>
        <li>View all tasks in a list.</li>
        <li>Delete tasks when they are completed.</li>
      </ul>
      <h3>Usage</h3>
      <p>
        - To add a task, type the task name in the input field and click "Add Task".<br />
        - To delete a task, click the "Delete" button next to the task.<br />
      </p>
      <h3>Technologies Used</h3>
      <ul>
        <li>React</li>
        <li>CSS</li>
      </ul>
    </div>
  );
};

export default Documentation;