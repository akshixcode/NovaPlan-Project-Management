
import React, { useState } from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  const [likes, setLikes] = useState(Array(tasks.length).fill(0));
  const [liked, setLiked] = useState(Array(tasks.length).fill(false));

  const handleLike = (index) => {
    const newLikes = [...likes];
    const newLiked = [...liked];
    if (newLiked[index]) {
      newLikes[index]--;
    } else {
      newLikes[index]++;
    }
    newLiked[index] = !newLiked[index];
    setLikes(newLikes);
    setLiked(newLiked);
  };

  return (
    <div className="TaskList">
      {tasks.length === 0 ? (
        <div className="empty-state">
          <p>No posts yet. Create your first post!</p>
        </div>
      ) : (
        <div className="posts-feed">
          {tasks.map((task, index) => (
            <div key={index} className="instagram-post">
              <div className="post-header">
                <div className="user-info">
                  <div className="avatar"></div>
                  <div className="user-details">
                    <span className="username">@user</span>
                    <span className="timestamp">now</span>
                  </div>
                </div>
                <button className="delete-btn" onClick={() => deleteTask(index)}>...</button>
              </div>
              
              <div className="post-content">
                {task}
              </div>
              
              <div className="post-actions">
                <div className="action-group">
                  <button 
                    className={`action-btn like-btn ${liked[index] ? 'liked' : ''}`}
                    onClick={() => handleLike(index)}
                  >
                    <span className="heart-icon">♥</span>
                  </button>
                
                 
                </div>
               
              </div>
              
              <div className="post-stats">
                <span className="likes-count">{likes[index]} {likes[index] === 1 ? 'like' : 'likes'}</span>
              </div>
              
              <div className="post-caption">
                <span className="post-text">{task}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;