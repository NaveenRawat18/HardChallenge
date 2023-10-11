 import React, { useState } from 'react'
import '../App.css'
// import { useNavigate } from 'react-router-dom';
const Login = () => {
    // const navigate = useNavigate();
    const link = "https://chat.whatsapp.com/F7Pd1KKjpog0uvWQDDywkS";
    const alertSuccess = () => alert(`Thanks for Joining In Please join in whatsapp group for further updates ${link}`);
    const alertWarning = () => alert({ message: `Fields can't be empty`, type: 'warning' });
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
    if(!username || !mobile || !email){
      alertWarning();
    }
    else{
      const newUser = {username, email, mobile};
      setUser([...user, newUser]);
      alertSuccess();
    }

  }
  return (
    <div className="bg-img">
      <h1 className='heading-hard'>75 Hard isn't everyone's cup of tea</h1>
      {/* <h3 className='heading-hard-2'>It requires the courage and dedication to show consistency toawrds a goal</h3> */}
      <form className="container" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label for="username"><b>username</b></label>
        <input type="text" placeholder="Enter username" name="email" required onChange={(e)=>{setUsername(e.target.value)}}/>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required onChange={(e)=>{setEmail(e.target.value)}}/>

        <label for="psw"><b>Mobile Number</b></label>
        <input type="text" placeholder="Enter Password" name="psw" required onChange={(e)=>{setMobile(e.target.value)}}/>

        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  )
}

export default Login
