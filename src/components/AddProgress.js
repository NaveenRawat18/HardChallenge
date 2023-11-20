import React, { useState } from 'react'
import './components.css'
const AddProgress = ({open, setOpen, Data}) => {
    const [Learning, setLearning] = useState("")
    const [workouts, setWorkouts] = useState("")
    const [diet, setDiet] = useState("")
    const [read, setRead] = useState("")
    const [image, setImage] = useState()
    const day = new Date().getDate()
    const year = new Date().getFullYear()
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const month = new Date().getMonth()
    const date = `${day} - ${monthNames[month]} - ${year}`
    const handleSubmit = (e)=>{
        e.preventDefault()
        const userInput = {
          date,
          Learning, 
          workouts,
          diet,
          read,
          image
        }
        // console.log(userInput)
        // if(Learning==="no" || Learning==="No" || workouts==="no" || workouts==="No" || diet==="no" || diet==="No" || read==="No" || read==="no")
        // {
        //   var challengeStatus = window.alert("Do you know, If you fail any tasks you need to start over?")
        //   if(challengeStatus)
        //   {
        //     window.alert("Oops! You need to start over.")
        //     toggle(true)
        //   }
        // }
        // else
        // {
        //   toggle(false)
        // }
        Data(userInput)
        // console.log(userInput)
        setOpen(!open)
    }
  return (
      <div className='popup'>
        <button className='close-btn' onClick={()=>{setOpen(!open)}}>&times;</button>
          <form onSubmit={handleSubmit}> 
            <input type='text' value={Learning} placeholder='Read 10 pages?' onChange={(e)=>{setLearning(e.target.value)}}/>
            <input type='text' value={workouts} placeholder='Did 45mins 2 workouts?' onChange={(e)=>{setWorkouts(e.target.value)}}/>
            <input type='text' value={diet} placeholder='Ate Healthy?' onChange={(e)=>{setDiet(e.target.value)}}/>
            <input type='text' value={read} placeholder='Dring 4L water' onChange={(e)=>{setRead(e.target.value)}}/>
            <input type='file' onChange={(e)=>{setImage(URL.createObjectURL(e.target.files[0]))}}/>
            <input type='submit' value='submit' className='class-btn'/>
          </form>
      </div>
  )
}

export default AddProgress
