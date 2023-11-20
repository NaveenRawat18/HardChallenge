import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TaskList from './TaskList';

  const TaskManager = (tasks) => {
  // Group tasks by date
  console.log(tasks)
  // const element = tasks[0]
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "50px 0px 0 100px"}}>
      <Row sm>
          {
            tasks && tasks.tasks.map((item)=>{
              // console.log(item)
              return <TaskList tasks={item} key={item.id} style={{margin: "20px"}}/>
            })
          }
      </Row>
    </div>
  );
};

export default TaskManager;
