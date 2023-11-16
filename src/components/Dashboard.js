import React, { useEffect, useState } from 'react'
import TaskManager from './TaskManager'
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
  const [formInput, setFormInput] = useState([])

  const handleUpdate = (Data)=>{
    // console.log(Data)
    setFormInput([...formInput, Data])
    localStorage.setItem('formInput', JSON.stringify(formInput))
    const myVal = localStorage.getItem('formInput')
    console.log(myVal)
  }
  return (
    <div>
        <div className='header'>
            <h1>User Name</h1>
        </div>
        <input type='button' value='Add progress' onClick={()=>setOpen(!open)}/>
        {
          open ?
           <AddProgress Data={handleUpdate} open={open} setOpen={setOpen}/> : <TaskManager tasks={tasks}/>
        }
    </div>
  )
}

export default Dashboard
