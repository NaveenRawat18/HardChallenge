import React, { useEffect, useState } from 'react'
import TaskManager from './TaskManager'
import AddProgress from './AddProgress'

const Dashboard = () => {
  const [task, setTask] = useState([])
  const [SelectedBook, setSelectedBook] = useState("")
  const [skill, setSkill] = useState("")
  const [open, setOpen] = useState(false)
  const date = new Date().getDate()
  const [formInput, setFormInput] = useState([])

  const handleUpdate = (Data)=>{
    // console.log(Data)
    setFormInput([...formInput, Data])
    localStorage.setItem('formInput', JSON.stringify(formInput))
  }
  const tasks = JSON.parse(localStorage.getItem('formInput'));
  // console.log(tasks)
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
