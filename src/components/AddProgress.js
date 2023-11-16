import React, { useState } from 'react'

const AddProgress = ({open, setOpen, Data}) => {
    const [Learning, setLearning] = useState("")
    const [workouts, setWorkouts] = useState("")
    const [diet, setDiet] = useState("")
    const [read, setRead] = useState("")
    const [selfie, setSelfie] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        const userInput = {
          Learning, 
          workouts,
          diet,
          read,
          selfie
        }
        // console.log(userInput)
        Data(userInput)
        // console.log(userInput)
        setOpen(!open)
    }
  return (
    <div className='input-data'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={Learning} placeholder='Read 10 pages?' onChange={(e)=>{setLearning(e.target.value)}}/>
        <input type='text' value={workouts} placeholder='Did 45mins 2 workouts?' onChange={(e)=>{setWorkouts(e.target.value)}}/>
        <input type='text' value={diet} placeholder='Ate Healthy?' onChange={(e)=>{setDiet(e.target.value)}}/>
        <input type='text' value={read} placeholder='Dring 4L water' onChange={(e)=>{setRead(e.target.value)}}/>
        <input type='text' value={selfie} placeholder='Took Selfie?' onChange={(e)=>{setSelfie(e.target.value)}}/>
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default AddProgress
