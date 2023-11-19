import React from 'react';
import TaskList from './TaskList';

  const TaskManager = (tasks) => {
  // Group tasks by date
  // console.log(tasks)
  // const element = tasks[0]
  return (
    <div>
      {
        tasks && tasks.tasks.map((item)=>{
          // console.log(item)
          return <TaskList tasks={item} key={item.id}/>
        })
      }
    </div>
  );
};

export default TaskManager;
