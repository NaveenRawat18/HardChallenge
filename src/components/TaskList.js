import React from 'react';
import Task from './Task';

const TaskList = ({ date, tasks }) => {
  return (
    <div>
      <h2>{date}</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
