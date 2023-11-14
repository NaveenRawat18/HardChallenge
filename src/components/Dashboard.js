import React, { useState } from 'react'
import TaskManager from './TaskManager'
import { addSeconds } from 'date-fns'
import AddProgress from './AddProgress'

const Dashboard = () => {
  const [task, setTask] = useState([])
  const [SelectedBook, setSelectedBook] = useState("")
  const [skill, setSkill] = useState("")
  const [open, setOpen] = useState(false)

  const date = new Date().getDate()
  const tasks = [
    { id: 1, title: 'Drink 4L water', completedDate: `${date}` },
    { id: 2, title: `Read 10 Pages of ${SelectedBook}`, completedDate: `${date}` },
    { id: 3, title: 'Eat Healthy', completedDate: `${date}` },
    { id: 4, title: `learn ${skill} for 2hr`, completedDate: `${date}` },
    { id: 5, title: 'Take Selfie', completedDate: `${date}` },
    // Add more tasks with different dates
  ];
  
  function Callback(){
    setOpen(!open)
  }
  return (
    <div>
        <div className='header'>
            <h1>User Name</h1>
        </div>
        <input type='button' value='Add progress' onChange={Callback}/>
        {
          !open ?
           <AddProgress /> : <TaskManager tasks={tasks}/>
        }
    </div>
  )
}

export default Dashboard
