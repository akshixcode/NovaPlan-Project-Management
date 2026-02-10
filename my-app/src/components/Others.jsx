
import React, { useState } from 'react';

const Others = () => {
  // Sample data of tasks posted by others
  const [otherTasks, setOtherTasks] = useState([
    { id: 1, user: 'Alice', task: 'Hi Guys! Today is Sunny🌞...Working on a React project', likes: 5 },
    { id: 2, user: 'Bob', task: 'Debugging CSS issues in my own styles⭐⭐⭐', likes: 3 },
    { id: 3, user: 'Charlie', task: ' Left singing,I started Learning Redux...wish me all the best for the new journey 💖 💖 💖 💖 💖 💖 💖', likes: 8 },
     { id: 1, user: 'Alyi', task: 'Working on a React project "Modern, minimal, memorable. That’s the halo effect of great branding', likes: 5 },
    { id: 2, user: 'Ben', task: 'Less noise. More impact,Debugging CSS issues🎯', likes: 3 },
    { id: 3, user: 'Carl', task: 'Learning Redux,what about youuuu', likes: 8 },
     { id: 1, user: 'mice', task: ' seems difficult but i m Working on a React project', likes: 5 },
    { id: 2, user: 'suue', task: ' lets usher in ✌️Debugging CSS issues', likes: 3 },
    { id: 3, user: 'Charlie', task: ' Gym buddy 💪💪💪💪💪💪Learning Redux', likes: 8 },
     { id: 1, user: 'mift', task: 'Working on a React project', likes: 5 },
    { id: 2, user: 'cardi B', task: 'Debugging CSS issues', likes: 3 },
    { id: 3, user: 'Justin', task: 'Learning Redux', likes: 8 },
     { id: 1, user: 'Ariana Grande', task: 'Working on a React project', likes: 5 },
    { id: 2, user: 'Harry Potter', task: 'Debugging CSS issues', likes: 3 },
    { id: 3, user: 'Mark Henry', task: 'Learning Redux', likes: 8 },
     { id: 1, user: 'white ', task: 'Working on a React project', likes: 5 },
    { id: 2, user: 'Donald Trump', task: 'Debugging CSS issues', likes: 3 },
    { id: 3, user: 'Harry', task: 'Learning Redux', likes: 8 },
     { id: 1, user: 'Alia', task: 'Working on a React project', likes: 5 },
    { id: 2, user: 'Bobny', task: 'Debugging CSS issues', likes: 3 },
    { id: 3, user: 'Catt', task: 'Learning Redux', likes: 8 },
     { id: 1, user: 'Anushka', task: 'Working on a React project', likes: 5 },
    { id: 2, user: 'Bunty', task: 'Debugging CSS issues', likes: 3 },
    { id: 3, user: 'Cine', task: 'Learning Redux', likes: 8 },

  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    
    setOtherTasks([
      ...otherTasks,
      { id: Date.now(), user: 'You', task: newTask, likes: 0 },
    ]);
    setNewTask('');
  };

  const handleLike = (id) => {
    setOtherTasks(
      otherTasks.map((task) =>
        task.id === id ? { ...task, likes: task.likes + 1 } : task
      )
    );
  };

  return (
    <div className="others-feed">
      <div className="feed-header">
        <h2>What Others Are Posting</h2>
      </div>
      
      {/* Form to add a new post (like a social feed) */}
      <form onSubmit={handleAddTask} className="others-post-form">
        <div className="form-input-group">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Share what you're working on..."
            required
          />
          <button type="submit" className="post-submit-btn">Post</button>
        </div>
      </form>

      
      <div className="others-feed-container">
        {otherTasks.map((task) => (
          <div key={task.id} className="others-feed-post">
            <div className="feed-post-header">
              <div className="feed-user-avatar"></div>
              <div className="feed-user-info">
                <span className="feed-username">{task.user}</span>
                <span className="feed-post-time">Just now</span>
              </div>
            </div>
            
            <div className="feed-post-content">
              {task.task}
            </div>
            
            <div className="feed-post-footer">
              <button 
                onClick={() => handleLike(task.id)} 
                className="feed-like-button"
              >
                <span className="heart-icon">❤️</span>
                <span className="likes-count">{task.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;