import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <input type='checkbox'></input>
      <span>{task.title}</span>
    </div>
  );
};

export default Task;
