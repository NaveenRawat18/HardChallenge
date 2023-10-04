import React, { useState } from 'react'
import '../App.css'
import { FormControl, TextField} from '@mui/material';
// import { useNavigate } from 'react-router-dom';
const Login = () => {
    // const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [user, setUser] = useState([{
      username: username,
      email:email,
      mobile: mobile
}]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
    const link = "https://chat.whatsapp.com/F7Pd1KKjpog0uvWQDDywkS";
    alert(`Thanks for Joining In Please join in whatsapp group for further updates ${link}`);
    // const newUser = {username, email, mobile};
    // setUser([...user, newUser]);

  }

  return (
    <div className='bg-img'>
      <div className='form-container'>
        <form onSubmit={handleSubmit} className='form'>
            <input placeholder="Write your name here" type='text' variant='outlined' style={{width: 400, margin: "10px", color: "black"}} required onChange={(e)=>{setUsername(e.target.value)}}/>
            <input placeholder="Write your email here" type='email' variant='outlined' style={{width: 400, margin: "10px"}} required onChange={(e)=>{setEmail(e.target.value)}}/>
            <input placeholder="Write your mobile number here" type='text' variant='outlined' style={{width: 400, margin: "10px"}} required onChange={(e)=>{setMobile(e.target.value)}}/>
            <input placeholder="Submit" type='submit' variant='outlined' style={{width: 300,marginLeft: "14%"}} className='submit-btn'/>
        </form>   
        {/* <button onClick={handleBTN}>Hello</button>      */}
      </div>
    </div>
  )
}

export default Login
