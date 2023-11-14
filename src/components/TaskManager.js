import React from 'react';
import TaskList from './TaskList';

const TaskManager = ({ tasks }) => {
  // Group tasks by date
  const tasksByDate = tasks.reduce((acc, task) => {
    const date = task.completedDate;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(task);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(tasksByDate).map((date) => (
        <TaskList key={date} date={date} tasks={tasksByDate[date]} />
      ))}
    </div>
  );
};

export default TaskManager;
