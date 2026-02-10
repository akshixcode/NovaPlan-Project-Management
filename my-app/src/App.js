import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

import Documentation from './components/Documentation';
import Others from './components/Others'; // Import the Others component
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showDocumentation, setShowDocumentation] = useState(false);
  const [showOthers, setShowOthers] = useState(false); // State for Others section

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setShowDocumentation(true); // Show documentation when a task is added
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task, index) => index !== id));
  };

  return (
    <div className="App">
      <div className="header-section">
        <Header />
        <div className="header-image">
          <img src="https://png.pngtree.com/png-clipart/20230920/original/pngtree-businessman-presenting-innovative-ideas-sharing-old-knowledge-to-improve-skills-vector-png-image_12452843.png" alt="Project Management" />
        </div>
      </div>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      {showDocumentation && <Documentation />}
      <div className="others-toggle-image">
        <img src="https://static.vecteezy.com/system/resources/previews/002/121/266/original/flat-design-of-project-management-concept-vector.jpg" alt="Project Concept" />
        <p>Share Your Progress Globally And Get Inspired By Others!</p>
      </div>
      <button
        onClick={() => setShowOthers(!showOthers)} // Toggle Others section
        className="others-button"
      >
        {showOthers ? 'Hide Others' : "Let's see what others are doing"}
      </button>
      {showOthers && <Others />} {/* Conditionally render the Others component */}
      <a href="/Proj.html" className="project-guide-button" target="_self">
        <span className="button-icon">📖</span>
        Visit Project Guide
      </a>
    </div>
  );
}

export default App;