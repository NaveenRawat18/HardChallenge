// Checklist.js
import React from 'react';

const Checklist = ({ tasks, onTaskToggle, label }) => {
  return (
    <div>
      <h2>{label}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onTaskToggle(index)}
              />
              {task.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;